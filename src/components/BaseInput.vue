<script setup lang="ts">
  import {ref} from 'vue'

  const props = withDefaults(defineProps<{
    type: "text" | "email",
    placeholder: string,
    validFeedback?: string | boolean,
    invalidFeedback?: string | boolean
  }>(),{
    type: "text",
    validFeedback: false,
    invalidFeedback: false
  })
  const inputValue= ref('')
  const emit = defineEmits<{
    (e: 'inputValue', value: string): void
  }>()

</script>

<template>
  <div class="input-group has-validation">
    <input
      v-model="inputValue"
      class="form-control"
      :type="props.type"
      :placeholder="props.placeholder"
      required
      @change="emit('inputValue', inputValue)"
    >
    <div
      v-if="props.validFeedback"
      class="valid-feedback"
    >
      {{ props.validFeedback }}
    </div>
    <div
      v-if="props.invalidFeedback"
      class="invalid-feedback"
    >
      {{ props.invalidFeedback }}
    </div>
  </div>  
</template>