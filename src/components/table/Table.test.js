import React from "react";
import toJson from "enzyme-to-json";
import { mount } from "enzyme";

import { Table } from "./Table";
import { headerMeta } from "../../api/data";
import { resturants } from "../../api/data";

describe("Table", () => {
  describe("Snapshots", () => {
    it("should match the snapshot", () => {
      const props = {
        headerMeta: headerMeta,
        tableData: resturants,
      };
      const wrapper = mount(<Table {...props} />);

      expect(toJson(wrapper)).toMatchSnapshot();
    });
  });
});
