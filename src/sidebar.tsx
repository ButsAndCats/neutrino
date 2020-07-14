import * as React from "react"
import {
  Aside,
  Nav,
  NavItem,
  Dot
} from "./styles"
import { GET_USERNAME } from "./queries"
import { useQuery } from "@apollo/react-hooks";


export const Sidebar = () => {
  const { loading, error, data } = useQuery(GET_USERNAME);
  console.log({ loading, error, data })
  return (
    <Aside>
      <Nav>
        {false ? (
          <NavItem
            active={true}
            key={"key"}
            // onClick={() => handleChooseFile(path)}
          >
            Name {true ? <Dot /> : null}
          </NavItem>
        ) : null}
      </Nav>
    </Aside>
  )
}