const TextInput = ({ label, name, value, onInput, required }) => {
  return (
    <label>
      {label}
      <input
        type="text"
        name={name}
        id={name}
        value={value}
        onInput={onInput}
        required={required}
      ></input>
    </label>
  );
};

export default TextInput;
