<script setup lang="ts">
import { useStore } from '@/stores/store'
import type { Ref } from 'vue'

const store = useStore();

const props = defineProps<{

	data: string
	name: Ref<string>
	options?: boolean
	title: string
	width: string

}>();

</script>

<template>

	<div class = "grid gap-3">

		<span v-if = "props.title">{{ props.title }}</span>

		<div class = "flex gap-4">

			<div class = "border-2 py-1" :style = "{width: props.width}">

				<span>{{ props.name.value }}</span>

			</div>

			<div v-if = "props.options" class = "border-2 flex py-1 px-3 hover:cursor-pointer" @click = "store.arrInd = data, store.modalVis = true, store.changeArr()">	

				<img width = "10" src = "@/assets/menu.svg" />

			</div>

		</div>

	</div>

</template>

<style scoped>

</style>
