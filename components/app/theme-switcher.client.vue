<script setup lang="ts">
defineProps<Partial<{
  width: number | string
  height: number | string
  size: number | string
}>>()

const theme = useThemeStore()
const name = computed(() => theme.current === 'dark' ? 'solar:moon-fog-broken' : 'ph:sun-horizon')
</script>

<template>
  <Button variant="ghost" class="px-0 py-0 aspect-square p-3" @click="theme.toggle()">
    <Icon :width="$props.size ?? $props.width" :height="$props.size ?? $props.height" :name="name" />
  </Button>
</template>
