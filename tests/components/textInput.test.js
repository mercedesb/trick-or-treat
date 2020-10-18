import { h } from "preact";
import { mount } from "enzyme";
import TextInput from "../../src/components/textInput";

let subject;
let onInput;
let value;

describe("textInput", () => {
  beforeEach(() => {
    onInput = jest.fn();
    value = "";
    subject = mount(<TextInput onInput={onInput} value={value} />);
  });

  describe("render", () => {
    it("renders correctly", () => {
      expect(subject.find("label")).toHaveLength(1);
      expect(subject.find("input")).toHaveLength(1);
    });

    describe("with a value", () => {
      beforeEach(() => {
        value = "scientist";
        subject = mount(<TextInput onInput={onInput} value={value} />);
      });

      it("renders correctly", () => {
        expect(subject.find("input").prop("value")).toEqual(value);
      });
    });
  });

  describe("events", () => {
    describe("on input change", () => {
      it("calls the onInput function", () => {
        subject.find("input").first().simulate("input");
        expect(onInput).toHaveBeenCalled();
      });
    });
  });
});
