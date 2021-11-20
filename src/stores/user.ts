import { acceptHMRUpdate, defineStore } from 'pinia'
import fetchy from '~/fetchy'
import { User } from '~/types'

export const useUserStore = defineStore('user', () => {
  const loggedInUser = ref<User | null>(null)

  /**
   * Login the user if username exists in the database
   * @param username username of the user
   * @param onFail gets called if login fails
   * @param onSuccess gets called if login succeeds
   */
  const login = (
    username: number,
    onFail: () => void = () => { },
    onSuccess: () => void = () => { },
  ) => {
    fetchy('login', {
      afterFetch(ctx) {
        onSuccess()
        loggedInUser.value = ctx.data
        return ctx
      },
      onFetchError(ctx) {
        // 401 means login failed
        onFail()
        loggedInUser.value = null
        return ctx
      },
    }).post({ userId: username }).json<User>()
  }

  return {
    loggedInUser,
    login,
  }
})

if (import.meta.hot)
  import.meta.hot.accept(acceptHMRUpdate(useUserStore, import.meta.hot))
