<template>
  <div>
    <div v-for="pet in pets" :key="pet.id">
      <h3>{{ pet.name }}</h3>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    pets: {
      type: Array
    }
  }
}
</script>

<style scoped>
</style>