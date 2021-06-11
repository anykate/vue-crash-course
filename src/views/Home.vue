<template>
  <div class="home">
    <h1>Hello World!</h1>
    <Pets :pets="pets" />
  </div>
</template>

<script>
import Pets from '@/components/Pets'
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
      {
        id: 3,
        name: 'Jimmy',
        age: 12,
      },
      {
        id: 4,
        name: 'Tommy',
        age: 12,
      },
    ])

    return {
      pets
    }
  }
};
</script>
