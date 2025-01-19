<!--
 * @Author: longmo
 * @Date: 2025-01-19 15:00:49
 * @LastEditTime: 2025-01-19 15:01:02
 * @FilePath: src/components/ParentComponent.vue
 * @Description:
 -->
<template>
  <div>
    <child-component @custom="onCustom" />
    <p v-if="emitted">Emitted!</p>
  </div>
</template>

<script>
import ChildComponent from "./ChildComponent";

export default {
  name: "ParentComponent",
  components: { ChildComponent },
  data() {
    return {
      emitted: false,
    };
  },
  methods: {
    onCustom() {
      this.emitted = true;
    },
  },
};
</script>
