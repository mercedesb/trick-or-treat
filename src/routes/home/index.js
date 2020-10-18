import { h } from "preact";
import { useState, useEffect } from "preact/hooks";

import indefiniteArticle from "../../helpers/indefiniteWrapper";

import useAirtable from "../../hooks/useAirtable";
import useLocalStorage from "../../hooks/useLocalStorage";
import CostumeForm from "../../components/costumeForm";
import Ghost from "../../components/ghost";

const Home = () => {
  const storageKey = "APTrickOrTreat";
  const { create, getCount } = useAirtable();
  const { get, set } = useLocalStorage();
  const [submitted, setSubmitted] = useState(!!get(storageKey));
  const [costume, setCostume] = useState(get(storageKey));
  const [count, setCount] = useState(0);

  useEffect(async () => {
    let initialCount = await getCount();
    setCount(initialCount);
  }, [submitted]);

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
      <>
        <div>
          <p>Ohhhh {indefiniteArticle(costume)}!? Super cool!</p>
          <p>
            Thank you!{" "}
            {!!count && (
              <>We've raised {count > 40 ? "$200" : `$${count * 5}`}!</>
            )}
          </p>
        </div>
        <Ghost />
      </>
    );
  }
};

export default Home;
