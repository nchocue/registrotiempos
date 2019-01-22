const electron = require('electron')
const {app,BrowserWindow} = electron

const path = require('path')
const url = require('url')

let win 
function createWindow(){
    win = new BrowserWindow({width:800, heigth:600})
    win.loadURL(url.format({
        pathname: path.join(__dirname,'index.html'),
        protocol: 'file',
        slashes: true
    }))

    win.once('ready-to-show', () => {
        win.setMenu(null)
        win.show()
      })
    
      win.onbeforeunload = (e) => {
        // Prevent Command-R from unloading the window contents.
        e.returnValue = false
      }
    
      win.on('closed', function () {
        win = null
      })

//win.webContents.openDevTools()
}

exports.openWindow = () =>{
    let newWin = new BrowserWindow({width:400, heigth:200})
    newWin.loadURL(url.format({
        pathname: path.join(__dirname,'enupal.html'),
        protocol: 'file',
        slashes: true
    }))
}
app.on('ready',createWindow)
app.on('window-all-closed', () => { app.quit() })
