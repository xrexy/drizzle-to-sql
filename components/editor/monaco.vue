<script setup lang="ts">
defineProps<{ class?: string }>()
const mounted = ref(false)
</script>

<template>
  <EditorStandalone v-show="mounted" :class="$props.class" @mounted="mounted = true" />
  <EditorFallback v-if="!mounted" />
</template>
