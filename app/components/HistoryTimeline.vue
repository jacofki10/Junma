<script setup>
// We import 'tm' (Translate Message) and 'rt' (Resolve Translation)
const { tm, rt } = useI18n()
</script>

<template>
  <section id="history" class="py-24 sm:py-32 bg-white">
    <div class="mx-auto max-w-7xl px-6 lg:px-8">

      <!-- Header -->
      <div class="mx-auto max-w-6xl lg:text-center mb-16">
        <h2 class="text-3xl font-bold tracking-tight text-slate-900 sm:text-4xl">
          {{ $t('history.title') }}
        </h2>
        <p class="mt-4 text-lg leading-8 text-slate-600">
          {{ $t('history.subtitle') }}
        </p>
      </div>

      <!-- Timeline Grid -->
      <div class="mx-auto grid max-w-2xl grid-cols-1 gap-8 overflow-hidden lg:mx-0 lg:max-w-none lg:grid-cols-4">

        <!--
          v-for loop:
          We use tm('history.steps') to get the array from the JSON file.
          We use rt(step.xxx) to display the text safely.
        -->
        <div v-for="(step, index) in tm('history.steps')" :key="index">
          <time class="flex items-center text-sm font-semibold leading-6 text-blue-600">
            <svg viewBox="0 0 4 4" class="mr-4 h-1 w-1 flex-none" aria-hidden="true"><circle cx="2" cy="2" r="2" fill="currentColor" /></svg>
            {{ rt(step.year) }}
            <div class="absolute -ml-2 h-px w-screen -translate-x-full bg-gray-900/10 sm:-ml-4 lg:static lg:-mr-6 lg:ml-8 lg:w-auto lg:flex-auto lg:translate-x-0" aria-hidden="true"></div>
          </time>
          <p class="mt-6 text-lg font-semibold leading-8 tracking-tight text-slate-900">
            {{ rt(step.title) }}
          </p>
          <p class="mt-1 text-base leading-7 text-slate-600">
            {{ rt(step.desc) }}
          </p>
        </div>

      </div>
    </div>
  </section>
</template>
