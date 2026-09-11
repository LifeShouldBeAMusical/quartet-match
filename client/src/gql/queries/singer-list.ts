import gql from "graphql-tag";

export const singerListQuery = gql`
	query SingerList {
		singers {
			id
			name {
				first
				last
			}
			voiceOptions {
				quartetRange
				voice
			}
		}
	}
`;
