require("../../styles/main.css");

import QuickActionButton from "../../components/QuickActionButton";

export default {
  title: "Components/Inputs/QuickActionButton",
  component: QuickActionButton,
  argTypes: {
    label: { control: "text" },
  },
};

const Template = (args) => ({
  components: { QuickActionButton },
  setup() {
    return { args };
  },
  template: '<QuickActionButton v-bind="args" />',
});

export const QuickActionButtonPrimary = Template.bind({});
QuickActionButtonPrimary.args = {
  label: "Test",
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

export const QuickActionButtonSecondary = Template.bind({});
QuickActionButtonSecondary.args = {
  label: "Test",
};

QuickActionButtonSecondary.parameters = {
  design: [
    // No Secondary Version in General
    {
      name: "Marketing QuickActionButtonSecondary",
      type: "figma",
      url: "https://www.figma.com/file/zGTweN9BxomiX99AnBuqmB/DG-website-3.0-wireframes?node-id=252%3A3644",
    },
  ],
};
