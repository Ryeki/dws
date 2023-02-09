<template>

    <nav class="bg-slate-50 px-2 sm:px-4 py-2.5 dark:bg-gray-900 fixed w-full z-20 top-0 left-0 border-b border-gray-200 dark:border-gray-600 mb-8">
        
        <div class="container flex flex-wrap items-center justify-between mx-auto">
            
            <inertia-link class="navbar-brand" href="/">
                <img src="/images/dws-logo.png" class="h-12 sm:h-12" alt="Dima Web Solutions Logo" />
            </inertia-link>

            <div class="sm:hidden">
                <button @click="isOpen = !isOpen" type="button" class="block text-gray-700 hover:text-gray-600 focus:text-gray-600 focus:outline-none">
                    <svg class="h-6 w-6 fill-current" viewBox="0 0 24 24">
                        <path v-if="isOpen" fill-rule="evenodd" d="M18.278 16.864a1 1 0 0 1-1.414 1.414l-4.829-4.828-4.828 4.828a1 1 0 0 1-1.414-1.414l4.828-4.829-4.828-4.828a1 1 0 0 1 1.414-1.414l4.829 4.828 4.828-4.828a1 1 0 1 1 1.414 1.414l-4.828 4.829 4.828 4.828z"/>
                        <path v-if="!isOpen" fill-rule="evenodd" d="M4 5h16a1 1 0 0 1 0 2H4a1 1 0 1 1 0-2zm0 6h16a1 1 0 0 1 0 2H4a1 1 0 0 1 0-2zm0 6h16a1 1 0 0 1 0 2H4a1 1 0 0 1 0-2z"/>
                    </svg>
                </button>
            </div>

            <div :class="isOpen ? 'block' : 'hidden'" class="items-center justify-between  w-full md:flex md:w-auto md:order-1" id="navbar-sticky">
                <ul class="flex flex-col p-4 mt-4 border border-gray-100 rounded-lg bg-slate-50 md:flex-row md:space-x-8 md:mt-0 md:text-sm md:font-medium md:border-0 md:bg-slate-50 dark:bg-gray-800 md:dark:bg-gray-900 dark:border-gray-700">
                    
                    <inertia-link 
                        :href="route('homepage')"
                        :class="{
                            'font-semibold block py-2 pl-3 pr-4 text-white bg-blue-700 rounded md:bg-transparent md:text-blue-700 md:p-0 dark:text-white':  $page.props.slug == 'home' ,
                            'font-semibold block py-2 pl-3 pr-4 text-gray-700 rounded hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:hover:text-blue-700 md:p-0 dark:text-gray-400 md:dark:hover:text-white dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent':  $page.props.slug != 'home',
                        }
                        "
                        >Homepage
                    </inertia-link>

                    <inertia-link
                        :href="route('about')"
                        :class="{
                            'font-semibold block py-2 pl-3 pr-4 text-white bg-blue-700 rounded md:bg-transparent md:text-blue-700 md:p-0 dark:text-white':  $page.props.slug == 'about' ,
                            'font-semibold block py-2 pl-3 pr-4 text-gray-700 rounded hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:hover:text-blue-700 md:p-0 dark:text-gray-400 md:dark:hover:text-white dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent':  $page.props.slug != 'about',
                        }
                        "
                        >About Us
                    </inertia-link>

                    <inertia-link
                        :href="route('contact')"
                        :class="{
                            'font-semibold block py-2 pl-3 pr-4 text-white bg-blue-700 rounded md:bg-transparent md:text-blue-700 md:p-0 dark:text-white':  $page.props.slug == 'contact' ,
                            'font-semibold block py-2 pl-3 pr-4 text-gray-700 rounded hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:hover:text-blue-700 md:p-0 dark:text-gray-400 md:dark:hover:text-white dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent':  $page.props.slug != 'contact',
                        }
                        "
                        >Contact
                    </inertia-link>

                </ul>
            </div>
        </div>

        
    </nav>
            
</template>

<script>
export default {
    props: {
        isOpen: { type: Boolean, default: false }
    },
}
</script>