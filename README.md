# vue-chronometer

A simple Vue.js component that takes an integer of seconds and counts down by one every second, displaying the time in HH:MM:SS format.

![npm](https://img.shields.io/npm/v/vue-chronometer)
![npm bundle size](https://img.shields.io/bundlephobia/minzip/vue-chronometer)
![npm](https://img.shields.io/npm/dt/vue-chronometer)
![GitHub](https://img.shields.io/github/license/yourusername/vue-chronometer)

## Table of Contents

- [Installation](#installation)
- [Requirements](#requirements)
- [Usage](#usage)
  - [Global Registration](#global-registration)
  - [Local Registration](#local-registration)
- [Props](#props)
- [Example](#example)
- [Customization](#customization)
- [Contributing](#contributing)
- [License](#license)

## Installation

Install the package using npm:

```bash
npm install vue-chronometer
```

## Requirements

- **Vue.js 3.x**

This component uses the Composition API and `<script setup>` syntax, which requires Vue 3.

## Usage

You can register `vue-chronometer` globally or locally within your Vue application.

### Global Registration

```javascript
// main.js
import { createApp } from 'vue';
import App from './App.vue';
import VueChronometer from 'vue-chronometer';

const app = createApp(App);

app.component('VueChronometer', VueChronometer);

app.mount('#app');
```

### Local Registration

```vue
<!-- YourComponent.vue -->
<template>
  <div>
    <!-- Use the component here -->
    <VueChronometer :etaSeconds="300" />
  </div>
</template>

<script>
import VueChronometer from 'vue-chronometer';

export default {
  components: {
    VueChronometer,
  },
};
</script>
```

## Props

### `etaSeconds` (required)

- **Type**: `Number`
- **Required**: `true`
- **Description**: The starting number of seconds for the countdown timer.

## Example

Here's a basic example of how to use `vue-chronometer` in a component:

```vue
<template>
  <div>
    <h1>Countdown Timer Example</h1>
    <VueChronometer :etaSeconds="timeLeft" />
    <button @click="resetTimer">Reset Timer</button>
  </div>
</template>

<script>
import VueChronometer from 'vue-chronometer';

export default {
  components: {
    VueChronometer,
  },
  data() {
    return {
      timeLeft: 3600, // Starts from 1 hour
    };
  },
  methods: {
    resetTimer() {
      this.timeLeft = 3600; // Resets back to 1 hour
    },
  },
};
</script>
```

**Explanation:**

- **Importing the Component**: We import `VueChronometer` from the installed package.
- **Registering the Component**: We add it to the `components` object.
- **Using the Component**: We use `<VueChronometer :etaSeconds="timeLeft" />` in the template.
- **Dynamic Prop**: The `timeLeft` data property is bound to the `etaSeconds` prop, allowing us to control the timer dynamically.
- **Reset Functionality**: The `resetTimer` method resets the `timeLeft`, which restarts the countdown.

## Customization

### Styling

The component renders a `<span>` element containing the formatted time. You can style it using CSS classes or inline styles.

```vue
<template>
  <div>
    <VueChronometer :etaSeconds="600" class="countdown" />
  </div>
</template>

<style>
.countdown {
  font-size: 2em;
  color: #ff0000;
}
</style>
```

### Event Handling (Future Feature)

Currently, the component does not emit any events. In future updates, I plan to add events like `onFinish` to notify when the countdown reaches zero.

### Custom Formatting (Future Feature)

I also plan on being able to pass in a prop to change the formatting of the displayed time.

## Contributing

Contributions are welcome! Please follow these steps:

1. **Fork the Repository**: Click the "Fork" button at the top right of the repository page.
2. **Clone Your Fork**: Clone your forked repository to your local machine.

   ```bash
   git clone https://github.com/yourusername/vue-chronometer.git
   ```

3. **Create a Feature Branch**:

   ```bash
   git checkout -b feature/my-new-feature
   ```

4. **Make Your Changes**: Implement your feature or bug fix.
5. **Commit Your Changes**:

   ```bash
   git commit -am 'Add new feature'
   ```

6. **Push to the Branch**:

   ```bash
   git push origin feature/my-new-feature
   ```

7. **Submit a Pull Request**: Go to the original repository and open a pull request.

## License

This project is licensed under the MIT License. See the [LICENSE](LICENSE) file for details.

---

## Additional Information

- **Dynamic Updates**: If the `etaSeconds` prop is updated, the timer will reset and start counting down from the new value.
- **Zero Handling**: When the countdown reaches zero, it stops and displays `00:00:00`.

## Support

If you encounter any issues or have questions, please open an issue on the [GitHub repository](https://github.com/colhugs230/vue-chronometer.git).
