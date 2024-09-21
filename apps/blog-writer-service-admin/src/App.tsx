import React, { useEffect, useState } from "react";
import { Admin, DataProvider, Resource } from "react-admin";
import dataProvider from "./data-provider/graphqlDataProvider";
import { theme } from "./theme/theme";
import Login from "./Login";
import "./App.scss";
import Dashboard from "./pages/Dashboard";
import { AuthorList } from "./author/AuthorList";
import { AuthorCreate } from "./author/AuthorCreate";
import { AuthorEdit } from "./author/AuthorEdit";
import { AuthorShow } from "./author/AuthorShow";
import { BlogList } from "./blog/BlogList";
import { BlogCreate } from "./blog/BlogCreate";
import { BlogEdit } from "./blog/BlogEdit";
import { BlogShow } from "./blog/BlogShow";
import { jwtAuthProvider } from "./auth-provider/ra-auth-jwt";

const App = (): React.ReactElement => {
  return (
    <div className="App">
      <Admin
        title={"BlogWriterService"}
        dataProvider={dataProvider}
        authProvider={jwtAuthProvider}
        theme={theme}
        dashboard={Dashboard}
        loginPage={Login}
      >
        <Resource
          name="Author"
          list={AuthorList}
          edit={AuthorEdit}
          create={AuthorCreate}
          show={AuthorShow}
        />
        <Resource
          name="Blog"
          list={BlogList}
          edit={BlogEdit}
          create={BlogCreate}
          show={BlogShow}
        />
      </Admin>
    </div>
  );
};

export default App;
