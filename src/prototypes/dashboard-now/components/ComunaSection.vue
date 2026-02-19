<template>
  <section class="rounded-xl border border-gray-100 bg-white p-6 shadow-sm">
    <div class="flex items-center gap-2 mb-6">
      <span class="w-9 h-9 rounded-lg bg-blue-50 flex items-center justify-center">
        <MapPin class="w-5 h-5 text-blue-600" />
      </span>
      <h2 class="text-lg font-bold text-gray-900">Envíos por Comuna</h2>
    </div>

    <ComunaDonutChart />

    <!-- Footer total -->
    <div class="mt-6 pt-4 border-t border-gray-100 text-center">
      <p class="text-sm text-gray-500">
        Total: <span class="font-bold text-gray-900">1.343 envíos</span>
      </p>
    </div>
  </section>
</template>

<script setup lang="ts">
import { MapPin } from 'lucide-vue-next'
import ComunaDonutChart from './ComunaDonutChart.vue'
</script>
