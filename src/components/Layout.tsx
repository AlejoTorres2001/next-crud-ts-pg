import { ReactChild, ReactComponentElement } from "react";
import { Container } from "semantic-ui-react";
import NavBar from "./NavBar";

const Layout = ({ children }: {children:JSX.Element | JSX.Element[]}) => {
  return (
    <div>
      <NavBar />
        <main style={{background:'#212121'}}>
      <Container style={{ paddingTop: "2rem",height:'90vh' }}>{children}</Container>

        </main>
      <h1>Footer</h1>
    </div>
  );
};

export default Layout;
