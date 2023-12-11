<script setup>
import { NModal, NInputGroup, NSelect, NInput, NRadioGroup, NRadio, NForm, NFormItem, NButton, NSpace } from 'naive-ui'
import { ref } from 'vue'

const showModal = ref(false)

const href = ref('')
const target = ref('_blank')

const emit = defineEmits(['ok'])

function open() {
  showModal.value = true
  target.value = '_blank'
  href.value = ''
}

function onOk() {
  showModal.value = false
  emit('ok', href.value, target.value)
}

function onCancel() {
  showModal.value = false
}

defineExpose({ open })

</script>

<template>
  <n-modal
    v-model:show="showModal"
    preset="card"
    style="width: 450px"
  >
    <template #header>
      <div>Hyperlink Settings</div>
    </template>
    <div>
      <n-form
        label-placement="left"
        label-width="auto"
      >
        <n-form-item label="Link Address">
          <n-input-group>
            <n-input v-model:value="href" />
          </n-input-group>
        </n-form-item>
        <n-form-item label="Open Mode">
          <n-radio-group v-model:value="target">
            <n-space>
              <n-radio value="_self">
                Current Window
              </n-radio>
              <n-radio value="_blank">
                New Window
              </n-radio>
            </n-space>
          </n-radio-group>
        </n-form-item>
      </n-form>
    </div>
    <template #footer>
      <n-space justify="end">
        <n-button @click="onCancel">
          Cancel
        </n-button>
        <n-button
          type="info"
          @click="onOk"
        >
          Confirm
        </n-button>
      </n-space>
    </template>
  </n-modal>
</template>

<style scoped>

</style>
