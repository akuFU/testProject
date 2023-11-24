<script setup lang="ts">
import { ref } from 'vue'
import type { Ref } from 'vue'
import { useStore } from '@/stores/store'

const store = useStore();

const props = defineProps<{

	data: Ref<string>
	form?: string
	initial?: string
	length: number
	options?: boolean
	title: string
	unit: Ref<string>
	width: string

}>();

let initialVal: boolean = true;
let defaultVal: string = "";
for (let i = 0; i < props.length; i++)
	defaultVal += "X";

const placeholder: string = props.initial ? props.initial : defaultVal + " ";
let inValue = ref<string>("");

let userInp: string = "";

function modifyInp(item: any) {

	if (item.data == null)
		userInp = userInp.substring(0, userInp.length-1);
	else if (userInp.length < props.length || props.length == 0) 
		userInp += item.data;

	if (userInp.length == 0) {
		inValue.value = "";
		props.data.value = inValue.value;
		return
	}

	inValue.value = userInp + ' ' + props.unit.value;
	props.data.value = inValue.value;

}

</script>

<template>

	<div class = "flex flex-col gap-3">

		<span class = " text-center"  :style = "{width: props.width}">{{ props.title }}</span>

		<div class = "flex gap-4">

			<input class = "border-2 py-1 text-center placeholder:text-black" :style = "{width: props.width}" :placeholder = "`${placeholder}${props.initial ? '' : ' ' + props.unit.value}`" v-model = "props.data.value"  @input = "(event: any) => modifyInp(event)" />

			<div v-if = "props.options" class = "border-2 flex py-1 px-3 hover:cursor-pointer" @click = "store.arrInd = props.form as string, store.modalVis = true, store.changeArr()">	

				<img width = "10" src = "@/assets/menu.svg" />

			</div>

		</div>

	</div>

</template>

<style scoped>

</style>
