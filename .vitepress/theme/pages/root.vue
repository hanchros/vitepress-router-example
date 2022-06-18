<template>
  <span :class="$style.root"> 😭😭😭 </span>
</template>

<script lang="ts" setup>
import { useRouter } from 'vitepress'
import { onMounted } from 'vue'

let router = useRouter()

onMounted(() => {
  router.go('/hello.html')
})
</script>

<style module>
.root {
  display: block;
  width: 100%;
  font-size: 64px;
  text-align: center;
}
</style>
