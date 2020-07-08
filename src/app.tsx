import * as React from "react"
import * as ReactDOM from "react-dom"
import * as path from "path"
import FileTree from "react-filetree-electron";
import styled from "styled-components"

const TitleBar = styled.div`
  -webkit-user-select: none;
  -webkit-app-region: drag;
  height: 40px;
`

const AppContainer = styled.div`
`

const App: React.FC = () => {
  return (
    <React.Fragment>  
      <TitleBar />
      <AppContainer>
        <FileTree
          directory={"/Users/georgebutter/Documents/neutrino/"}
        />
      </AppContainer>
    </React.Fragment>
  )  
}

ReactDOM.render(<App />, document.getElementById("root"));