<script>
  function Person(name) {
    this.name = name
    this.walk = function () {
      return this.name + ' esta andando'
    }
  }

  const gabriel = new Person('gabriel')
  console.log(gabriel.walk())
</script>
