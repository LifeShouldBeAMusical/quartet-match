import { apolloClient } from "@/client";
import type {
	Singer,
	SingerListQuery,
	SingerListQueryVariables,
} from "@/gql/graphql";
import { singerListQuery } from "@/gql/queries/singer-list";
import type { QueryResult } from "@/stores/types/query-result";
import { provideApolloClient, useLazyQuery } from "@vue/apollo-composable";
import { defineStore } from "pinia";
import { computed, ref, type Ref } from "vue";

export type SingerListStoreType = SingerListStoreStateType & {
	fetchSingerList: () => void;
};

type SingerListStoreStateType = {
	singerList: QueryResult<Singer[]> | Ref<QueryResult<Singer[]>>;
};

provideApolloClient(apolloClient);

const {
	load: loadSingerList,
	onResult: onSingerListResult,
	loading: singerListLoading,
	error: singerListError,
} = useLazyQuery<SingerListQuery, SingerListQueryVariables>(singerListQuery);

export const useSingerListStore = defineStore(
	"singer-list",
	(): SingerListStoreType => {
		const singerListData = ref<Singer[]>([]);
		const singerList = computed<QueryResult<Singer[]>>(() => ({
			data: singerListData.value,
			loading: singerListLoading.value,
			errorState: singerListError.value ? true : false,
		}));
		onSingerListResult(({ data }) => (singerListData.value = data.singers));
		const fetchSingerList = () => loadSingerList(singerListQuery);

		return { fetchSingerList, singerList };
	},
);
