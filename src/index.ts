import { app, BrowserWindow } from "electron";
import * as path from "path";
import * as url from "url";

const createWindow = () => {
  const mainWindow = new BrowserWindow({
    transparent: true,
    hasShadow: true,
    vibrancy: "dark",
    titleBarStyle: "hidden"
  });
  
  mainWindow.loadURL("http://localhost:1234");

  mainWindow.on("closed", () => {
    console.log("tidy up goes here")
  });
}

app.on("ready", createWindow);