import { acceptHMRUpdate, defineStore } from 'pinia'
// import fetchy from '~/fetchy'
// import { User } from '~/types'

export const useUserStore = defineStore('user', () => {
  const registeredUsers = new Set([
    'arskiir', 'user1', 'user2', 'user3',
  ])

  const loggedInUser = ref('')
  // const user = ref<User | null>(null)

  /**
   * Login the user to user store
   * @returns true if success else false
   */
  const login = (username: string) => {
    if (registeredUsers.has(username)) {
      loggedInUser.value = username
      return true
    }
    return false
  }

  /**
   * Login the user if username exists in the database
   * @param username username of the user
   * @param onFail gets called if login fails
   * @param onSuccess gets called if login succeeds
   */
  // const login = (
  //   username: string,
  //   onFail: () => void = () => { },
  //   onSuccess: () => void = () => { },
  // ) => {
  //   fetchy('/api/login', {
  //     afterFetch(ctx) {
  //       // 401 means login failed
  //       if (ctx.response.status === 401) {
  //         onFail()
  //         ctx.data = null
  //       }
  //       else { onSuccess() }
  //       user.value = ctx.data
  //       return ctx
  //     },
  //   }).post({ userId: username }).json<User>()
  // }

  return {
    loggedInUser,
    login,
  }
})

if (import.meta.hot)
  import.meta.hot.accept(acceptHMRUpdate(useUserStore, import.meta.hot))
