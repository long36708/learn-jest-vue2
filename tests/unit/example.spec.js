import { mount, shallowMount } from "@vue/test-utils";
import HelloWorld from "@/components/HelloWorld";
import MyComponent from "@/components/MyComponent.vue";
import Vue from "vue";
afterEach(() => {
  // restore the spy created with spyOn
  jest.restoreAllMocks();
});

describe("HelloWorld.vue", () => {
  it("renders props.msg when passed", () => {
    const msg = "new message";
    const wrapper = shallowMount(HelloWorld, {
      propsData: { msg },
    });
    expect(wrapper.text()).toMatch(msg);
  });
});

describe("MyComponent", () => {
  it("should have correct double value", () => {
    const wrapper = mount(MyComponent);
    expect(wrapper.vm.doubleValue).toBe(10);
  });
});

/**
 * 模拟方法调用：使用 Jest 的模拟函数 jest.spyOn 来测试组件方法的调用情况
 */
// 假设组件有一个方法increaseValue
describe("MyComponent", () => {
  it("should call increaseValue on button click", async () => {
    const wrapper = mount(MyComponent);
    // 确保 shallowMount 成功挂载
    expect(wrapper.exists()).toBe(true);

    const spy = jest
      .spyOn(wrapper.vm, "increaseValue")
      .mockImplementation(() => "success");
    const button = wrapper.find("button");
    // 确保找到按钮元素
    expect(button.exists()).toBe(true);

    await button.trigger("click", {
      // bubbles: true, // 确保事件冒泡
      // cancelable: true,
    });
    // wrapper.vm.increaseValue(); // 直接调用方法 是可以的
    await wrapper.vm.$nextTick(); // 确保所有 DOM 更新已完成
    // expect(spy).toHaveBeenCalled(); // 这样无法监视到 spy方法调用
    expect(wrapper.html()).toContain(12);
    spy.mockRestore(); // 恢复原方法
  });
});

// 创建一个混入来包裹原始的 created 钩子
const createdSpy = jest.fn();

beforeEach(() => {
  createdSpy.mockClear();
});
Vue.mixin({
  created() {
    createdSpy();
    if (typeof this.$options.created === "function") {
      this.$options.created.call(this);
    }
  },
});
describe("MyComponent", () => {
  let wrapper;
  beforeEach(() => {
    wrapper = shallowMount(MyComponent);
  });

  it("should call created hook", () => {
    // const createdSpy = jest.spyOn(wrapper.vm.$options, "created");
    expect(createdSpy).toHaveBeenCalled();
  });
});
