<script lang='ts' setup>
import type * as Monaco from 'monaco-editor'

import { shikijiToMonaco } from 'shikiji-monaco'

const $emit = defineEmits(['mounted'])

const value = ref(`type Test = { value: string }
const a: Test = 1;
const b: Test = {value: 'cool'}
`)

const editorRef = ref()
const monaco = useMonaco()
const colorMode = useColorMode()
const editorTheme = computed(() => colorMode.value === 'light'
  ? 'vitesse-light'
  : 'vitesse-black',
)

watch(() => editorRef.value, async (element) => {
  if (!element || !monaco)
    return

  const editor = monaco.editor

  const shikiji = await getShikiji()
  shikijiToMonaco(shikiji, monaco!)

  watch(editorTheme, () => editor.setTheme(editorTheme.value), {
    immediate: true,
  })

  $emit('mounted')
})

const options: Monaco.editor.IStandaloneEditorConstructionOptions = {
  minimap: { enabled: false },
  fontFamily: 'DM Mono, monospace',
  glyphMargin: false,
  fontSize: 14,
  lineDecorationsWidth: 10,
  lineNumbersMinChars: 3,
  fixedOverflowWidgets: true,
  padding: { top: 4 },
  overviewRulerLanes: 0,
}
</script>

<template>
  <MonacoEditor ref="editorRef" v-model="value" :options="options" lang="typescript" />
</template>
