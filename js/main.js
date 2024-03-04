// Input Elements
const INPUT_YEAR = document.querySelector('#year')
const INPUT_MONTH = document.querySelector('#month')
const INPUT_DAY = document.querySelector('#day')
let isValid = false

// Output Elements
const OUTPUT_YEAR = document.querySelector('.output--year')
const OUTPUT_MONTH = document.querySelector('.output--month')
const OUTPUT_DAY = document.querySelector('.output--day')

const RESULT_GENERATOR_BTN = document.querySelector('.result-generator-btn')

// Error Elements
const ERROR_YEAR = document.querySelector('.error--year')
const ERROR_MONTH = document.querySelector('.error--month')
const ERROR_DAY = document.querySelector('.error--day')

RESULT_GENERATOR_BTN.addEventListener('click', calculateDate)

INPUT_DAY.addEventListener('input', (e) => {
	if (+INPUT_DAY.value > 31) {
		ERROR_DAY.textContent = 'Must be a valid day'
		isValid = false
		return
	}
	else {
		isValid = true
		ERROR_DAY.textContent = ''
	}

	if (+INPUT_DAY.value === 0) {
		isValid = false
		ERROR_DAY.textContent = 'This field is required'
		isValid = false
		return
	}
	else {
		ERROR_DAY.textContent = ''
	}
})

INPUT_MONTH.addEventListener('input', (e) => {
	if (+INPUT_MONTH.value > 12) {
		ERROR_MONTH.textContent = 'Must be a valid month'
		isValid = false
		return
	}
	else {
		isValid = true
		ERROR_MONTH.textContent = ''
	}

	if (+INPUT_MONTH.value === 0) {
		isValid = false
		ERROR_MONTH.textContent = 'This field is required'
		isValid = false
		return
	}
	else {
		ERROR_MONTH.textContent = ''
	}
})

INPUT_YEAR.addEventListener('input', (e) => {
	if (+INPUT_YEAR.value > 2024) {
		ERROR_YEAR.textContent = 'Must be in the past'
		isValid = false
		return
	}
	else {
		isValid = true
		ERROR_YEAR.textContent = ''
	}

	if (+INPUT_DAY.value === 0) {
		isValid = false
		ERROR_YEAR.textContent = 'This field is required'
		isValid = false
		return
	}
	else {
		ERROR_YEAR.textContent = ''
	}
})

function calculateDate() {
	if (isValid) {
		let birthday = `${INPUT_MONTH.value}/${INPUT_DAY.value}/${INPUT_YEAR.value}`
		console.log(birthday)
		let birthdayObj = new Date(birthday)
		let ageDiffMill = Date.now() - birthdayObj
		let ageDate = new Date(ageDiffMill)
		let ageYears = ageDate.getUTCFullYear() - 1970
		let ageMonth = ageDate.getUTCMonth()
		let ageDay = ageDate.getUTCDay()

		// Displaying The Results
		OUTPUT_DAY.textContent = ageDay
		OUTPUT_MONTH.textContent = ageMonth
		OUTPUT_YEAR.textContent = ageYears
	}
	else {
		alert('Error!')
	}
}
