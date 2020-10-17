import { h } from "preact";
import { useState } from "preact/hooks";

import indefiniteArticle from "indefinite";
import useAirtable from "../../hooks/useAirtable";
import useLocalStorage from "../../hooks/useLocalStorage";
import CostumeForm from "./costumeForm";

const Home = () => {
  const storageKey = "APTrickOrTreat";
  const { create } = useAirtable();
  const { get, set } = useLocalStorage();
  const [submitted, setSubmitted] = useState(!!get(storageKey));
  const [costume, setCostume] = useState(get(storageKey));

  const handleSubmit = () => {
    create({ costume });
    setSubmitted(true);
    set(storageKey, costume);
  };

  if (!submitted) {
    return (
      <CostumeForm
        handleSubmit={handleSubmit}
        costume={costume}
        setCostume={setCostume}
      />
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
