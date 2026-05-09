<script setup>
import AppNavbar from "~/components/AppNavbar.vue";
import HeroSection from "~/components/HeroSection.vue"; // <--- Import Hero
import ProductGrid from "~/components/ProductGrid.vue";
import QualitySection from "~/components/QualitySection.vue";
import HistoryTimeline from "~/components/HistoryTimeline.vue";
import ContactSection from "~/components/ContactSection.vue";
import AppFooter from "~/components/AppFooter.vue";

useSeoMeta({
  title: "Ningbo Junma | Premium Manufacturing & Export",
  description:
    "High-quality manufacturing, CAD design, and export services based in Ningbo, China. Discover our history and product quality.",
  ogTitle: "Ningbo Junma | Premium Manufacturing",
  ogDescription: "High-quality manufacturing, CAD design, and export services.",
  ogImage: "/JUNMA_LOGO.webp",
});

// <--- AUTO DETECT USER LANGUAGE
import { onMounted } from "vue";
const { setLocale } = useI18n();
onMounted(() => {
  // 1. Get the user's browser language (e.g., 'zh-CN', 'en-US')
  const browserLang = navigator.language.toLowerCase();

  // 2. Route them to the correct translation
  if (browserLang.startsWith("zh")) {
    setLocale("zh");
  } else if (browserLang.startsWith("es")) {
    setLocale("es");
  } else if (browserLang.startsWith("ja")) {
    setLocale("ja");
  } else {
    setLocale("en"); // Default fallback for the rest of the world
  }
});
</script>

<template>
  <div class="min-h-screen bg-white font-sans text-slate-800">
    <AppNavbar />
    <HeroSection />
    <ProductGrid />
    <QualitySection />
    <HistoryTimeline />
    <ContactSection />
    <AppFooter />
  </div>
</template>
<style>
html {
  scroll-behavior: smooth;
}
</style>
