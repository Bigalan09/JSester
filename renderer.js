const { ipcRenderer } = require('electron');

ipcRenderer.on('run', (event, data) => {
    doRun(previewContainer);
});

ipcRenderer.on('new', (event, data) => {
    doNew();
});

ipcRenderer.on('save', (event, data) => {
    doSave();
});

ipcRenderer.on('settings', (event, data) => {
    doSettings();
});