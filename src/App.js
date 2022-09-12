import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import { Home, BlogPosts, CreatePosts, Navbar } from "./components";

export default function App() {
  return (
    <Router>
      <div>
        <Navbar />
        <Switch>
          <Route exact path="/">
            <Home />
          </Route>
          <Route exact path="/blog/CreatePosts">
            <CreatePosts />
          </Route>
          <Route exact path="/blog/BlogPosts">
            <BlogPosts />
          </Route>
        </Switch>
      </div>
    </Router>
  );
}
