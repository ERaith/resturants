import React from "react";
import { Paginator } from "./Paginator";
import { shallow } from "enzyme";
import toJson from "enzyme-to-json";

describe("SelectionFilter", () => {
  describe("Snapshots", () => {
    it("should match the snapshot", () => {
      const mockSetPage = jest.fn();
      const props = {
        page: 0,
        setPage: mockSetPage,
        size: 10,
      };
      const wrapper = shallow(<Paginator {...props} />);

      expect(toJson(wrapper)).toMatchSnapshot();
    });
  });

  describe("user interactions", () => {
    it("should start with button 0 as active", () => {
      const mockSetPage = jest.fn();
      const props = {
        page: 0,
        setPage: mockSetPage,
        size: 5,
      };
      const wrapper = shallow(<Paginator {...props} />);
      const currentPageBtn = wrapper.find(".active");

      expect(currentPageBtn).toBeTruthy();
      expect(currentPageBtn.text()).toMatch("0");
      expect(wrapper.find(".active").hasClass("paginator-block")).toEqual(true);
    });
    it("should update active class", () => {
      const mockSetPage = jest.fn();
      const props = {
        page: 0,
        setPage: mockSetPage,
        size: 5,
      };
      const wrapper = shallow(<Paginator {...props} />);
      const currentPageBtn = wrapper.find(".active");

      expect(currentPageBtn).toBeTruthy();
      expect(currentPageBtn.text()).toMatch("0");

      const newActivePageBtn = wrapper.find("#page-1");
      newActivePageBtn.simulate("click");

      expect(mockSetPage).toHaveBeenCalledWith(1);
    });
  });
});
