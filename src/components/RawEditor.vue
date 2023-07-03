<template>
  <v-sheet class="pa-4" color="black">
    <v-row no-gutters>
      <v-col>
        <h2 class="text-body-2">MARKDOWN</h2>
      </v-col>
      <v-col>
        <h3 class="text-body-2 text-right" style="margin-top: auto">
          Characters: {{ store.characters }}
        </h3>
      </v-col>
    </v-row>
  </v-sheet>
  <textarea
    v-model="store.markdown"
    rows="24"
    style="width: 100%; resize: none; border: none; outline: none"
    class="border pa-2"
  ></textarea>
</template>

<script setup>
import { useMarkdownStore } from '../stores/markdown.js'

const store = useMarkdownStore()
</script>
