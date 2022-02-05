import React, { Suspense, lazy } from "react";
import { BrowserRouter, Switch, Route } from "react-router-dom";
import "../assets/styles/App.scss";
import Characters from "../containers/Characters";
import Layout from "../components/Layout";
import Loader from "../components/Loader";
import NotFound from "../components/NotFound";
import ErrorBoundary from "../ErrorBoundary";
const Favorites = lazy(() => import("../containers/Favorites"));

const App = () => (
  <BrowserRouter>
  <ErrorBoundary>
    <Suspense
      fallback={
        <div>
          <Loader />
        </div>
      }
    >
      <Layout>
        <Switch>
          <Route exact path="/favorites" component={Favorites} />
          <Route exact path="/" component={Characters} />
          <Route component={NotFound} />
        </Switch>
      </Layout>
    </Suspense>
  </ErrorBoundary>
  </BrowserRouter>
);

export default App;
