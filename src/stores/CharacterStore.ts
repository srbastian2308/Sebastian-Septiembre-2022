import { defineStore, acceptHMRUpdate } from 'pinia'
import { 
  GetRandomCharacter,
  GetCharactersByCategory,
  GetCharactersByName,
  GetRandomQuoteByAuthor,
  GetCharacterById
} from '@/services/CharactersService'
import type { 
  NotificationInterface as Notification, 
  CharacterInterface as Character,
  QuoteInterface
} from '@/interfaces'

interface State {
	characters?: Array<Character>
	character?: Character
  isFetching: boolean
  error?: boolean
  quote?: QuoteInterface
  notification: Notification
}

export const useCharacterStore = defineStore('credential', {
  state: (): State => ({
    characters: undefined,
    character: undefined,
    isFetching: false,
    error: false,
    quote: undefined,
    notification: {
      message: '',
      show: false,
      timeOut: undefined
    },
  }),
  getters: {
  },
  actions: {
    async getRandomCharacter() {
      this.isFetching = true
      try {
        const data = await GetRandomCharacter()
        this.character = data[0]
        this.error = false
      } catch (e) {
        console.error(e)
        this.error = true
        this.notification.message = 'Ocurrió un error al obtener la lista de personajes'
        this.notification.show = true
      } finally {
        this.isFetching = false
      }
    },
    async getCharactersByCategory(category: string) {
      this.isFetching = true
      try {
        const data = await GetCharactersByCategory(category)

        this.characters = data
        this.error = false
      } catch (e) {
        console.error(e)
        this.error = true
        this.notification.message = 'Ocurrió un error al obtener la lista de personajes'
        this.notification.show = true
      } finally {
        this.isFetching = false
      }
    },
    async getCharactersByName(name: string) {
      this.isFetching = true
      try {
        const data = await GetCharactersByName(name)

        this.characters = data
        this.error = false
      } catch (e) {
        console.error(e)
        this.error = true
        this.notification.message = 'Ocurrió un error al obtener la lista de personajes'
        this.notification.show = true
      } finally {
        this.isFetching = false
      }
    },
    async getCharacterById(id: string) {
      this.isFetching = true
      try {
        const data = await GetCharacterById(id)
        this.character = data[0]
        this.error = false
      } catch (e) {
        console.error(e)
        this.error = true
        this.notification.show = true
      } finally {
        this.isFetching = false
      }
    },

    async getRandomQuoteByAuthor(author: string) {
      this.isFetching = true
      try {
        const data = await GetRandomQuoteByAuthor(author)
        this.quote = data[0]
        this.notification.message =  (data.length > 0)  ? 'Se obtuvieron la lista de personajes correctamente' : ''
        this.error = false
      } catch (e) {
        console.error(e)
        this.error = true
        this.notification.message = 'Ocurrió un error al obtener la lista de personajes'
        this.notification.show = true
      } finally {
        this.isFetching = false
      }
    },
    cleanCharacters() {
      this.character = undefined
      this.characters = undefined
      this.quote = undefined
    }
  },
})

if (import.meta.hot) {
  import.meta.hot.accept(acceptHMRUpdate(useCharacterStore, import.meta.hot))
}
