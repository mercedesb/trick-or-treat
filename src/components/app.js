import { h } from "preact";
import Header from "./header";

// Code-splitting is automated for `routes` directory
import Home from "../routes/home";
import Profile from "../routes/profile";

const App = () => (
  <div id="app">
    <Header />
    <Home path="/" />
    {/* <Profile path="/profile/" user="me" /> */}
    {/* <Profile path="/profile/:user" /> */}
  </div>
);

export default App;
