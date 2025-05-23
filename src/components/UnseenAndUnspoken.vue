<script setup>
import BreadCrumbs from '@/components/BreadCrumbs.vue'
import FooterComponent from '@/components/FooterComponent.vue'
import NavDropdown from '@/components/NavDropdown.vue'
import CarouselComponent from '@/components/CarouselComponent.vue'
import SmoothScroll from 'smooth-scroll'
import { unseenAndUnspoken } from '@/data/unseenAndUnspoken.js';
import { useScrollObserver } from '@/useScrollObserver.js'
import { ref, onMounted, computed, watch } from "vue"

/* eslint-disable no-unused-vars */
const navItems = ref([]);
const navbar = ref(null);
const activeIndex = ref(-1);
const { startObserving } = useScrollObserver();
const contentOpacity = ref(0);

onMounted(() => {
    const aboutSection = document.getElementById("about");
    startObserving(aboutSection, 0, onIntersection);

    // Set up observers for artist sections
    const artistSections = document.querySelectorAll('[id^="artist_"]');
    artistSections.forEach((section, index) => {
        startObserving(section, index + 1, onIntersection);
    });

    const offset = 88;
    const scroll = new SmoothScroll('a[href*="#"]', {
        speed: 800,
        easing: 'easeInOutCubic',
        offset: offset,
    });

    // Add fade in effect
    setTimeout(() => {
        contentOpacity.value = 1;
    }, 300);

    navItems.value = document.querySelectorAll(".nav-item");
    navItems.value.forEach((el, index) => {
        const targetId = el.getAttribute("href").substring(1);
        const targetElement = document.getElementById(targetId);
        startObserving(targetElement, index, onIntersection);
    });
});

function onIntersection(entry, index) {
    if (entry.isIntersecting) {
        activeIndex.value = index;
    }
}

const unseenAndUnspokenArray = computed(() => Object.values(unseenAndUnspoken));

watch(activeIndex, () => {
    const navbarWidth = navbar.value.offsetWidth;
    const activeNavItem = navItems.value[activeIndex.value];

    if (activeNavItem) {
        const activeNavItemOffset = activeNavItem.offsetLeft + activeNavItem.offsetWidth / 2;
        navbar.value.scrollLeft = activeNavItemOffset - navbarWidth / 2;
    }
});
</script>
<template>
    <div class="min-h-screen bg-ivory max-h-full">
        <div class="sticky z-50 top-0 bg-ivory pt-4 sm:pt-6 lg:pt-4 px-6 sm:px-12 lg:px-16">
            <div class="flex justify-start lg:justify-center items-center lg:border-b lg:border-stone-400/50 pb-2 md:pb-4">
                <a href="/">
                    <img src="@/assets/manifesto-logo-black.svg" class="h-6 lg:h-8 opacity-90 lg:ml-4" alt="Website Dark Logo" />
                </a>
                <div class="absolute right-0 sm:right-7 lg:right-10 text-stone-600/80 hover:text-stone-800/50 z-40">
                    <NavDropdown />
                </div>
            </div>
            <div class="pt-3.5 hidden lg:flex lg:justify-start lg:items-center pb-6 lg:pb-3">
                <BreadCrumbs 
                    :main-page="false"
                    current-exhibition="Interwoven Identities"
                    current-section="Unseen and Unspoken"
                />
            </div>
            <div class="lg:hidden flex items-center justify-start w-full text-stone-500 text-sm overflow-x-auto scrollbar-hide whitespace-nowrap">
                <a href="/exhibitions" class="hover:text-stone-900">
                    Exhibitions
                </a>
                <p class="mx-2">/</p>
                <a href="/exhibitions/interwoven-identities" class="hover:text-stone-900">
                    Interwoven Identities
                </a>
                <p class="mx-2">/</p>
                <button disabled class="text-stone-600">
                    Unseen and Unspoken
                </button>
            </div>
            <nav ref="navbar" class="bg-ivory t-0 border-b border-stone-600 lg:pb-2 flex space-x-5 overflow-x-auto max-w-screen text-sm scrollbar-hide">
                <a href="#about" class="nav-item inline-block whitespace-nowrap text-stone-600" :class="{'font-bold text-stone-800': activeIndex == 0, 'text-stone-500': activeIndex != 0 }">
                    About
                </a>
                <a v-for="(artist, index) in unseenAndUnspokenArray" :key="'nav_item_' + index" :href="`#artist_${index}`" class="nav-item inline-block whitespace-nowrap" :class="{ 'font-semibold text-stone-800': activeIndex == index + 1, 'text-stone-500': activeIndex != index + 1 }">
                    {{artist.artist_name}}
                </a>
            </nav>
        </div>
        <div class="flex flex-col items-center justify-center min-h-screen" 
             :style="{ opacity: contentOpacity, transition: 'opacity 300ms ease-out' }">
            <div class="overflow-scroll scroll-smooth">
                <!-- Banner -->
                <section id="page_banner" class="h-[calc(100vh-89px)] w-full bg-cover bg-top banner5-url">
                    <div class="bg-black/50 w-full h-[calc(100vh-89px)] flex flex-col items-start justify-center lg:pl-16 sm:pl-12 pl-6">
                        <p class="lg:leading-6 hidden lg:block lg:text-xl text-ivory/90">
                          Interwoven Identities: Intersectionality in Asian Mental Health
                        </p>
                        <p class="leading-[29px] sm:leading-[44px] lg:leading-[58px] text-ivory/90 font-medium text-2xl sm:text-4xl lg:text-5xl text-ivory text-center">
                            Unseen and Unspoken
                        </p>
                    </div>
                </section>
                <!-- Introduction of the sub section -->
                <section id="about" class="h-fit px-6 sm:px-12 lg:px-16">
                    <h2 class="pt-[60px] pb-6 text-xl lg:text-[28px] lg:leading-[34px] font-bold">About</h2>
                      <p class="mt-3 lg:mt-9 font-normal text-sm leading-5 lg:text-xl lg:leading-8">
                        <i>Unseen and Unspoken</i> examines the personal struggles of individuals navigating the societal pressure to maintain "face," a concept deeply rooted in the preservation of honour and reputation. The artworks reveal the profound effects of unspoken emotions and the heavy toll of concealing inner turmoil to conform to external expectations.
                      </p>
                    <p class="pb-[60px] font-normal text-sm sm:text-base leading-5 sm:leading-6 lg:leading-8">
                    </p>
                </section>
                <div v-for="(artist,index) in unseenAndUnspokenArray" :key="index">
                    <!-- Quote of the Topic -->
                    <section :id="`artist_${index}`" class="bg-bitten h-[calc(100vh-89px)] w-screen bg-cover" :style="artist.quote_bg_url ? { backgroundImage: 'url(' + artist.quote_bg_url + ')' } : {}">
                        <div class="h-full flex flex-col items-center justify-center lg:px-64 md:px-32 px-6 bg-black/70">
                            <p class="font-thin tracking-wider max-w-4xl text-base lg:text-[32px] lg:leading-[39px] text-ivory/90">
                                {{artist.quote}}
                            </p>
                            <p class="mt-4 lg:mt-6 z-20 text-ivory/90 font-semibold text-base lg:text-[32px] lg:leading-[39px] text-ivory text-center">
                                {{artist.artist_name}}
                            </p>
                        </div>
                    </section>
                    <!-- Art pieces of a certain artist with his/her introduction -->
                    <div class="w-screen tracking-wide leading-6 bg-ivory px-20 px-6 sm:px-12 lg:px-16 pt-[60px] pb-[60px]">
                        <div v-if="artist.format == 'image' || artist.format == 'mixed'" class="h-full">
                            <div class="pb-4 lg:pb-8">
                                <p class="lg:text-[28px] lg:leading-[34px] text-2xl font-bold">{{artist.artist_name}}</p>
                                <p class="lg:text-[28px] lg:leading-[34px] text-lg font-light italic">{{artist.collection_title}}</p>
                            </div>
                            <div class="block md:hidden h-full" v-for="(art,index) in artist.artworks" :key="index">
                                <img :src="art.file_name" alt="artwork" class="max-w-screen mb-3" />
                            </div>
                            <CarouselComponent class="hidden md:block" :slides="artist.slides" />
                            <div class="h-full lg:flex lg:justify-between lg:items-start lg:gap-14 lg:pt-[60px] pt-14 pb-6 lg:pb-12">
                                <div class="w-full lg:w-2/3 min-h-full">
                                    <span class="font-bold leanding-4 text-base sm:text-lg lg:text-2xl">
                                        About This Collection
                                    </span>
                                    <div class="mt-4 whitespace-pre-line text-sm sm:text-base" v-html="artist.description"> </div>
                                </div>
                                <div class="mt-9 lg:mt-0 lg:w-1/3">
                                    <span class="font-bold leading-4 text-base sm:text-lg lg:text-2xl">{{artist.artist_name}}</span>
                                    <div class="mt-4 whitespace-pre-line text-sm sm:text-base" v-html="artist.bio"> </div>
                                </div>
                            </div>
                        </div>
                        <div v-if="artist.format == 'text'" class="h-full w-full mx-auto">
                            <div class="pb-4 lg:pb-8">
                                <p class="lg:text-[28px] lg:leading-[34px] text-2xl font-bold">{{artist.artist_name}}</p>
                                <p class="lg:text-[28px] lg:leading-[34px] text-lg font-light italic">{{artist.collection_title}}</p>
                            </div>
                            <div class="w-full lg:flex lg:justify-between lg:gap-9">
                                <div class="w-full lg:w-2/3">
                                    <p class="text-sm sm:text-base leading-6">
                                        {{artist.excerpt1}}
                                    </p>
                                    <p class="text-sm sm:text-base mt-3 leading-6">
                                        {{artist.excerpt2}}
                                    </p>
                                    <a :href="artist.link" target="_blank" class="mt-1 text-right underline text-bitten/50 hover:text-bitten">Read More</a>
                                </div>
                                <div class="w-full mt-6 lg:mt-0 lg:w-1/3">
                                    <span class="font-semibold text-base sm:text-lg lg:text-2xl">{{artist.artist_name}}</span>
                                    <!--                            <p> {{artist.bio}} </p>-->
                                    <div v-html="artist.bio" class="mt-4 whitespace-pre-line text-sm sm:text-base"> </div>
                                </div>
                            </div>
                        </div>
                        <div v-if="artist.format == 'video'" class="h-full">
                            <div class="pb-4 lg:pb-8">
                                <p class="lg:text-[28px] lg:leading-[34px] text-2xl font-bold">{{artist.artist_name}}</p>
                                <p class="lg:text-[28px] lg:leading-[34px] text-lg font-light italic">{{artist.collection_title}}</p>
                            </div>
                            <div v-for="art in artist.artworks" :key="art" class="aspect-video">
                                <iframe :src="art.file_name" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" class="w-full h-full" allowfullscreen></iframe>
                            </div>
                            <div class="h-full lg:flex lg:justify-between lg:items-start lg:gap-14 lg:pt-[60px] pt-14">
                                <div class="lg:mt-0 w-full lg:w-2/3 min-h-full">
                                    <span class="font-bold leanding-4 text-base sm:text-lg lg:text-2xl">
                                        About This Collection
                                    </span>
                                    <div class="mt-4 whitespace-pre-line text-sm sm:text-base" v-html="artist.description"> </div>
                                </div>
                                <div class="mt-6 lg:mt-0 lg:w-1/3">
                                    <span class="font-bold leading-4 text-base sm:text-lg lg:text-2xl">{{artist.artist_name}}</span>
                                    <div class="mt-4 whitespace-pre-line text-sm sm:text-base" v-html="artist.bio"> </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div class="pt-6 lg:px-16 sm:px-12 px-6">
                    <p class="text-xl lg:text-2xl font-bold mb-6 lg:mb-12 mt-2">Continue To</p>
                    <div class="flex flex-col lg:flex-row">
                        <div class="bg-url-1 w-full h-60 lg:w-1/3 lg:h-[30rem] bg-top bg-cover">
                            <a href="/exhibitions/interwoven-identities/roots-and-reconciliation">
                             
                                <div class="backdrop-brightness-50 lg:backdrop-brightness-100 w-full h-full flex items-center md:transition-all md:ease-in md:ease-out md:duration-300 lg:hover:backdrop-brightness-50 group">
                                    <p class="text-center mx-auto text-ivory font-extralight text-2xl lg:text-4xl  lg:leading-[44px]  lg:transition-all lg:ease-in lg:ease-out lg:duration-300 lg:group-hover:opacity-100 lg:opacity-0 opacity-100 px-4 lg:px-8">ROOTS AND <span class="inline lg:block">RECONCILIATION</span></p>
                                </div>
                            </a>
                        </div>
                        <div class="bg-url-3 w-full h-60 lg:w-1/3 lg:h-[30rem] bg-top bg-cover">
                            <a href="/exhibitions/interwoven-identities/between-two-worlds">
                                <div class="backdrop-brightness-50 lg:backdrop-brightness-100 w-full h-full flex items-center md:transition-all md:ease-in md:ease-out md:duration-300 lg:hover:backdrop-brightness-50 group">
                                    <p class="text-center mx-auto text-ivory font-extralight text-2xl lg:text-4xl  lg:leading-[44px]  lg:transition-all lg:ease-in lg:ease-out lg:duration-300 lg:group-hover:opacity-100 lg:opacity-0 opacity-100 px-4 lg:px-8">BETWEEN TWO <span class="inline lg:block">WORLDS</span></p>
                                </div>
                            </a>
                        </div>
                        <div class="bg-url-4 w-full h-60 lg:w-1/3 lg:h-[30rem] bg-top bg-cover">
                            <a href="/exhibitions/interwoven-identities/resilience-in-community">
                                <div class="backdrop-brightness-50 lg:backdrop-brightness-100 w-full h-full flex items-center md:transition-all md:ease-in md:ease-out md:duration-300 lg:hover:backdrop-brightness-50 group">
                                    <p class="text-center mx-auto text-ivory font-extralight text-2xl lg:text-4xl  lg:leading-[44px]  lg:transition-all lg:ease-in lg:ease-out lg:duration-300 lg:group-hover:opacity-100 lg:opacity-0 opacity-100 px-4 lg:px-8">RESILIENCE IN <span class="inline lg:block">COMMUNITY</span></p>
                                </div>
                            </a>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        <FooterComponent class="text-stone-800/60 bg-ivory lg:border-t lg:border-stone-400/50" />
    </div>
</template>
<style>
.banner5-url {
    background-image: url('../assets/Interwoven-Overview/Whisper.jpg');
}
</style>