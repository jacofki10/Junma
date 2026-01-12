<template>
  <section id="products" class="bg-white py-24">
    <!-- Changed max-w-7xl to max-w-[1400px] to give 4 columns more room -->
    <div class="mx-auto max-w-[1400px] px-6">

      <!-- Section Header -->
      <div class="mb-16 max-w-3xl">
        <span class="text-blue-700 font-bold tracking-wider uppercase text-sm">
          {{ $t('products.badge') }}
        </span>
        <h2 class="mt-2 text-3xl font-bold text-slate-900 sm:text-4xl">
          {{ $t('products.title') }}
        </h2>
        <p class="mt-4 text-slate-600 text-lg">
          {{ $t('products.subtitle') }}
        </p>
      </div>
      <div class="grid gap-10 sm:grid-cols-2 lg:grid-cols-4">

        <div
          v-for="n in 4"
          :key="n"
          class="group relative border border-slate-200 bg-white transition-all hover:shadow-xl hover:-translate-y-1"
        >
          <!-- Image Area -->
         <div class="aspect-[4/4] w-full bg-slate-100 relative overflow-hidden">
    <div class="absolute inset-0 flex justify-center text-slate-300">
      <img :src="`/Junma/product_${n}.png`" :alt="`Product ${n}`" class="max-w-full max-h-full object-contain" />
    </div>
  </div>

          <!-- Content -->
          <div class="p-5"> <!-- Reduced padding slightly for narrower cards -->
            <h3 class="text-lg font-bold text-slate-900 group-hover:text-blue-700 transition-colors">
              {{ $t(`products.items.${n-1}.name`) }}
            </h3>

            <p class="mt-2 text-xs text-slate-500 line-clamp-3">
              {{ $t(`products.items.${n-1}.description`) }}
            </p>

            <!-- Specs Table -->
            <div class="mt-4 border-t border-slate-100 pt-3">
              <dl class="grid grid-cols-2 gap-x-2 gap-y-2 text-[11px]"> <!-- Smaller text for 4-col layout -->
                <div>
                  <dt class="text-slate-600"> {{ $t('products.volume') }}   {{ $t(`products.items.${n-1}.volume`) }}</dt>
                </div>
              </dl>
            </div>
          </div>
        </div>

      </div>

      <!-- View All Button
      <div class="mt-12 text-center">
        <button class="inline-flex items-center gap-2 text-blue-700 font-semibold hover:text-blue-800">
          {{ $t('products.btn_download') }}
          <span>&rarr;</span>
        </button>
      </div>
     -->
    </div>
  </section>
</template>

<script setup>
// No script needed
</script>
