<script setup lang="ts">
import { useStore } from '@/stores/store'

let store = useStore();

const props = defineProps<{

	name: string
	type: any

}>();
</script>

<template>

<button :class = "[props.name == props.type.value ? 'border-green-700' : 'border-gray-400']" class = "border-2 flex rounded-md" @click = "props.type.value = props.name"> 

	<span :class = "[props.name == props.type.value ? 'text-green-700' : 'text-gray-400']" class = "text-gray-400 mx-10 my-1 min-[1921px]:text-[10px]">{{ props.name }}</span>

</button>

</template>

<style scoped>

</style>
