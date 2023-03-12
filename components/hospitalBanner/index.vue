<template>
    <div class="w-full bg-black pb-10">
        <div class="container mx-auto ">
            <div class="carousel-container container overflow-hidden">
                <slick class="relative" ref="slick" :options="slickOptions">
                    <img src="~/assets/hospital1600px.png" alt="Hospital General">
                    <img src="~/assets/fotogrupo-1600px.png" alt="BTE Lab team photo">
                    <img src="~/assets/valencia1600px.png" alt="Science Museum in Valencia">

                </slick>
            </div>
        </div>
</div>
</template>

<style scoped>
.carousel-container-mobile {
    height: 600px;
}

.slick-slide img {
    max-width: 100%;
    max-height: 100%;
    object-fit: contain;
    margin: auto;
}
</style>


<script>
import Slick from 'vue-slick';
import 'slick-carousel/slick/slick.css';


export default {
    name: "HospitalBanner",
    components: { Slick },
    data() {
        return {
            slickOptions: {
                prevArrow: null,
                nextArrow: null,
                autoplay: true,
                slidesToShow: 1,
                autoplaySpeed: 1000,
                adaptiveHeight: true,
                dots: false,
                speed: 500,
                fade: true,
                cssEase: 'linear',
            },
        };
    }
};
</script>
