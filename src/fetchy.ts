import { createFetch } from '@vueuse/core'

/**
 * A custom useFetch instance with the base url, https://dumb-db-api.herokuapp.com/
 */
const fetchy = createFetch({
  baseUrl: 'https://dumb-db-api.herokuapp.com/api/',
  fetchOptions: {
    mode: 'cors',
  },
})

export default fetchy
