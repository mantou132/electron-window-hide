const path = require('path');
const { BrowserWindow, app, Tray } = require('electron');

let tray = null;
app.on('ready', () => {
  const window = new BrowserWindow({
    webPreferences: {
      nodeIntegration: true,
    },
  });
  window.on('blur', () => {
    console.log('blur');
    window.webContents.send('fade-out');
  })
  window.loadURL(`file://${path.resolve('./render.html')}`);
  tray = new Tray(path.resolve('iconTemplate@2x.png'))
    .on('click', () => {
      if (window.isVisible()) {
        console.log('fade-out');
        window.webContents.send('fade-out');
      } else {
        console.log('fade-in');
        window.webContents.send('fade-in');
      }
    })
})

app.on('before-quit', () => {
  tray.destroy();
  app.exit();
});