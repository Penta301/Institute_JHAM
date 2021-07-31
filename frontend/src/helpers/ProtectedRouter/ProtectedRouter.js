import React from "react";
import { Route, Redirect } from "react-router-dom";

function ProtectedRouter({ auth, Component, PropsComponent, ...rest }) {
  return (
    <Route
      {...rest}
      render={(props) => {
        if (auth) {
          return <Component {...PropsComponent} />;
        } else {
          return (
            <Redirect to={{ pathname: "/", state: { from: props.location } }} />
          );
        }
      }}
    />
  );
}

export default ProtectedRouter;
