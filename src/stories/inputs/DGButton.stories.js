require("../../styles/main.css");
import { withDesign } from "storybook-addon-designs";
import DGButton from "../../components/DGButton";

export default {
  title: "Components/Inputs/Button",
  component: DGButton,
  argTypes: {
    variant: {
      options: ["primary", "secondary", "ghost", "ghost-secondary"],
      control: "select",
    },
  },
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
  href: "",
};

Primary.parameters = {
  design: [
    {
      name: "General",
      type: "figma",
      url: "https://www.figma.com/file/84IFUuStdqz0sLT8cndYkY/Deepgram-Design-Library?node-id=1409%3A53",
    },
    {
      name: "Marketing Primary Button",
      type: "figma",
      url: "https://www.figma.com/file/zGTweN9BxomiX99AnBuqmB/DG-website-3.0-wireframes?node-id=341%3A7878",
    },
  ],
};

export const QuickActionButtonPrimary = Template.bind({});
QuickActionButtonPrimary.args = {
  label: "button",
  isQuickAction: "true",
};

QuickActionButtonPrimary.parameters = {
  design: [
    {
      name: "General",
      type: "figma",
      url: "https://www.figma.com/file/84IFUuStdqz0sLT8cndYkY/OLD---Deepgram-Design-Library?node-id=1845%3A77",
    },
    {
      name: "Marketing QuickActionButtonPrimary",
      type: "figma",
      url: "https://www.figma.com/file/zGTweN9BxomiX99AnBuqmB/DG-website-3.0-wireframes?node-id=252%3A3644",
    },
  ],
};

export const Secondary = Template.bind({});
Secondary.args = {
  label: "Secondary Button",
  variant: "secondary",
};

Secondary.parameters = {
  design: [
    // No Secondary Button in General Design System Figma Designs
    {
      name: "Marketing Secondary Button",
      type: "figma",
      url: "https://www.figma.com/file/zGTweN9BxomiX99AnBuqmB/DG-website-3.0-wireframes?node-id=341%3A7879",
    },
  ],
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
