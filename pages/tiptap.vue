<script setup>
import { ref, watch } from 'vue'
import HbAdminTipTap from '@/components/tiptap/HbAdminTipTap'

const content = ref('<h2>Ceci est un test</h2><p>Ici la description de votre cagnotte</p>')
const maxCharacters = 3000;

watch(content, (newValue, oldValue) => {
  // Limiter les retours à la ligne consécutifs
  let modifiedValue = newValue.replace(/(\r\n|\r|\n){4,}/g, '$1$1$1');
  
  // Tronquer le texte si plus de 3000 caractères
  if (modifiedValue.length > maxCharacters) {
    content.value = oldValue;
  } else {
    content.value = modifiedValue;
  }
}, { deep: true });

</script>

<template>
  <div class="container editorblock">
    <div class="editor-container">

      <hb-admin-tip-tap
        v-model="content"
        to="pop-body"
      />

      <n-divider />
      <div class="editor-footer">
        <p>Character left : <span>{{ maxCharacters - content.length }}</span></p>
      </div>
    </div>
  </div>
</template>
