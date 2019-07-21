import React from "react";
import { mount } from "enzyme";
import { Avatar } from "components";

describe("<Avatar />", () => {
  const img = "https://avatars0.githubusercontent.com/u/15857323?s=40&v=4";

  it("renders avatar", () => {
    const data = {
      avatar_url: img
    };
    const layout = mount(<Avatar data={data} />);
    expect(layout.props().data.avatar_url).toBe(img);
  });
});
