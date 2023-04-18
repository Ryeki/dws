<template>

    <Head>
        <title>{{ $page.props.title }} - DWS</title>

        <link rel="stylesheet" href="https://cdn.jsdelivr.net/gh/devicons/devicon@v2.15.1/devicon.min.css">
    </Head>

    <header>
        <div class="mx-auto max-w-7xl py-6 px-4 sm:px-6 lg:px-8">
            <navbardws :isOpen="isOpen" />
        </div>
    </header>

    <main class="min-h-screen bg-slate-50">
        <div class="mx-auto max-w-7xl py-6 sm:px-6 lg:px-8">
            
            <!-- Section: Design Block -->
            <section class="my-8 text-gray-800">
                
                <div class="py-8 px-4 mx-auto max-w-screen-xl lg:py-8 lg:px-10">

                    <div class="block rounded-lg shadow-lg bg-white">
                        <div class="flex flex-wrap items-center">
                            <div class="hidden lg:flex grow-0 shrink-0 basis-auto lg:w-6/12 xl:w-4/12">
                                <img src="/images/dani-office.jpg"
                                class="w-full rounded-t-lg lg:rounded-tr-none lg:rounded-bl-lg" />
                            </div>
                            <div class="grow-0 shrink-0 basis-auto w-full lg:w-6/12 xl:w-8/12">
                                <div class="px-6 py-12 md:px-12 text-gray-800">

                                    <div class="md:flex lg:hidden mb-6">
                                        <img src="/images/dani-office.jpg"
                                        class="w-full rounded-t-lg lg:rounded-tr-none lg:rounded-bl-lg" />
                                    </div>

                                    <h2 class="text-2xl font-bold mb-4">Technologies I use</h2>
                                    
                                    <div class="grid grid-cols-4 gap-6">
                                        <div class="mb-4">
                                            <p class="font-bold mb-1">Laravel</p>
                                            <p class="text-gray-500 text-6xl">
                                                <i class="devicon-laravel-plain-wordmark colored"></i>
                                            </p>
                                        </div>
            
                                        <div class="mb-4">
                                            <p class="font-bold mb-1">PHP</p>
                                            <p class="text-gray-500 text-6xl">
                                                <i class="devicon-php-plain colored"></i>
                                            </p>
                                        </div>
            
                                        <div class="mb-4">
                                            <p class="font-bold mb-1">MySQL</p>
                                            <p class="text-gray-500 text-6xl">
                                                <i class="devicon-mysql-plain-wordmark colored"></i>
                                            </p>
                                        </div>
                                        
                                        <div class="mb-4">
                                            <p class="font-bold mb-1">jQuery</p>
                                            <p class="text-gray-500 text-6xl">
                                                <i class="devicon-jquery-plain-wordmark colored"></i>
                                            </p>
                                        </div>
            
                                        <div class="mb-4">
                                            <p class="font-bold mb-1">Vue.js</p>
                                            <p class="text-gray-500 text-6xl">
                                                <i class="devicon-vuejs-plain-wordmark colored"></i>
                                            </p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>

                </div>
            </section>
            <!-- Section: Design Block -->

            <section class="dark:bg-gray-900">
                
                <div class="px-4 mx-auto max-w-screen-xl text-center lg:py-8 lg:px-10">
                    
                    <div class="flex flex-wrap items-center text-center">
                        
                        <div v-for="gallery in $page.props.galleries" :key="gallery.id">
                            <p class="text-gray-800 text-3xl font-bold mb-1">{{  gallery.title }}</p>

                            <lightgallery
                                :settings="{ speed: 500, plugins: plugins }"
                                :onInit="onInit"
                                :onBeforeSlide="onBeforeSlide"
                                class="mb-4"
                            >

                                <a :href="img.thumb" v-for="(img) in gallery.images" class="gallery-item">
                                    <img class="shadow-lg rounded-lg" :src="img.original" />
                                </a>
                                
                            </lightgallery>
                        </div>
                        
                    </div>

                </div>
            </section>
            <!-- Section: Design Block -->
            
        </div>
        
    </main>   

    <footerdws />

</template>

<script>
import Lightgallery from 'lightgallery/vue';
import lgThumbnail from 'lightgallery/plugins/thumbnail';
import lgZoom from 'lightgallery/plugins/zoom';

export default {
    data() { 
        return {
            isOpen: false,
            plugins: [lgThumbnail, lgZoom]
        }
    },

    components: {
        Lightgallery,
    },

    methods: {
        onInit: () => {
            console.log('lightGallery has been initialized');
        },
        onBeforeSlide: () => {
            console.log('calling before slide');
        },
    },
}
</script>

<style lang="css" scoped>
    @import 'lightgallery/css/lightgallery.css';
    @import 'lightgallery/css/lg-thumbnail.css';
    @import 'lightgallery/css/lg-zoom.css';

    .gallery-item {
        width: 200px;
        display: inline-flex;
        margin: 5px;
    }
</style>