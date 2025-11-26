<script setup>
import AppNavbar from '~/components/AppNavbar.vue'
import HeroSection from '~/components/HeroSection.vue' // <--- Import Hero
import ProductGrid from '~/components/ProductGrid.vue'
import QualitySection from '~/components/QualitySection.vue'
import HistoryTimeline from '~/components/HistoryTimeline.vue'
import ContactSection from '~/components/ContactSection.vue'
import AppFooter from '~/components/AppFooter.vue'
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
