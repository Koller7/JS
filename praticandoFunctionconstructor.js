<script>
  function Person(name) {
    this.name = name
    this.sleep = function () {
      return this.name + ' esta dormindo'
    }
  }

  const gabriel = new Person('Gabriel')
  console.log(gabriel.sleep())
</script>
