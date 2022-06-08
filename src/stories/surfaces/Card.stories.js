require("../../styles/main.css");

import Card from "../../components/Card";

export default {
  title: "Components/Feedback/Card",
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

export const Primary = Template.bind({});
Primary.args = {
  label: "Test",
};
