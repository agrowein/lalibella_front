import React from 'react';
import router from "./router";
import { RouterProvider } from "react-router";
import { Global } from '@emotion/react'
import globalStyle from "./style/globalStyle";

function App() {

  return (
    <>
      <Global styles={globalStyle} />
      <RouterProvider router={router} />
    </>
  );
}

export default App;
