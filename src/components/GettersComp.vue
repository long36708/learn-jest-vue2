<!--
 * @Author: longmo
 * @Date: 2025-01-19 15:23:02
 * @LastEditTime: 2025-01-19 15:57:17
 * @FilePath: src/components/GettersComp.vue
 * @Description:
 -->
<template>
  <div>
    <p v-if="inputValue">{{ inputValue }}</p>
    <p v-if="clicks">{{ clicks }}</p>
  </div>
</template>

<script>
import { mapGetters } from "vuex";

export default {
  name: "GettersComp",
  computed: {
    ...mapGetters(["clicks", "inputValue"]),
  },
};
</script>
