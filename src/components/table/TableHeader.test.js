import React from "react";
import { TableHeader } from "./TableHeader";
import { mount } from "enzyme";
import toJson from "enzyme-to-json";

describe("TableCell", () => {
  describe("Snapshots", () => {
    it("should match the snapshot", () => {
      const props = {
        headers: [
          {
            key: "name",
            text: "Resturant Name",
          },
          {
            key: "city",
            text: "CITY",
          },
        ],
      };
      const wrapper = mount(
        <table>
          <thead>
            <TableHeader {...props} />
          </thead>
        </table>
      );

      expect(toJson(wrapper)).toMatchSnapshot();
    });
  });
});
