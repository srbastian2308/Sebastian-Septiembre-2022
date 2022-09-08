import axios from 'axios'
import useEnvironment from '@/composables/useEnvironment'

const { breakingBadUrl } = useEnvironment()

export const Api = axios.create({ baseURL: breakingBadUrl, })
