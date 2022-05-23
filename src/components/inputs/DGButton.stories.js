require("../../styles/main.css");
import { withDesign } from "storybook-addon-designs";
import DGButton from "./DGButton.vue";

export default {
  title: "Components/Inputs/Button",
  component: DGButton,
  decorators: [withDesign],
};

const Template = (args) => ({
  components: { DGButton },
  setup() {
    return { args };
  },
  template: '<DGButton v-bind="args" />',
});

export const Primary = Template.bind({});
Primary.args = {
  label: "Primary Button",
  variant: "",
};

Primary.parameters = {
  design: {
    type: "figma",
    url: "https://www.figma.com/file/84IFUuStdqz0sLT8cndYkY/Deepgram-Design-Library?node-id=1409%3A53",
  },
};

export const Secondary = Template.bind({});
Secondary.args = {
  label: "Secondary Button",
  variant: "secondary",
};

Secondary.parameters = {
  design: {
    type: "figma",
    url: "",
  },
};

export const Ghost = Template.bind({});
Ghost.args = {
  label: "Ghost Button",
  variant: "ghost",
};

Ghost.parameters = {
  design: {
    type: "figma",
    url: "",
  },
};

export const GhostSecondary = Template.bind({});
GhostSecondary.args = {
  label: "Ghost Secondary Button",
  variant: "ghost-secondary",
};

GhostSecondary.parameters = {
  design: {
    type: "figma",
    url: "",
  },
};
