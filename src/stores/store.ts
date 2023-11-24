import { ref, computed } from 'vue'
import { defineStore } from 'pinia'

export const useStore = defineStore('store', () => {
	const program = ref<string>("")
	const injection = ref<string>("")
	const concVol = ref<string>("")
	const bicVol = ref<string>("")
	const weightVol = ref<string>("")
	const antiName = ref<string>("")
	const antiVol = ref<string>("")
	const dose = ref<string>("")
	const doseHome = ref<string>("")

	const modalVis = ref<boolean>(false)

	const arrInd = ref<string>("needles")
	const form = ref({

		dial: ref<string>('Спр. "Диализаторы"'),
		conc: ref<string>('Спр. "Концентраторы"'),
		needles: ref<string>('Спр. "Иглы"'),
		needleType: ref<string>('Спр. "Типы Иглы"'),
		kater: ref<string>('Спр. "Катетеры"'),
		katerType: ref<string>('Спр. "Типы Катетеров"'),
		bic: ref<string>('гр / л'),
		prepar: ref<string>('Спр. "Препараты"'),
		preparHome: ref<string>('Спр. "Препараты"'),
		intakeType: ref<string>('Спр. "Путь приема"'),
		intakeTypeHome: ref<string>('Спр. "Путь приема"'),
		dose: ref<string>("мкг"),
		doseHome: ref<string>("мкг"),
		krat: ref<string>('Спр. "Кр-ть приема"')

	})
	const dates = ref({

		afterSes: ref<number>(0),
		home: ref<number>(0)

	})	
	const datesRange = ref({

		afterSes: ref<string[]>([]),
		home: ref<string[]>([])

	})
	const data = {

		dial: [

			"Диализатор №1",
			"Диализатор №2",
			"Диализатор №3",
			"Диализатор №4",

		],

		conc: [

			"Концентраторы №1",
			"Концентраторы №2",
			"Концентраторы №3",
			"Концентраторы №4",

		],

		needles: [

			"Игла размер №1",
			"Игла размер №2",
			"Игла размер №3",
			"Игла размер №4",

		],

		needleType: [

			"Венозные",
			"Артериальные"

		],

		kater: [

			"Игла размер №1",
			"Игла размер №2",
			"Игла размер №3",
			"Игла размер №4",

		],

		katerType: [

			"Катетер Фолея",
			"Катетер Малеко",
			"Катетер Пеццера",
			"Катетер Тиманна",
			"Катетер Нелатона",

		],

		bic: [

			"граммов",
			"литров"

		],

		prepar: [

			"Лекарственный препарат №1",
			"Лекарственный препарат №2",
			"Лекарственный препарат №3",
			"Лекарственный препарат №4",

		],	

		preparHome: [

			"Лекарственный препарат №1",
			"Лекарственный препарат №2",
			"Лекарственный препарат №3",
			"Лекарственный препарат №4",

		],

		intakeType: [

			"Перорально",
			"Подкожно",
			"Аретериально",

		],

		intakeTypeHome: [

			"Перорально",
			"Подкожно",
			"Аретериально",

		],
	
		dose: [

			"мкг",
			"мл",
			"мг/кг"

		],	
		
		doseHome: [

			"мкг",
			"мл",
			"мг/кг"

		],

		krat: [

			"1 раз в день",
			"2 раза в день",
			"3 раза в день"

		]	

	};

	const sess = ref<boolean[]>([false, false, false, false, false, false, false])

	const sessNum = ref<number[]>([])

	let main = ref<string[]>([]);

	function changeArr() {

		main.value = data[arrInd.value as keyof typeof data];

	}

	function setValue(index: number) {

		if (arrInd.value == "bic" && bicVol.value.length > 0) {

			bicVol.value = bicVol.value.substring(0, bicVol.value.indexOf(form.value[arrInd.value as keyof typeof form.value]));
			bicVol.value += " " + data[arrInd.value as keyof typeof data][index];

		} else if (arrInd.value == "dose" && dose.value.length > 0) {

			dose.value = dose.value.substring(0, dose.value.indexOf(form.value[arrInd.value as keyof typeof form.value]));
			dose.value += " " + data[arrInd.value as keyof typeof data][index];

		} else if (arrInd.value == "doseHome" && doseHome.value.length > 0) {

			doseHome.value = doseHome.value.substring(0, doseHome.value.indexOf(form.value[arrInd.value as keyof typeof form.value]));
			doseHome.value += " " + data[arrInd.value as keyof typeof data][index];

		}

		form.value[arrInd.value as keyof typeof form.value] = data[arrInd.value as keyof typeof data][index];

	}

	return { program, injection, concVol, bicVol, weightVol, antiName, antiVol, dose, doseHome, modalVis, arrInd, form, dates, datesRange, data, sess, sessNum, main, changeArr, setValue }
})
