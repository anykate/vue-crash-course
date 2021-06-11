<template>
  <div>
    <div v-for="pet in pets" :key="pet.id">
      <h3><Pet :pet="pet" /></h3>
    </div>
  </div>
</template>

<script>
import Pet from '@/components/Pet'
export default {
  name: "Pets",
  components: {
    Pet,
  },
  props: {
    pets: {
      type: Array
    }
  }
}
</script>

<style scoped>
</style>