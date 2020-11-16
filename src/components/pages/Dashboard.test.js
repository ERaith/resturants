import React from "react";
import toJson from "enzyme-to-json";

import Dashboard from "./Dashboard";

import { headerMeta } from "../../api/data";
import { mount } from "enzyme";
import { resturants } from "../../api/data";

describe("Dashboard", () => {
  describe("Snapshots", () => {
    it("should match the initial snapshot", () => {
      const props = {
        headerMeta: headerMeta,
        data: resturants.slice(0, 4),
        genreFilterKeys: ["American", "Seafood"],
      };
      const wrapper = mount(<Dashboard {...props} />);

      expect(toJson(wrapper)).toMatchSnapshot();
    });
  });
});
