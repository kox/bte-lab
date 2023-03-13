<template>
    <div class="w-full flex flex-col bg-black pt-72 pb-20">
        <div class="container md:mx-auto md:w-2/3">
            <div class="flex flex-col text-center text-white">
                <h2 class="text-6xl md:text-7xl font-semibold pb-10 md:pb-12 tracking-tight">RESEARCH</h2>

                <div class="w-full">
                    <div class="flex flex-col xl:flex-row">
                        <div class="flex-1 min-h-1/5 pb-10 xl:pb-0">
                            <div class="flex flex-col text-center">
                                <h4 class="text-3xl pl-10 pr-10 pb-4 xl:pb-10">MICROFABRICATION AND ORGAN-ON-A-CHIP</h4>
                                <div class="w-full text-center h-20 pb-36 md:pb-0">
                                    <router-link to="/research"
                                        class="inline-block text-sm px-4 py-4 leading-none border rounded text-white border-white hover:text-black hover:bg-white hover:border-black hover:no-underline transition-all duration-200 ease-in-out mt-4 lg:mt-0">
                                        More
                                    </router-link>
                                </div>
                            </div>
                        </div>
                        <div class="flex-1 min-h-1/5 pb-16 xl:pb-0">
                            <div class="flex flex-col text-center">
                                <h4 class="text-3xl pl-10 pr-10 pb-4 xl:pb-10">3D BIOPRINTING AND ADDITIVE MANUFACTURING</h4>
                                <div class="w-full text-center h-20 pb-36 md:pb-0">
                                    <router-link to="/research#bioprinting"
                                        class="inline-block text-sm px-4 py-4 leading-none border rounded text-white border-white hover:text-black hover:bg-white hover:border-black hover:no-underline transition-all duration-200 ease-in-out mt-4 lg:mt-0">
                                        More
                                    </router-link>
                                </div>
                            </div>
                        </div>
                        <div class="flex-1 min-h-1/5 pb-16 xl:pb-0">
                            <div class="flex flex-col text-center">
                                <h4 class="text-3xl pl-10 pr-10 pb-4 xl:pb-10">STEM CELL BIOLOGY AND TISSUE ENGINEERING</h4>
                                <div class="w-full text-center h-20 pb-36 md:pb-0">
                                    <router-link to="/research#stem-cell"
                                        class="inline-block text-sm px-4 py-4 leading-none border rounded text-white border-white hover:text-black hover:bg-white hover:border-black hover:no-underline transition-all duration-200 ease-in-out mt-4 lg:mt-0">
                                        More
                                    </router-link>
                               </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
</div>
</template>
<script>
export default {
    name: "ResearchMain",
    components: {},
    methods: {
    },
    data() {
        return {
        }
    }
};
</script>