import App from "@/App.vue";
import { testVuetify } from "@/test-util/test-vuetify";
import { mount } from "@vue/test-utils";
import { describe, expect, it } from "vitest";

describe("App", async () => {
	it("renders layout", async () => {
		const wrapper = mount(App, {
			global: { plugins: [testVuetify] },
		});

		expect(wrapper.find("div.v-application").exists()).toEqual(true);
		expect(wrapper.find("div.v-application").classes()).toContain("v-layout");
		expect(wrapper.find("div.v-application").classes()).toContain(
			"v-layout--full-height",
		);
		expect(wrapper.find("div.v-application").classes()).toContain(
			"v-theme--light",
		);
		expect(wrapper.find("div.v-application").classes()).toContain("d-flex");
		expect(wrapper.find("div.v-application").classes()).toContain(
			"flex-column",
		);
	});

	it.todo("renders properly with items");
});
