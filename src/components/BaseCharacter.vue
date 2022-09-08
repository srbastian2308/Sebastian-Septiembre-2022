<script setup lang="ts">
  const props = defineProps<{
    name: string,
    nickname: string,
    status: string,
    class: string,
    image: string
  }>()
</script>

<template>
  <div
    :class="`card mx-auto ${props.class}`"
  >
    <img
      :src="props.image"
      class="card-img-top"
      :alt="props.name"
      width="280"
      height="375"
    >
    <div class="card-body">
      <div class="mx-auto d-flex align-items-center">
        <div
          class="text-center m-auto ms-0"
          :class="{ 'text-gray-600': !status }"
        >
          <h5 class="card-title">
            {{ props.name }}
          </h5>
        </div>
        <div
          v-if="status"
          v-tooltip
          class="d-inline-block rounded-circle bg-success p-1 ms-3"
          :class="{'bg-danger': status !== 'Alive'}"
          data-bs-placement="top"
          data-bs-html="true"
          :title="`<div class='d-inline-block border border-white rounded-circle ${status === 'Alive' ? 'bg-success' : 'bg-danger'} p-1'></div> <b> <small>${status}</small> </b>`"
        />
      </div>
      <p class="card-text">
        {{ props.nickname }}
      </p>
    </div>
  </div>
</template>