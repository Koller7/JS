<script>
  function Person(name) {
    this.name = name
    this.sleep = function () {
      return this.name + 'está dormindo'
    }
  }

  const mayk = new Person('Mayk ')
  const gabriel = new Person('Gabriel ')
  console.log(mayk.sleep())
  console.log(gabriel.sleep())
</script>
