<script lang='ts' setup>
const { toggleTheme } = useThemeStore()
</script>

<template>
  <div class="h-header w-full">
    <Button @click="toggleTheme()">
      Toggle theme(test)
    </Button>
  </div>
</template>
