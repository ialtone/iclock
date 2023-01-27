const {
	contextBridge,
	ipcRenderer
} = require('electron')

contextBridge.exposeInMainWorld('app', {
	close: () =>
		ipcRenderer.send('close')
})
