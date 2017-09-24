<template>
  <section class="container">
    <h1 class="title">
      {{ error.statusCode }}
    </h1>
    <h2 class="info">
      {{ error.message }}
    </h2>
    <nuxt-link to="/" v-if="error.statusCode === 404">
      <h3 class="button">Go back home</h3>
    </nuxt-link>
  </section>
</template>
<script>
export default {
  props: ['error']
}
</script>

<style scoped>
.title
{
  margin-top: 15px;
  font-size: 5em;
}
.info
{
  font-weight: 300;
  color: #9aabb1;
  margin: 0;
}
.button
{
  margin-top: 18px;
}
</style>
