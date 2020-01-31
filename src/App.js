import React from "react";
import "./App.css";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import routes from "./routes";

function App() {
  return (
    <BrowserRouter>
      <Switch>
        {routes.map((route, index) => {
          return route.component ? (
            <Route
              key={index}
              path={route.path}
              exact={route.exact}
              name={route.name}
              render={props => <route.component {...props} />}
            />
          ) : null;
        })}
      </Switch>
      {/* {window.location.href.split("/").pop() !== "" ? <Footer /> : ""} */}
    </BrowserRouter>
  );
}

export default App;
