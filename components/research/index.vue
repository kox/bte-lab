<template>
    <div class="w-full">

        <div class="w-full flex flex-col bg-black pt-28 pb-28">
            <div class="container mx-auto visible xl:hidden px-5">
                <div class="w-full flex justify-center bg-grey">
                    <img class="object-contain" alt="Microfabrication 1" :src="micro1" />
                    <img class="object-contain" alt="Microfabrication 2" :src="micro2" />
                </div>

                <div class="w-full bg-white px-20 py-32 text-center">
                    <h1 class="font-serif lg:text-7xl md:text-5xl text-4xl mb-16">Microfabrication and OOC</h1>
                    <p class="text-xl">Organ-on-a-chip (OoC) platforms seek to recapitulate certain aspects of human organ physiology at a microscopic scale by integrating microfluidics and three-dimensional (3D) models of human tissues. OoCs offer a vast number of applications in almost every aspect of the human anatomy. For instance, OoCs will be able to provide accurate and reliable predictions of the effects of drugs and toxins on human bodies in the near future. Nowadays, we are working on developing personalized physiological models that we hope will be used as a versatile platform to develop more precise medical therapies. Our research efforts are also focused on observing the essential functions of cells and the interactions between the input and output, which will also be crucial for reducing the experimental work on animal models, alined with the principles of the 3Rs (Replacement, Reduction and Refinement).</p>
                </div>
            </div>

            <div class="container hidden mx-auto xl:flex">
                <div class="w-1/3 bg-grey h-auto">
                    <div class="grid grid-cols-1 place-content-between h-full pt-36 pb-16">
                        <div class="flex justify-center">
                            <img class="flex justify-center" alt="Microfabrication 1" :src="micro1" />
                        </div>

                        <div class="flex justify-center">
                            <img class="flex justify-center" alt="Microfabrication 2" :src="micro2" />
                        </div>
                    </div>
                </div>

                <div class="w-2/3 bg-white px-20 py-32 text-center">
                    <h1 class="font-serif lg:text-7xl md:text-5xl text-4xl mb-16">Microfabrication and OOC</h1>
                    <p class="text-xl">Organ-on-a-chip (OoC) platforms seek to recapitulate certain aspects of human organ physiology at a microscopic scale by integrating microfluidics and three-dimensional (3D) models of human tissues. OoCs offer a vast number of applications in almost every aspect of the human anatomy. For instance, OoCs will be able to provide accurate and reliable predictions of the effects of drugs and toxins on human bodies in the near future. Nowadays, we are working on developing personalized physiological models that we hope will be used as a versatile platform to develop more precise medical therapies. Our research efforts are also focused on observing the essential functions of cells and the interactions between the input and output, which will also be crucial for reducing the experimental work on animal models, alined with the principles of the 3Rs (Replacement, Reduction and Refinement).</p>
                </div>
            </div>
        </div>

        <div class="w-full flex flex-col bg-black pt-28 pb-28">
            <div class="container mx-auto visible xl:hidden px-5">
                <div class="w-full flex bg-grey content-center">
                    <img class="object-contain" alt="Manufacturing 1" :src="manufacturing1" width="150" height="auto" />
                    <img class="object-contain" alt="Manufacturing 2" :src="manufacturing2" />
                </div>

                <div class="w-full bg-white px-20 py-32 text-center">
                    <h2 class="font-serif lg:text-7xl md:text-5xl text-4xl mb-16">Additive manufacturing and 3D bioprinting
                    </h2>
                    <p class="text-xl">3D bioprinting is an emerging technology that can spatially control the construction
                        process of engineered tissues. The BTELab focuses on controlling the printed constructs'
                        architecture, morphology, and biological properties to generate 3D platforms that reproduce their
                        human equivalents fairly. Our latest works show an improvement in this technology for different
                        aspects, such as greater functionality of the printed tissues through better vascularization and
                        exploring the synergy with other additive manufacturing techniques. Our team's multidisciplinarity
                        enables the control of the process from the early stage of machine design to cell preparation, which
                        allows us to adapt the 3D printers to the specific needs of different projects and research
                        lines.<br />The main applications of our bioprinted constructs in the lab are the following:</p>
                    <ul class="list-inside list-disc text-xl align-center">
                        <li>Study of tissue and organ regeneration</li>
                        <li>Explore mechanisms of diseases</li>
                        <li>Drug sensitivity tests</li>
                        <li>Drug development</li>
                    </ul>
                    <p class="text-xl">We are developing broad collaborations with various stakeholders to investigate other
                        potential avenues of investigation and treatment.</p>
                    <h3 class="font-serif text-2xl mb-4 mt-10">3D PRINTING IN CLINICS</h3>
                    <p class="text-xl">We are interested in applying 3D printing techniques in clinical contexts to create
                        realistic and anatomically precise 3D printed models generated from medical images for surgery
                        planning, training, and teaching applications. Together with other medical departments and hospital
                        services, we have started a pioneer work to provide them with these complex and personalized 3D
                        realistic models that can potentially be used in their surgeries or teaching activities. BTELab
                        facilities include the most advanced technologies to create the models in different polymers and
                        resins, controlling not only colors and textures but also stiffness and elongation. Our expertise in
                        medical image processing and digital model manipulation is essential to be capable of extracting the
                        whole complexity and anatomical structure of the human organs and tissues from the medical images.
                    </p>
                </div>
            </div>

            <div class="container hidden mx-auto xl:flex">
                <div class="w-1/3 bg-grey h-auto">
                    <div class="flex flex-wrap justify-center content-evenly h-full pt-36 pb-16">
                        <div class="w-full mx-auto">
                            <img  alt="Manufacturing 1" :src="manufacturing1" />
                        </div>

                        <div class="w-full justify-center">
                            <img class="flex justify-center" alt="Manufacturing 2" :src="manufacturing2" />
                        </div>
                    </div>
                </div>

                <div class="w-2/3 bg-white px-20 py-32 text-center">
                    <div class="w-full flex justify-center bg-grey">
                    <img class="object-contain" alt="Manufacturing 1" :src="manufacturing1" />
                    <img class="object-contain" alt="Manufacturing 2" :src="manufacturing2" />
                </div>

                <div class="w-full bg-white px-20 py-32 text-center">
                    <h2 class="font-serif lg:text-7xl md:text-5xl text-4xl mb-16">Additive manufacturing and 3D bioprinting
                    </h2>
                    <p class="text-xl">3D bioprinting is an emerging technology that can spatially control the construction
                        process of engineered tissues. The BTELab focuses on controlling the printed constructs'
                        architecture, morphology, and biological properties to generate 3D platforms that reproduce their
                        human equivalents fairly. Our latest works show an improvement in this technology for different
                        aspects, such as greater functionality of the printed tissues through better vascularization and
                        exploring the synergy with other additive manufacturing techniques. Our team's multidisciplinarity
                        enables the control of the process from the early stage of machine design to cell preparation, which
                        allows us to adapt the 3D printers to the specific needs of different projects and research
                        lines.<br />The main applications of our bioprinted constructs in the lab are the following:</p>
                    <ul class="list-inside list-disc text-xl align-center">
                        <li>Study of tissue and organ regeneration</li>
                        <li>Explore mechanisms of diseases</li>
                        <li>Drug sensitivity tests</li>
                        <li>Drug development</li>
                    </ul>
                    <p class="text-xl">We are developing broad collaborations with various stakeholders to investigate other
                        potential avenues of investigation and treatment.</p>
                    <h3 class="font-serif text-2xl mb-4 mt-10">3D PRINTING IN CLINICS</h3>
                    <p class="text-xl">We are interested in applying 3D printing techniques in clinical contexts to create
                        realistic and anatomically precise 3D printed models generated from medical images for surgery
                        planning, training, and teaching applications. Together with other medical departments and hospital
                        services, we have started a pioneer work to provide them with these complex and personalized 3D
                        realistic models that can potentially be used in their surgeries or teaching activities. BTELab
                        facilities include the most advanced technologies to create the models in different polymers and
                        resins, controlling not only colors and textures but also stiffness and elongation. Our expertise in
                        medical image processing and digital model manipulation is essential to be capable of extracting the
                        whole complexity and anatomical structure of the human organs and tissues from the medical images.
                    </p>
                </div>
                </div>
            </div>
        </div>
    </div>
</template>
  
<script>
const micro1 = require('~/assets/micro1.webp');
const micro2 = require('~/assets/micro2.webp');
const manufacturing1 = require('~/assets/manufacturing1.webp');
const manufacturing2 = require('~/assets/manufacturing2.webp');

export default {
    name: "Research",
    components: {},
    data() {
        return {
            micro1,
            micro2,
            manufacturing1,
            manufacturing2,
        }
    }
};
</script>