import * as React from "react"
import * as ReactDOM from "react-dom"
import { ApolloProvider } from "@apollo/react-hooks";

import { Sidebar } from "./sidebar"
import {
  AppContainer,
  TitleBar,
  Wrapper,
  Main,
  FileWrapper,
  Editor,
  EmptyState,
  DisplayText,
  Link,
  Input
} from "./styles"
import ReactMarkdown from "react-markdown"
import { IData } from "./types"
import ApolloClient from "apollo-boost";

const { ipcRenderer } = window.electron;

const client = new ApolloClient({
  uri: "https://api.github.com/graphql",
  headers: {
    "Authorization": `Bearer ${window.data.token}`
  }
});

const App: React.FC<IProps> = (props) => {
  const [gitHubToken, setGithubToken] = React.useState<string>(props.data.token);
  const [token, setToken] = React.useState<string>(props.data.token);

  return (
    <ApolloProvider client={client}>
      <AppContainer>
        <TitleBar />
        <Wrapper>
          <Sidebar />
          <Main>
            {gitHubToken ? (
              <FileWrapper>
                <ReactMarkdown source={"file"} />
                <Editor rows="20" value={"file"} />
              </FileWrapper>
            ) : (
              <EmptyState>
                <div>
                  <DisplayText>
                    Enter Github personal token
                  </DisplayText>
                  <form onSubmit={(e) => {
                    e.preventDefault();
                    ipcRenderer.send("saveToken", {
                      token
                    })
                    setGithubToken(token)
                  }}>
                    <Input
                      type="text"
                      autoFocus
                      value={token}
                      onChange={(e) => setToken(e.target.value)}
                    />
                  </form>
                  <Link href="https://docs.github.com/en/github/authenticating-to-github/creating-a-personal-access-token" target="_blank">How to create a personal token</Link>
                </div>
              </EmptyState> 
            )}
          </Main>
        </Wrapper>
      </AppContainer>
    </ApolloProvider>
  )  
}

interface IProps {
  data: IData;
}

ReactDOM.render(<App data={window.data} />, document.getElementById("root"));