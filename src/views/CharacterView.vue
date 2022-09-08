<script setup lang="ts">
  import { useRoute } from 'vue-router'
  import { onUnmounted, ref, watch, watchEffect } from "vue"
  import { storeToRefs } from 'pinia'
  import BaseCharacter from '@/components/BaseCharacter.vue'
  import { useCharacterStore } from '@/stores/CharacterStore'

  const characterStore = useCharacterStore()
  const { isFetching, character, quote } = storeToRefs(characterStore)
  const route = useRoute()
  const years = ref(0)

  watchEffect(() => {
    const charId = route.params.id ? String(route.params.id) : ''
    characterStore.getCharacterById(charId)
  })

  // eslint-disable-next-line @typescript-eslint/ban-ts-comment
  // @ts-ignore
  watch(character, () => {
    if (character) {
      const name = character?.value?.name || ''
      characterStore.getRandomQuoteByAuthor(name)
      if (character.value?.birthday !== 'Unknown') {
        const yearBirthday = character.value?.birthday.substring(6,10)
        years.value = new Date().getFullYear() - Number(yearBirthday) 
      }
    }
  })

  onUnmounted(() => {
    characterStore.cleanCharacters()
  })
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
    v-else-if="character"
  >
    <BaseCharacter
      :name="character.name"
      :nickname="character.nickname"
      :image="character.img"
      :status="character.status"
      class="custom-card"
    />
    <div class="card mt-4 card-more-inf">
      <div class="card-header">
        More Information
      </div>
      <div class="card-body">
        <div>
          <div>Occupation:</div>
          <div 
            v-for="ocup in character.occupation"
            :key="ocup"
          >
            <li class="ms-3">
              {{ ocup }}
            </li>
          </div>
        </div>
        <div><span>Fecha de cumpleaños:</span> {{ years }}</div>
        
        <div 
          v-if="quote"
          class="mt-4"
        >
          <blockquote class="blockquote mb-0">
            <footer class="blockquote-footer">
              {{ quote.quote }} <cite title="Source Title">Source Title</cite>
            </footer>
          </blockquote>
        </div>
      </div>
    </div>
  </div>
</template>
<style>
  .card-more-inf {
    max-width: 400px;
    margin: auto;
  }
</style>