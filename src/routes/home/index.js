import { h } from "preact";
import { useState } from "preact/hooks";

import indefiniteArticle from "indefinite";
import style from "./style.css";
import TextInput from "../../components/textInput";
import useAirtable from "../../hooks/useAirtable";
import useLocalStorage from "../../hooks/useLocalStorage";

const Home = () => {
  const storageKey = "APTrickOrTreat";
  const { create } = useAirtable();
  const { get, set } = useLocalStorage();
  const [submitted, setSubmitted] = useState(get(storageKey));
  const [costume, setCostume] = useState("");

  const handleSubmit = () => {
    create({ costume });
    setSubmitted(true);
    set(storageKey, true);
  };

  if (!submitted) {
    return (
      <div>
        <form onSubmit={handleSubmit}>
          <TextInput
            name="costume"
            label="What is your costume?"
            value={costume}
            onInput={(e) => setCostume(e.target.value)}
            required
          />
          <button type="submit">Trick or Treat!</button>
        </form>
      </div>
    );
  } else if (!costume) {
    return (
      <div>
        <p>Looks like you've already stopped by 🧟‍♀️🧛‍♂️🦸‍♀️</p>
        <p>Thanks for your trick-or-treat it forward donation!</p>
      </div>
    );
  } else {
    return (
      <div>
        <p>Ohhhh {indefiniteArticle(costume)}!? Super cool!</p>
        <p>Thanks for your trick-or-treat it forward donation!</p>
      </div>
    );
  }
};

export default Home;
