<template>
  <div class="relative overflow-hidden" :class="[
    containerClass,
    // If standalone (withBackground is true), apply default styling
    withBackground ? 'rounded-2xl shadow-lg' : ''
  ]">
    <!-- Background provided via prop or slot? -->
    <div v-if="withBackground" class="absolute inset-0 transition-all duration-700" :class="bg" />

    <!-- Texture Overlay -->
    <div v-if="withBackground && !bgImage" class="absolute inset-0 opacity-10 mix-blend-overlay pointer-events-none"
      :style="textureStyle" />

    <img v-if="withBackground && bgImage" :src="bgImage"
      class="absolute inset-0 w-full h-full object-cover mix-blend-soft-light opacity-60" alt="" />

    <!-- Slide content -->
    <div class="relative flex items-center gap-6" :class="innerClass || 'px-8 py-6'">
      <!-- Icon -->
      <div v-if="icon" class="w-14 h-14 rounded-xl bg-white/20 flex items-center justify-center shrink-0">
        <component :is="icon" class="w-8 h-8 text-white" />
      </div>

      <!-- Text -->
      <div class="flex-1 min-w-0 flex flex-col justify-center">
        <p class="font-bold text-xl text-white leading-tight truncate">
          {{ title }}
        </p>
        <p v-if="description" class="text-base text-white/90 truncate mt-1">
          {{ description }}
        </p>
      </div>

      <!-- CTA link -->
      <a v-if="cta" :href="ctaHref" target="_blank" rel="noopener noreferrer"
        class="shrink-0 px-6 py-3 rounded-xl text-base font-bold transition-all duration-200 border no-underline flex items-center justify-center"
        :class="ctaStyle || 'bg-white/10 text-white border-white/20 hover:bg-white/20'">
        {{ cta }}
      </a>
    </div>
  </div>
</template>

<script setup lang="ts">
import { type Component } from 'vue'

interface Props {
  icon?: Component
  title: string
  description?: string
  bg?: string
  bgImage?: string
  cta?: string
  ctaHref?: string
  ctaStyle?: string

  // Display options
  withBackground?: boolean
  containerClass?: string
  innerClass?: string
}

withDefaults(defineProps<Props>(), {
  withBackground: true,
  bg: 'bg-slate-800', // default fallback
})

const textureStyle = {
  // Shipping box icon pattern
  backgroundImage: `url("data:image/svg+xml,%3Csvg width='80' height='80' viewBox='0 0 80 80' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' stroke='%23FFFFFF' stroke-width='2' stroke-linecap='round' stroke-linejoin='round' stroke-opacity='0.15'%3E%3Cpath d='M41 36L32 30.81'/%3E%3Cpath d='M45.5 42.6V34c0-1.66-1.34-3-3-3l-7-4a2 2 0 0 0-2 0l-7 4a2 2 0 0 0-2 2v8a2 2 0 0 0 1 1.73l7 4a2 2 0 0 0 2 0l7-4a2 2 0 0 0 1.5-1.13'/%3E%3Cpolyline points='27.77 32.96 36.5 38.01 45.23 32.96'/%3E%3Cline x1='36.5' y1='48.08' x2='36.5' y2='38'/%3E%3C/g%3E%3C/svg%3E")`
}
</script>
