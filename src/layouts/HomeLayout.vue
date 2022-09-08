<script lang="ts" setup>
  import { RouterView } from 'vue-router'
  import TheNavbar from '@/components/ui/TheNavbar.vue'

</script>

<template>
  <div>
    <TheNavbar />
    <div className="w-100 px-3 mt-4">
      <RouterView />
    </div>
  </div>
</template>