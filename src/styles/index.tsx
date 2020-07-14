import styled from "styled-components"

export const TitleBar = styled.div`
-webkit-user-select: none;
-webkit-app-region: drag;
height: 40px;
top: 0;
left: 0;
right: 0;
position: fixed;
`
export const AppContainer = styled.div`
font-family: -apple-system,BlinkMacSystemFont,Segoe UI,Helvetica,Arial,sans-serif,Apple Color Emoji,Segoe UI Emoji;
display: flex;
height: 100%;
flex-direction: column;
`
export const EmptyState = styled.div`
height: 100%;
display: flex;
justify-content: center;
align-items: center;
`
export const DisplayText = styled.h1`
opacity: 0.4;
text-align: center;
color: #000;
`
export const Wrapper = styled.div`
display: flex;
height: 100%;
`
export const Aside = styled.aside`
width: 25%;
height: 100%;
color: white;
`
export const Main = styled.main`
width: 75%;
height: 100%;
background-color: rgba(51, 51, 51, .9);
`
export const Nav = styled.nav`
padding: 40px 0;
`
export const FileWrapper = styled.article`
padding: 40px;
color: rgba(255, 255, 255, .9);
`
export const NavItem = styled.button`
display: block;
background: transparent;
width: 100%;
color: #fff;
border: 0;
text-align: left;
font-size: 1rem;
padding: 10px;
outline: none;
cursor: pointer;
transition: ease color 0.3s;
${({ active }) => active ? `
  color: #66b5f8;
` : null}
&::active {
  outline: none;
}
`
export const Editor = styled.textarea`
display: block;
width: 100%;
height: full;
`

export const Dot = styled.span`
display: inline-block;
width: 8px;
height: 8px;
border-radius: 8px;
background: #66b5f8;
`
export const Input = styled.input`
display: block;
margin-bottom: 20px;
width: 100%;
border: 0;
border-radius: 5px;
background-color: rgba(0, 0, 0, .4);
color: #ddd;
font-size: 1rem;
height: 40px;
padding: 0 10px;
&:focus {
  outline: none;
}
&:active {
  outline: none;
}
`
export const Link = styled.a`
color: #66b5f8;
display: block;
text-align: center;
`
