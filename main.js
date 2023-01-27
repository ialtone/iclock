const {
	app,
	BrowserWindow,
	ipcMain
} = require('electron');
const path = require('path');

const createWindow = () => {
	const win = new BrowserWindow({
		width: 500,
		height: 250,
		frame: false,
		transparent: true,
		backgroundColor: '#00000000',
		resizable: false,
		webPreferences: {
			preload: path.join(__dirname, 'preload.js')
		}
	})
	ipcMain.on('close', () => {
		win.close()
	})

	win.loadURL('http://localhost:8080/');
};

app.whenReady().then(() => {
	createWindow();

	app.on('activate', () => {
		if (BrowserWindow.getAllWindows().length === 0) {
			createWindow();
		}
	});
});

app.on('window-all-closed', () => {
	if (process.platform !== 'darwin') {
		app.quit();
	}
})
