import React from "react";
import { Meta, StoryObj } from "@storybook/react";
import Endringsvarsel from "./Endringsvarsel";

const meta: Meta<typeof Endringsvarsel> = {
  component: Endringsvarsel,
  title: "Marbella/Endringsvarsel",
  argTypes: {},
};
export default meta;

type Story = StoryObj<typeof Endringsvarsel>;

export const Primary: Story = (args) => (
  <Endringsvarsel data-test-id="InputField-id" {...args} />
);
Primary.args = {
  tittel: "Dette er et endringsvarsel",
  tekst: "Dette er teksten",
  dato: "01.01.2023",
};

export const Secondary: Story = (args) => (
    <Endringsvarsel data-test-id="InputField-id" {...args} />
);
Secondary.args = {
  tittel: "Dette er et endringsvarsel",
  tekst: "Dette er teksten"
};
