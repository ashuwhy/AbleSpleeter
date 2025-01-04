# AbleSpleeter

A powerful Ableton Max device for separating audio clips into stems (vocals, bass, drums, other) using Spleeter. This is an enhanced version of the original work by [diracdeltas](https://github.com/diracdeltas/spleeter4max), featuring additional capabilities and improvements.

<div align="center">
  <img src="./images/screenshot.png" alt="AbleSpleeter Screenshot">
</div>

## Features

- Seamless integration with Ableton Live
- Separate audio into vocals, bass, drums, and other stems
- Easy-to-use interface
- Compatible with Max 8.5 and Ableton 11.1.5+

## Prerequisites

You must have Spleeter installed on your system. Follow the installation instructions below for your operating system.

### Windows Installation

1. **Install FFmpeg**
   - Follow the instructions at [Installing FFmpeg for Windows](https://github.com/adaptlearning/adapt_authoring/wiki/Installing-FFmpeg#installing-ffmpeg-in-windows)
   - Verify installation by running `ffmpeg` in CMD.exe

2. **Install Python**
   - Download and install [Python 3.10](https://www.python.org/downloads/release/python-3100/) (Python 3.7 is also compatible)
   - During installation:
     - ✅ Enable "Add Python to PATH"
     - ✅ Disable "Path length variable limit"
   - Verify installation by running `python -V` or `py -V` in CMD.exe

3. **Configure Environment Variables**
   - Remove `.JS;` from PATHEXT in Windows environment variables
   - [Instructions for editing environment variables](https://support.shotgunsoftware.com/hc/en-us/articles/114094235653-Setting-global-environment-variables-on-Windows)
   - Verify by running `echo %pathext%` in CMD.exe

4. **Install Spleeter**
   - Open CMD.exe and run: `pip3 install spleeter`
   - Verify installation by running `spleeter -h`

> **Troubleshooting**: If Spleeter doesn't work, try [running as administrator](https://github.com/diracdeltas/spleeter4max/issues/7) or check [this thread](https://github.com/diracdeltas/spleeter4max/issues/8).

### macOS Installation

1. **Install Homebrew**
   ```bash
   /bin/bash -c "$(curl -fsSL https://raw.githubusercontent.com/Homebrew/install/HEAD/install.sh)"
   ```

2. **Install Dependencies**
   ```bash
   brew install python@3.10
   brew link --force python@3.10
   brew install ffmpeg
   pip3 install spleeter
   ```

   > Note: If you have Python 3.10+ already installed via Homebrew, run `brew unlink python3` first.

3. **Fix Spleeter Location** (if needed)
   ```bash
   ln -s $(which spleeter) /usr/local/bin/spleeter
   ```

## Usage

1. Clone this repository
2. Load `AbleSpleeter.amxd` onto any audio channel in Ableton
3. Select an audio clip in your project
4. Click the start button in the AbleSpleeter device
5. Wait for processing to complete

## License

MIT License - Copyright (c) 2022 Ashutosh Sharma

## Credits

- Original Spleeter by [Deezer Research](https://github.com/deezer/spleeter)
- Original Max implementation by [diracdeltas](https://github.com/diracdeltas/spleeter4max)

## Contributing

Contributions are welcome! Please feel free to submit a Pull Request.

## Support

If you encounter any issues, please [open an issue](https://github.com/yourusername/AbleSpleeter/issues) on GitHub.
