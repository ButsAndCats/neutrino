import { 
  app, BrowserWindow, ipcMain, shell
} from "electron";
import * as Store from "electron-store"
import * as path from "path";
import { storeConfig } from "./helpers";

// const isMac = process.platform === "darwin"

const store = new Store(storeConfig)

const createWindow = () => {

  const { width, height } = store.get("windowBounds");
  const mainWindow = new BrowserWindow({
    transparent: true,
    hasShadow: true,
    vibrancy: "dark",
    titleBarStyle: "hidden",
    title: "Neutrino",
    webPreferences: {
      preload: path.join(__dirname, 'preload.js'),
      nodeIntegration: true
    },
    width,
    height,
  });

  mainWindow.loadURL("http://localhost:1234");
  
  mainWindow.webContents.on("new-window", (e, url) => {
    e.preventDefault();
    shell.openExternal(url);
  });
  
  mainWindow.on("resize", () => {
    const { width, height } = mainWindow.getBounds();
    store.set("windowBounds", { width, height });
  });

  mainWindow.on("closed", () => {
    console.log("tidy up goes here")
  });
  
  /**  
   * Communication from renderer  
   */   
  ipcMain.on("saveToken", (e, { token }) => {
    store.set("token", token)
  })
}

app.on("ready", createWindow);