<template>
  <div class="pet">
    {{ pet.name }}
  </div>
</template>

<script>
export default {
  name: "Pet",
  props: {
    pet: {
      type: Object
    }
  }
}
</script>

<style scoped>
</style>