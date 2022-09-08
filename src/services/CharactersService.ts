import { Api } from '@/api'
import type { CharacterInterface as Character, QuoteInterface as Quote } from '@/interfaces'
import type { AxiosResponse } from 'axios'

export const GetRandomCharacter = async (): Promise<Array<Character>> => {
  try {
    const response: AxiosResponse<Array<Character>> = await Api.get('character/random')
    return response.data
  } catch (error) {
    throw new Error(`${error}`)
  }
} 

export const GetCharactersByCategory = async (category: string): Promise<Array<Character>> => {
  try {
    const response: AxiosResponse<Array<Character>> = await Api.get(`characters?category=${category}`)
    return response.data
  } catch (error) {
    throw new Error(`${error}`)
  }
} 

export const GetCharactersByName = async (name: string): Promise<Array<Character>> => {
  try {
    const response: AxiosResponse<Array<Character>> = await Api.get(`characters?name=${name}`)
    return response.data
  } catch (error) {
    throw new Error(`${error}`)
  }
} 

export const GetCharacterById = async (charId: string): Promise<Array<Character>> => {
  try {
    const response: AxiosResponse<Array<Character>> = await Api.get(`characters/${charId}`)
    return response.data
  } catch (error) {
    throw new Error(`${error}`)
  }
} 

export const GetRandomQuoteByAuthor = async (author: string): Promise<Array<Quote>> => {
  try {
    const response: AxiosResponse<Array<Quote>> = await Api.get(`quote/random?author=${author}`)
    return response.data
  } catch (error) {
    throw new Error(`${error}`)
  }
} 
