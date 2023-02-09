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

            <!-- Section: Design Block -->
            <section class="dark:bg-gray-900">

                <div class="relative overflow-hidden bg-no-repeat bg-cover"
                style="background-position: 50%; background-image: url('./images/contact-page.jpg'); height: 400px;">
                </div>
                <div class="container text-gray-800 px-4 md:px-12">
                <div class="block rounded-lg shadow-lg py-10 md:py-12 px-2 md:px-6"
                    style="margin-top: -100px; background: hsla(0, 0%, 100%, 0.8); backdrop-filter: blur(30px);">
                    <div class="flex flex-wrap">
                    <div class="grow-0 shrink-0 basis-auto w-full xl:w-5/12 px-3 lg:px-6 mb-12 xl:mb-0">
                        
                        <h1 class="text-3xl font-bold mt-0 mb-4">{{ $page.props.title }}</h1>

                        <form>
                        <div class="form-group mb-6">
                            <input type="text" class="form-control block
                            w-full
                            px-3
                            py-1.5
                            text-base
                            font-normal
                            text-gray-700
                            bg-white bg-clip-padding
                            border border-solid border-gray-300
                            rounded
                            transition
                            ease-in-out
                            m-0
                            focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none" id="exampleInput7"
                            placeholder="Name">
                        </div>
                        <div class="form-group mb-6">
                            <input type="email" class="form-control block
                            w-full
                            px-3
                            py-1.5
                            text-base
                            font-normal
                            text-gray-700
                            bg-white bg-clip-padding
                            border border-solid border-gray-300
                            rounded
                            transition
                            ease-in-out
                            m-0
                            focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none" id="exampleInput8"
                            placeholder="Email address">
                        </div>
                        <div class="form-group mb-6">
                            <textarea class="
                            form-control
                            block
                            w-full
                            px-3
                            py-1.5
                            text-base
                            font-normal
                            text-gray-700
                            bg-white bg-clip-padding
                            border border-solid border-gray-300
                            rounded
                            transition
                            ease-in-out
                            m-0
                            focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none
                        " id="exampleFormControlTextarea13" rows="3" placeholder="Message"></textarea>
                        </div>
                        <div class="form-group form-check text-center mb-6">
                            <input type="checkbox"
                            class="form-check-input appearance-none h-4 w-4 border border-gray-300 rounded-sm bg-white checked:bg-blue-600 checked:border-blue-600 focus:outline-none transition duration-200 mt-1 align-top bg-no-repeat bg-center bg-contain mr-2 cursor-pointer"
                            id="exampleCheck87" checked>
                            <label class="form-check-label inline-block text-gray-800" for="exampleCheck87">Send me a copy of this
                            message</label>
                        </div>
                        <button type="submit" class="
                        w-full
                        px-6
                        py-2.5
                        bg-blue-600
                        text-white
                        font-medium
                        text-xs
                        leading-tight
                        uppercase
                        rounded
                        shadow-md
                        hover:bg-blue-700 hover:shadow-lg
                        focus:bg-blue-700 focus:shadow-lg focus:outline-none focus:ring-0
                        active:bg-blue-800 active:shadow-lg
                        transition
                        duration-150
                        ease-in-out">Send</button>
                        </form>
                    </div>
                    <div class="grow-0 shrink-0 basis-auto w-full xl:w-7/12">
                        <div class="flex flex-wrap">
                            <div class="mb-12 grow-0 shrink-0 basis-auto w-full md:w-6/12 px-3 lg:px-6">
                                <div class="flex items-start">
                                <div class="shrink-0">
                                    <div class="p-4 rounded-md shadow-md w-14 h-14 flex items-center justify-center">
                                    <svg aria-hidden="true" focusable="false" data-prefix="fas" data-icon="headset" class="w-5 text-blue-600"
                                        role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512">
                                        <path fill="currentColor"
                                        d="M192 208c0-17.67-14.33-32-32-32h-16c-35.35 0-64 28.65-64 64v48c0 35.35 28.65 64 64 64h16c17.67 0 32-14.33 32-32V208zm176 144c35.35 0 64-28.65 64-64v-48c0-35.35-28.65-64-64-64h-16c-17.67 0-32 14.33-32 32v112c0 17.67 14.33 32 32 32h16zM256 0C113.18 0 4.58 118.83 0 256v16c0 8.84 7.16 16 16 16h16c8.84 0 16-7.16 16-16v-16c0-114.69 93.31-208 208-208s208 93.31 208 208h-.12c.08 2.43.12 165.72.12 165.72 0 23.35-18.93 42.28-42.28 42.28H320c0-26.51-21.49-48-48-48h-32c-26.51 0-48 21.49-48 48s21.49 48 48 48h181.72c49.86 0 90.28-40.42 90.28-90.28V256C507.42 118.83 398.82 0 256 0z">
                                        </path>
                                    </svg>
                                    </div>
                                </div>
                                <div class="grow ml-6">
                                    <p class="font-bold">Technical support</p>
                                    <p class="text-gray-500">support@example.com</p>
                                    <p class="text-gray-500">+1 234-567-89</p>
                                </div>
                                </div>
                            </div>
                            <div class="mb-12 grow-0 shrink-0 basis-auto w-full md:w-6/12 px-3 lg:px-6">
                                <div class="flex items-start">
                                <div class="shrink-0">
                                    <div class="p-4rounded-md shadow-md w-14 h-14 flex items-center justify-center">
                                        <svg class="w-5 text-blue-600" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 384 512"><path fill="currentColor" d="M172.268 501.67C26.97 291.031 0 269.413 0 192 0 85.961 85.961 0 192 0s192 85.961 192 192c0 77.413-26.97 99.031-172.268 309.67-9.535 13.774-29.93 13.773-39.464 0zM192 272c44.183 0 80-35.817 80-80s-35.817-80-80-80-80 35.817-80 80 35.817 80 80 80z"></path></svg>    
                                    </div>
                                </div>
                                <div class="grow ml-6">
                                    <p class="font-bold">Sales questions</p>
                                    <p class="text-gray-500">sales@example.com</p>
                                    <p class="text-gray-500">+1 234-567-89</p>
                                </div>
                                </div>
                            </div>
                            <div class="mb-12 md:mb-0 grow-0 shrink-0 basis-auto w-full md:w-6/12 px-3 lg:px-6">
                                <div class="flex align-start">
                                <div class="shrink-0">
                                    <div class="p-4 rounded-md shadow-md w-14 h-14 flex items-center justify-center">
                                        <svg class="w-5 text-blue-600" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512"><path fill="currentColor" d="M493.4 24.6l-104-24c-11.3-2.6-22.9 3.3-27.5 13.9l-48 112c-4.2 9.8-1.4 21.3 6.9 28l60.6 49.6c-36 76.7-98.9 140.5-177.2 177.2l-49.6-60.6c-6.8-8.3-18.2-11.1-28-6.9l-112 48C3.9 366.5-2 378.1.6 389.4l24 104C27.1 504.2 36.7 512 48 512c256.1 0 464-207.5 464-464 0-11.2-7.7-20.9-18.6-23.4z"></path></svg>
                                    </div>
                                </div>
                                <div class="grow ml-6">
                                    <p class="font-bold">Press</p>
                                    <p class="text-gray-500">press@example.com</p>
                                    <p class="text-gray-500">+1 234-567-89</p>
                                </div>
                                </div>
                            </div>
                            
                        </div>
                    </div>
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
export default {
    data() { 
        return {
            isOpen: false,
        }
    }
}
</script>