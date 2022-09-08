<script lang="ts" setup>
  import { ref } from 'vue'

  const props = withDefaults(defineProps<{
    show: boolean
    timeOut?: number
    error?: boolean
  }>(), { timeOut: 4_000})

  const display = ref(true)
  setTimeout(() =>{
    display.value = false
  }, props.timeOut)
</script>

<template>
  <div
    class="alert text-white position-fixed bottom-0 start-50 translate-middle-x"
    :class="{'hide-notification': !display, 'bg-danger': error, 'bg-dark': !error }"
    role="alert"
  >
    <slot />
  </div>
</template>

<style lang="scss" scoped>
@keyframes myAnimation{
  0%{
    opacity: 1; 
  }
  100%{
    display: none;
    opacity: 0; 
  }
}

.hide-notification{
    animation-name: myAnimation;
    animation-duration: 2000ms;
    animation-fill-mode: forwards;
}

</style>