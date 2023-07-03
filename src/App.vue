<template>
  <v-app>
    <v-main>
      <v-row no-gutters class="pa-2 pa-md-4">
        <v-col cols="12" class="px-3 py-2 border">
          <h1 class="text-h6 text-md-h4 font-weight-black">Markdown Editor</h1>
        </v-col>
        <v-col cols="12" md="6" class="pa-0 mt-2">
          <RawEditor />
        </v-col>
        <v-col cols="12" md="6" class="pa-0 mt-2">
          <HtmlView />
        </v-col>
        <v-col cols="12" class="mt-2">
          <CheatSheet />
        </v-col>
      </v-row>
    </v-main>
  </v-app>
</template>

<script setup>
import RawEditor from './components/RawEditor.vue'
import HtmlView from './components/HtmlView.vue'
import CheatSheet from './components/CheatSheet.vue'
</script>
