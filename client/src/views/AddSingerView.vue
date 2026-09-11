<script setup lang="ts">
import { useAddSingerStore } from "@/stores/add-singer-store";
import { computed } from "vue";

const store = useAddSingerStore();
const loading = computed(() => store.status.loading)
const error = computed(() =>  store.status.error)
</script>

<template>
	<v-container fluid class="ma-0 pa-0">
		<h2>Add Singer</h2>
		<h3 v-if="loading">Loading</h3>
		<h3 v-if="error">Error</h3>
	</v-container>
</template>

<style lang="scss">
</style>
