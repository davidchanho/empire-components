import { ComponentMeta, ComponentStory } from "@storybook/react";
import React from "react";
import { InputGroup } from "./InputGroup";

export default {
  title: "Empire/InputGroup",
  component: InputGroup,
} as ComponentMeta<typeof InputGroup>;

const Template: ComponentStory<typeof InputGroup> = (args) => (
  <InputGroup {...args} />
);

export const Primary = Template.bind({});
Primary.args = {};