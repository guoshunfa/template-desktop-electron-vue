const { contextBridge, ipcRenderer } = require('electron')

// 暴露安全的API给渲染进程
contextBridge.exposeInMainWorld('electronAPI', {
  // 示例：获取应用版本
  getVersion: () => ipcRenderer.invoke('get-version'),
  
  // 示例：打开文件对话框
  openFile: () => ipcRenderer.invoke('dialog:openFile'),
  
  // 示例：监听主进程消息
  onUpdateCounter: (callback) => ipcRenderer.on('update-counter', callback),
  
  // 移除监听器
  removeAllListeners: (channel) => ipcRenderer.removeAllListeners(channel)
})