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
              {{ $t('brand.first') }} <span class="text-blue-500">{{ $t('brand.second') }}</span>
            </span>
          </div>
          </div>
          <p class="text-sm leading-relaxed text-slate-400">
  {{ $t('footer.desc') }}
</p>
          <div class="mt-6 flex gap-4">
            <!-- Social Placeholders -->
            <div class="h-8 w-8 bg-slate-800 rounded flex items-center justify-center hover:bg-blue-700 transition-colors cursor-pointer">in</div>
            <div class="h-8 w-8 bg-slate-800 rounded flex items-center justify-center hover:bg-blue-700 transition-colors cursor-pointer">X</div>
          </div>
        </div>

        <!-- Column 2: Quick Links -->
        <div>
         <h3 class="text-white font-bold mb-6">{{ $t('footer.links') }}</h3>
          <ul class="space-y-3 text-sm">
            <li><a href="#" class="hover:text-white transition-colors">Product Catalog</a></li>
            <li><a href="#" class="hover:text-white transition-colors">Quality Control</a></li>
            <li><a href="#" class="hover:text-white transition-colors">Factory Tour</a></li>
            <li><a href="#" class="hover:text-white transition-colors">News & Events</a></li>
          </ul>
        </div>

        <!-- Column 3: Contact -->
        <div>
          <h3 class="text-white font-bold mb-6">{{ $t('footer.contact') }}</h3>
          <ul class="space-y-3 text-sm">
            <li class="flex gap-3">
              <span class="text-blue-500">📍</span>
              <span>Ningbo, Zhejiang, China</span>
            </li>
            <li class="flex gap-3">
              <span class="text-blue-500">📧</span>
              <span>sales@factorycorp.com</span>
            </li>
            <li class="flex gap-3">
              <span class="text-blue-500">📞</span>
              <span>+86 571 1234 5678</span>
            </li>
          </ul>
        </div>

        <!-- Column 4: Certifications -->
        <div>
          <h3 class="text-white font-bold mb-6">Certifications</h3>
          <div class="bg-slate-800 p-4 rounded border border-slate-700">
            <p class="text-xs font-bold text-white uppercase tracking-wider mb-1">IATF 16949:2016</p>
            <p class="text-xs text-slate-500">Reg. No: 0123456789</p>
          </div>
          <div class="mt-3 bg-slate-800 p-4 rounded border border-slate-700">
            <p class="text-xs font-bold text-white uppercase tracking-wider mb-1">ISO 14001:2015</p>
            <p class="text-xs text-slate-500">Environmental Mgmt</p>
          </div>
        </div>

      </div>

      <!-- Bottom Bar -->
      <div class="mt-16 border-t border-slate-800 pt-8 text-center text-xs text-slate-500">
       <p>&copy; 2025 Ningbo Mundo {{ $t('footer.rights') }}</p>
      </div>

    </div>
  </footer>
</template>
