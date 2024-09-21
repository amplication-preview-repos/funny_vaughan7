import React, { useEffect, useState } from "react";
import { Admin, DataProvider, Resource } from "react-admin";
import dataProvider from "./data-provider/graphqlDataProvider";
import { theme } from "./theme/theme";
import Login from "./Login";
import "./App.scss";
import Dashboard from "./pages/Dashboard";
import { BlogEventList } from "./blogEvent/BlogEventList";
import { BlogEventCreate } from "./blogEvent/BlogEventCreate";
import { BlogEventEdit } from "./blogEvent/BlogEventEdit";
import { BlogEventShow } from "./blogEvent/BlogEventShow";
import { jwtAuthProvider } from "./auth-provider/ra-auth-jwt";

const App = (): React.ReactElement => {
  return (
    <div className="App">
      <Admin
        title={"BlogReaderService"}
        dataProvider={dataProvider}
        authProvider={jwtAuthProvider}
        theme={theme}
        dashboard={Dashboard}
        loginPage={Login}
      >
        <Resource
          name="BlogEvent"
          list={BlogEventList}
          edit={BlogEventEdit}
          create={BlogEventCreate}
          show={BlogEventShow}
        />
      </Admin>
    </div>
  );
};

export default App;
