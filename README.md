# JSester
JSester is an offline tool for testing and showcasing user-created HTML, CSS and JavaScript code snippets, using [Monaco](https://microsoft.github.io/monaco-editor/) and [Electron](https://electronjs.org/).

## To Use

To clone and run this repository you'll need [Git](https://git-scm.com) and [Node.js](https://nodejs.org/en/download/) (which comes with [npm](http://npmjs.com)) installed on your computer. From your command line:

```bash
# Clone this repository
git clone https://github.com/bigalan/JSester

# Go into the repository
cd JSester

# Install dependencies
npm install

# Run the app
npm start
```

Note: If you're using Linux Bash for Windows, [see this guide](https://www.howtogeek.com/261575/how-to-run-graphical-linux-desktop-applications-from-windows-10s-bash-shell/) or use `node` from the command prompt.


## To Package

```bash
# All platforms
npm run package

# Windows only package
npm run package:win
```


## Resources

- [electronjs.org/docs](https://electronjs.org/docs) - all of Electron's documentation
- [monaco editor](https://microsoft.github.io/monaco-editor/) - Monaco editor documentation

## License

[MIT](LICENSE.md)
