const { app, BrowserWindow, Menu } = require('electron')
const path = require('path')
const isDev = require('electron-is-dev')
const notifier = require('node-notifier')
const { autoUpdater } = require('electron-updater')

let mainWindow

function showUpdateNotification(it) {
  it = it || {}
  const restartNowAction = 'Restart now'

  const versionLabel = it.label ? `Version ${it.version}` : 'The latest version'

  notifier.notify(
    {
      title: 'A new update is ready to install.',
      message: `${versionLabel} has been downloaded and will be automatically installed after restart.`,
      closeLabel: 'Okay',
      actions: restartNowAction,
    },
    (err, response, metadata) => {
      if (err) throw err
      if (metadata.activationValue !== restartNowAction) {
        return
      }
      autoUpdater.quitAndInstall()
    }
  )
}

function initAutoUpdate() {
  if (isDev) {
    return
  }

  if (process.platform === 'linux') {
    return
  }

  autoUpdater.checkForUpdates()
  autoUpdater.signals.updateDownloaded(showUpdateNotification)
}

function createWindow() {
  mainWindow = new BrowserWindow({
    width: 900,
    height: 680,
    transparent: false,
    resizable: false,
    icon: '/assets/icons/64x64.png',
  })
  mainWindow.loadURL(isDev
    ? 'http://localhost:3000'
    : `file://${path.join(__dirname, '../build/index.html')}`)
  mainWindow.on('closed', () => { (mainWindow = null) })
  initAutoUpdate()
}

app.on('ready', createWindow)

app.on('window-all-closed', () => {
  if (process.platform !== 'darwin') {
    app.quit()
  }
})

app.on('activate', () => {
  if (mainWindow === null) {
    createWindow()
  }
})


let menu = new Menu()

const template = []

if (process.platform === 'darwin') {
  const name = app.getName()
  template.unshift({
    label: name,
    submenu: [
      {
        label: `About ${name}`,
        role: 'about',
      },
      {
        label: 'Quit',
        accelerator: 'Command+Q',
        click: () => { app.quit() },
      },
    ],
  })
}

menu = Menu.buildFromTemplate(template)
Menu.setApplicationMenu(menu)
