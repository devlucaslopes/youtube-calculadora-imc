function getData() {
  const weight = parseInt(document.getElementById('weight').value)
  const height = parseInt(document.getElementById('height').value)

  return {
    weight,
    height
  }
}

function validate(weight, height) {
  if (isNaN(weight) || isNaN(height)) {
    return false
  }

  return true
}

function calculate(weight, height) {
  const heightInMeters = height / 100

  const imc = (weight / (heightInMeters * heightInMeters)).toFixed(2)

  return imc
}

function createMessage(imc) {
  let range
  
  if (imc < 18.5) {
    range = ' (Magreza)'
  } else if (imc >= 18.5 && imc < 24.9) {
    range = ' (Normal)'
  } else if (imc >= 24.9 && imc < 30) {
    range = ' (Normal)'
  } else {
    range = ' (Obesidade)'
  }

  return 'Seu IMC é: '+imc+range
}

function handleSubmit(event) {
  event.preventDefault()
  const error = document.getElementsByClassName('error')[0]
  error.classList.add('hidden')

  const result = document.getElementsByTagName('p')[1]
  result.classList.add('hidden')

  const { weight, height } = getData()

  const isValid = validate(weight, height)

  if (!isValid) {
    error.classList.remove('hidden')
    return
  }

  const imc = calculate(weight, height)

  const message = createMessage(imc)

  result.classList.remove('hidden')
  result.innerHTML = message
}