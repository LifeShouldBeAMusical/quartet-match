import gql from "graphql-tag";

export const scratchQuartetsQuery = gql`
	query ScratchQuartets {
		scratchQuartets {
			...Quartet
		}
	}

	fragment Quartet on Quartet {
		quartetRange
		tenor {
			id
			name {
				first
				last
			}
		}
		lead {
			id
			name {
				first
				last
			}
		}
		bari {
			id
			name {
				first
				last
			}
		}
		bass {
			id
			name {
				first
				last
			}
		}
	}
`;
