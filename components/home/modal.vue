<template>
  <div class="stepper-container">
    <n-steps :current="currentStep">
        <n-step title="Pay"></n-step>
        <n-step title="BOT access"></n-step>
    </n-steps>
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

