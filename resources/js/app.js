import { createApp, h } from "vue";
import { createInertiaApp, Link, Head, InertiaLink } from "@inertiajs/inertia-vue3";
import { InertiaProgress } from "@inertiajs/progress";

import { ZiggyVue } from "ziggy";
import { Ziggy } from "./ziggy";
import 'tw-elements';

//own templates
import  navbardws  from './Pages/Navigation/Navbardws.vue';
import  footerdws  from './Pages/Navigation/Footerdws.vue';

InertiaProgress.init();

createInertiaApp({
    resolve: async (name) => {
        return (await import(`./Pages/${name}`)).default;
    },
    setup({ el, App, props, plugin }) {
        createApp({ render: () => h(App, props) })
            .use(plugin)
            .use(ZiggyVue, Ziggy)
            .component("Link", Link)
            .component("Head", Head)
            .component('inertia-link', InertiaLink)
            .component('navbardws', navbardws)
            .component('footerdws', footerdws)
            .mixin({ methods: { route } })
            .mount(el);
    },
});