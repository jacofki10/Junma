<script setup>
import { ref } from 'vue'

const form = ref({
  name: '',
  company: '',
  email: '',
  message: ''
})

function handleSubmit() {
  alert(`Thank you ${form.value.name}! We will contact ${form.value.company} shortly.`)
  form.value = { name: '', company: '', email: '', message: '' }
}
</script>

<template>
  <section id="contact" class="bg-slate-900 py-24 text-white">
    <div class="mx-auto max-w-7xl px-6">

      <div class="grid gap-16 lg:grid-cols-2">

        <!-- Left Column: The Pitch -->
        <div>
          <span class="text-blue-500 font-bold tracking-wider uppercase text-sm">
            {{ $t('contact.label') }}
          </span>
          <h2 class="mt-2 text-3xl font-bold sm:text-4xl">
            {{ $t('contact.title') }}
          </h2>
          <p class="mt-6 text-lg text-slate-400 leading-relaxed">
            {{ $t('contact.desc') }}
          </p>

          <div class="mt-10 space-y-6">
            <!-- Sales Info -->
            <div class="flex items-start gap-4">
              <div class="flex h-10 w-10 shrink-0 items-center justify-center rounded bg-blue-900/50 text-blue-400">
                ✉️
              </div>
              <div>
                <h3 class="font-semibold text-white">{{ $t('contact.sales') }}</h3>
                <p class="text-slate-400">xs@yhfmyj.com.cn</p>
                <p class="text-xs text-slate-500 mt-1">{{ $t('contact.response') }}</p>
              </div>
            </div>

            <!-- Factory Info -->
            <div class="flex items-start gap-4">
              <div class="flex h-10 w-10 shrink-0 items-center justify-center rounded bg-blue-900/50 text-blue-400">
                🏭
              </div>
              <div>
                <h3 class="font-semibold text-white">{{ $t('contact.factory') }}</h3>
                <p class="text-slate-400 whitespace-pre-line">
                  {{ $t('contact.address_text') }}
                </p>
              </div>
            </div>
          </div>
        </div>

        <!-- Right Column: The Form -->
        <div class="rounded-2xl bg-white p-8 text-slate-900 shadow-2xl lg:p-10">
          <h3 class="text-xl font-bold mb-6">{{ $t('contact.form_title') }}</h3>

          <form @submit.prevent="handleSubmit" class="space-y-4">

            <!-- Row 1: Name & Company -->
            <div class="grid gap-4 md:grid-cols-2">
              <div>
                <label class="mb-1 block text-sm font-medium text-slate-700">
                  {{ $t('contact.form.name') }}
                </label>
                <input
                  v-model="form.name"
                  type="text"
                  class="w-full rounded border border-slate-300 px-4 py-2 focus:border-blue-600 focus:outline-none focus:ring-1 focus:ring-blue-600"
                />
              </div>
              <div>
                <label class="mb-1 block text-sm font-medium text-slate-700">
                  {{ $t('contact.form.company') }}
                </label>
                <input
                  v-model="form.company"
                  type="text"
                  class="w-full rounded border border-slate-300 px-4 py-2 focus:border-blue-600 focus:outline-none focus:ring-1 focus:ring-blue-600"
                />
              </div>
            </div>

            <!-- Row 2: Email -->
            <div>
              <label class="mb-1 block text-sm font-medium text-slate-700">
                {{ $t('contact.form.email') }}
              </label>
              <input
                v-model="form.email"
                type="email"
                class="w-full rounded border border-slate-300 px-4 py-2 focus:border-blue-600 focus:outline-none focus:ring-1 focus:ring-blue-600"
              />
            </div>

            <!-- Row 3: Message -->
            <div>
              <label class="mb-1 block text-sm font-medium text-slate-700">
                {{ $t('contact.form.message') }}
              </label>
              <textarea
                v-model="form.message"
                rows="4"
                class="w-full rounded border border-slate-300 px-4 py-2 focus:border-blue-600 focus:outline-none focus:ring-1 focus:ring-blue-600"
              ></textarea>
            </div>

            <!-- Submit -->
            <button type="submit" class="w-full rounded bg-blue-700 py-3 font-bold text-white hover:bg-blue-800 transition-colors">
              {{ $t('contact.form.submit') }}
            </button>

            <p class="text-center text-xs text-slate-500 mt-4">
              {{ $t('contact.security') }}
            </p>

          </form>
        </div>

      </div>

    </div>
  </section>
</template>
