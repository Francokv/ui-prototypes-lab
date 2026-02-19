<template>
  <div>
    <!-- Header row -->
    <div class="flex items-center justify-between mb-6">
      <h1 class="text-2xl font-bold tracking-tight text-gray-900">
        Resumen de Actividad
      </h1>
      <button
        class="inline-flex items-center gap-2 rounded-lg border border-gray-200 bg-white px-4 py-2 text-sm text-gray-600 shadow-sm hover:bg-gray-50 transition"
      >
        <Calendar class="w-4 h-4 text-gray-400" />
        Últimos 30 días
        <ChevronDown class="w-3 h-3 text-gray-400" />
      </button>
    </div>

    <!-- Contadores -->
    <h2 class="text-sm font-semibold text-gray-700 mb-3">
      Contadores de Envíos
    </h2>
    <div class="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-4">
      <div
        v-for="(counter, i) in counters"
        :key="i"
        class="rounded-xl border border-gray-100 bg-white p-4 shadow-sm"
      >
        <div class="flex items-center gap-3">
          <span
            class="w-9 h-9 rounded-lg flex items-center justify-center shrink-0"
            :class="counter.bgColor"
          >
            <component
              :is="counter.icon"
              class="w-5 h-5"
              :class="counter.iconColor"
            />
          </span>
          <div>
            <div class="flex items-baseline gap-1">
              <span class="text-2xl font-bold text-gray-900">{{
                counter.value
              }}</span>
              <span v-if="counter.pct" class="text-xs text-gray-400"
                >({{ counter.pct }})</span
              >
            </div>
            <p class="text-xs text-gray-400">{{ counter.label }}</p>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import {
  Calendar,
  ChevronDown,
  Truck,
  PackageOpen,
  CircleCheckBig,
  AlertCircle,
  XCircle,
} from 'lucide-vue-next'

const counters = [
  {
    icon: Truck,
    value: '1.089',
    label: 'Total Envíos',
    bgColor: 'bg-emerald-100',
    iconColor: 'text-emerald-600',
    pct: null,
  },
  {
    icon: PackageOpen,
    value: '85',
    label: 'Por Entregar',
    bgColor: 'bg-amber-100',
    iconColor: 'text-amber-600',
    pct: '7.8%',
  },
  {
    icon: CircleCheckBig,
    value: '956',
    label: 'Entregados',
    bgColor: 'bg-emerald-100',
    iconColor: 'text-emerald-600',
    pct: '87.8%',
  },
  {
    icon: AlertCircle,
    value: '28',
    label: 'Parciales',
    bgColor: 'bg-orange-100',
    iconColor: 'text-orange-500',
    pct: '2.6%',
  },
  {
    icon: XCircle,
    value: '20',
    label: 'Rechazados',
    bgColor: 'bg-red-100',
    iconColor: 'text-red-500',
    pct: '1.8%',
  },
]
</script>
