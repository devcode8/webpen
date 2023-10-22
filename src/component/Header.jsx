import React from "react";
import { Toolbar, AppBar, styled } from "@mui/material";

const Navbar = styled(AppBar)`
  background: #222;
  height: 9vh;
  position: static;
`;

const Header = () => {
  return (
    <Navbar>
      <Toolbar>
        <h1
          style={{
            textTransform: "uppercase",
          }}
        >
          Webpen
        </h1>
      </Toolbar>
    </Navbar>
  );
};

export default Header;
