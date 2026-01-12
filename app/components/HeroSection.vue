<template>
  <header class="relative bg-white py-24 lg:py-32">
    <div class="mx-auto max-w-7xl px-6 grid lg:grid-cols-2 gap-12 items-center">

      <!-- Text -->
      <div>
        <div class="inline-block border border-blue-200 bg-blue-50 px-3 py-1 text-xs font-bold text-blue-800 uppercase tracking-wider mb-6">
          {{ $t('hero.badge') }}
        </div>
        <h1 class="text-4xl font-extrabold tracking-tight text-slate-900 sm:text-6xl">
          {{ $t('hero.title') }} <span class="text-blue-700">{{ $t('hero.highlight') }}</span>
        </h1>
        <p class="mt-6 text-lg text-slate-600 leading-relaxed">
          {{ $t('hero.subtitle') }}
        </p>
        <div class="mt-8 flex gap-4">

          <button class="bg-blue-700 px-8 py-3 text-white font-semibold hover:bg-blue-800 transition-colors">
            <a href="#products" class=" transition-colors">{{ $t('hero.cta_catalog') }}</a>
          </button>
        </div>
      </div>

      <!-- Image -->
      <div class="relative h-96 w-full rounded-2xl overflow-hidden shadow-2xl">
        <img
          src="https://images.unsplash.com/photo-1486262715619-67b85e0b08d3?q=80&w=2832&auto=format&fit=crop"
          alt="Factory Floor"
          class="h-full w-full object-cover"
        />
      </div>

    </div>
  </header>
</template>
