const domElements = {
	// input data
	inputYear: document.getElementById('year'),
	inputMonth: document.getElementById('month'),
	inputDay: document.getElementById('day'),

	// output data
	outputYear: document.querySelector('.output--year'),
    outputMonth: document.querySelector('.output--month'),
    outputDay: document.querySelector('.output--day'),

	// generate btn
	resultGeneratorBtn: document.querySelector('.result-generator-btn'),

    // error messages
    errorYear: document.querySelector('.error--year'),
    errorMonth: document.querySelector('.error--month'),
    errorDay: document.querySelector('.error--day'),
}

function validateInput (input, max, errorElement, requiredMessage, invalidMessage) {
	const value = parseInt(input.value, 10)

	if (!input.value) {
		errorElement.textContent = requiredMessage
        return
	}
	if (value > max || value <= 0) {
		errorElement.textContent = invalidMessage
        return
	}
	errorElement.textContent = ''
	return true
}

function calculateDate () {
	const isDayValid = validateInput(
		domElements.inputDay,
        31,
        domElements.errorDay,
        'This field is required',
        'Invalid day'
	)
	const isMonthValid = validateInput(
        domElements.inputMonth,
        12,
        domElements.errorMonth,
		'This field is required',
        'Invalid month',
	)
	const isYearValid = validateInput(
        domElements.inputYear,
        new Date().getFullYear(),
        domElements.errorYear,
        'This field is required',
		'Must be in the past'
	)

	if (!isDayValid || !isYearValid || !isMonthValid) return

	const day = parseInt(domElements.inputDay.value, 10)
	const month = parseInt(domElements.inputMonth.value, 10) - 1
	const year = parseInt(domElements.inputYear.value, 10)

	const birthday = new Date(year, month, day)

	if (isNaN(birthday.getTime())) {
		domElements.errorDay.textContent = 'Invalid date'
		return
	}

	const now = new Date()
	const diffMilliseconds = now - birthday

	const ageDate = new Date(diffMilliseconds)
	const ageYears = ageDate.getUTCFullYear() - 1970
	const ageMonths = ageDate.getUTCMonth()
	const ageDays = Math.floor(diffMilliseconds / (1000 * 60 * 60 * 24)) % 30

	// display results
	domElements.outputYear.textContent = ageYears
	domElements.outputMonth.textContent = ageMonths
	domElements.outputDay.textContent = ageDays
}

domElements.resultGeneratorBtn.addEventListener('click', calculateDate)
