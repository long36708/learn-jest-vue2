/**
 * @Author: longmo
 * @Date: 2025-01-19 15:01:16
 * @LastEditTime: 2025-01-19 15:07:21
 * @FilePath: src/components/__tests__/ParentComponent.test.js
 * @Description:
 */
import { mount } from "@vue/test-utils";
import ParentComponent from "@/components/ParentComponent";
import ChildComponent from "@/components/ChildComponent";

describe("ParentComponent", () => {
  it("displays 'Emitted!' when custom event is emitted", async () => {
    const wrapper = mount(ParentComponent);

    wrapper.findComponent(ChildComponent).vm.$emit("custom");

    await wrapper.vm.$nextTick(); // wait for event to be handled
    expect(wrapper.html()).toContain("Emitted!");
  });
});
