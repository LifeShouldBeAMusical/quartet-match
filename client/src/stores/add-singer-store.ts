import { apolloClient } from "@/client";
import type {
	AddSingerMutation,
	AddSingerMutationVariables,
	VoiceOptionInput,
} from "@/gql/graphql";
import { addSingerMutation } from "@/gql/queries/add-singer";
import { provideApolloClient, useMutation } from "@vue/apollo-composable";
import { defineStore } from "pinia";
import { computed } from "vue";

provideApolloClient(apolloClient);

const { mutate, loading, error } = useMutation<
	AddSingerMutation,
	AddSingerMutationVariables
>(addSingerMutation);

export const useAddSingerStore = defineStore("add-singer", () => {
	const addSinger = (
		first: string,
		last: string,
		voiceOptions: VoiceOptionInput[],
	) => mutate({ first, last, voiceOptions });

	const status = computed(() => ({
		loading: loading.value,
		error: error.value ? true : false,
	}));

	return { addSinger, status };
});
