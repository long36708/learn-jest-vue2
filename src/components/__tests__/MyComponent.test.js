/**
 * @Author: longmo
 * @Date: 2025-01-19 14:43:59
 * @LastEditTime: 2025-01-19 14:45:07
 * @FilePath: src/components/__tests__/MyComponent.test.js
 * @Description:
 */
import { mount } from "@vue/test-utils";
import Component from "../MyComponent.vue";
test("renders correctly", () => {
  const wrapper = mount(Component);
  expect(wrapper.element).toMatchSnapshot();
});
