<script setup lang="ts">
import QuartetCard from "@/components/QuartetCard.vue";
import { useQuartetsStore } from "@/stores/quartets-store";
import { computed, onBeforeMount } from "vue";

const store = useQuartetsStore();

const data = computed(() => store.quartetList.data);
const loading = computed(() => store.quartetList.loading);
const error = computed(() => store.quartetList.errorState);

onBeforeMount(() => store.fetchScratchQuartetList());
</script>

<template>
	<v-container fluid class="ma-0 pa-0">
		<h2>Quartets</h2>
		<h3 v-if="loading">Loading</h3>
		<h3 v-if="error">Error</h3>
		<v-container class="ma-0 pa-0 quartet-list-container">
			<quartet-card
				v-for="(quartet, idx) in data"
				:key="idx"
				:idx="idx"
				:quartet="quartet"
			/>
		</v-container>
	</v-container>
</template>

<style lang="scss">
.quartet-list-container {
	display: flex;
	flex-flow: row wrap;
}
</style>
