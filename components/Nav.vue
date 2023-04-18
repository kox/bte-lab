<template>
  <nav class="flex flex-1 flex-col sticky top-0 z-50 bg-black p-5 items-center md:items-start min-h-[8rem]">
    <div class="flex w-full h-2 border-b border-white border-solid mb-4"></div>
    <div class="flex container mx-auto justify-between pb-10 md:pb-14 pl-3">
      <div class="flex-1 grid grid-cols-3 h-6 text-white">
        <div class="pt-4">
          <!-- <div class="invisible md:visible">logo lg</div> -->
          <a title="Escobedo Lucea Biomaterial and Tissue Engineering Lab" href="/" target="_self">
            <nuxt-img
              class="invisible xl:visible w-48 h-auto ml-8"
              format="webp"
              src="/logo_blanco.png"
              alt="Escobedo Lucea Biomaterial and Tissue Engineering Lab logo 2" />
          </a>
        </div>
        <div class="flex flex-row justify-self-center pt-2">
          <!-- <div class="visible md:invisible">logo tablet</div> -->
          <a title="Escobedo Lucea Biomaterial and Tissue Engineering Lab" href="/" target="_self">
            <nuxt-img
              class="visible xl:invisible w-48 h-auto"
              format="webp"
              src="/logo_blanco.png"
              alt="Escobedo Lucea Biomaterial and Tissue Engineering Lab logo" />
            <!-- <img class="visible xl:invisible w-64 h-auto" src="~assets/logo_blanco.png"
              alt="Escobedo Lucea Biomaterial and Tissue Engineering Lab logo" /> -->
          </a>
        </div>
        <div class="flex flex-row justify-self-end">
          <div class="flex flex-col visible xl:hidden w-34" ref="menu">
            <div class="flex justify-end w-30">
              <button
                class="border border-solid border-white border-opacity-75 bg-black text-white hover:bg-gray-200 hover:border-gray-400 hover:text-black py-3 md:p-4 ml-4 h-12 md:h-16"
                @click="showMenu = !showMenu">
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5"
                  stroke="currentColor" class="w-6 h-6">
                  <title>Menu</title>
                  <path stroke-linecap="round" stroke-linejoin="round" d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5" />
                </svg>
              </button>
            </div>

            <div class="xl:hidden w-30 ml-4 text-sm tracking-bit" v-show="showMenu">
              <a title="Home" href="/bte-lab/"
                class="font-avenir text-sm block px-2 py-2 bg-white text-black border-b-2 border-black text-center hover:bg-black hover:text-white hover:border-white hover:border-2">Home</a>
              <a title="About Section" href="/bte-lab/#about"
                class="font-avenir block px-2 py-2 bg-white text-black border-b-2 border-black text-center hover:bg-black hover:text-white hover:border-white hover:border-2">About</a>
              <a title="Team Section" href="/bte-lab/#team"
                class="font-avenir block px-2 py-2 bg-white text-black border-b-2 border-black text-center hover:bg-black hover:text-white hover:border-white hover:border-2">Team</a>
              <a title="Research Section" href="/bte-lab/research"
                class="font-avenir block px-2 py-2 bg-white text-black border-b-2 border-black text-center hover:bg-black hover:text-white hover:border-white hover:border-2">Research</a>
              <a title="Projects Section" href="/bte-lab/projects"
                class="font-avenir block px-2 py-2 bg-white text-black border-b-2 border-black text-center hover:bg-black hover:text-white hover:border-white hover:border-2">Projects</a>
              <a title="Adwards Section" href="/bte-lab/awards"
                class="font-avenir block px-2 py-2 bg-white text-black border-b-2 border-black text-center hover:bg-black hover:text-white hover:border-white hover:border-2">Adwards</a>
              <a title="Publications Section" href="/bte-lab/publications"
                class="font-avenir block px-2 py-2 bg-white text-black border-b-2 border-black text-center hover:bg-black hover:text-white hover:border-white hover:border-2">Publications</a>
                <a title="Google Maps Link" href="https://www.google.com/maps?cid=3154699187674670345" target="_blank" class="flex justify-center px-2 py-2 bg-black text-black border-b-2 border-black text-center align-middle ">
                  <nuxt-img
                  class="w-6 h-6 bg-black"
                  format="webp"
                  src="/map.webp"
                  alt="Google Map Link"
                  fetchpriority="high" />
                </a>
                <a title="Contact Section" href="/bte-lab/#contact"
                  class="font-avenir block px-2 py-2 bg-white text-black border-b-2 border-black text-center hover:bg-black hover:text-white hover:border-white hover:border-2">Contact</a>
              
            </div>
          </div>

          <div class="hidden xl:flex text-sm tracking-bit">
            <div><a class="mx-2.5 font-avenir color-corvid" title="Home" href="/bte-lab/">Home</a></div>
            <div><a class="mx-2.5 font-avenir color-corvid" title="About Section" href="/bte-lab/#about">About</a></div>
            <div><a class="mx-2.5 font-avenir color-corvid" title="Team Section" href="/bte-lab/#team">Team</a></div>
            <div><a class="mx-2.5 font-avenir color-corvid" title="Research Section" href="/bte-lab/research">Research</a></div>
            <div><a class="mx-2.5 font-avenir color-corvid" title="Projects Section" href="/bte-lab/projects">Projects</a></div>
            <div><a class="mx-2.5 font-avenir color-corvid" title="Adwards Section" href="/bte-lab/awards">Awards</a></div>
            <div><a class="mx-2.5 font-avenir color-corvid" title="Publications Section" href="/bte-lab/publications">Publications</a></div>
            <!-- <div><a class="mx-2.5 font-avenir color-corvid" title="About Section" href="/#about">About</a></div>
            <div><a class="mx-2.5 font-avenir color-corvid" title="Team Section" href="/#team">Team</a></div>
            <div><a class="mx-2.5 font-avenir color-corvid" title="Research Section" href="/research">Research</a></div>
            <div><a class="mx-2.5 font-avenir color-corvid" title="Projects Section" href="/projects">Projects</a></div>
            <div><a class="mx-2.5 font-avenir color-corvid" title="Adwards Section" href="/awards">Awards</a></div>
            <div><a class="mx-2.5 font-avenir color-corvid" title="Publications Section" href="/publications">Publications</a></div> -->
            <div class="w-10 ml-2 font-avenir color-corvid">
              <a title="Google Maps Link" href="https://www.google.com/maps?cid=3154699187674670345" target="_blank">
                <nuxt-img
                  class="w-6 h-6 bg-cover"
                  format="webp"
                  src="/map.webp"
                  alt="Google Map Link"
                  fetchpriority="high" />
              </a>
            </div>
            <div><a class="mx-2.5 font-avenir color-corvid" title="Contact" href="/bte-lab/#contact">Contact</a></div>
          </div>
        </div>
      </div>
    </div>
  </nav>
</template>

<script>
export default {
  name: "Nav",
  /* components: {
    'nuxt-image': '@nuxt/image',
  }, */
  data() {
    return {
      showMenu: false,
    }
  },
  mounted() {
    document.addEventListener('click', this.handleDocumentClick)
  },
  beforeDestroy() {
    document.removeEventListener('click', this.handleDocumentClick)
  },
  methods: {
    handleDocumentClick(e) {
      const menu = this.$refs.menu;
      if (!menu.contains(event.target)) {
        this.showMenu = false;
      }
    }
  }
};
</script>