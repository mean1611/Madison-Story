import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Home from "./page";

export default function AppRouter() {
  return (
    <Router>
      <Switch>
        <Route exact path="/" component={Home} />
        {/* Add more routes here if needed */}
      </Switch>
    </Router>
  );
}
