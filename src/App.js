import { BrowserRouter, Route, Switch } from "react-router-dom"

import NavBar from "./components/NavBar"
import Home from "./components/Home"
import About from "./components/About"
import Post from "./components/Post"
import SinglePost from "./components/SinglePost"
import Project from "./components/Project"

const App = () => {
  return (
    <BrowserRouter>
      <NavBar />
      <Switch>
        <Route path="/" exact>
          <Home />
        </Route>
        <Route path="/about" exact>
          <About />
        </Route>
        <Route path="/post" exact>
          <Post />
        </Route>
        <Route path="/post/:slug">
          <SinglePost />
        </Route>
        <Route path="/project" exact>
          <Project />
        </Route>
      </Switch>
    </BrowserRouter>
  )
}

export default App
