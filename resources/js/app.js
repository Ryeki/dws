import { createApp, h } from 'vue'
import { createInertiaApp, Link, Head } from '@inertiajs/vue3'

import { ZiggyVue } from "ziggy";
import { Ziggy } from "./ziggy";
import 'tw-elements';

//own templates
import  navbardws  from './Pages/Navigation/Navbardws.vue';
import  footerdws  from './Pages/Navigation/Footerdws.vue';

createInertiaApp({
  resolve: name => require(`./Pages/${name}`),
  setup({ el, App, props, plugin }) {
    createApp({ render: () => h(App, props) })
        .use(plugin)
        .use(ZiggyVue, Ziggy)
        .component("Link", Link)
        .component("Head", Head)
        .component('navbardws', navbardws)
        .component('footerdws', footerdws)
        .mixin({ methods: { route } })
        .mount(el)
  },
})