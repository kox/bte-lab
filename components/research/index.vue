<template>
    <div class="flex flex-col bg-black pt-28 pb-28">
        <div class="flex container mx-auto">
            <div class="w-1/3 bg-grey h-auto">
                <div class="grid grid-cols-1 place-content-between h-full pt-36 pb-16">
                    <div class="flex justify-center">
                        <img class="flex justify-center" alt="Microfabrication 1" src="~/assets/micro1.webp" />
                    </div>

                    <div class="flex justify-center">
                        <img class="align-center" alt="Microfabrication 2" src="~/assets/micro2.webp" />
                    </div>
                </div>
            </div>

            <div class="w-2/3 bg-white px-20 py-32 text-center">
                <h1 class="font-serif lg:text-7xl md:text-5xl text-4xl mb-16">Microfabrication and OOC</h1>
                <p class="text-xl">Organ-on-a-chip (OoC) platforms seek to recapitulate certain aspects of human organ
                    physiology at a
                    microscopic scale by integrating microfluidics and three-dimensional (3D) models of human tissues.
                    OoCs
                    offer a vast number of applications in almost every aspect of the human anatomy. For instance, OoCs
                    will be
                    able to provide accurate and reliable predictions of the effects of drugs and toxins on human bodies
                    in the
                    near future. Nowadays, we are working on developing personalized physiological models that we hope
                    will be
                    used as a versatile platform to develop more precise medical therapies. Our research efforts are
                    also
                    focused on observing the essential functions of cells and the interactions between the input and
                    output,
                    which will also be crucial for reducing the experimental work on animal models, alined with the
                    principles
                    of the 3Rs (Replacement, Reduction and Refinement). </p>
            </div>
        </div>

        <div class="flex container mx-auto mt-10">
            <div class="w-1/3 bg-grey h-auto">
                <div class="grid grid-cols-1 h-full place-content-around pt-36">
                    <div class="flex justify-center">
                        <img class="flex justify-center" alt="Manufacturing 1" src="~/assets/manufacturing1.webp" />
                    </div>

                    <div class="flex justify-center">
                        <img class="align-center" alt="Manufacturing 2" src="~/assets/manufacturing2.webp" />
                    </div>
                </div>
            </div>
            <div class="w-2/3 bg-white px-20 py-32 text-center">
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

        <div class="flex container mx-auto mt-10">
            <div class="w-1/3 bg-grey h-auto">
                <div class="grid grid-cols-1 h-full place-content-around pt-36">
                    <div class="flex justify-center">
                        <img class="flex justify-center" alt="Manufacturing 1" src="~/assets/steam1.png" />
                    </div>

                    <div class="flex justify-center">
                        <img class="flex justify-center" alt="Manufacturing 1" src="~/assets/steam2.webp" />
                    </div>

                    <div class="flex justify-center">
                        <img class="align-center" alt="Manufacturing 2" src="~/assets/steam3.webp" />
                    </div>
                </div>
            </div>
            <div class="w-2/3 bg-white px-20 py-32 text-center">
                <h2 class="font-serif lg:text-7xl md:text-5xl text-4xl mb-16">Stem cell biology and Tissue Engineering
                </h2>
                <p class="text-xl">Stem cells can be self-replicating and differentiate into different cell types
                    depending on their potency. Our group studies stem cell-based treatments and develop stem cell
                    delivery technologies with or without the help of scaffolds mimicking the properties of the natural
                    niche. We use human multipotent adipose mesenchymal stem cells (hASCs) as a clinically relevant
                    source for tissue engineering but also as a model system for differentiation and signal
                    transduction. We prepare 3D in vitro platforms using hASCs, spheroids, and organoids. Research
                    activities include immunomodulation and wound healing. Creating models and substitutes using
                    engineering approaches and xeno-free cell derivatives, designing directed differentiation protocols.
                    Our efforts are also looking to identify the factors central to mediated regulation of angiogenesis,
                    fibrosis, immune modulation, and epigenetics. We have a library of hASCs from over 200 different
                    donors fully characterized and tested against pathogens, adventitious viruses, or zoonotic agents.
                </p>
            </div>
        </div>
    </div>
</template>
<script>
export default {
    name: "Research",
    components: {},
    data() {
        return {
        }
    }
};
</script>