import "./App.css";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import { Home, BlogPosts, MyBlog, Navbar, UploadImages } from "./components";

export default function App() {
  return (
    <Router>
      <div>
        <Navbar />
        <Switch>
          <Route exact path="/">
            <Home />
          </Route>
          <Route exact path="/blog/MyBlog">
            <MyBlog />
          </Route>
          <Route exact path="/blog/BlogPosts">
            <BlogPosts />
          </Route>
          <Route exact path="/imageGallery/UploadImages">
            <UploadImages />
          </Route>
        </Switch>
      </div>
    </Router>
  );
}
