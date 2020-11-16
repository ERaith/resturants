import React from "react";
import { SearchBar } from "./SearchBar";
import { shallow, mount } from "enzyme";
import toJson from "enzyme-to-json";

describe("SearchBar", () => {
  describe("Snapshots", () => {
    it("should match the snapshot", () => {
      const mockHandleSearchChange = jest.fn();
      const props = {
        handleSearchChange: mockHandleSearchChange,
      };
      const wrapper = mount(<SearchBar {...props} />);

      expect(toJson(wrapper)).toMatchSnapshot();
    });
  });

  describe("user interactions", () => {
    it("should update searchValue", () => {
      const mockHandleSearchChange = jest.fn();
      const props = {
        handleSearchChange: mockHandleSearchChange,
      };
      const wrapper = mount(<SearchBar {...props} />);
      const input = wrapper.find('input[type="text"]');

      expect(input.props()).toEqual({
        className: "search",
        id: "search",
        onChange: expect.anything(),
        placeholder: "Search",
        type: "text",
        value: "",
      });

      input.instance().value = "TEST";
      input.simulate("change");

      expect(input.instance().value).toBe("TEST");
      expect(wrapper.find("TEST")).toBeTruthy();
      expect(toJson(wrapper)).toMatchSnapshot();
    });
    it("should clear value when button is clicked", () => {
      const mockHandleSearchChange = jest.fn();
      const props = {
        handleSearchChange: mockHandleSearchChange,
      };
      const wrapper = mount(<SearchBar {...props} />);
      const input = wrapper.find('input[type="text"]');

      input.instance().value = "TEST";
      input.simulate("change");

      expect(input.instance().value).toBe("TEST");
      expect(wrapper.find("TEST")).toBeTruthy();

      const clear = wrapper.find('button[type="reset"]');
      clear.simulate("click");

      expect(input.instance().value).toBe("");
    });
    it("should submit value when button is clicked", () => {
      const mockHandleSearchChange = jest.fn();
      const props = {
        handleSearchChange: mockHandleSearchChange,
      };
      const wrapper = mount(<SearchBar {...props} />);
      const input = wrapper.find('input[type="text"]');

      input.instance().value = "TEST";
      input.simulate("change");

      expect(input.instance().value).toBe("TEST");
      expect(wrapper.find("TEST")).toBeTruthy();

      const submit = wrapper.find('button[type="submit"]');
      submit.simulate("submit");

      expect(input.instance().value).toBe("TEST");
      expect(mockHandleSearchChange).toHaveBeenCalledWith("TEST");
    });
  });
});
