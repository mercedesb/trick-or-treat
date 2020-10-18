import { h } from "preact";
import { mount } from "enzyme";
import CostumeForm from "../../src/components/costumeForm";

let subject;
let handleSubmit;
let costume;
let setCostume;

describe("costumeForm", () => {
  beforeEach(() => {
    handleSubmit = jest.fn();
    costume = "";
    setCostume = jest.fn();
    subject = mount(
      <CostumeForm
        handleSubmit={handleSubmit}
        costume={costume}
        setCostume={setCostume}
      />
    );
  });

  describe("render", () => {
    it("renders correctly", () => {
      expect(subject.find("form")).toHaveLength(1);
      expect(subject.find("TextInput")).toHaveLength(1);
      expect(subject.find("button[type='submit']")).toHaveLength(1);
    });

    describe("with a costume", () => {
      beforeEach(() => {
        costume = "scientist";
        subject = mount(
          <CostumeForm
            handleSubmit={handleSubmit}
            costume={costume}
            setCostume={setCostume}
          />
        );
      });

      it("renders correctly", () => {
        expect(subject.find("input").prop("value")).toEqual(costume);
      });
    });
  });

  describe("events", () => {
    describe("on input change", () => {
      it("calls the setCostume function", () => {
        subject.find("input").getDOMNode().value = "scientist";
        subject.find("input").first().simulate("input");
        expect(setCostume).toHaveBeenCalledWith("scientist");
      });
    });

    describe("on submit", () => {
      it("calls the handleSubmit function", () => {
        subject.find("form").first().simulate("submit");
        expect(handleSubmit).toHaveBeenCalled();
      });
    });
  });
});
