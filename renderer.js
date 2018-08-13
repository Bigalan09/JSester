const { ipcRenderer } = require('electron');

ipcRenderer.on('run', (event, data) => {
    doRun(previewContainer);
});