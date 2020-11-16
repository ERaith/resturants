import React from "react";
import { TableBody } from "./TableBody";
import { mount } from "enzyme";
import toJson from "enzyme-to-json";
import { headerMeta } from "../../api/data";
import { resturants } from "../../api/data";

describe("TableBody", () => {
  describe("Snapshots", () => {
    it("should match the snapshot", () => {
      const headerOrder = headerMeta.map((m) => m.key);
      const props = {
        headerOrder: headerOrder,
        data: resturants,
      };
      const wrapper = mount(
        <table>
          <thead>
            <TableBody {...props} />
          </thead>
        </table>
      );

      expect(toJson(wrapper)).toMatchSnapshot();
    });
  });
});
