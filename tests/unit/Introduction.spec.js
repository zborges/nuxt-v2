import { mount } from "@vue/test-utils";
import Introduction from "@/components/Introduction.vue";

describe("Introduction.vue", () => {
  it("renders the correct title and paragraph", () => {
    
    const wrapper = mount(Introduction);
    expect(wrapper.find("h1").text()).toBe("Zack Borges");
    expect(wrapper.find("h2").text()).toBe("Hello, my name is");
    expect(wrapper.find("h3").text()).toBe("I build websites and web applications.");

    // Check if the title is rendered
    expect(wrapper.find("h2").text()).toBe("Hello, my name is");

    // Check if the paragraph is rendered
    expect(wrapper.find("h1").text()).toBe("Zack Borges");
  });
});
