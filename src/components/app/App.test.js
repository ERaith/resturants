import { render } from "@testing-library/react";
import { mount } from "enzyme";
import toJson from "enzyme-to-json";
import App from "./App";

test("renders learn react link", () => {
  const wrapper = mount(<App />);

  expect(toJson(wrapper)).toMatchSnapshot();
});
