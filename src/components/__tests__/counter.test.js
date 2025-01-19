/**
 * @Author: longmo
 * @Date: 2025-01-19 14:47:42
 * @LastEditTime: 2025-01-19 14:59:31
 * @FilePath: src/components/__tests__/counter.test.js
 * @Description:
 */
// 从测试实用工具集中导入 `mount()` 方法
// 同时导入你要测试的组件
import { mount } from "@vue/test-utils";
import Counter from "@/components/counter"; // 现在挂载组件，你便得到了这个包裹器
// 现在挂载组件，你便得到了这个包裹器
const wrapper = mount(Counter);
test("Counter", () => {});
it("renders the correct markup", () => {
  expect(wrapper.html()).toContain('<span class="count">0</span>');
});

// 也便于检查已存在的元素
it("has a button", () => {
  expect(wrapper.find("button")).toBeTruthy();
});

it("button click should increment the count", () => {
  expect(wrapper.vm.count).toBe(0);
  const button = wrapper.find("button");
  button.trigger("click");
  expect(wrapper.vm.count).toBe(1);
});

beforeEach(() => {
  wrapper.setData({ count: 0 });
});
it("button click should increment the count text", async () => {
  expect(wrapper.text()).toContain("0");
  const button = wrapper.find("button");
  await button.trigger("click");
  expect(wrapper.text()).toContain("1");
});
