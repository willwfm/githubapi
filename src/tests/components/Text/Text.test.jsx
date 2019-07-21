import React from "react";
import { mount } from "enzyme";
import { Text } from "components";

describe("<Text />", () => {

  it("renders text", () => {
    const text = 'oi';
    const layout = mount(<Text text={text} />);
    expect(layout.props().text).toBe(text);
  });
});
