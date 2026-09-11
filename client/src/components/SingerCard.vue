<script setup lang="ts">
import type { Singer } from "@/gql/graphql";

defineProps<{ singer: Singer }>();
</script>

<template>
	<v-card>
		<v-card-title>{{ singer.name.first }} {{ singer.name.last }}</v-card-title>
		<v-card-text>
			<v-table class="singer-voice-options">
				<tr>
					<td></td>
					<th>SSAA</th>
					<th>SATB</th>
					<th>TTBB</th>
				</tr>
				<template
					v-for="voiceOption in ['TENOR', 'LEAD', 'BARI', 'BASS']"
					:key="voiceOption"
				>
					<tr>
						<th>{{ voiceOption }}</th>
						<template
							v-for="quartetRange in ['SSAA', 'SATB', 'TTBB']"
							:key="quartetRange"
						>
							<td>
								<template v-for="(vo, idx) in singer.voiceOptions" :key="idx">
									<template
										v-if="
											vo.quartetRange == quartetRange && vo.voice == voiceOption
										"
									>
										YES
									</template>
								</template>
							</td>
						</template>
					</tr>
				</template>
			</v-table>
		</v-card-text>
	</v-card>
</template>

<style lang="scss">
.singer-voice-options {
	td,
	th {
		padding: 2px;
	}
}
</style>
