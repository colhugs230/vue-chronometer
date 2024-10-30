<script setup>
  // Import
  import { ref, computed, onMounted, onUnmounted, watch } from 'vue';

  const props = defineProps({
    etaSeconds: {
      type: Number,
      required: true,
    },
  });

  const timeRemaining = ref(props.etaSeconds);

  let timer = null;

  const formatTime = (seconds) => {
    const hrs = String(Math.floor(seconds / 3600)).padStart(2, '0');
    const mins = String(Math.floor((seconds % 3600) / 60)).padStart(2, '0');
    const secs = String(Math.floor(seconds % 60)).padStart(2, '0');
    return `${hrs}:${mins}:${secs}`;
  };

  const formattedTime = computed(() => formatTime(timeRemaining.value));

  const startTimer = () => {
    if (timer) clearInterval(timer);
    timer = setInterval(() => {
      if (timeRemaining.value > 0) {
        timeRemaining.value--;
      } else {
        clearInterval(timer);
      }
    }, 1000);
  };

  onMounted(() => {
    startTimer();
  });

  onUnmounted(() => {
    if (timer) clearInterval(timer);
  });

  watch(
    () => props.etaSeconds,
    (newVal, oldVal) => {
      if (newVal !== oldVal) {
        timeRemaining.value = newVal || 0;
        startTimer();
      }
    }
  );
</script>

<template>
  <span>{{ timeRemaining > 0 ? formattedTime : '00:00:00' }}</span>
</template>
