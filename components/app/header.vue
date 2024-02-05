<script lang='ts' setup>
const theme = useThemeStore()
</script>

<template>
  <div class="h-header w-full">
    <Button @click="theme.toggle()">
      Toggle theme(test)
    </Button>
  </div>
</template>
