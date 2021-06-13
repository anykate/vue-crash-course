import { createApp } from "vue";
import App from "./App.vue";
import router from "./router";

import PrimeVue from "primevue/config";
import TabMenu from "primevue/tabmenu";

import "primevue/resources/primevue.min.css";
import "primeflex/primeflex.min.css";
import "primeicons/primeicons.css";
import "primevue/resources/themes/saga-purple/theme.css";

const app = createApp(App);

app.use(PrimeVue, { ripple: true });
app.component("TabMenu", TabMenu);
app.use(router);

app.mount("#app");
