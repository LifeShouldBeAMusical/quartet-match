import type { CodegenConfig } from "@graphql-codegen/cli";

const config: CodegenConfig = {
	schema: "http://127.0.0.1:8000/graphql",
	documents: ["../**/queries/*.ts"],
	// ignoreNoDocuments: true, // for better experience with the watcher
	generates: {
		"./src/gql/": {
			preset: "client",
			config: {
				useTypeImports: true,
				scalars: { DateTime: "Date" },
			},
			presetConfig: { fragmentMasking: false },
		},
	},
};

export default config;
