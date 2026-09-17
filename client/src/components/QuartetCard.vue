<script setup lang="ts">
import type { QuartetFragment } from "@/gql/graphql";

defineProps<{ quartet: QuartetFragment; idx: number }>();
</script>

<template>
	<v-card class="quartet-card">
		<v-card-title>
			Quartet {{ idx + 1 }} ({{ quartet.quartetRange }})
		</v-card-title>
		<v-card-text>
			<v-table>
				<tr>
					<th>Tenor:</th>
					<td>{{ quartet.tenor.name.first }} {{ quartet.tenor.name.last }}</td>
				</tr>
				<tr>
					<th>Lead:</th>
					<td>{{ quartet.lead.name.first }} {{ quartet.lead.name.last }}</td>
				</tr>
				<tr>
					<th>Bari:</th>
					<td>{{ quartet.bari.name.first }} {{ quartet.bari.name.last }}</td>
				</tr>
				<tr>
					<th>Bass:</th>
					<td>{{ quartet.bass.name.first }} {{ quartet.bass.name.last }}</td>
				</tr>
			</v-table>
		</v-card-text>
	</v-card>
</template>

<style lang="scss">
.quartet-card {
	margin: 16px;
	th {
		font-weight: 700;
		text-align: left;
		padding-right: 4px;
	}
}
</style>
