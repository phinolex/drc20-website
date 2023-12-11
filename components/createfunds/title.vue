<template>
    <h1 ref="originalText">{{ translatedText }}</h1>
</template>

<script setup>
import { ref, watch, onMounted, computed, nextTick } from 'vue';
import { useI18n } from "vue-i18n";

const i18n = useI18n();
const originalText = ref(null);

// Créez une propriété calculée pour la traduction
const translatedText = computed(() => {
  return i18n.t('create_header_title')
});

const applyTransformations = () => {
  nextTick(() => {
    if (originalText.value) {
      const textContent = originalText.value.textContent;
      const words = textContent.split(' ');
      let modifiedText = '';

      // Traitement des trois premiers mots
      if (words.length >= 3) {
        const firstThreeWords = words.slice(0, 3).join(' ');
        modifiedText += `<em class="effect-h1">${firstThreeWords}</em><br>`;
        words.splice(0, 3);
      }

      // Traitement du reste des mots
      modifiedText += words.map(word => `<span class="effect-h1">${word}</span>`).join(' ');

      originalText.value.innerHTML = modifiedText;
    }
  });
};

onMounted(applyTransformations);

// Surveillez la propriété calculée 'translatedText'
watch(translatedText, (newVal, oldVal) => {
  if (newVal !== oldVal) {
    applyTransformations();
  }
}, { immediate: true });

</script>
