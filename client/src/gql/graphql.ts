import type { TypedDocumentNode as DocumentNode } from "@graphql-typed-document-node/core";
export type Maybe<T> = T | null;
export type InputMaybe<T> = T | null | undefined;
export type Exact<T extends { [key: string]: unknown }> = {
	[K in keyof T]: T[K];
};
export type MakeOptional<T, K extends keyof T> = Omit<T, K> & {
	[SubKey in K]?: Maybe<T[SubKey]>;
};
export type MakeMaybe<T, K extends keyof T> = Omit<T, K> & {
	[SubKey in K]: Maybe<T[SubKey]>;
};
export type MakeEmpty<
	T extends { [key: string]: unknown },
	K extends keyof T,
> = { [_ in K]?: never };
export type Incremental<T> =
	| T
	| {
			[P in keyof T]?: P extends " $fragmentName" | "__typename" ? T[P] : never;
	  };
/** All built-in and custom scalars, mapped to their actual values */
export type Scalars = {
	ID: { input: string; output: string };
	String: { input: string; output: string };
	Boolean: { input: boolean; output: boolean };
	Int: { input: number; output: number };
	Float: { input: number; output: number };
};

export type Mutation = {
	__typename?: "Mutation";
	/** Add Singer */
	addSinger: Singer;
	/** Add Voice Options to Singer */
	addVoiceOptionsToSinger: Array<VoiceOption>;
};

export type MutationAddSingerArgs = {
	singer: SingerInput;
};

export type MutationAddVoiceOptionsToSingerArgs = {
	singerId: Scalars["Int"]["input"];
	voiceOptions: Array<VoiceOptionInput>;
};

export enum QuartetRangeEnum {
	Satb = "SATB",
	Ssaa = "SSAA",
	Ttbb = "TTBB",
}

export type Query = {
	__typename?: "Query";
	/** Singer */
	singer: Singer;
	/** List of Singers */
	singers: Array<Singer>;
};

export type QuerySingerArgs = {
	singerId: Scalars["Int"]["input"];
};

export type Singer = {
	__typename?: "Singer";
	id: Scalars["ID"]["output"];
	name: SingerName;
	voiceOptions: Array<VoiceOption>;
};

export type SingerInput = {
	name: SingerNameInput;
	voiceOptions: Array<VoiceOptionInput>;
};

export type SingerName = {
	__typename?: "SingerName";
	first: Scalars["String"]["output"];
	last: Scalars["String"]["output"];
};

export type SingerNameInput = {
	first: Scalars["String"]["input"];
	last: Scalars["String"]["input"];
};

export enum SingerVoiceEnum {
	Bari = "BARI",
	Bass = "BASS",
	Lead = "LEAD",
	Tenor = "TENOR",
}

export type VoiceOption = {
	__typename?: "VoiceOption";
	quartetRange: QuartetRangeEnum;
	voice: SingerVoiceEnum;
};

export type VoiceOptionInput = {
	quartetRange: QuartetRangeEnum;
	voice: SingerVoiceEnum;
};

export type SingerListQueryVariables = Exact<{ [key: string]: never }>;

export type SingerListQuery = {
	__typename?: "Query";
	singers: Array<{
		__typename?: "Singer";
		id: string;
		name: { __typename?: "SingerName"; first: string; last: string };
		voiceOptions: Array<{
			__typename?: "VoiceOption";
			quartetRange: QuartetRangeEnum;
			voice: SingerVoiceEnum;
		}>;
	}>;
};

export const SingerListDocument = {
	kind: "Document",
	definitions: [
		{
			kind: "OperationDefinition",
			operation: "query",
			name: { kind: "Name", value: "SingerList" },
			selectionSet: {
				kind: "SelectionSet",
				selections: [
					{
						kind: "Field",
						name: { kind: "Name", value: "singers" },
						selectionSet: {
							kind: "SelectionSet",
							selections: [
								{ kind: "Field", name: { kind: "Name", value: "id" } },
								{
									kind: "Field",
									name: { kind: "Name", value: "name" },
									selectionSet: {
										kind: "SelectionSet",
										selections: [
											{ kind: "Field", name: { kind: "Name", value: "first" } },
											{ kind: "Field", name: { kind: "Name", value: "last" } },
										],
									},
								},
								{
									kind: "Field",
									name: { kind: "Name", value: "voiceOptions" },
									selectionSet: {
										kind: "SelectionSet",
										selections: [
											{
												kind: "Field",
												name: { kind: "Name", value: "quartetRange" },
											},
											{ kind: "Field", name: { kind: "Name", value: "voice" } },
										],
									},
								},
							],
						},
					},
				],
			},
		},
	],
} as unknown as DocumentNode<SingerListQuery, SingerListQueryVariables>;
