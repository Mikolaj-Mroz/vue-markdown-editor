<template>
  <v-sheet class="border">
    <v-sheet color="black">
      <h3 class="text-body-2 pa-4 font-weight-bold">Markdown Cheatsheet</h3>
    </v-sheet>
    <v-table>
      <thead>
        <tr>
          <th>Markdown</th>
          <th>HTML</th>
          <th>Rendered output</th>
        </tr>
      </thead>
      <tbody>
        <tr v-for="item in sheet" :key="item.id">
          <td>{{ item.markdown }}</td>
          <td>{{ item.html }}</td>
          <td v-html="item.html"></td>
        </tr>
      </tbody>
    </v-table>
  </v-sheet>
</template>

<script setup>
const sheet = [
  {
    markdown: '# Heading 1',
    html: '<h1>Heading 1</h1>'
  },
  {
    markdown: '## Heading 2',
    html: '<h2>Heading 2</h2>'
  },
  {
    markdown: '### Heading 3',
    html: '<h3>Heading 3</h3>'
  },
  {
    markdown: '#### Heading 4',
    html: '<h4>Heading 4</h4>'
  },
  {
    markdown: '##### Heading 5',
    html: '<h5>Heading 5</h5>'
  },
  {
    markdown: '###### Heading 6',
    html: '<h6>Heading 6</h6>'
  },
  {
    markdown: '**bold text**',
    html: '<strong>bold text</strong>'
  },
  {
    markdown: '__bold text__',
    html: '<strong>bold text</strong>'
  },
  {
    markdown: '*italicized text*',
    html: '<em>italicized text</em>'
  },
  {
    markdown: '_italicized text_',
    html: '<em>italicized text</em>'
  },
  {
    markdown: '***bold and italicized text***',
    html: '<strong><em>bold and italicized text</em></strong>'
  },
  {
    markdown: '___bold and italicized text___',
    html: '<strong><em>bold and italicized text</em></strong>'
  },
  {
    markdown: '~~strikethrough text~~',
    html: '<del>strikethrough text</del>'
  },
  {
    markdown: '> blockquote',
    html: '<blockquote>blockquote</blockquote>'
  },
  {
    markdown: '` denote `',
    html: '<code>denote</code>'
  },
  {
    markdown: '``` <br> code block <br> ```',
    html: '<pre><code>code block</code></pre>'
  },
  {
    markdown: '1. First item 2. Second item',
    html: '<ol><li>First item</li><li>Second item</li></ol>'
  },
  {
    markdown: '- First item - Second item',
    html: '<ul><li>First item</li><li>Second item</li></ul>'
  },
  {
    markdown: '* First item * Second item',
    html: '<ul><li>First item</li><li>Second item</li></ul>'
  },
  {
    markdown: '[link](https://www.example.com)',
    html: '<a href="https://www.example.com">link</a>'
  },
  {
    markdown: '<link.com>',
    html: '<a href="link.com">link.com</a>'
  },
  {
    markdown: '![alt text](image.jpg)',
    html: '<img src="image.jpg" alt="alt text">'
  },
  {
    markdown: 'Horizontal Rule: ---',
    html: '<hr>'
  }
]
</script>
