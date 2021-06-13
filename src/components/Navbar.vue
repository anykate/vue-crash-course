<template>
  <div>
    <TabMenu :model="items" />
  </div>
</template>

<script>
import { ref } from 'vue'
export default {
  name: "Navbar",
  setup() {
    const items = ref([
      {
        label: 'Home',
        icon: 'pi pi-fw pi-home',
        to: '/'
      },
      {
        label: 'About',
        icon: 'pi pi-fw pi-calendar',
        to: '/about'
      },
    ])

    return {
      items
    }
  }
};
</script>
