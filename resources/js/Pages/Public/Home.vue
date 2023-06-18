<template>
    <Hero :projectName="'Learning Management System'"
        :projectDescription="'An Open source(MIT) Learning Management System (LMS) built with in VILT Stack.'"
        :whatsNewText="'New eCommerce Project Available in LaraVueTail'" :whatsNewLink="'https://laravuetail.com/'"
        :projectGitRepoLink="'https://github.com/LaraVueTail/Learning-Management-System-LMS-Laravel-Vue-Tailwind-Inertia-VILT-Stack'">
    </Hero>
    <WatchVideoVue></WatchVideoVue>
    <WhatIsThis></WhatIsThis>
    <!-- <Posts :noColumn="2" :heading="'Blog Posts'" :subHeading="'Checkout our sample posts.'" :posts="posts"></Posts> -->
</template>
<script>
export default {
    props: ["posts"],
};
</script>
<script setup>
import Hero from "../../Shared/HomePageContents/Hero.vue";
import WatchVideoVue from '../../Shared/HomePageContents/WatchVideo.vue';
import WhatIsThis from "../../Shared/HomePageContents/WhatIsThis.vue";
// import Posts from "./Posts/Index.vue";
</script>
