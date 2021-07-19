import { ComponentMeta, ComponentStory } from "@storybook/react";
import React from "react";
import HeaderStories from "../header/Header.stories";
import { Page } from "./Page";

export default {
  title: "Empire/Page",
  component: Page,
} as ComponentMeta<typeof Page>;

const Template: ComponentStory<typeof Page> = (args) => <Page {...args} />;

export const LoggedIn = Template.bind({});
LoggedIn.args = {
  ...HeaderStories.LoggedIn.args,
};

export const LoggedOut = Template.bind({});
LoggedOut.args = {
  ...HeaderStories.LoggedOut.args,
};
