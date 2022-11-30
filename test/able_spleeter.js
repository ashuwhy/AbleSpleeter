const path = require('path')
const Max = require('max-api')
const fs = require('fs')
const { exec, execSync } = require('child_process')
const done = () => {
  Max.outlet('spleeterDone')
}

Max.post(`Loaded the ${path.basename(__filename)} script`)
// Docker's default path may not be in Max Node's env path
process.env.PATH = [process.env.PATH, '/usr/local/bin'].join(':')
Max.outlet('bang')

// Use the 'addHandler' function to register a function for a particular
// message

Max.addHandlers({
  onFile: (filename, ns) => {
    if (!filename) {
      Max.post('No audio file found.')
      done()
      return
    }
    runSpleeter(filename, ns)
  }
})

const showDir = (dir) => {
  // Since LOM has no way to load these files automatically into new tracks,
  // just open a file dialog and let the user drag-and-drop them.
  let opener
  if (process.platform === 'darwin') {
    opener = 'open'
  } else if (process.platform === 'win32') {
    opener = 'start ""'
  } else {
    Max.post(`Unsupported platform: ${process.platform}`)
  }
  execSync(`${opener} "${dir}"`)
  Max.outlet('set', `Select a clip.\nThen press the button to start.`)
}

const runSpleeter = (filename, ns) => {
  const cmd = `spleeter separate -o "${__dirname}" -p spleeter:${ns}stems-16kHz "${filename}"`
  Max.outlet('set', `AbleSpleeter is running.\nThis may take a minute...`)
  Max.post(cmd)

  // Calls the spleeter python process
  exec(cmd, (err, stdout, stderr) => {
    if (err) {

      // Data which will write in a file.
      let data = `${err.message}`
      fs.writeFile('log.txt', data, (err) => {
        execSync(`notepad log.txt`)
        // In case of a error throw err.
        if (err) throw err;
      })

      Max.outlet('set', `Error: Check logs in ${__dirname}`)
      Max.post(`Error: ${err.message}`)
      Max.post(`Spleeter stderr: ${stderr}`)
      Max.post(`Spleeter stdout: ${stdout}`)
      done()
      return
    }
    if (stderr) {
      Max.post(`Spleeter stderr: ${stderr}`)
    }
    if (stdout) {
      Max.post(`Spleeter stdout: ${stdout}`)
    }
    const correctFilename = path.basename(filename).split('.').slice(0, -1).join('.')
    const outputFilename = path.join(__dirname, correctFilename)
    showDir(outputFilename)
    done()
  })
}
