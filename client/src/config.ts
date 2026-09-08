export const uri = "http://127.0.0.1";
export const graphqlPort = "8000";
export const graphqlEndpoint = "/graphql";

const buildBaseUri = () => uri + ":" + graphqlPort + graphqlEndpoint;

export const baseConfig = {
	graphqlBaseUri: buildBaseUri(),
};
