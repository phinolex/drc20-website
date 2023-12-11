<template>
    <n-grid :x-gap="12" :y-gap="8" :cols="1">
          <n-grid-item>
            <n-button size="large" style="width: 100%" >
             Metamask
            </n-button>
          </n-grid-item>
          <n-grid-item>
            <n-button size="large" style="width: 100%" disabled>
              Wallet Connect
            </n-button>
          </n-grid-item>
          <n-grid-item>
            <n-button size="large" style="width: 100%" disabled>
            Coinbase Wallet
            </n-button>
          </n-grid-item>
          <n-grid-item>
            <n-button size="large" style="width: 100%" disabled>
              Binance Smart Wallet
            </n-button>
          </n-grid-item>
      </n-grid>
  </template>
  
  <script setup>
// Déclare les props attendus
const emit = defineEmits(['closemodallogin']);
// emit("closemodallogin"); // On ferme le popup modal une fois connecté


</script>