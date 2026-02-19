<template>
  <section class="grid grid-cols-1 md:grid-cols-3 gap-5">
    <div
      v-for="(card, i) in cards"
      :key="i"
      class="rounded-xl border border-gray-100 bg-white p-5 shadow-sm"
    >
      <div class="flex items-start gap-3 mb-4">
        <span
          class="w-9 h-9 rounded-lg bg-emerald-100 flex items-center justify-center mt-0.5"
        >
          <component :is="card.icon" class="w-5 h-5 text-emerald-600" />
        </span>
        <div>
          <p class="text-sm font-semibold text-gray-800">{{ card.title }}</p>
          <p class="text-xs text-gray-400">{{ card.subtitle }}</p>
        </div>
      </div>
      <p class="text-3xl font-bold text-gray-900">
        {{ card.value }}
        <span v-if="card.detail" class="text-sm font-normal text-gray-400 ml-1">
          {{ card.detail }}
        </span>
      </p>
      <!-- Progress bar -->
      <div class="mt-3 h-2 rounded-full bg-gray-100 overflow-hidden">
        <div
          class="h-full rounded-full transition-all duration-700"
          :class="card.barColor"
          :style="{ width: card.value }"
        />
      </div>
    </div>
  </section>
</template>

<script setup lang="ts">
import { CircleCheckBig, Clock } from 'lucide-vue-next'

const cards = [
  {
    icon: CircleCheckBig,
    title: 'Entregas exitosas en el primer intento',
    subtitle: 'Envíos completados sin necesidad de reintento',
    value: '84.5%',
    detail: '808 de 956',
    barColor: 'bg-blue-500',
  },
  {
    icon: Clock,
    title: 'Antes de las 19:00',
    subtitle: '712 de 956 envíos',
    value: '74.5%',
    detail: null,
    barColor: 'bg-blue-500',
  },
  {
    icon: Clock,
    title: 'Antes de las 22:00',
    subtitle: '901 de 956 envíos',
    value: '94.2%',
    detail: null,
    barColor: 'bg-emerald-500',
  },
]
</script>
