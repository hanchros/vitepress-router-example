<template>
  <div :class="container">
    <Layout />
  </div>
</template>

<script lang="ts" setup>
import { useData } from 'vitepress'

import PageRoot from '~/pages/root.vue'
import PagePost from '~/pages/post.vue'

let { frontmatter } = useData()

let layoutType = frontmatter.value.layout

let Layout

if (layoutType === 'root') {
  Layout = PageRoot
} else {
  Layout = PagePost
}
</script>

<style module>
.container {
  max-width: 960px;
  width: 100%;
  margin: 0 auto;
  padding: 28px 16px;
}
</style>
