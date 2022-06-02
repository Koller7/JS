<script>
  const diminutive = function () {
    result = number1 - number2
    return result
  }

  let number1 = 10
  let number2 = 8

  console.log(`O Primeiro Numero é ${number1}`)
  console.log(`O Segundo Numero é ${number2}`)
  console.log(`O Resultado da Subtração é ${diminutive(number1 - number2)}`)

  // Exemplo 2 //

  const fazerVitamina = function (element1, element2) {
    receita = element1 + element2
    return receita
  }

  let element1 = 'Leite'
  let element2 = 'Banana'

  console.log(`O Primeiro ingrediente é ${element1}`)
  console.log(`O Segundo Ingreediente é ${element2}`)
  console.log(`O Resultado Final vai ser ${fazerVitamina(element1, element2)}`)
</script>
