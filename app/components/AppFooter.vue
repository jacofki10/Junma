<script setup>
import { ref } from 'vue'

// 1. State to control the popup
const showCert = ref(false)
const showCert1 = ref(false)
</script>
<template>
  <footer class="bg-slate-900 text-slate-300 py-16">
    <div class="mx-auto max-w-7xl px-6">

      <div class="grid gap-12 md:grid-cols-2 lg:grid-cols-4">

        <!-- Column 1: Company Info -->
        <div>
          <div class="flex items-center gap-2 mb-2 text-white">
             <!-- Logo Section -->
          <div class="flex items-center gap-3 mb-6 text-white">
            <!-- Replaced the 'F' div with the Image -->
            <img
              src="/logo.png"
              alt="Company Logo"
              class="h-8 w-auto object-contain bg-white rounded-sm p-0.5"
            />

            <!-- Brand Text (Dynamic) -->
            <span class="text-l font-bold tracking-tight">
              {{ $t('brand.first') }}
            </span>
          </div>
          </div>
          <p class="text-sm leading-relaxed text-slate-400">
  {{ $t('footer.desc') }}
</p>
          <!-- <div class="mt-6 flex gap-4">

            <div class="h-8 w-8 bg-slate-800 rounded flex items-center justify-center hover:bg-blue-700 transition-colors cursor-pointer">in</div>
            <div class="h-8 w-8 bg-slate-800 rounded flex items-center justify-center hover:bg-blue-700 transition-colors cursor-pointer">X</div>
          </div>
          -->
        </div>

        <!-- Column 2: Quick Links -->
        <div>
         <h3 class="text-white font-bold mb-6">{{ $t('footer.links') }}</h3>
          <ul class="space-y-3 text-sm">
            <li><a href="#" class="hover:text-white transition-colors">{{ $t('nav.products') }}</a></li>
            <li><a href="#" class="hover:text-white transition-colors">{{ $t('nav.quality') }}</a></li>
          </ul>
        </div>

        <!-- Column 3: Contact -->
        <div>
          <h3 class="text-white font-bold mb-6">{{ $t('footer.contact') }}</h3>
          <ul class="space-y-3 text-sm">
            <li class="flex gap-3">
              <span class="text-blue-500">📍</span>
              <span>{{ $t('contact.address_text') }}</span>
            </li>
            <li class="flex gap-3">
              <span class="text-blue-500">📧</span>
              <span>xs@yhfmyj.com.cn</span>
            </li>
            <!--<li class="flex gap-3">
              <span class="text-blue-500">📞</span>
              <span>+86 571 1234 5678</span>
            </li>-->
          </ul>
        </div>

        <!-- Column 4: Certifications -->
        <div>
          <h3 class="text-white font-bold mb-6">{{ $t('footer.certification') }}</h3>
          <button class="bg-slate-800 p-4 rounded border border-slate-700"     @click="showCert = true" style="width: -webkit-fill-available;">
            <p class="text-xs font-bold text-white uppercase tracking-wider mb-1">IATF 16949:2016</p>
            <p class="text-xs text-slate-500">Reg. No: 0123456789</p>
          </button>
          <button @click="showCert1 = true" class="mt-3 bg-slate-800 p-4 rounded border border-slate-700" style="width: -webkit-fill-available;">
            <p class="text-xs font-bold text-white uppercase tracking-wider mb-1">ISO 14001:2015</p>
            <p class="text-xs text-slate-500">Environmental Mgmt</p>
          </button>
        </div>

      </div>

      <!-- Bottom Bar -->
      <div class="mt-16 border-t border-slate-800 pt-8 text-center text-xs text-slate-500">
       <p>&copy; 2025 Ningbo Mundo {{ $t('footer.rights') }}</p>
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
     <div v-if="showCert1" class="fixed inset-0 z-[100] flex items-center justify-center p-4">

      <!-- Dark Background (Click to close) -->
      <div
        @click="showCert1 = false"
        class="absolute inset-0 bg-black/80 backdrop-blur-sm transition-opacity"
      ></div>

      <!-- The Image Container -->
      <div class="relative bg-white rounded-lg shadow-2xl max-w-3xl w-full max-h-[90vh] overflow-auto p-2">

        <!-- Close Button (Top Right) -->
        <button
          @click="showCert1 = false"
          class="absolute top-4 right-4 bg-slate-900 text-white w-8 h-8 rounded-full flex items-center justify-center hover:bg-red-600 transition-colors z-10"
        >
          ✕
        </button>

        <!-- The Certificate Image -->
        <img
          src="/iso14001.png"
          alt="IATF 16949 Certificate"
          class="w-full h-auto rounded-md"
        />
      </div>
    </div>
  </footer>
</template>
