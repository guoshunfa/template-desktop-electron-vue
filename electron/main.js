import { app, BrowserWindow, ipcMain, dialog } from 'electron'
import path from 'path'
import { fileURLToPath } from 'url'

const __filename = fileURLToPath(import.meta.url)
const __dirname = path.dirname(__filename)

// 判断是否为开发环境 - 多种方式检测
const isDev = process.env.NODE_ENV === 'development' || 
              !app.isPackaged || 
              process.argv.includes('--dev') ||
              process.defaultApp

function createWindow() {
  // 创建浏览器窗口
  const mainWindow = new BrowserWindow({
    width: 1200,
    height: 800,
    icon: isDev ? 
      path.join(__dirname, '../public/icon.ico') : 
      path.join(__dirname, '../dist/icon.ico'),
    webPreferences: {
      nodeIntegration: false,
      contextIsolation: true,
      enableRemoteModule: false,
      preload: path.join(__dirname, 'preload.js')
    },
    autoHideMenuBar: true,  // 隐藏菜单栏
    show: false
  })

  // 设置CSP头部
  mainWindow.webContents.session.webRequest.onHeadersReceived((details, callback) => {
    callback({
      responseHeaders: {
        ...details.responseHeaders,
        'Content-Security-Policy': ['default-src \'self\' \'unsafe-inline\' data: blob:; script-src \'self\' \'unsafe-eval\' \'unsafe-inline\';']
      }
    })
  })
  
  // 加载应用
  if (isDev) {
    mainWindow.loadURL('http://localhost:5173') // Vite 默认端口
    mainWindow.webContents.openDevTools()
  } else {
    mainWindow.loadFile(path.join(__dirname, '../dist/index.html'))
  }

  // 窗口准备好后显示
  mainWindow.once('ready-to-show', () => {
    mainWindow.show()
  })
}

// IPC处理程序
ipcMain.handle('get-version', () => {
  return app.getVersion()
})

ipcMain.handle('dialog:openFile', async () => {
  const { canceled, filePaths } = await dialog.showOpenDialog({
    properties: ['openFile'],
    filters: [
      { name: 'All Files', extensions: ['*'] }
    ]
  })
  if (canceled) {
    return null
  } else {
    return filePaths[0]
  }
})

// 当 Electron 完成初始化并准备创建浏览器窗口时调用此方法
app.whenReady().then(createWindow)

// 当所有窗口都关闭时退出应用
app.on('window-all-closed', () => {
  if (process.platform !== 'darwin') {
    app.quit()
  }
})

app.on('activate', () => {
  if (BrowserWindow.getAllWindows().length === 0) {
    createWindow()
  }
})