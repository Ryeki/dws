<template>

    <Head>
        <title>{{ $page.props.title }} - My awesome app</title>
    </Head>

    <header>
        <div class="mx-auto max-w-7xl py-6 px-4 sm:px-6 lg:px-8">
            <navbardws :isOpen="isOpen" />
        </div>
    </header>

    <main class="min-h-screen bg-slate-50">
        <div class="mx-auto max-w-7xl py-6 sm:px-6 lg:px-8">

            <section class="dark:bg-gray-900">
                
                <div class="py-8 px-4 mx-auto max-w-screen-xl text-center lg:py-8 lg:px-10">
                    
                    <h1 class="text-3xl font-bold mt-0 mb-4">{{ $page.props.title }}</h1>

                    <div class="flex flex-wrap items-center">
                        <div class="grow-0 shrink-0 basis-auto w-full lg:w-5/12 mb-12 lg:mb-0 md:px-6">
                            <div class="relative overflow-hidden bg-no-repeat bg-cover rounded-lg shadow-lg" data-mdb-ripple="true"
                            data-mdb-ripple-color="light" style="background-position: 50%">
                            <img src="https://mdbootstrap.com/img/new/textures/full/126.jpg" class="w-full" />
                            <a href="#!">
                                <div class="absolute top-0 right-0 bottom-0 left-0 w-full h-full overflow-hidden bg-fixed"
                                style="background-color: rgba(0, 0, 0, 0.4)">
                                <div class="flex justify-center items-center h-full">
                                    <div class="px-6 py-12 md:px-12 text-white text-center">
                                    <h3 class="text-2xl uppercase font-bold mb-6">
                                        The future is <u style="color: hsl(231, 52.6%, 85%)">now</u>
                                    </h3>
                                    <p style="color: hsl(231, 52.6%, 85%)">
                                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Harum quia
                                        laboriosam error consequuntur fugit, doloribus rerum, iure nesciunt amet
                                        quidem veniam cupiditate hic fugiat dolore aperiam quisquam libero earum
                                        quibusdam?
                                    </p>
                                    </div>
                                </div>
                                </div>
                                <div class="relative overflow-hidden bg-no-repeat bg-cover">
                                    <div
                                        class="absolute top-0 right-0 bottom-0 left-0 w-full h-full overflow-hidden bg-fixed opacity-0 hover:opacity-100 transition duration-300 ease-in-out"
                                        style="background-color: rgba(251, 251, 251, 0.2)">
                                    </div>
                                </div>
                            </a>
                            </div>
                        </div>

                        <div class="grow-0 shrink-0 basis-auto w-full lg:w-7/12 md:px-6">
                            <div class="flex mb-12">
                                <div class="grow">
                                    <p class="font-bold mb-1">Support 24/7</p>
                                    <p class="text-gray-500">
                                    Lorem ipsum dolor, sit amet consectetur adipisicing elit. Nihil quisquam quibusdam
                                    modi sapiente magni molestias pariatur facilis reprehenderit facere aliquam ex.
                                    </p>
                                </div>

                            </div>

                        </div>
                    </div>

                    <div class="flex flex-wrap items-center text-center mt-4">
                        
                        <div v-for="gallery in $page.props.galleries" :key="gallery.id">
                            <p class="font-bold mb-1">{{  gallery.title }}</p>

                            <lightgallery
                                :settings="{ speed: 500, plugins: plugins }"
                                :onInit="onInit"
                                :onBeforeSlide="onBeforeSlide"
                                class="mb-4"
                            >

                                <a :href="img.thumb" v-for="(img) in gallery.images" class="gallery-item">
                                    <img :src="img.original" />
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
        border: 1px solid #ccc;
        margin: 5px;
    }
</style>