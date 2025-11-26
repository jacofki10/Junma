<script setup>
const { locale, setLocale } = useI18n()

// This function runs when you select a new option
function onLanguageChange(event) {
  const newLang = event.target.value
  setLocale(newLang) // This forces Nuxt to reload with the new language URL
}
</script>

<template>
  <nav class="sticky top-0 z-50 border-b border-slate-200 bg-white/90 backdrop-blur-md">
    <div class="mx-auto flex max-w-7xl items-center justify-between px-6 py-4">

     <!-- Logo -->
<div class="flex items-center gap-3 cursor-pointer">
<a
  href="#"
  class="flex items-center gap-3 cursor-pointer hover:opacity-80 transition-opacity"
>
  <!-- 1. The Image -->
  <!-- 'src="/logo.png"' looks inside the public folder automatically -->
  <img
    src="/logo.png"
    alt="Company Logo"
    class="h-10 w-auto object-contain"
  />

  <!-- Text (Now Dynamic) -->
  <span class="text-xl font-bold tracking-tight text-slate-900 hidden sm:block">
    <!-- First part (Black) -->
    {{ $t('brand.first') }}

    <!-- Second part (Blue) -->
    <span class="text-blue-700">{{ $t('brand.second') }}</span>
  </span>
</a>
</div>

      <!-- Links -->
      <div class="hidden md:flex items-center gap-8 text-sm font-medium text-slate-600">
        <a href="#products" class="hover:text-blue-700 transition-colors">{{ $t('nav.products') }}</a>
        <a href="#quality" class="hover:text-blue-700 transition-colors">{{ $t('nav.quality') }}</a>
        <a href="#history" class="hover:text-blue-700 transition-colors">{{ $t('nav.history') }}</a>
      </div>

      <!-- Right Side -->
      <div class="flex items-center gap-4">

        <!-- FIXED: Language Dropdown -->
        <div class="relative">
          <select
            :value="locale"
            @change="onLanguageChange"
            class="appearance-none bg-transparent font-bold text-sm text-slate-600 hover:text-blue-700 cursor-pointer focus:outline-none pr-4"
          >
            <option value="en">English</option>
            <option value="zh">中文</option>
            <option value="ja">日本語</option>
            <option value="es">Español</option>
          </select>
          <!-- Arrow Icon -->
          <span class="absolute right-0 top-1/2 -translate-y-1/2 text-xs text-slate-400 pointer-events-none">▼</span>
        </div>

       <a
  href="#contact"
  class="bg-slate-900 px-5 py-2 text-sm font-semibold text-white hover:bg-blue-700 transition-colors rounded-full"
>
  {{ $t('nav.contact') }}
</a>
      </div>

    </div>
  </nav>
</template>
