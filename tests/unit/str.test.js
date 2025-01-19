/**
 * @Author: longmo
 * @Date: 2025-01-18 15:09:47
 * @LastEditTime: 2025-01-19 11:07:43
 * @FilePath: tests/unit/str.test.js
 * @Description:
 */
import { shallowMount } from "@vue/test-utils";
import HelloWorld from "@/components/HelloWorld";

describe("HelloWorld.vue", () => {
  it("renders props.msg when passed", () => {
    const msg = "new message";
    const wrapper = shallowMount(HelloWorld, {
      propsData: { msg },
    });
    expect(wrapper.text()).toMatch(msg);
  });
});
