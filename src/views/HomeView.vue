<script setup lang="ts">
import Program from '@/components/Program.vue'
import Sprav from '@/components/Sprav.vue'
import ExtraInput from '@/components/ExtraInput.vue'
import Modal from '@/components/Modal.vue'
import SessAppoint from '@/components/SessAppoint.vue'
import SessNum from '@/components/SessNum.vue'
import Dates from '@/components/Dates.vue'
import TreatmentTable from '@/components/TreatmentTable.vue'
import HomeTreatment from '@/components/HomeTreatment.vue'
import Recommendation from '@/components/Recommendation.vue'

import { useStore } from '@/stores/store'
import { ref } from 'vue'
import type { Ref } from 'vue'
import { storeToRefs } from 'pinia'

const store = useStore();
const month: number = 4;

const current = new Date();

</script>

<template>

	<Modal v-if = "store.modalVis" />

	<main>

		<div class = "grid relative">
		
			<p class = "text-[26px]">Сеанс гемодиализа</p>

			<span class = "absolute justify-self-center self-center">№ месяце: <span class = "text-blue-500">{{ month }}</span></span>

		</div>

		<div>

			<p class = "mt-14 text-[26px]">Назначения сеанса гемодиализа</p>
			
			<div class = "grid gap-6 my-6">

				<div class = "grid gap-3">

					<span>Программа аппарата</span>

					<div class = "flex gap-5">
					
						<Program name = "HD" :type = "storeToRefs(store).program" />
						<Program name = "HDF" :type = "storeToRefs(store).program" />
						<Program name = "UF" :type = "storeToRefs(store).program" />

					</div>

				</div>

				<Sprav data = "dial" :name = "ref(store.form.dial)" :options = "true" title = "Диализатор" width = "220px" />

				<div class = "flex gap-8">

					<Sprav data = "conc" :name = "ref(store.form.conc)" :options = "true" title = "Концентратор" width = "220px" />

					<ExtraInput :data = "storeToRefs(store).concVol" :length = "2" title = "Объем л." :unit = "ref('л.')" width = "90px" />

				</div>

			</div>

			<div class = "grid gap-6 my-8">

				<div class = "grid gap-3">

					<span>Тип инъекции</span>

					<div class = "flex gap-5">
					
						<Program name = "Игла" :type = "storeToRefs(store).injection" />

						<Program name = "Катетер" :type = "storeToRefs(store).injection" />

					</div>

				</div>

				<div :class = "{'text-gray-300 [&_div]:border-gray-100 pointer-events-none': store.injection != 'Игла'}" class = "flex gap-4">

					<Sprav data = "needles" :name = "ref(store.form.needles)" :options = "true" title = "" width = "140px" />
					<Sprav data = "needleType" :name = "ref(store.form.needleType)" :options = "true" title = "" width = "190px" />

				</div>				
	
				<div :class = "{'text-gray-300 [&_div]:border-gray-100 pointer-events-none': store.injection != 'Катетер'}" class = "flex gap-4">

					<Sprav data = "kater" :name = "ref(store.form.kater)" :options = "true" title = "" width = "140px" />

					<Sprav data = "katerType" :name = "ref(store.form.katerType)" :options = "true" title = "" width = "190px" />

				</div>

				<div class = "flex gap-4">

					<div class = "grid">

						<ExtraInput class = "self-end" :data = "storeToRefs(store).bicVol" form = "bic" :length = "3" :options = "true" title = "Бикарбонат" :unit = "ref(store.form.bic)" width = "140px" />

					</div>

					<ExtraInput :data = "storeToRefs(store).weightVol" :length = "3" title = "Сухой Вес пациента" :unit = "ref('кг')" width = "90px" />

					<div class = "grid">

						<ExtraInput class = "self-end" :data = "storeToRefs(store).antiName" initial = "Наименование" :length = "0" :options = "true" title = "Антикоагуляция" :unit = "ref('')" width = "160px" />

					</div>

					<ExtraInput class = "self-end" :data = "storeToRefs(store).antiVol" :length = "3" title = "Объем" :unit = "ref('ед')" width = "80px" />

				</div>

			</div>

			<SessAppoint />
			 
		</div>

		<div>

			<p class = "mt-14 text-[26px]">Назначения после сеанса</p>
			
			<div class = "grid gap-6 my-6">
			
				<Sprav data = "prepar" :name = "ref(store.form.prepar)" :options = "true" title = "Лекарственный препарат" width = "440px" />
	
				<div class = "flex gap-5">
					
					<Sprav data = "intakeType" :name = "ref(store.form.intakeType)" :options = "true" title = "Путь приема" width = "170px" />
					<ExtraInput :data = "storeToRefs(store).dose" form = "dose" initial = 'Спр. "Дозы препаратов"' :length = "0" :options = "true" title = "Дозировка" :unit = "ref(store.form.dose)" width = "196px" />

				</div>

				<SessNum />

				<Dates :date = "store.dates" dKey = "afterSes" />

				<TreatmentTable />

			</div>

		</div>

		<div>

			<p class = "mt-14 text-[26px]">Лечение на дому</p>

			<div class = "grid gap-6 my-6">

				<Sprav data = "preparHome" :name = "ref(store.form.preparHome)" :options = "true" title = "Лекарственный препарат" width = "440px" />
	
				<div class = "flex gap-5">
					
					<Sprav data = "intakeTypeHome" :name = "ref(store.form.intakeTypeHome)" :options = "true" title = "Путь приема" width = "170px" />
					<ExtraInput :data = "storeToRefs(store).doseHome" form = "doseHome" initial = 'Спр. "Дозы препаратов"' :length = "0" :options = "true" title = "Дозировка" :unit = "ref(store.form.doseHome)" width = "196px" />

				</div>

				<div class = "flex gap-5">
					
					<Sprav data = "krat" :name = "ref(store.form.krat)" :options = "true" title = "Путь приема" width = "170px" />
					<Dates :date = "store.dates" dKey = "home" />

				</div>

				<HomeTreatment />

			</div>

		</div>

		<div>

			<p class = "mt-14 text-[26px]">Рекомендации</p>

			<Recommendation />

			<div class = "flex gap-6">

				<div class = "flex gap-3">
					<img width="20" src = "@/assets/calendar.svg" />
					<span>{{ current.getDate() + ":" + (current.getMonth()+1) + ":" + current.getFullYear() + " " + current.getHours() + ":" + current.getMinutes() }}</span>

				</div>

				<div class = "flex gap-3">

					<img width="20" src = "@/assets/doctor.svg" />
					<span>ФИО лечащего врача</span>

				</div>
		
				<span>Должность</span>

			</div>

		</div>

		<button class = "border-2 border-gray-400 flex mt-8 rounded-md px-5 py-1 text-gray-500">Сохранить назначения</button>

	</main>

</template>

<style>

</style>
