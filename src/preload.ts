import * as Store from "electron-store"
import * as Electron from "electron"
import { IData } from "./types.d"
import { storeConfig } from "./helpers"

const store = new Store(storeConfig)

window.electron = Electron
window.data = {
  token: store.get("token")
} as IData;

