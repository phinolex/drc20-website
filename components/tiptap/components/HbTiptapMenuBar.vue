<script setup>
import HbTiptapMenuItem from './HbTiptapMenuItem.vue'
import { NPopover, useThemeVars } from 'naive-ui'
import HbTiptapTableCreator from '@/components/tiptap/components/HbTiptapTableCreator'
import HbTiptapColorPicker from '@/components/tiptap/components/HbTiptapColorPicker'
import HbTiptapLink from '@/components/tiptap/components/HbTiptapLink'
import { ref } from 'vue'
const vars = useThemeVars()
const props = defineProps({
  editor: {
    type    : Object,
    required: true
  }
})

function insertTable (r, c) {
  props.editor.chain().focus().insertTable({ rows: r, cols: c, withHeaderRow: true }).run()
}

const color = ref('#000000')
function setColor () {
  props.editor.chain().focus().setColor(color.value).run()
}

function updateColor (e) {
  color.value = e
  setColor()
}

const HTL = ref(null)

function handleOpenLink () {
  if (props.editor.isActive('link')) {
    props.editor.chain().focus().unsetLink().run()
  } else {
    HTL.value.open()
  }
}

function toggleLink (href, target) {
  props.editor.chain().focus().toggleLink({ href, target }).run()
}

const HTI = ref(null)

function handleOpenImage () {
  HTI.value.open()
}

function insertImage (url) {
  if (url) {
    props.editor.chain().focus().setHbImage({ src: url }).run()
  }
}

const HTV = ref(null)

function handleOpenVideo () {
  HTV.value.open()
}

function insertVideo (url) {
  if (url) {
    props.editor.chain().focus().setHbVideo({ src: url }).run()
  }
}

const HTM = ref(null)

function handleOpenMath () {
  const val = ''
  HTM.value.open(val)
}

function setMath (val) {
  props.editor.chain().focus().setHbMath({ tex: val }).run()
}

function toggleFullscreen () {
  props.editor.storage.fullscreen.value = !props.editor.storage.fullscreen.value
}

</script>
<template>
  <div class="menu-bar">
    <hb-tiptap-menu-item
      icon="ph-arrow-bend-up-left"
      title="Undo"
      :action="() => props.editor.chain().focus().undo().run()"
    />
    <hb-tiptap-menu-item
      icon="ph-arrow-bend-up-right"
      title="Redo"
      :action="() => props.editor.chain().focus().redo().run()"
    />
    <div class="divider" />
    <hb-tiptap-menu-item
      icon="ph-text-b-bold"
      title="Bold"
      :action="() => props.editor.chain().focus().toggleBold().run()"
      :is-active="() => props.editor.isActive('bold')"
    />
    <hb-tiptap-menu-item
      icon="ph-text-italic"
      title="Italic"
      :action="() => props.editor.chain().focus().toggleItalic().run()"
      :is-active="() => props.editor.isActive('italic')"
    />
    <hb-tiptap-menu-item
      icon="ph-text-underline"
      title="Underline"
      :action="() => props.editor.chain().focus().toggleUnderline().run()"
      :is-active="() => props.editor.isActive('underline')"
    />
    <hb-tiptap-menu-item
      icon="ph-text-strikethrough"
      title="Strikethrough"
      :action="() => props.editor.chain().focus().toggleStrike().run()"
      :is-active="() => props.editor.isActive('strike')"
    />
    <hb-tiptap-menu-item
      icon="ph-highlighter-circle-fill"
      title="Highlight"
      :action="() => props.editor.chain().focus().toggleHighlight().run()"
      :is-active="() => props.editor.isActive('highlight')"
    />
    <div class="divider" />
    <hb-tiptap-menu-item
      icon="ph-eyedropper-sample-fill"
      title="Font Color"
      :action="setColor"
      :is-active="() => props.editor.isActive('font-color')"
    />
    <hb-tiptap-color-picker @change="updateColor" /> 
    <div class="divider" />
    <hb-tiptap-menu-item
      icon="ph-text-align-left"
      title="Left Align"
      :action="() => props.editor.chain().focus().setTextAlign('left').run()"
      :is-active="() => props.editor.isActive('align-left')"
    />
    <hb-tiptap-menu-item
      icon="ph-text-align-center"
      title="Center"
      :action="() => props.editor.chain().focus().setTextAlign('center').run()"
      :is-active="() => props.editor.isActive('align-center')"
    />
    <hb-tiptap-menu-item
      icon="ph-text-align-right"
      title="Right Align"
      :action="() => props.editor.chain().focus().setTextAlign('right').run()"
      :is-active="() => props.editor.isActive('align-right')"
    />


    <div class="divider" />
    <hb-tiptap-menu-item
      icon="ph-text-h-one"
      title="Heading 1"
      :action="() => props.editor.chain().focus().toggleHeading({level: 2}).run()"
      :is-active="() => props.editor.isActive('heading', {level: 2})"
    />
    <hb-tiptap-menu-item
      icon="ph-text-h-two"
      title="Heading 2"
      :action="() => props.editor.chain().focus().toggleHeading({level: 3}).run()"
      :is-active="() => props.editor.isActive('heading', {level: 3})"
    />
    <div class="divider" />
    <hb-tiptap-menu-item
    icon="ph-list-bullets"
    title="List bullets"
    :action="() => props.editor.chain().focus().toggleBulletList().run()"
    :is-active="() => props.editor.isActive('bulletList')"
  />
  <hb-tiptap-menu-item
    icon="ph-list-numbers"
    title="List numbers"
    :action="() => props.editor.chain().focus().toggleOrderedList().run()"
    :is-active="() => props.editor.isActive('orderedList')"
  />
  <div class="divider" />
      <hb-tiptap-menu-item
      icon="ph-quotes-fill"
      title="quotes"
      :action="() => props.editor.chain().focus().toggleBlockquote().run()"
      :is-active="() => props.editor.isActive('blockquote')"
    />
    <hb-tiptap-menu-item
      icon="ph-link"
      title="Link"
      :action="handleOpenLink"
      :is-active="() => props.editor.isActive('link')"
    />
    <hb-tiptap-link
    ref="HTL"
    @ok="toggleLink"
  />
  </div>
</template>

<style scoped>
.menu-bar {
  display: flex;
  align-items: center;
  width: 100%;
  flex-wrap: wrap;
  padding: 5px 5px;
}

.divider {
  width: 2px;
  height: 20px;
  background-color: v-bind(vars.borderColor);
  margin-left: 2px;
  margin-right: 2px;
}
</style>
