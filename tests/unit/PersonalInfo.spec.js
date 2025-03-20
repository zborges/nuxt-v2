import { mount } from "@vue/test-utils";
import PersonalInfo from "@/components/PersonalInfo.vue";

describe("PersonalInfo.vue", () => {
  it("renders the correct title and paragraph", () => {
    const wrapper = mount(PersonalInfo)

    expect(wrapper.find("h2").text()).toBe("About Me");
  });
});
