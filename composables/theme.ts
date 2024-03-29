export const themes = ['light', 'dark'] as const
export type Theme = typeof themes[number]

export const useThemeStore = defineStore('theme', () => {
  const cm = useColorMode()
  const current = computed(() => cm.value)

  function isValid(s: string): s is Theme {
    return themes.includes(s as Theme)
  }

  function set(theme: Theme) {
    cm.preference = theme
  }

  function toggle(): void {
    cm.preference = cm.value === 'dark' ? 'light' : 'dark'
  }

  return { isValid, set, toggle, current }
})

if (import.meta.hot)
  import.meta.hot.accept(acceptHMRUpdate(useThemeStore, import.meta.hot))
