<script setup lang="ts">
import { QuartetRangeEnum, SingerVoiceEnum } from "@/gql/graphql";
import { useAddSingerStore } from "@/stores/add-singer-store";
import { computed, ref } from "vue";

const store = useAddSingerStore();
const loading = computed(() => store.status.loading);
const error = computed(() => store.status.error);

const first = ref("");
const last = ref("");
const voiceSSAATenor = ref(false);
const voiceSSAALead = ref(false);
const voiceSSAABari = ref(false);
const voiceSSAABass = ref(false);
const voiceSATBTenor = ref(false);
const voiceSATBLead = ref(false);
const voiceSATBBari = ref(false);
const voiceSATBBass = ref(false);
const voiceTTBBTenor = ref(false);
const voiceTTBBLead = ref(false);
const voiceTTBBBari = ref(false);
const voiceTTBBBass = ref(false);

const addSinger = () =>
	store.addSinger(first.value, last.value, [
		...(voiceSSAATenor.value
			? [{ quartetRange: QuartetRangeEnum.Ssaa, voice: SingerVoiceEnum.Tenor }]
			: []),
		...(voiceSSAALead.value
			? [{ quartetRange: QuartetRangeEnum.Ssaa, voice: SingerVoiceEnum.Lead }]
			: []),
		...(voiceSSAABari.value
			? [{ quartetRange: QuartetRangeEnum.Ssaa, voice: SingerVoiceEnum.Bari }]
			: []),
		...(voiceSSAABass.value
			? [{ quartetRange: QuartetRangeEnum.Ssaa, voice: SingerVoiceEnum.Bass }]
			: []),
		...(voiceSATBTenor.value
			? [{ quartetRange: QuartetRangeEnum.Satb, voice: SingerVoiceEnum.Tenor }]
			: []),
		...(voiceSATBLead.value
			? [{ quartetRange: QuartetRangeEnum.Satb, voice: SingerVoiceEnum.Lead }]
			: []),
		...(voiceSATBBari.value
			? [{ quartetRange: QuartetRangeEnum.Satb, voice: SingerVoiceEnum.Bari }]
			: []),
		...(voiceSATBBass.value
			? [{ quartetRange: QuartetRangeEnum.Satb, voice: SingerVoiceEnum.Bass }]
			: []),
		...(voiceTTBBTenor.value
			? [{ quartetRange: QuartetRangeEnum.Ttbb, voice: SingerVoiceEnum.Tenor }]
			: []),
		...(voiceTTBBLead.value
			? [{ quartetRange: QuartetRangeEnum.Ttbb, voice: SingerVoiceEnum.Lead }]
			: []),
		...(voiceTTBBBari.value
			? [{ quartetRange: QuartetRangeEnum.Ttbb, voice: SingerVoiceEnum.Bari }]
			: []),
		...(voiceTTBBBass.value
			? [{ quartetRange: QuartetRangeEnum.Ttbb, voice: SingerVoiceEnum.Bass }]
			: []),
	]);
</script>

<template>
	<v-container fluid class="ma-0 pa-0">
		<h2>Add Singer</h2>
		<h3 v-if="loading">Loading</h3>
		<h3 v-if="error">Error</h3>
		<v-text-field label="First Name" v-model="first" />
		<v-text-field label="Last Name" v-model="last" />
		<v-table class="voice-input">
			<tr>
				<td></td>
				<th>SSAA</th>
				<th>SATB</th>
				<th>TTBB</th>
			</tr>
			<tr>
				<th>TENOR</th>
				<td><v-checkbox v-model="voiceSSAATenor" /></td>
				<td><v-checkbox v-model="voiceSATBTenor" /></td>
				<td><v-checkbox v-model="voiceTTBBTenor" /></td>
			</tr>
			<tr>
				<th>LEAD</th>
				<td><v-checkbox v-model="voiceSSAALead" /></td>
				<td><v-checkbox v-model="voiceSATBLead" /></td>
				<td><v-checkbox v-model="voiceTTBBLead" /></td>
			</tr>
			<tr>
				<th>BARI</th>
				<td><v-checkbox v-model="voiceSSAABari" /></td>
				<td><v-checkbox v-model="voiceSATBBari" /></td>
				<td><v-checkbox v-model="voiceTTBBBari" /></td>
			</tr>
			<tr>
				<th>BASS</th>
				<td><v-checkbox v-model="voiceSSAABass" /></td>
				<td><v-checkbox v-model="voiceSATBBass" /></td>
				<td><v-checkbox v-model="voiceTTBBBass" /></td>
			</tr>
		</v-table>
		<v-btn @click="addSinger">Add Singer</v-btn>
	</v-container>
</template>

<style lang="scss">
.voice-input {
	td {
		.v-checkbox {
			justify-items: center;
		}
	}
}
</style>
