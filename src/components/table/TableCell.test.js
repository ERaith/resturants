import React from "react";
import { TableCell } from "./TableCell";
import { mount } from "enzyme";
import toJson from "enzyme-to-json";

describe("TableCell", () => {
  describe("Snapshots", () => {
    it("should match the snapshot", () => {
      const props = {
        data: "Fake-Data",
      };
      const wrapper = mount(
        <table>
          <tbody>
            <tr>
              <TableCell {...props} />
            </tr>
          </tbody>
        </table>
      );

      expect(toJson(wrapper)).toMatchSnapshot();
    });
  });
});
