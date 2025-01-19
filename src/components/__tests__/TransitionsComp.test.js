/**
 * @Author: longmo
 * @Date: 2025-01-19 15:08:05
 * @LastEditTime: 2025-01-19 15:12:23
 * @FilePath: src/components/__tests__/TransitionsComp.test.js
 * @Description:
 */
import { mount } from "@vue/test-utils";
import Foo from "@/components/TransitionsComp";
test("should render Foo, then hide it", async () => {
  const wrapper = mount(Foo);
  expect(wrapper.text()).toMatch(/Foo/);

  wrapper.setData({
    show: false,
  });
  await wrapper.vm.$nextTick(); // wait for the transition to complete

  expect(wrapper.text()).not.toMatch(/Foo/);
});
test("should not render Foo", async () => {
  const wrapper = mount(Foo, {
    data() {
      return {
        show: false,
      };
    },
  });

  expect(wrapper.text()).not.toMatch(/Foo/);
});
