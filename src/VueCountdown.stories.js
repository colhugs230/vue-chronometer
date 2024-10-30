import VueCountdown from './VueCountdown.vue';

export default {
  title: 'VueCountdown',
  component: VueCountdown,
};

const Template = (args) => ({
  components: { VueCountdown },
  setup() {
    return { args };
  },
  template: '<VueCountdown v-bind="args" />',
});

export const Default = Template.bind({});
Default.args = {
  // Define default args (props) here
};
