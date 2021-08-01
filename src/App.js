import React from "react";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
import FormGlobal from "./Views/Forms/Global/FormGlobal";

function App() {
  return (
    <Router>
      <Switch>
        {/* ============================= Form ============================= */}
        <Route exact path="/form-global" component={FormGlobal} />
      </Switch>
    </Router>
  );
}

export default App;
