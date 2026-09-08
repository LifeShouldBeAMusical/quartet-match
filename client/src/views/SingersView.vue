<script setup lang="ts">
import SingerCard from "@/components/SingerCard.vue";
import { useSingerListStore } from "@/stores/singer-list-store";
import { computed, onBeforeMount } from "vue";

const store = useSingerListStore();

const data = computed(() => store.singerList.data);

onBeforeMount(() => store.fetchSingerList());
</script>

<template>
	<v-container fluid class="ma-0 pa-0">
		<h2>Singers</h2>
		<v-contaienr class="ma-0 pa-0 singer-list-container">
			<singer-card v-for="singer in data" :key="singer.id" :singer="singer" />
		</v-contaienr>
	</v-container>
</template>

<style lang="scss">
.singer-list-container {
	display: flex;
	flex-flow: row wrap;
}
</style>
