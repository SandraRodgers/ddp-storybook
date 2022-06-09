require("../../styles/main.css");

import Link from "../../components/Link";

export default {
  title: "Components/Navigation/Link",
  component: Link,
  argTypes: {
    label: { control: "text" },
  },
};

const Template = (args) => ({
  components: { Link },
  setup() {
    return { args };
  },
  template: '<Link v-bind="args" />',
});

export const LinkPrimary = Template.bind({});
LinkPrimary.args = {
  label: "Test",
};

LinkPrimary.parameters = {
  design: [
    {
      name: "General",
      type: "figma",
      url: "https://www.figma.com/file/84IFUuStdqz0sLT8cndYkY/OLD---Deepgram-Design-Library?node-id=1432%3A43",
    },
    {
      name: "Marketing Link Primary",
      type: "figma",
      url: "https://www.figma.com/file/zGTweN9BxomiX99AnBuqmB/DG-website-3.0-wireframes?node-id=447%3A3485",
    },
  ],
};

export const LinkSecondary = Template.bind({});
LinkSecondary.args = {
  label: "Test",
};

LinkSecondary.parameters = {
  design: [
    {
      name: "General",
      type: "figma",
      url: "https://www.figma.com/file/84IFUuStdqz0sLT8cndYkY/OLD---Deepgram-Design-Library?node-id=1432%3A43",
    },
  ],
};

export const LinkIcon = Template.bind({});
LinkIcon.args = {
  label: "Test",
};

LinkIcon.parameters = {
  design: [
    {
      name: "General",
      type: "figma",
      url: "https://www.figma.com/file/84IFUuStdqz0sLT8cndYkY/OLD---Deepgram-Design-Library?node-id=2703%3A2045",
    },
    {
      name: "Marketing Link Icon",
      type: "figma",
      url: "https://www.figma.com/file/zGTweN9BxomiX99AnBuqmB/DG-website-3.0-wireframes?node-id=447%3A3484",
    },
  ],
};
