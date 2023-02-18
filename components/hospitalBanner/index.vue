<template>
    <div class="flex flex-col bg-black pt-28 pb-28">
        <div class="pb-10">
            <p class="w-full text-white sm:leading-7 md:text-5xl text-center">
                The BTELab is a multidisciplinary team based at the Research Foundation of the General Hospital in
                Valencia, Spain. Created in 2020 and directed by Carmen Escobedo-Lucea, it is focues on research and
                devlopment in the field of Biomedical and Tissue Engineering.
            </p>
            <p class="w-full text-white sm:leading-7 md:text-5xl text-center">
                The BTELab is a multidisciplinary team based at the Research Foundation of the General Hospital in
                Valencia, Spain. Created in 2020 and directed by Carmen Escobedo-Lucea, it is focues on research and
                devlopment in the field of Biomedical and Tissue Engineering.
            </p>

        </div>
        <VueSlickCarousel v-bind="carrousel">
        <!-- <VueSlickCarousel :arrows="true" :dots="true" :speed="500"> -->
      <div><img src="https://mdbcdn.b-cdn.net/img/new/slides/041.webp" class="block w-full"
                        alt="Wild Landscape" /></div>
      <div><img src="https://mdbcdn.b-cdn.net/img/new/slides/042.webp" class="block w-full" alt="Camera" /></div>
      <div><img src="https://mdbcdn.b-cdn.net/img/new/slides/043.webp" class="block w-full"
                        alt="Exotic Fruits" /></div>
    </VueSlickCarousel>
    </div>
</template>
<script>
 import VueSlickCarousel from 'vue-slick-carousel'
 import 'vue-slick-carousel/dist/vue-slick-carousel.css'
 import 'vue-slick-carousel/dist/vue-slick-carousel-theme.css'

export default {
    name: "HospitalBanner",
    components: { VueSlickCarousel },
    data() {
        return {
            carrousel: {
                arrows: true,
                dots: true,
                speed: 500,
                autoplay: true,
                cssEase: 'ease',
                fade: true,
            }
        }
    }
};
</script>