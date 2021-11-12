import { acceptHMRUpdate, defineStore } from 'pinia'

export const useUserStore = defineStore('user', () => {
  const registeredUsers = new Set([
    'arskiir', 'user1', 'user2', 'user3',
  ])

  const loggedInUser = ref('')

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

  return {
    loggedInUser,
    login,
  }
})

if (import.meta.hot)
  import.meta.hot.accept(acceptHMRUpdate(useUserStore, import.meta.hot))
