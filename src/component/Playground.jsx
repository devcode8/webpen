import React, { useContext } from "react";
import Editor from "./Editor";
import { Box, styled } from "@mui/material";
import { DataContext } from "../context/DataProvider";

const Container = styled(Box)`
  display: flex;
  background: #060606;
`;

const Playground = () => {
  const { html, setHtml, css, setCss, js, setJs } = useContext(DataContext);
  return (
    <Container>
      <Editor heading="HTML" icon="/" color="red" value={html} onChange={setHtml} mode="html" />
      <Editor heading="CSS" icon="*" color="blue" value={css} onChange={setCss} mode="css" />
      <Editor heading="JavaScript" icon="()" color="orange" value={js} onChange={setJs} mode="js" />
    </Container>
  );
};

export default Playground;
