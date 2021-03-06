import { h } from "preact";

// Code-splitting is automated for `routes` directory
import Home from "../routes/home";

const App = () => {
  return (
    <div id="app" className="app">
      <div>
        <h1>Trick or treat it forward</h1>
        <h2>Neighbors helping neighbors</h2>
        <p>
          Instead of passing out treats this year, we're making a $
          {`${process.env.DONATION_PER_PERSON}`} donation to{" "}
          <a
            href={`${process.env.DONATING_TO_WEBSITE}`}
          >{`${process.env.DONATING_TO}`}</a>{" "}
          (up to ${`${process.env.DONATION_MAX}`})
        </p>
      </div>
      <Home path="/" />
      <footer>
        <small>
          Built with ♡ |{" "}
          <a href="https://github.com/mercedesb/trick-or-treat">Github</a>
        </small>
      </footer>
    </div>
  );
};

export default App;
