import { h } from "preact";

// Code-splitting is automated for `routes` directory
import Home from "../routes/home";
import Profile from "../routes/profile";

const App = () => (
  <div id="app" className="app">
    <div>
      <h1>Trick or treat it forward</h1>
      <h2>Neighbors helping neighbors</h2>
      <p>
        Instead of passing out treats this year, we're making a $5 donation to{" "}
        <a href="https://www.albanyparkmutualaid.com/">
          Albany Park Mutual Aid
        </a>{" "}
        (up to $200)
      </p>
    </div>
    <Home path="/" />
    {/* <Profile path="/profile/" user="me" /> */}
    {/* <Profile path="/profile/:user" /> */}
  </div>
);

export default App;
