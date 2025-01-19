/**
 * @Author: longmo
 * @Date: 2025-01-19 14:46:43
 * @LastEditTime: 2025-01-19 14:46:53
 * @FilePath: src/components/counter.js
 * @Description:
 */
export default {
  template: `
    <div>
      <span class="count">{{ count }}</span>
      <button @click="increment">Increment</button>
    </div>
  `,

  data() {
    return {
      count: 0,
    };
  },

  methods: {
    increment() {
      this.count++;
    },
  },
};
