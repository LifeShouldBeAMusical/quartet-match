import SingersView from "@/views/SingersView.vue";
import { createRouter, createWebHistory } from "vue-router";

const routes = [
	{
		path: "/",
		name: "home",
		component: SingersView,
	},
	{
		path: "/singers",
		name: "singers",
		component: () => import("../views/SingersView.vue"),
	},
	{
		path: "/input",
		name: "input",
		component: () => import("../views/AddSingerView.vue"),
	},
];

const router = createRouter({
	history: createWebHistory(import.meta.env.BASE_URL),
	routes,
});

export default router;
