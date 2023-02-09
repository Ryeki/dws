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
                    <h3 class="text-1xl text-gray-500 mb-8">{{ $page.props.page.excerpt }}</h3>

                    <div id="carouselExampleIndicators" class="carousel slide relative" data-bs-ride="carousel">
                        <div class="carousel-indicators absolute right-0 bottom-0 left-0 flex justify-center p-0 mb-4">
                            <button
                            type="button"
                            data-bs-target="#carouselExampleIndicators"
                            data-bs-slide-to="0"
                            class="active"
                            aria-current="true"
                            aria-label="Slide 1"
                            ></button>
                            <button
                            type="button"
                            data-bs-target="#carouselExampleIndicators"
                            data-bs-slide-to="1"
                            aria-label="Slide 2"
                            ></button>
                            <button
                            type="button"
                            data-bs-target="#carouselExampleIndicators"
                            data-bs-slide-to="2"
                            aria-label="Slide 3"
                            ></button>
                        </div>
                        <div class="carousel-inner relative w-full overflow-hidden">
                            <div class="carousel-item active float-left w-full">
                            <img
                                src="https://mdbcdn.b-cdn.net/img/new/slides/041.webp"
                                class="block w-full"
                                alt="Wild Landscape"
                            />
                            </div>
                            <div class="carousel-item float-left w-full">
                            <img
                                src="https://mdbcdn.b-cdn.net/img/new/slides/042.webp"
                                class="block w-full"
                                alt="Camera"
                            />
                            </div>
                            <div class="carousel-item float-left w-full">
                            <img
                                src="https://mdbcdn.b-cdn.net/img/new/slides/043.webp"
                                class="block w-full"
                                alt="Exotic Fruits"
                            />
                            </div>
                        </div>
                        <button
                            class="carousel-control-prev absolute top-0 bottom-0 flex items-center justify-center p-0 text-center border-0 hover:outline-none hover:no-underline focus:outline-none focus:no-underline left-0"
                            type="button"
                            data-bs-target="#carouselExampleIndicators"
                            data-bs-slide="prev"
                        >
                            <span class="carousel-control-prev-icon inline-block bg-no-repeat" aria-hidden="true"></span>
                            <span class="visually-hidden">Previous</span>
                        </button>
                        <button
                            class="carousel-control-next absolute top-0 bottom-0 flex items-center justify-center p-0 text-center border-0 hover:outline-none hover:no-underline focus:outline-none focus:no-underline right-0"
                            type="button"
                            data-bs-target="#carouselExampleIndicators"
                            data-bs-slide="next"
                        >
                            <span class="carousel-control-next-icon inline-block bg-no-repeat" aria-hidden="true"></span>
                            <span class="visually-hidden">Next</span>
                        </button>
                    </div>
                    
                    <img v-bind:src="$page.props.page.image" class="max-w-full h-auto my-6" />

                    <p v-html="$page.props.page.body">
                    </p>
                   
                </div>
            </section>
            
        </div>
    </main>   

    <footerdws />

</template>

<script>
export default {
    data() { 
        return {
            isOpen: false,
        }
    }
}
</script>