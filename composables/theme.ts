export const themes = ['light', 'dark'] as const
export type Theme = typeof themes[number]

export const useThemeStore = defineStore('theme', () => {
  const cm = useColorMode()
  const currentTheme = computed(() => cm.preference)

  function isValidTheme(s: string): s is Theme {
    return themes.includes(s as Theme)
  }

  function setTheme(theme: Theme) {
    cm.preference = theme
  }

  function toggleTheme(): void {
    const curr = currentTheme.value
    if (curr === 'system') {
      setTheme('light')
      return
    }

    setTheme(curr === 'dark' ? 'light' : 'dark')
  }

  return {
    isValidTheme,
    setTheme,
    toggleTheme,
    currentTheme,
  }
})

if (import.meta.hot)
  import.meta.hot.accept(acceptHMRUpdate(useThemeStore, import.meta.hot))
