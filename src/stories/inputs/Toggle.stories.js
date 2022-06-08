require("../../styles/main.css");

import Toggle from "../../components/Toggle";

export default {
  title: "Components/Inputs/Toggle",
  component: Toggle,
  argTypes: {
    label: { control: "text" },
  },
};

const Template = (args) => ({
  components: { Toggle },
  setup() {
    return { args };
  },
  template: '<Toggle v-bind="args" />',
});

export const ToggleOn = Template.bind({});
ToggleOn.args = {
  label: "Test",
};

ToggleOn.parameters = {
  design: [
    {
      name: "General",
      type: "figma",
      url: "https://www.figma.com/file/84IFUuStdqz0sLT8cndYkY/OLD---Deepgram-Design-Library?node-id=1406%3A105",
    },
    {
      name: "Marketing Toggle",
      type: "figma",
      url: "https://www.figma.com/file/zGTweN9BxomiX99AnBuqmB/DG-website-3.0-wireframes?node-id=353%3A11633",
    },
  ],
};

export const ToggleOff = Template.bind({});
ToggleOn.args = {
  label: "Test",
};

ToggleOff.parameters = {
  design: [
    {
      name: "General",
      type: "figma",
      url: "https://www.figma.com/file/84IFUuStdqz0sLT8cndYkY/OLD---Deepgram-Design-Library?node-id=1406%3A105",
    },
    {
      name: "Marketing Toggle",
      type: "figma",
      url: "https://www.figma.com/file/zGTweN9BxomiX99AnBuqmB/DG-website-3.0-wireframes?node-id=353%3A11633",
    },
  ],
};

export const ToggleDisabled = Template.bind({});
ToggleOn.args = {
  label: "Test",
};

ToggleDisabled.parameters = {
  design: [
    {
      name: "General",
      type: "figma",
      url: "https://www.figma.com/file/84IFUuStdqz0sLT8cndYkY/OLD---Deepgram-Design-Library?node-id=1406%3A105",
    },
    {
      name: "Marketing Toggle",
      type: "figma",
      url: "https://www.figma.com/file/zGTweN9BxomiX99AnBuqmB/DG-website-3.0-wireframes?node-id=353%3A11633",
    },
  ],
};
