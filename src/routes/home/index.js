import { h } from "preact";
import { useState } from "preact/hooks";
import style from "./style.css";
import TextInput from "../../components/textInput";

const Home = () => {
  const [submitted, setSubmitted] = useState(false);
  const [costume, setCostume] = useState("");

  const handleSubmit = () => {
    console.log("saved to db:");
    setSubmitted(true);
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
  } else {
    return (
      <div>
        <p>
          That sounds like a super cool costume! Thanks for your trick-or-treat
          it forward donation!
        </p>
      </div>
    );
  }
};

export default Home;
