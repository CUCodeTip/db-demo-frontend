const useIdleEmoji = (timeout = 3000) => {
  const { lastActive } = useIdle(timeout, { initialState: true })
  const emoji = ref('😴')
  const now = useTimestamp()
  const idledFor = computed(() =>
    Math.floor((now.value - lastActive.value) / 1000),
  )
  watch(idledFor, () => {
    if (idledFor.value < 7) emoji.value = '😀'
    else if (idledFor.value < 13) emoji.value = '😐'
    else if (idledFor.value < 18) emoji.value = '🥱'
    else if (idledFor.value < 50) emoji.value = '😴'
    else if (idledFor.value < 55) emoji.value = '😓'
    else if (idledFor.value < 57) emoji.value = '😖'
    else if (idledFor.value < 70) emoji.value = '💀'
    else emoji.value = '👻'
  })

  return {
    emoji,
    idledFor,
  }
}

export default useIdleEmoji
