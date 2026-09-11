<script setup lang="ts">
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
		<v-contaienr class="ma-0 pa-0 quartet-list-container">
			<v-card v-for="(quartet, idx) in data" :key="idx">
				<v-card-title>Quartet {{ idx + 1 }}</v-card-title>
				<v-card-text>
					<v-table>
						<tr>
							<th>Tenor:</th>
							<td>
								{{ quartet.tenor.name.first }} {{ quartet.tenor.name.last }}
							</td>
						</tr>
						<tr>
							<th>Lead:</th>
							<td>
								{{ quartet.lead.name.first }} {{ quartet.lead.name.last }}
							</td>
						</tr>
						<tr>
							<th>Bari:</th>
							<td>
								{{ quartet.bari.name.first }} {{ quartet.bari.name.last }}
							</td>
						</tr>
						<tr>
							<th>Bass:</th>
							<td>
								{{ quartet.bass.name.first }} {{ quartet.bass.name.last }}
							</td>
						</tr>
					</v-table>
				</v-card-text>
			</v-card>
		</v-contaienr>
	</v-container>
</template>

<style lang="scss">
.quartet-list-container {
	display: flex;
	flex-flow: row wrap;
	th {
		font-weight: 700;
		text-align: left;
		padding-right: 4px;
	}
}
</style>
