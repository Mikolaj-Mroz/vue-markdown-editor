<template>
  <v-sheet class="pa-4" color="black">
    <h3 class="text-body-2">Preview</h3>
  </v-sheet>
  <v-sheet class="html-panel border">
    <div class="pa-2" v-html="store.html"></div>
  </v-sheet>
</template>

<script setup>
import { useMarkdownStore } from '../stores/markdown.js'

const store = useMarkdownStore()
</script>

<style>
.html-panel div h1,
.html-panel div h2,
.html-panel div h3,
.html-panel div h4,
.html-panel div h5,
.html-panel div h6 {
  padding-top: 10px;
  padding-bottom: 10px;
}

.html-panel div:first-child {
  padding-top: 0px !important;
  line-height: 1.5rem;
}
</style>
