require("../../styles/main.css");

import Card from "../../components/Card";

export default {
  title: "Components/Surfaces/Card",
  component: Card,
  argTypes: {
    label: { control: "text" },
  },
};

const Template = (args) => ({
  components: { Card },
  setup() {
    return { args };
  },
  template: '<Card v-bind="args" />',
});

export const Basic = Template.bind({});
Basic.args = {
  label: "Test",
};

Basic.parameters = {
  design: [
    {
      name: "Marketing Basic Card",
      type: "figma",
      url: "https://www.figma.com/file/zGTweN9BxomiX99AnBuqmB/DG-website-3.0-wireframes?node-id=6%3A2412",
    },
  ],
};

export const MediaCard = Template.bind({});
MediaCard.args = {
  label: "Test",
};

MediaCard.parameters = {
  design: [
    {
      name: "Marketing MediaCard",
      type: "figma",
      url: "https://www.figma.com/file/zGTweN9BxomiX99AnBuqmB/DG-website-3.0-wireframes?node-id=6%3A2446",
    },
  ],
};
