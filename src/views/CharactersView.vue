<script setup lang="ts">
  import { onUnmounted, watchEffect } from 'vue'
  import { storeToRefs } from 'pinia'
  import { useCharacterStore } from '@/stores/CharacterStore'
  import BaseCharacter from '@/components/BaseCharacter.vue'
  import router from '@/router'
  import type { CharacterInterface } from '@/interfaces'

  const props = defineProps<{
    category: string
    categoryRoute: string
  }>()
  const characterStore = useCharacterStore()
  const { isFetching, characters } = storeToRefs(characterStore)

  watchEffect(() => {
    characterStore.getCharactersByCategory(String(props.category))
  })


  onUnmounted(() => {
    characterStore.cleanCharacters()
  })
  const goToCharacter = (char: CharacterInterface) => {
    router.push({name: props.categoryRoute, params:  {id: char.char_id} })
  }
</script>

<template>
  <div v-if="isFetching">
    <div
      class="spinner-border"
      role="status"
    >
      <span class="visually-hidden">Loading...</span>
    </div>
  </div>
  <div
    v-else-if="characters"
    class="row gy-3 justify-content-center"
  >
    <div
      v-for="character in characters"
      :key="character.char_id"
      class="col-12 col-sm-6 col-md-4 col-lg-3 custom-card"
    >
      <div
        class="pointer"
        @click="goToCharacter(character)"
      >
        <BaseCharacter
          :name="character.name"
          :nickname="character.nickname"
          :image="character.img"
          :status="character.status"
          class="mx-auto"
        />
      </div>
    </div>
  </div>
</template>