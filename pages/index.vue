<script lang='ts' setup>
import { shikijiToMonaco } from 'shikiji-monaco'

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

  const shikiji = await getShikiji()
  shikijiToMonaco(shikiji, monaco!)

  watch(editorTheme, () => {
    monaco!.editor.setTheme(editorTheme.value)
  }, {
    immediate: true,
  })
})
</script>

<template>
  <div class="grid grid-cols-2 h-[calc(100vh-var(--header-height))] overflow-hidden">
    <MonacoEditor ref="editorRef" v-model="value" lang="typescript" />
    <div class="h-full w-full bg-red-400">
      <h1>uwu</h1>
    </div>
  </div>
</template>
