import { acceptHMRUpdate, defineStore } from 'pinia'
import { NavItemOption } from '~/components/nav/types'

export const useControlStore = defineStore('control', () => {
  /**
   * The current active nav item telling what use case is selected.
   */
  const activeItem = ref<NavItemOption>('Find Ride')

  /**
   * Changes the active nav item if 'item' parameter is different from the current active item.
   * @param item The item name passed in to change if possible.
   */
  const changeActiveItem = (item: NavItemOption) => {
    if (activeItem.value !== item)
      activeItem.value = item
  }

  return {
    activeItem,
    changeActiveItem,
  }
})

if (import.meta.hot)
  import.meta.hot.accept(acceptHMRUpdate(useControlStore, import.meta.hot))
