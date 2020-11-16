import React from "react";
import { SelectionFilter } from "./SelectionFilter";
import { render, fireEvent } from "@testing-library/react";

describe("SelectionFilter", () => {
  describe("Snapshots", () => {
    it("should match the snapshot", () => {
      const { asFragment } = render(
        <SelectionFilter
          id="Test"
          dropDownItems={["one", "two"]}
          handleChange={jest.fn(() => "change")}
          filterTermActive={false}
        />
      );

      expect(asFragment(<SelectionFilter />)).toMatchSnapshot();
    });
  });

  describe("user interactions", () => {
    it("should invoke handleChange when selection is changed", () => {
      const mockHandleChange = jest.fn();
      const { getByRole } = render(
        <SelectionFilter
          id="Test"
          dropDownItems={["one", "two"]}
          handleChange={mockHandleChange}
          filterTermActive={false}
        />
      );

      expect(getByRole("combobox", "#Test")).toBeTruthy();
      expect(getByRole("combobox", "#Test").value).toBe("All");

      fireEvent.change(getByRole("combobox", "#Test"), {
        target: { value: "two" },
      });
      expect(mockHandleChange).toBeCalled();
      expect(getByRole("combobox", "#Test").value).toBe("two");
    });
  });
});
