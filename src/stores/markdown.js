import { ref, computed } from 'vue'
import { defineStore } from 'pinia'
import { marked } from 'marked'
import DOMPurify from 'dompurify'

// it caused errors in console so I've turned it off
marked.setOptions({
  mangle: false,
  headerIds: false
})

export const useMarkdownStore = defineStore('markdown', () => {
  const markdown = ref(text)
  const html = computed(() => DOMPurify.sanitize(marked.parse(markdown.value)))
  const characters = computed(() => markdown.value.replace(/\s/g, '').length)

  return { markdown, html, characters }
})

const text = `# Markdown Editor

Simple Markdown Editor created by [Mikołaj Mróz](https://github.com/Mikolaj-Mroz)

## How it works
* Type some markdown on the left
* See HTML on the right

## Why I've made it?

I wanted to see how Pinia works.

## Tech
* Vue
* Vite
* Vuetify
* Pinia
* Marked.js
* DOMPurify.js`
