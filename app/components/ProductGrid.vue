<template>
  <section id="products" class="bg-white py-24">
    <div class="mx-auto max-w-7xl px-6">

      <!-- Section Header -->
      <div class="mb-16 max-w-2xl">
  <span class="text-blue-700 font-bold tracking-wider uppercase text-sm">{{ $t('products.badge') }}</span>
  <h2 class="mt-2 text-3xl font-bold text-slate-900 sm:text-4xl">{{ $t('products.title') }}</h2>
  <p class="mt-4 text-slate-600 text-lg">
    {{ $t('products.subtitle') }}
  </p>
</div>

      <!-- The Grid -->
      <div class="grid gap-8 sm:grid-cols-2 lg:grid-cols-3">

        <!-- Product Card Loop -->
        <div
          v-for="product in products"
          :key="product.id"
          class="group relative border border-slate-200 bg-white transition-all hover:shadow-xl hover:-translate-y-1"
        >
          <!-- Image Area (Placeholder) -->
          <div class="aspect-[4/3] w-full bg-slate-100 relative overflow-hidden">
            <!-- This simulates a product image -->
            <div class="absolute inset-0 flex items-center justify-center text-slate-300">
              <svg class="w-12 h-12" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="1" d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z"></path></svg>
            </div>
            <!-- Badge -->
            <div class="absolute top-4 left-4 bg-white/90 backdrop-blur px-2 py-1 text-xs font-bold text-slate-900 border border-slate-200">
              {{ product.category }}
            </div>
          </div>

          <!-- Content -->
          <div class="p-6">
            <h3 class="text-xl font-bold text-slate-900 group-hover:text-blue-700 transition-colors">
              {{ product.name }}
            </h3>
            <p class="mt-2 text-sm text-slate-500 line-clamp-2">
              {{ product.description }}
            </p>

            <!-- Specs Table -->
            <div class="mt-6 border-t border-slate-100 pt-4">
              <dl class="grid grid-cols-2 gap-x-4 gap-y-2 text-xs">
                <div>
                  <dt class="text-slate-400">Material</dt>
                  <dd class="font-medium text-slate-700">{{ product.material }}</dd>
                </div>
                <div>
                  <dt class="text-slate-400">Weight</dt>
                  <dd class="font-medium text-slate-700">{{ product.weight }}</dd>
                </div>
              </dl>
            </div>
          </div>
        </div>

      </div>

      <!-- View All Button -->
      <div class="mt-12 text-center">
       <button class="inline-flex items-center gap-2 text-blue-700 font-semibold hover:text-blue-800">
  {{ $t('products.btn_download') }}
  <span>&rarr;</span>
</button>
      </div>

    </div>
  </section>
</template>

<script setup>
const products = [
  {
    id: 1,
    name: 'Hydraulic Twin-Tube Shock',
    category: 'Passenger Vehicle',
    description: 'Standard replacement shock absorber designed for comfort and durability in sedans.',
    material: 'Steel Alloy 4140',
    weight: '2.4 kg'
  },
  {
    id: 2,
    name: 'Mono-Tube Gas Strut',
    category: 'Performance',
    description: 'High-pressure gas design for rapid response and reduced fading in sports applications.',
    material: 'Aluminum / Steel',
    weight: '1.8 kg'
  },
  {
    id: 3,
    name: 'Air Suspension Module',
    category: 'Luxury / SUV',
    description: 'Integrated air spring and damper unit for adjustable ride height control.',
    material: 'Composite / Rubber',
    weight: '4.2 kg'
  },
  {
    id: 4,
    name: 'Heavy Duty Leaf Spring',
    category: 'Commercial',
    description: 'Reinforced multi-leaf system for light trucks and commercial vans.',
    material: 'Spring Steel 5160',
    weight: '12.5 kg'
  },
  {
    id: 5,
    name: 'Coilover Assembly',
    category: 'Aftermarket',
    description: 'Adjustable damping and ride height for tuning enthusiasts.',
    material: 'Anodized Aluminum',
    weight: '3.1 kg'
  },
  {
    id: 6,
    name: 'Electronic Damper Control',
    category: 'EV / Modern',
    description: 'Smart suspension system that adapts to road conditions in milliseconds.',
    material: 'Mixed Alloy',
    weight: '2.9 kg'
  }
]
</script>
