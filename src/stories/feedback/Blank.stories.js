require("../../styles/main.css");

import Blank from "../../components/Blank";

export default {
  title: "Components/Feedback/Blank",
  component: Blank,
  argTypes: {
    label: { control: "text" },
  },
};

const Template = (args) => ({
  components: { Blank },
  setup() {
    return { args };
  },
  template: '<Blank v-bind="args" />',
});

export const Primary = Template.bind({});
Primary.args = {
  label: "Test",
};
