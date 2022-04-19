<template>
  <input type="text" v-bind:placeholder="placeholder"
v-bind:value="value"
v-on:input="$emit('input', $event.target.value)">
</template>

<script>
export default {
  name: 'InputLine',
  props: {
   value:String,
   placeholder:String
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h3 {
  margin: 40px 0 0;
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  margin: 0 10px;
}
a {
  color: #42b983;
}
.notPublished{
    color: red;
}
input, textarea{
    font-size:20px;
    margin: 5px;
}
</style>
