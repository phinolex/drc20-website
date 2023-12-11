<script setup>
import './editor.css'
import { useEditor, EditorContent, BubbleMenu } from '@tiptap/vue-3'
import HbTiptapMenuBar from './components/HbTiptapMenuBar'
import StarterKit from './extension/start-kit'
import { onBeforeUnmount, onMounted, ref, watch } from 'vue'
import { useDebounceFn } from '@vueuse/core'

import HbTiptapBubbleMenu from '@/components/tiptap/components/HbTiptapBubbleMenu'


StarterKit.options.highlight = { multicolor: true }
StarterKit.options.table = { resizable: true }

const props = defineProps({
  modelValue: {
    type   : String,
    default: ''
  },
  to: {
    type    : String,
    required: false,
    default : false
  }
})

const words = ref(0)
const characters = ref(0)
const fullscreen = ref(false)
const editorBox = ref(null)
const editorBoxParent = ref(null)
watch(fullscreen, () => {
  if (fullscreen.value === true) {
    if (props.to) {
      editorBoxParent.value = editorBox.value.parentNode
      document.getElementById(props.to).append(editorBox.value)
    }
  } else {
    if (props.to) {
      editorBoxParent.value.append(editorBox.value)
    }
  }
})

const updateEditorWordCount = useDebounceFn(() => {
  words.value = editor.value.storage.characterCount.words()
  characters.value = editor.value.storage.characterCount.characters()
}, 300)

const isFocused = ref(false)

let editor
editor = useEditor({
  content   : props.modelValue,
  extensions: [
    StarterKit
  ],
  onUpdate: ({ editor }) => {
    // HTML
    emit('update:modelValue', editor.getHTML())

    // JSON
    // this.$emit('update:modelValue', this.editor.getJSON())

    updateEditorWordCount()
  },
  onFocus: () => {
    isFocused.value = true
  },
  onBlur: () => {
    isFocused.value = false
  },
  onSelectionUpdate: ({ editor }) => {
  }

})

onMounted(() => {
  editor.value.storage.fullscreen = fullscreen
})

const emit = defineEmits([ 'update:modelValue' ])

watch(() => props.modelValue, (value) => {
  // HTML
  const isSame = editor.value.getHTML() === value

  // JSON
  // const isSame = JSON.stringify(this.editor.getJSON()) === JSON.stringify(value)

  if (isSame) {
    return
  }

  editor.value.commands.setContent(value, false)
})

onMounted(() => {
  emit('update:modelValue', editor.value.getHTML())
  updateEditorWordCount()
})

onBeforeUnmount(() => {
  editor.value.destroy()
})

function tab (e) {
  if (e.keyCode === 9) {
    e.preventDefault()
  }
}

</script>

<template>
  <div
    ref="editorBox"
    class="editor-background"
    :class="{'fullscreen':fullscreen}"
    @keydown="tab"
  >
    <bubble-menu
      v-if="editor"
      :editor="editor"
      :tippy-options="{ duration: 100, maxWidth:600,placement:'top-start' }"
    >
      <hb-tiptap-bubble-menu :editor="editor" />
      
    </bubble-menu>
    <div
      v-if="editor"
      class="editor"
      :class="{'fullscreen':fullscreen,'focus':isFocused && !fullscreen}"
      spellcheck="false"
    >
      <hb-tiptap-menu-bar
        class="editor-header"
        :editor="editor"
      />
      <n-divider />
      
      <n-scrollbar style="max-height: 250px; height:250px;">
      <editor-content
   
        class="editor-body"
        :editor="editor"
      />
    </n-scrollbar>
    </div>
  </div>
</template>