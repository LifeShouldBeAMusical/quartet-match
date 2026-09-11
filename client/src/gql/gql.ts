/* eslint-disable */
import * as types from "./graphql";
import type { TypedDocumentNode as DocumentNode } from "@graphql-typed-document-node/core";

/**
 * Map of all GraphQL operations in the project.
 *
 * This map has several performance disadvantages:
 * 1. It is not tree-shakeable, so it will include all operations in the project.
 * 2. It is not minifiable, so the string of a GraphQL query will be multiple times inside the bundle.
 * 3. It does not support dead code elimination, so it will add unused operations.
 *
 * Therefore it is highly recommended to use the babel or swc plugin for production.
 * Learn more about it here: https://the-guild.dev/graphql/codegen/plugins/presets/preset-client#reducing-bundle-size
 */
type Documents = {
	"\n\tmutation AddSinger(\n\t\t$first: String!\n\t\t$last: String!\n\t\t$voiceOptions: [VoiceOptionInput!]!\n\t) {\n\t\taddSinger(\n\t\t\tsinger: {\n\t\t\t\tname: { first: $first, last: $last }\n\t\t\t\tvoiceOptions: $voiceOptions\n\t\t\t}\n\t\t) {\n\t\t\tid\n\t\t}\n\t}\n": typeof types.AddSingerDocument;
	"\n\tquery SingerList {\n\t\tsingers {\n\t\t\tid\n\t\t\tname {\n\t\t\t\tfirst\n\t\t\t\tlast\n\t\t\t}\n\t\t\tvoiceOptions {\n\t\t\t\tquartetRange\n\t\t\t\tvoice\n\t\t\t}\n\t\t}\n\t}\n": typeof types.SingerListDocument;
};
const documents: Documents = {
	"\n\tmutation AddSinger(\n\t\t$first: String!\n\t\t$last: String!\n\t\t$voiceOptions: [VoiceOptionInput!]!\n\t) {\n\t\taddSinger(\n\t\t\tsinger: {\n\t\t\t\tname: { first: $first, last: $last }\n\t\t\t\tvoiceOptions: $voiceOptions\n\t\t\t}\n\t\t) {\n\t\t\tid\n\t\t}\n\t}\n":
		types.AddSingerDocument,
	"\n\tquery SingerList {\n\t\tsingers {\n\t\t\tid\n\t\t\tname {\n\t\t\t\tfirst\n\t\t\t\tlast\n\t\t\t}\n\t\t\tvoiceOptions {\n\t\t\t\tquartetRange\n\t\t\t\tvoice\n\t\t\t}\n\t\t}\n\t}\n":
		types.SingerListDocument,
};

/**
 * The graphql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 *
 *
 * @example
 * ```ts
 * const query = graphql(`query GetUser($id: ID!) { user(id: $id) { name } }`);
 * ```
 *
 * The query argument is unknown!
 * Please regenerate the types.
 */
export function graphql(source: string): unknown;

/**
 * The graphql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function graphql(
	source: "\n\tmutation AddSinger(\n\t\t$first: String!\n\t\t$last: String!\n\t\t$voiceOptions: [VoiceOptionInput!]!\n\t) {\n\t\taddSinger(\n\t\t\tsinger: {\n\t\t\t\tname: { first: $first, last: $last }\n\t\t\t\tvoiceOptions: $voiceOptions\n\t\t\t}\n\t\t) {\n\t\t\tid\n\t\t}\n\t}\n",
): (typeof documents)["\n\tmutation AddSinger(\n\t\t$first: String!\n\t\t$last: String!\n\t\t$voiceOptions: [VoiceOptionInput!]!\n\t) {\n\t\taddSinger(\n\t\t\tsinger: {\n\t\t\t\tname: { first: $first, last: $last }\n\t\t\t\tvoiceOptions: $voiceOptions\n\t\t\t}\n\t\t) {\n\t\t\tid\n\t\t}\n\t}\n"];
/**
 * The graphql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function graphql(
	source: "\n\tquery SingerList {\n\t\tsingers {\n\t\t\tid\n\t\t\tname {\n\t\t\t\tfirst\n\t\t\t\tlast\n\t\t\t}\n\t\t\tvoiceOptions {\n\t\t\t\tquartetRange\n\t\t\t\tvoice\n\t\t\t}\n\t\t}\n\t}\n",
): (typeof documents)["\n\tquery SingerList {\n\t\tsingers {\n\t\t\tid\n\t\t\tname {\n\t\t\t\tfirst\n\t\t\t\tlast\n\t\t\t}\n\t\t\tvoiceOptions {\n\t\t\t\tquartetRange\n\t\t\t\tvoice\n\t\t\t}\n\t\t}\n\t}\n"];

export function graphql(source: string) {
	return (documents as any)[source] ?? {};
}

export type DocumentType<TDocumentNode extends DocumentNode<any, any>> =
	TDocumentNode extends DocumentNode<infer TType, any> ? TType : never;
