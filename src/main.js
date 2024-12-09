const { app, BrowserWindow } = require('electron')
const path = require('path');
const fs = require('fs');
const os = require('os');
const process = require('process');
const spawn = require('child_process').spawn;
const crypto = require('crypto');

function createWindow() {
  const win = new BrowserWindow({
      width: 1340,
      height: 830,
      minWidth: 1340,
      minHeight: 650,
      webPreferences: {
         nodeIntegration: true,
         contextIsolation: false 
      }
  });
  win.loadFile('src/window.html');
}

app.whenReady().then(() => {
  const win = createWindow();
});

app.on('open', () => {
    createWindow();
});

