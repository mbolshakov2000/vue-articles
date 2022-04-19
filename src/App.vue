<template>
  <div id="app">
    <div id="nav">
      <p> Навигация: </p>
      <div class="nav-link"><router-link to="/">Статьи</router-link></div>
      <div class="nav-link"><router-link to="/new">Добавить статью</router-link></div>
      <div class="nav-link"><router-link to="/about">О нас</router-link></div>
  </div>
  <router-view/>
  </div>
</template>

<script>
export default {
  name: 'App',
  components: {
  }
}
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  color: #2c3e50;
  margin-top: 60px;
}
.nav {
  display:flex;
  align-items: center; 
  justify-content: center; 
  flex-flow: column wrap;
  border: 3px;
}
.nav-link{
  margin:3px;
  /* width: 150px;
  border: solid; */
}
</style>
