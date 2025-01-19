<!--
 * @Author: longmo
 * @Date: 2025-01-19 11:09:23
 * @LastEditTime: 2025-01-19 12:43:30
 * @FilePath: src/components/MyComponent.vue
 * @Description:
 -->
<template>
  <div>
    <div>{{ doubleValue }}</div>
    <button @click="increaseValue">增加</button>
  </div>
</template>
<script>
export default {
  data () {
    return { value: 5 }
  },
  computed: {
    doubleValue () {
      return this.value * 2
    }
  },
  methods: {
    increaseValue () {
      console.log('increaseValue')
      this.value++
    }
  },
  created () {
    console.log('created')
  }
}
</script>
