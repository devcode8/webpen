import React, { useState } from "react";
import { Box, styled } from "@mui/material";
import CloseFullscreenIcon from "@mui/icons-material/CloseFullscreen";
import OpenInFullIcon from "@mui/icons-material/OpenInFull";
import ContentCopyIcon from "@mui/icons-material/ContentCopy";
import LockIcon from "@mui/icons-material/Lock";
import LockOpenIcon from "@mui/icons-material/LockOpen";

import { Controlled as CodeEditor } from "react-codemirror2";

import { ToastContainer, toast } from "react-toastify";

import "react-toastify/dist/ReactToastify.css";

import "../index.css";

import "codemirror/lib/codemirror.css";
import "codemirror/theme/material.css";
import "codemirror/mode/xml/xml";
import "codemirror/mode/javascript/javascript";
import "codemirror/mode/css/css";

const Heading = styled(Box)`
  background: #1d1e22;
  display: flex;
  padding: 9px 12px;
  color: #fff;
`;

const Container = styled(Box)`
  flex-grow: 1;
  flex-basic: 0;
  display: flex;
  flex-direction: column;
  padding: 0 8px 8px;
`;

const Header = styled(Box)`
  background: #060606;
  display: flex;
  color: #d0d4ca;
  justify-content: space-between;
  font-weight: 700;
`;

const Editor = ({ heading, icon, color, value, onChange, mode }) => {
  const [open, setOpen] = useState(true);
  const [lock, setLock] = useState(false);

  const handleChange = (editor, data, value) => {
    onChange(value);
  };
  const handleLock = (e) => {
    setLock(!lock);
    if (lock) {
      Unlocknotify();
    } else {
      Locknotify();
    }
  };
  const notify = () => toast("Copied Successfully🎉");
  const Locknotify = () => toast("Lock Successfully");
  const Unlocknotify = () => toast("Unlock Successfully");

  const handleCopyCode = () => {
    navigator.clipboard.writeText(value);
    // toaster 
    notify();
  };

  return (
    <Container style={open ? null : { flexGrow: 0 }}>
      <ToastContainer
        position="top-center"
        autoClose={1500}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
        theme="light"
      />
      <Header>
        <Heading>
          <Box
            component="span"
            style={{
              background: color,
              display: "flex",
              height: 20,
              width: 20,
              placeContent: "center",
              justifyContent: "center",
              alignItems: "center",
              borderRadius: 5,
              marginRight: 2,
              paddingBottom: 2,
              color: "#000",
            }}
          >
            {icon}
          </Box>
          {heading}
        </Heading>
        <Box
          style={{
            alignSelf: "center",
            display: "flex",
            gap: 10,
          }}
        >
          {lock ? (
            <LockIcon onClick={handleLock} />
          ) : (
            <LockOpenIcon onClick={handleLock} />
          )}
          <ContentCopyIcon
            onClick={handleCopyCode}
            style={{
              cursor: "pointer",
            }}
            className="icons"
          />
          {open ? (
            <CloseFullscreenIcon
              fontSize="small"
              style={{ alignSelf: "center", cursor: "pointer" }}
              onClick={() => setOpen(!open)}
              className="icons"
            />
          ) : (
            <OpenInFullIcon
              fontSize="small"
              style={{ alignSelf: "center", cursor: "pointer" }}
              onClick={() => setOpen(!open)}
              className="icons"
            />
          )}
        </Box>
      </Header>
      <CodeEditor
        style={{}}
        className="controlled-editor"
        value={value}
        onBeforeChange={handleChange}
        options={{
          theme: "material",
          mode: { mode },
          lineNumbers: true,
        }}
      />
    </Container>
  );
};

export default Editor;
