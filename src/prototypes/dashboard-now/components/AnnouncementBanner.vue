<template>
  <div class="relative" @mouseenter="pause" @mouseleave="resume">
    <!-- Background layers removed for transparency -->

    <!-- Slide content -->
    <div class="relative mx-auto max-w-7xl px-6 py-6 flex items-center justify-between">
      <!-- Arrow left -->
      <button
        class="shrink-0 w-12 h-12 rounded-full bg-white/50 text-slate-700 flex items-center justify-center hover:bg-white hover:text-slate-900 transition-all shadow-sm z-10 backdrop-blur-sm"
        @click="prev">
        <ChevronLeft class="w-6 h-6" />
      </button>

      <!-- Slide body -->
      <div class="flex-1 mx-6 overflow-hidden relative h-44 rounded-2xl bg-transparent">
        <TransitionGroup :name="transitionName">
          <Banner v-for="(slide, i) in slides" v-show="i === current" :key="slide.id" :icon="slide.icon"
            :title="slide.title" :description="slide.description" :bg="slide.bg" :bg-image="slide.bgImage"
            :cta="slide.cta" :cta-href="slide.ctaHref" :cta-style="slide.ctaStyle" class="absolute inset-0"
            inner-class="h-full px-10 py-8" />
        </TransitionGroup>
      </div>

      <!-- Arrow right -->
      <button
        class="shrink-0 w-12 h-12 rounded-full bg-white/50 text-slate-700 flex items-center justify-center hover:bg-white hover:text-slate-900 transition-all shadow-sm z-10 backdrop-blur-sm"
        @click="next">
        <ChevronRight class="w-6 h-6" />
      </button>
    </div>

    <!-- Dots -->
    <div class="relative flex justify-center gap-1.5 pb-3">
      <button v-for="(slide, i) in slides" :key="slide.id" class="h-1.5 rounded-full transition-all duration-300"
        :class="i === current ? 'bg-gray-800 w-4' : 'bg-gray-300 w-1.5'" @click="goTo(i)" />
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref, onMounted, onUnmounted, type Component } from 'vue'
import {
  ChevronLeft,
  ChevronRight,
  MapPin,
  Percent,
  Clock,
  Sparkles,
} from 'lucide-vue-next'
import bannerBg from '../assets/banner-promo-bg.png'
import Banner from './Banner.vue'

interface Slide {
  id: number
  icon: Component
  title: string
  description: string
  bg: string
  bgImage?: string
  cta?: string
  ctaHref?: string
  ctaStyle?: string
}

const slides: Slide[] = [
  {
    id: 1,
    icon: MapPin,
    title: 'Zonas de cobertura ampliadas',
    description:
      'Ahora cubrimos Quilicura, Huechuraba y Colina con entrega el mismo día',
    bg: 'bg-gradient-to-r from-emerald-600 to-emerald-500',
  },
  {
    id: 2,
    icon: Percent,
    title: '¡Descuento especial en envíos masivos!',
    description:
      'Usa el código ENVIO20 y obtén 20% de descuento en tu próximo envío masivo',
    bg: 'bg-gradient-to-r from-violet-600 to-indigo-500',
    cta: 'Ver promoción',
    ctaHref: '#promociones',
    ctaStyle:
      'bg-white text-violet-700 border-white/80 hover:bg-white/90 hover:shadow-md',
  },
  {
    id: 3,
    icon: Clock,
    title: 'Horarios extendidos de retiro',
    description:
      'Desde el lunes, el horario de retiro se extiende hasta las 20:00 hrs en todas las sucursales',
    bg: 'bg-gradient-to-r from-amber-600 to-orange-500',
    cta: 'Ver horarios',
    ctaHref: '#horarios',
    ctaStyle:
      'bg-white text-amber-700 border-white/80 hover:bg-white/90 hover:shadow-md',
  },
  {
    id: 4,
    icon: Sparkles,
    title: 'Nuevo: Rastreo en tiempo real para tus clientes',
    description:
      'Tus clientes ahora reciben un link de seguimiento con mapa en vivo',
    bg: 'bg-gradient-to-r from-slate-800 to-slate-700',
    bgImage: (bannerBg as any).src ?? bannerBg,
    cta: 'Conoce más',
    ctaHref: '#rastreo',
    ctaStyle:
      'bg-white text-slate-800 border-white/80 hover:bg-white/90 hover:shadow-md',
  },
]

const current = ref(0)
const transitionName = ref('slide-right')
let autoPlayTimer: ReturnType<typeof setInterval> | null = null

function next() {
  transitionName.value = 'slide-right'
  current.value = (current.value + 1) % slides.length
}

function prev() {
  transitionName.value = 'slide-left'
  current.value = (current.value - 1 + slides.length) % slides.length
}

function goTo(index: number) {
  transitionName.value = index > current.value ? 'slide-right' : 'slide-left'
  current.value = index
}

function startAutoPlay() {
  autoPlayTimer = setInterval(next, 5000)
}

function pause() {
  if (autoPlayTimer) {
    clearInterval(autoPlayTimer)
    autoPlayTimer = null
  }
}

function resume() {
  if (!autoPlayTimer) startAutoPlay()
}

onMounted(() => startAutoPlay())
onUnmounted(() => pause())
</script>

<style scoped>
.slide-right-enter-active,
.slide-right-leave-active,
.slide-left-enter-active,
.slide-left-leave-active {
  transition: all 0.4s cubic-bezier(0.4, 0, 0.2, 1);
}

.slide-right-enter-from {
  opacity: 0;
  transform: translateX(60px);
}

.slide-right-leave-to {
  opacity: 0;
  transform: translateX(-60px);
}

.slide-left-enter-from {
  opacity: 0;
  transform: translateX(-60px);
}

.slide-left-leave-to {
  opacity: 0;
  transform: translateX(60px);
}
</style>
