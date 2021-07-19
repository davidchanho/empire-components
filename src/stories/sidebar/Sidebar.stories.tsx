import { ComponentMeta, ComponentStory } from "@storybook/react";
import React from "react";
import { Sidebar } from "./Sidebar";

export default {
  title: "Empire/Sidebar",
  component: Sidebar,
  argTypes: {
    backgroundColor: { control: "color" },
  },
} as ComponentMeta<typeof Sidebar>;

const Template: ComponentStory<typeof Sidebar> = (args) => <Sidebar {...args} />;

export const Primary = Template.bind({});
Primary.args = {
  primary: true,
  label: "Sidebar",
};

export const Secondary = Template.bind({});
Secondary.args = {
  label: "Sidebar",
};

export const Large = Template.bind({});
Large.args = {
  size: "large",
  label: "Sidebar",
};

export const Small = Template.bind({});
Small.args = {
  size: "small",
  label: "Sidebar",
};
