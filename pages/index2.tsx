import { defineComponent, ref } from 'vue';
import { NButton } from 'naive-ui'

export default defineComponent({
  setup() {
    const name = ref('ググりモグラ');
    const event = () => alert('寿司が食べたい')
    return () => (
      <>
        <h1>Hello, {name.value}!</h1>
        <NButton onClick={event}>alert ボタン</NButton>
      </>
    );
  },
});
