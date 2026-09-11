import { apolloClient } from "@/client";
import type {
	QuartetFragment,
	ScratchQuartetsQuery,
	ScratchQuartetsQueryVariables,
} from "@/gql/graphql";
import { scratchQuartetsQuery } from "@/gql/queries/scratch-quartets";
import type { QueryResult } from "@/stores/types/query-result";
import { provideApolloClient, useLazyQuery } from "@vue/apollo-composable";
import { defineStore } from "pinia";
import { computed, ref, type Ref } from "vue";

export type SingerListStoreType = SingerListStoreStateType & {
	fetchScratchQuartetList: () => void;
};

type SingerListStoreStateType = {
	quartetList:
		| QueryResult<QuartetFragment[]>
		| Ref<QueryResult<QuartetFragment[]>>;
};

provideApolloClient(apolloClient);

const {
	load: loadScratchQuartets,
	onResult: onScratchQuartetResult,
	loading: scratchQuartetsLoading,
	error: scratchQuartetsError,
} = useLazyQuery<ScratchQuartetsQuery, ScratchQuartetsQueryVariables>(
	scratchQuartetsQuery,
);

export const useQuartetsStore = defineStore(
	"quartets",
	(): SingerListStoreType => {
		const quartetListData = ref<QuartetFragment[]>([]);
		const quartetList = computed<QueryResult<QuartetFragment[]>>(() => ({
			data: quartetListData.value,
			loading: scratchQuartetsLoading.value,
			errorState: scratchQuartetsError.value ? true : false,
		}));
		onScratchQuartetResult(
			({ data }) => (quartetListData.value = data.scratchQuartets),
		);
		const fetchScratchQuartetList = () =>
			loadScratchQuartets(scratchQuartetsQuery);

		return { fetchScratchQuartetList, quartetList };
	},
);
