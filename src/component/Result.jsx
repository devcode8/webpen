import React, { useContext, useEffect, useState } from "react";
import { Box } from "@mui/material";
import { DataContext } from "../context/DataProvider";

const Result = () => {
  const [src, setSrc] = useState("");
  const { html, css, js } = useContext(DataContext);
  const srcCode = `
    <html>
    <body>${html}</body>
    <style>${css}</style>
    <script>${js}</script>
    </html>
    `;

  useEffect(() => {
    const timeout = setTimeout(() => {
      setSrc(srcCode);
    }, 1000);

    return () => clearTimeout(timeout);
  }, [html, css, js, srcCode]);
  return (
    <Box>
      <iframe
        srcDoc={src}
        title="Output"
        sandbox="allow-scripts allow-same-origin allow-modals"
        frameBorder={0}
      />
    </Box>
  );
};

export default Result;
