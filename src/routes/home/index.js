import { h } from "preact";
import { useState } from "preact/hooks";
import style from "./style.css";
import TextInput from "../../components/textInput";
import useAirtable from "../../hooks/useAirtable";

const Home = () => {
  const { create } = useAirtable();
  const [submitted, setSubmitted] = useState(false);
  const [costume, setCostume] = useState("");

  const handleSubmit = () => {
    create({ costume });
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
        <p>Ohhhh a {costume}!? Super cool!</p>
        <p>Thanks for your trick-or-treat it forward donation!</p>
      </div>
    );
  }
};

export default Home;
