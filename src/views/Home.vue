<template>
  <div class="home">
    <h1>Hello World!</h1>
    <Pets :pets="pets" />
  </div>
</template>

<script>
import Pets from '@/components/Pets.vue'
import { reactive } from 'vue'
export default {
  name: "Home",
  components: { Pets },
  setup() {
    const pets = reactive([
      {
        id: 1,
        name: 'Pongki',
        age: 2,
      },
      {
        id: 2,
        name: 'Rudi',
        age: 12,
      },
    ])

    return {
      pets
    }
  }
};
</script>
