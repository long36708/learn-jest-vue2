/**
 * @Author: longmo
 * @Date: 2025-01-19 15:23:25
 * @LastEditTime: 2025-01-19 16:02:27
 * @FilePath: src/components/__tests__/Getter.test.js
 * @Description:
 */
import { shallowMount, createLocalVue } from "@vue/test-utils";
import Vuex from "vuex";
import GettersComp from "@/components/GettersComp.vue";

const localVue = createLocalVue();

localVue.use(Vuex);

describe("Getters.vue", () => {
  let getters;
  let store;

  beforeEach(() => {
    getters = {
      clicks: () => 2,
      inputValue: () => "input",
    };

    store = new Vuex.Store({
      getters,
    });
  });

  test('Renders "store.getters.inputValue" in first p tag', () => {
    const wrapper = shallowMount(GettersComp, { store, localVue });
    const p = wrapper.find("p");
    expect(p.text()).toBe(getters.inputValue());
  });

  test('Renders "store.getters.clicks" in second p tag', () => {
    const wrapper = shallowMount(GettersComp, { store, localVue });
    const p = wrapper.findAll("p").at(1);
    expect(p.text()).toBe(getters.clicks().toString());
  });
});
