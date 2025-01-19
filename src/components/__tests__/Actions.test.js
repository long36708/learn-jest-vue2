/**
 * @Author: longmo
 * @Date: 2025-01-19 15:20:59
 * @LastEditTime: 2025-01-19 16:02:17
 * @FilePath: src/components/__tests__/Actions.test.js
 * @Description:
 */
import { shallowMount, createLocalVue } from "@vue/test-utils";
import Vuex from "vuex";
import Actions from "@/components/Actions";

const localVue = createLocalVue();

localVue.use(Vuex);

describe("Actions.vue", () => {
  let actions;
  let store;

  beforeEach(() => {
    actions = {
      actionClick: jest.fn(),
      actionInput: jest.fn(),
    };
    store = new Vuex.Store({
      state: {},
      actions,
    });
  });

  it('dispatches "actionInput" when input event value is "input"', () => {
    const wrapper = shallowMount(Actions, { store, localVue });
    const input = wrapper.find("input");
    input.element.value = "input";
    input.trigger("input");
    expect(actions.actionInput).toHaveBeenCalled();
  });

  it('does not dispatch "actionInput" when event value is not "input"', () => {
    const wrapper = shallowMount(Actions, { store, localVue });
    const input = wrapper.find("input");
    input.element.value = "not input";
    input.trigger("input");
    expect(actions.actionInput).not.toHaveBeenCalled();
  });

  it('calls store action "actionClick" when button is clicked', () => {
    const wrapper = shallowMount(Actions, { store, localVue });
    wrapper.find("button").trigger("click");
    expect(actions.actionClick).toHaveBeenCalled();
  });
});
