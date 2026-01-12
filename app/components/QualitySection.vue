<script setup>
import { ref } from 'vue'

// 1. State to control the popup
const showCert = ref(false)
</script>

<template>
  <section id="quality" class="py-24 sm:py-32">
    <div class="mx-auto max-w-7xl px-6 lg:px-8">

      <!-- Header -->
      <div class="mb-12 text-center">
        <span class="text-blue-700 font-bold tracking-wider uppercase text-sm">{{ $t('quality.badge') }}</span>
        <h2 class="mt-2 text-3xl font-bold text-slate-900">{{ $t('quality.title') }}</h2>
        <p class="mt-4 text-slate-600 max-w-2xl mx-auto">
          {{ $t('quality.desc') }}
        </p>
      </div>

      <!-- Grid Layout -->
      <div class="grid grid-cols-1 lg:grid-cols-3 gap-8">

        <!-- Card 1: Certification (The Blue Box) -->
        <div class="bg-blue-900 rounded-2xl p-8 text-white flex flex-col justify-between relative overflow-hidden">
          <!-- Background decoration -->
          <div class="absolute top-0 right-0 -mt-4 -mr-4 w-24 h-24 bg-blue-800 rounded-full opacity-50 blur-2xl"></div>

          <div>
            <div class="text-4xl mb-4">🛡️</div>
            <h3 class="text-xl font-bold mb-2">IATF 16949</h3>
            <p class="text-blue-200 max-w-md mb-6">
              {{ $t('quality.cert_text') }}
            </p>
          </div>

          <!-- 2. The Trigger Button -->
          <button
            @click="showCert = true"
            class="text-left text-sm font-semibold text-white underline decoration-blue-400 underline-offset-4 hover:text-blue-200 transition-colors"
          >
            {{ $t('quality.view_cert') }} &rarr;
          </button>
        </div>

        <!-- Card 2: Lab -->
        <div class="bg-slate-50 rounded-2xl p-8 border border-slate-100">
          <div class="text-4xl mb-4">🔬</div>
          <h3 class="text-lg font-bold text-slate-900">{{ $t('quality.lab') }}</h3>
          <p class="mt-2 text-slate-600 text-sm">{{ $t('quality.lab_text') }}</p>
        </div>

        <!-- Card 3: Precision -->
        <div class="bg-slate-50 rounded-2xl p-8 border border-slate-100">
          <div class="text-4xl mb-4">⚙️</div>
          <h3 class="text-lg font-bold text-slate-900">{{ $t('quality.precision') }}</h3>
          <p class="mt-2 text-slate-600 text-sm">{{ $t('quality.precision_text') }}</p>
        </div>

      </div>
    </div>

    <!-- 3. The Modal (Popup) -->
    <!-- Only shows if showCert is true -->
    <div v-if="showCert" class="fixed inset-0 z-[100] flex items-center justify-center p-4">

      <!-- Dark Background (Click to close) -->
      <div
        @click="showCert = false"
        class="absolute inset-0 bg-black/80 backdrop-blur-sm transition-opacity"
      ></div>

      <!-- The Image Container -->
      <div class="relative bg-white rounded-lg shadow-2xl max-w-3xl w-full max-h-[90vh] overflow-auto p-2">

        <!-- Close Button (Top Right) -->
        <button
          @click="showCert = false"
          class="absolute top-4 right-4 bg-slate-900 text-white w-8 h-8 rounded-full flex items-center justify-center hover:bg-red-600 transition-colors z-10"
        >
          ✕
        </button>

        <!-- The Certificate Image -->
        <img
          src="/iatf16949.png"
          alt="IATF 16949 Certificate"
          class="w-full h-auto rounded-md"
        />
      </div>
    </div>

  </section>
</template>
