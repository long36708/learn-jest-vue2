<!--
 * @Author: longmo
 * @Date: 2025-01-19 15:04:17
 * @LastEditTime: 2025-01-19 15:04:31
 * @FilePath: src/components/TransitionsComp.vue
 * @Description:
 -->
<script>
export default {
  name: "TransitionsComp",
  data() {
    return {
      show: true,
    };
  },
};
</script>

<template>
  <div>
    <transition>
      <p v-if="show">Foo</p>
    </transition>
  </div>
</template>

<style scoped lang="stylus"></style>
