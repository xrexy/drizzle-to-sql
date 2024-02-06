<script setup lang="ts">
import * as monaco from 'monaco-editor-core'

import { initMonaco } from '~/monaco/setup'

const content = `type Test = { value: string };
const errorpls: Test = 1;
const plswork: Test = { value: 'test' };
`

initMonaco()

const el = ref<HTMLDivElement>()

const colorMode = useColorMode()

const theme = computed(() => colorMode.value === 'dark'
  ? 'vitesse-black'
  : 'vitesse-light',
)

watch(
  () => el.value,
  async (value) => {
    if (!value)
      return

    // const shiki = await getShikiji()
    // shikijiToMonaco(shiki, monaco)

    const editor = monaco.editor.create(
      value,
      {
        theme: 'vs-dark',
        glyphMargin: false,
        automaticLayout: true,
        folding: false,
        lineDecorationsWidth: 10,
        lineNumbersMinChars: 3,
        fontFamily: 'DM Mono, monospace',
        minimap: { enabled: false },
        padding: { top: 8 },
        overviewRulerLanes: 0,
        fixedOverflowWidgets: true,
        language: 'typescript',
        value: content,
      },
    )

    editor.addCommand(monaco.KeyMod.CtrlCmd | monaco.KeyCode.KeyS, () => { })

    watch(theme, () => monaco.editor.setTheme(theme.value))

    return () => {
      editor.dispose()
    }
  },
)
</script>

<template>
  <div ref="el" />
</template>
