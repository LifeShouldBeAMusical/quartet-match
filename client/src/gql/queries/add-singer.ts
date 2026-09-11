import gql from "graphql-tag";

export const addSingerMutation = gql`
	mutation AddSinger(
		$first: String!
		$last: String!
		$voiceOptions: [VoiceOptionInput!]!
	) {
		addSinger(
			singer: {
				name: { first: $first, last: $last }
				voiceOptions: $voiceOptions
			}
		) {
			id
		}
	}
`;
