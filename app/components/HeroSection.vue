<template>
  <header class="relative bg-white py-24 lg:py-32">
    <div class="mx-auto max-w-7xl px-6 grid lg:grid-cols-2 gap-12 items-center">
      <!-- Left Side: Text & Buttons -->
      <div>
        <div
          class="inline-block border border-blue-200 bg-blue-50 px-3 py-1 text-xs font-bold text-blue-800 uppercase tracking-wider mb-6"
        >
          {{ $t("hero.badge") }}
        </div>

        <h1
          class="text-4xl font-extrabold tracking-tight text-slate-900 sm:text-6xl"
        >
          {{ $t("hero.title") }}
          <span class="text-blue-700">{{ $t("hero.highlight") }}</span>
        </h1>

        <p class="mt-6 text-lg text-slate-600 leading-relaxed">
          {{ $t("hero.subtitle") }}
        </p>

        <div class="mt-8 flex flex-wrap gap-4">
          <!-- Primary Button -->
          <a
            href="#products"
            class="bg-blue-700 px-8 py-3 text-white font-semibold hover:bg-blue-800 transition-colors inline-block text-center"
          >
            {{ $t("hero.cta_catalog") }}
          </a>

          <!-- Secondary Button (Now using Tailwind to match your setup) -->
          <button
            @click="openVideoPopup"
            class="flex items-center gap-2 px-8 py-3 border-2 border-slate-200 text-slate-900 font-semibold hover:border-blue-700 hover:text-blue-700 transition-all bg-transparent"
          >
            {{ $t("hero.factory_tour") }}
          </button>
        </div>
      </div>

      <!-- Right Side: The Looping Trailer -->
      <div
        class="relative w-full rounded-2xl overflow-hidden shadow-2xl bg-slate-100 aspect-video"
      >
        <video
          class="w-full h-full object-cover"
          autoplay
          loop
          muted
          playsinline
          :poster="`/Junma/engine-poster.png`"
        >
          <source :src="`/Junma/shortVideo.mp4`" type="video/mp4" />
          Your browser does not support the video tag.
        </video>
      </div>
    </div>
  </header>

  <!-- The Pop-up Modal (Teleported to the body to prevent layout conflicts) -->
  <Teleport to="body">
    <div v-if="isModalOpen" class="modal-overlay" @click.self="closeVideoPopup">
      <div class="modal-content">
        <!-- Close Button -->
        <button
          class="close-button"
          @click="closeVideoPopup"
          aria-label="Close video"
        >
          ✕
        </button>

        <!-- The Full 2-Minute Video   test-->
        <div class="video-wrapper">
          <!-- Assuming you are self-hosting the full video based on your path structure -->
          <video controls autoplay class="full-video">
            <source :src="`/Junma/fullVideo480.mp4`" type="video/mp4" />
            Your browser does not support the video tag.
          </video>
        </div>
      </div>
    </div>
  </Teleport>
</template>

<script setup>
import { ref } from "vue";

// Reactive state to control the pop-up
const isModalOpen = ref(false);

const openVideoPopup = () => {
  isModalOpen.value = true;
  // Lock the background scrolling so the user doesn't accidentally scroll away
  document.body.style.overflow = "hidden";
};

const closeVideoPopup = () => {
  isModalOpen.value = false;
  // Restore background scrolling when closed
  document.body.style.overflow = "auto";
};
</script>

<style scoped>
/*
  Note: All your previous layout CSS was removed because Tailwind
  is already handling your grid, padding, and typography perfectly!
*/

/* --- MODAL / POP-UP STYLES --- */

/* The dark background overlay */
.modal-overlay {
  position: fixed;
  top: 0;
  left: 0;
  width: 100vw;
  height: 100vh;
  background-color: rgba(
    15,
    23,
    42,
    0.9
  ); /* Tailwind slate-900 with 90% opacity */
  display: flex;
  justify-content: center;
  align-items: center;
  z-index: 9999;
  padding: 2rem;
  box-sizing: border-box;
}

/* The box holding the video */
.modal-content {
  position: relative;
  width: 100%;
  max-width: 1000px;
  background: #000;
  border-radius: 12px;
  box-shadow: 0 25px 50px -12px rgba(0, 0, 0, 0.5);
}

/* The Close Button (X) */
.close-button {
  position: absolute;
  top: -40px;
  right: 0;
  background: none;
  border: none;
  color: white;
  font-size: 2rem;
  cursor: pointer;
  transition: color 0.2s;
}

.close-button:hover {
  color: #93c5fd; /* Tailwind blue-300 */
}

/* Responsive 16:9 Video Wrapper */
.video-wrapper {
  position: relative;
  padding-bottom: 56.25%; /* 16:9 aspect ratio */
  height: 0;
  overflow: hidden;
  border-radius: 12px;
}

.video-wrapper .full-video {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  border: none;
  background-color: #000;
}
</style>
