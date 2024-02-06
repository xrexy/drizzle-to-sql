<script setup lang="ts">
import { getHighlighter } from 'shikiji'
import { shikijiToMonaco } from 'shikiji-monaco'
import * as monaco from 'monaco-editor-core'

const editorRef = ref<HTMLDivElement>()

const colorMode = useColorMode()

const theme = computed(() => colorMode.value === 'dark'
  ? 'vitesse-black'
  : 'vitesse-light',
)

watch(editorRef, async (element) => {
  if (!element)
    return

  // Create the highlighter, it can be reused
  const highlighter = await getHighlighter({
    themes: [
      'vitesse-dark',
      'vitesse-light',
    ],
    langs: [
      'javascript',
      'typescript',
      'vue',
    ],
  })

  // Register the languageIds first. Only registered languages will be highlighted.
  monaco.languages.register({ id: 'typescript' })

  // Register the themes from Shikiji, and provide syntax highlighting for Monaco.
  shikijiToMonaco(highlighter, monaco)

  // Create the editor
  monaco.editor.create(element, {
    value: 'const a = 1',
    language: 'typescript',
    theme: theme.value,
  })
})
</script>

<template>
  <div ref="editorRef" />
</template>
