<template>

<header>
    <div class="container">
        <n-grid cols="4" item-responsive>
            <n-grid-item  class="n-grid-header" span="4 960:4 970:2">
                <div>
                  <h1 ref="originalText">{{ translatedText }}</h1>

                    <n-space>
                    <div class="effect-h1" style="animation-delay:0.65s">
                    <n-button size="large" round="true" class="pulse" color="#e0cd81" @click="showModal = true" >

                        <div class="menu-icon" >
                          <naive-icon name="ph-rocket-launch"></naive-icon></div> {{ $t('nav_create_button') }}
                          <n-badge style="padding-left: 5px" value="-80% offre de lancement" :max="15" />

                      </n-button>

                      </div>

                        </n-space>
                </div>
              </n-grid-item>
            <n-grid-item class="n-grid-header" span="0 960:0 970:2">
              <div class="carouseltg">
              <n-tag style="opacity: 0.8" round size="small" :bordered="false" >
                Telegram Preview
                <template #icon>
                  <naive-icon name="ph-telegram-logo"></naive-icon>
                </template>
              </n-tag>
            <n-carousel
            direction="vertical"

                :space-between="0"
                effect="slide"
                :loop="true"
                slides-per-view="1"
                :show-dots="false"
                draggable
                autoplay
                style="height: 240px"
              >


              <n-carousel-item style="width: auto;height:100%;display: flex;
              justify-content: right;
              align-items: right;">
                <div class="containertg">
                <div class="containertgleft">
                  <img src="@/assets/img/logo.svg" alt="avatar" />
                </div>
                <div class="containertgright">
                  <div class="containertgrighttop">
                    <p><n-space>DRC20-BOT    </n-space></p>
                    <p>📉🔴 $dogi baisse de 4.26% (1.88$ -> 1.8$) !
                      Nouvelle offre à 1.8$ pour 999 $dogi
                      <br><br>
                      Marketplace: <span style="color: #e0cd81" >doggy.market</span></p>
                  </div>
                  <div class="containertgrightbottom">
                      VOIR CETTE OFFRE
                  </div>
                </div>

              </div>
              </n-carousel-item>

              <n-carousel-item style="width: auto;height:100%;display: flex;
              justify-content: center;
              align-items: center;">
                <div class="containertg">
                <div class="containertgleft">
                  <img src="@/assets/img/logo.svg" alt="avatar" />
                </div>
                <div class="containertgright">
                  <div class="containertgrighttop">
                    <p>DRC20-BOT</p>
                    <p>📉🔴 $dogi baisse de 4.26% (1.88$ -> 1.8$) !
                      Nouvelle offre à 1.8$ pour 999 $dogi
                      <br><br>
                      Marketplace: <span style="color: #e0cd81" >doggy.market</span></p>
                  </div>
                  <div class="containertgrightbottom">
                      VOIR CETTE OFFRE
                  </div>
                </div>

              </div>
              </n-carousel-item>

              <n-carousel-item style="width: auto;height:100%;display: flex;
              justify-content: center;
              align-items: center;">
                <div class="containertg">
                <div class="containertgleft">
                  <img src="@/assets/img/logo.svg" alt="avatar" />
                </div>
                <div class="containertgright">
                  <div class="containertgrighttop">
                    <p>DRC20-BOT</p>
                    <p>📉🔴 $dogi baisse de 4.26% (1.88$ -> 1.8$) !
                      Nouvelle offre à 1.8$ pour 999 $dogi
                      <br><br>
                      Marketplace: <span style="color: #e0cd81" >doggy.market</span></p>
                  </div>
                  <div class="containertgrightbottom">
                      VOIR CETTE OFFRE
                  </div>
                </div>

              </div>
              </n-carousel-item>

            </n-carousel>
          </div>
          <div class="gradient"></div>

            </n-grid-item>

          </n-grid>
    </div>
 </header>
</template>

<script setup>
import { ref, watch, onMounted, computed, nextTick } from 'vue';
import { useI18n } from "vue-i18n";

const i18n = useI18n();
const originalText = ref(null);

// Créez une propriété calculée pour la traduction
const translatedText = computed(() => {
  return i18n.t('home_header_title')
});

const applyTransformations = () => {
  nextTick(() => {
    if (originalText.value) {
      const textContent = originalText.value.textContent;
      const words = textContent.split(' ');
      const modifiedText = words.map(word => {
        if (word === 'liberté' || word === 'Devancez') {
          return `<em class="effect-h1">${word}</em>`;
        }

        if (word === 'liberté' || word === 'DRC20') {
          return `<em class="effect-h1">${word}</em><br>`;
        }

        if (word === 'Prix' || word === 'Bas') {
          return `<em class="effect-h1">${word}</em>`;
        }
        return `<span class="effect-h1">${word}</span>`;
      }).join(' ');

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
