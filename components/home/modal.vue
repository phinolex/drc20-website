<template>
  <div class="stepper-container">
    <n-steps :current="currentStep">
        <n-step title="Pay"></n-step>
        <n-step title="BOT access"></n-step>
    </n-steps>

    <n-tabs v-model:value="currentTab" animated>
      <n-tab-pane name="1">
        test
        <n-button @click="nextStep">suivant</n-button>
      </n-tab-pane>

      <n-tab-pane name="2">
        test
      </n-tab-pane>
    </n-tabs>
</div>
</template>

<script setup>
const currentStep = ref(1);
const currentTab = ref('1');

const nextStep = () => {
    if (currentStep.value < 5) {
        currentStep.value++;
        currentTab.value = String(currentStep.value);
    }
};
const prevStep = () => {
    if (currentStep.value > 1) {
        currentStep.value--;
        currentTab.value = String(currentStep.value);
    }
};
</script>

<style>
/* Cache les onglets tout en gardant leur contenu */
.tabs-container .n-tabs-tab {
    display: none;
}
</style>
