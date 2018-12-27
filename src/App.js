import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import React, { Component, Suspense, lazy } from "react";

const TodoList = lazy(() => import("./components/TodoList"));
const LazyLoaded = lazy(() => import("./components/LazyLoaded"));

class App extends Component {
  render() {
    return (
      <Router>
        <Suspense fallback={<div>Loading...</div>}>
          <Switch>
            <Route exact path="/" component={TodoList} />
            <Route exact path="/lazy" component={LazyLoaded} />
          </Switch>
        </Suspense>
      </Router>
    );
  }
}

export default App;
