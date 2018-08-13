require('update-electron-app')({
    logger: require('electron-log')
});

const path = require('path');
const glob = require('glob');
const {
    app,
    BrowserWindow,
    globalShortcut,
    ipcMain
} = require('electron');

const debug = /--debug/.test(process.argv[2]);

let mainWindow = null;

function initialize() {
    const shouldQuit = makeSingleInstance();
    if (shouldQuit)
        return app.quit();

    function createWindow() {
        const windowOptions = {
            width: 1080,
            minWidth: 680,
            height: 840,
            title: 'JSester'
        };

        if (process.platform === 'linux') {}

        mainWindow = new BrowserWindow(windowOptions);
        mainWindow.loadURL(path.join('file://', __dirname, '/index.html'));

        // Launch fullscreen with DevTools open, usage: npm run debug
        if (debug) {
            mainWindow
                .webContents
                .openDevTools()
            mainWindow.maximize();
            require('devtron').install();
        } else {
            mainWindow.setMenu(null);
        }

        mainWindow.on('closed', () => {
            mainWindow = null;
        });

        globalShortcut.register('CommandOrControl+Enter', () => {
            mainWindow
                .webContents
                .send('run', {});
        });
        globalShortcut.register('CommandOrControl+F11', () => {
            if (mainWindow.isFullScreen()) {
                mainWindow.maximize();
            } else {
                mainWindow.unmaximize();
            }
            mainWindow.setFullScreen(!mainWindow.isFullScreen());
        });
    }

    app.on('ready', () => {
        createWindow();

    })

    app.on('window-all-closed', () => {
        if (process.platform !== 'darwin') {
            app.quit();
        }
    })

    app.on('activate', () => {
        if (mainWindow === null) {
            //createWindow();
        }
    })
}

function makeSingleInstance() {
    if (process.mas)
        return false;

    return app.makeSingleInstance(() => {
        if (mainWindow) {
            if (mainWindow.isMinimized())
                mainWindow.restore();
            mainWindow.focus();
        }
    })
}

initialize();