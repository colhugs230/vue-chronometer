import VueChronometer from './VueChronometer.vue';

export default {
  title: 'VueChronometer',
  component: VueChronometer,
};

const Template = (args) => ({
  components: { VueChronometer },
  setup() {
    return { args };
  },
  template: '<VueChronometer v-bind="args" />',
});

export const Default = Template.bind({});
Default.args = {
  // Define default args (props) here
};
