<!--
 * @Author: longmo
 * @Date: 2025-01-19 15:19:44
 * @LastEditTime: 2025-01-19 15:20:02
 * @FilePath: src/components/Actions.vue
 * @Description:
 -->
<template>
  <div class="text-align-center">
    <input type="text" @input="actionInputIfTrue" />
    <button @click="actionClick()">Click</button>
  </div>
</template>

<script>
import { mapActions } from "vuex";

export default {
  methods: {
    ...mapActions(["actionClick"]),
    actionInputIfTrue: function actionInputIfTrue(event) {
      const inputValue = event.target.value;
      if (inputValue === "input") {
        this.$store.dispatch("actionInput", { inputValue });
      }
    },
  },
};
</script>
