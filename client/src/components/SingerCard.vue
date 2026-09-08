<script setup lang="ts">
import type { Singer } from "@/gql/graphql";

defineProps<{ singer: Singer }>();
</script>

<template>
	<v-card>
		<v-card-title>{{ singer.name.first }} {{ singer.name.last }}</v-card-title>
	</v-card>
</template>

<style lang="scss"></style>
