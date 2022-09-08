<script setup lang="ts">
  import { useCharacterStore } from '@/stores/CharacterStore'
  import {ref, reactive, watchEffect} from 'vue'
  import { storeToRefs } from 'pinia'
  import BaseInput from '@/components/BaseInput.vue'
  import BaseCharacter from '../components/BaseCharacter.vue'
  import { RouterLink } from 'vue-router'
  import type { CharacterInterface } from '@/interfaces'

  const characterStore = useCharacterStore()
  const { character, characters } = storeToRefs(characterStore)

  watchEffect(() => {
    const formatName = character?.value?.name.replace(' ','+')
    if (formatName) {
      characterStore.getRandomQuoteByAuthor(formatName)
    }
  })

  if (!character?.value) characterStore.getRandomCharacter()

  const formData = reactive({
    text: ''
  })
  const validateForm = ref(false)
  const onSubmit = () => {
    validateForm.value = true
    if (formData.text)
      characterStore.getCharactersByName(formData.text.replace(' ', '+'))
  }
  const getCategory = (character: CharacterInterface) => {
    if (character.category.search('Breaking Bad') !== -1) 
      return 'bb-character'
    else return 'bcs-character'
  }
  
</script>

<template>
  <form
    class="vstack gap-3 needs-validation mb-3"
    :class="{'was-validated': validateForm }"
    @submit.prevent="onSubmit"
  >
    <BaseInput 
      placeholder="Buscar personaje"
      type="text"
      valid-feedback="Texto correcto"
      invalid-feedback="Debes ingresar un texto"
      @input-value="(value: string) => formData.text = value"
    />
    <button class="btn btn-primary">
      Enviar
    </button>
  </form>
  <div
    v-if="characters && characters.length" 
    class="mb-3"
  >
    <div class="mb-1">
      {{ characters.length }} resultado(s) encontrado(s)
    </div>
    <ul 
      v-for="char in characters"
      :key="char.char_id"
      class="list-group"
    >
      <li class="list-group-item list-group-item-action">
        <RouterLink
          :to="{name: getCategory(char), params: {id: char.char_id}}"
          class="pointer text-decoration-none text-dark link"
        >
          {{ char.name }}
        </RouterLink>
      </li>
    </ul>
  </div>
  <div v-else-if="characters !== undefined">
    No se encontraron resultados
  </div>
  
  <div
    v-if="character"
    class="custom-card mx-auto"
  >
    <RouterLink
      :to="{name: getCategory(character), params: {id: character.char_id}}"
      class="pointer text-decoration-none text-dark link"
    >
      <BaseCharacter 
        :name="character.name"
        :nickname="character.nickname"
        :image="character.img"
        :status="character.status"
        class="mx-auto"
      />
    </RouterLink>
  </div>
</template>