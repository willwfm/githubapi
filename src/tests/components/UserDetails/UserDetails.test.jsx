import React from "react";
import { mount } from "enzyme";
import { UserDetails } from "components";

describe("<UserDetails />", () => {

  it("renders name, bio, email, followers and following", () => {
    const user = {
        name: "Willian Melo",
        bio: "uma breve biografia",
        email: "lol@lol.com",
        followers: 30,
        following: 50
    }
    const layout = mount(<UserDetails data={user} />);
    expect(layout.props().data.name).toBe(user.name);
    expect(layout.props().data.bio).toBe(user.bio);
    expect(layout.props().data.email).toBe(user.email);
    expect(layout.props().data.followers).toBe(user.followers);
    expect(layout.props().data.following).toBe(user.following);
  });
});
