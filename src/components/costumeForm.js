import { h } from "preact";

import TextInput from "./textInput";

const CostumeForm = ({ handleSubmit, costume, setCostume }) => {
  return (
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
  );
};

export default CostumeForm;
