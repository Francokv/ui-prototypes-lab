<template>
  <div class="flex flex-col md:flex-row items-center justify-center gap-10">
    <!-- Chart -->
    <div class="w-56 h-56">
      <Doughnut :data="chartData" :options="chartOptions" />
    </div>

    <!-- Legend -->
    <div class="grid grid-cols-1 sm:grid-cols-2 gap-x-8 gap-y-2 text-sm">
      <div
        v-for="(item, i) in legendItems"
        :key="i"
        class="flex items-center gap-2"
      >
        <span
          class="w-2.5 h-2.5 rounded-full shrink-0"
          :style="{ backgroundColor: item.color }"
        />
        <span class="text-gray-600">{{ item.name }}</span>
        <span class="font-semibold text-gray-800 ml-auto">{{ item.count }}</span>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { Doughnut } from 'vue-chartjs'
import {
  Chart as ChartJS,
  ArcElement,
  Tooltip,
  Legend,
} from 'chart.js'

ChartJS.register(ArcElement, Tooltip, Legend)

const comunas = [
  { name: 'Las Condes', count: 245, color: '#3B82F6' },
  { name: 'Providencia', count: 198, color: '#22C55E' },
  { name: 'Maipú', count: 167, color: '#F97316' },
  { name: 'Ñuñoa', count: 145, color: '#EF4444' },
  { name: 'Quilicura', count: 132, color: '#F59E0B' },
  { name: 'Santiago Centro', count: 128, color: '#8B5CF6' },
  { name: 'Vitacura', count: 98, color: '#0EA5E9' },
  { name: 'La Florida', count: 89, color: '#10B981' },
  { name: 'Puente Alto', count: 76, color: '#FB923C' },
  { name: 'Peñalolén', count: 65, color: '#EC4899' },
]

const total = comunas.reduce((sum, c) => sum + c.count, 0)

const legendItems = comunas

const chartData = {
  labels: comunas.map(c => c.name),
  datasets: [
    {
      data: comunas.map(c => c.count),
      backgroundColor: comunas.map(c => c.color),
      borderWidth: 2,
      borderColor: '#ffffff',
      hoverBorderColor: '#ffffff',
      hoverOffset: 6,
    },
  ],
}

const chartOptions = {
  responsive: true,
  maintainAspectRatio: true,
  cutout: '65%',
  plugins: {
    legend: {
      display: false,
    },
    tooltip: {
      backgroundColor: '#1f2937',
      titleFont: { size: 13, weight: '600' as const },
      bodyFont: { size: 12 },
      padding: 10,
      cornerRadius: 8,
      callbacks: {
        label: (ctx: any) => {
          const value = ctx.parsed
          const pct = ((value / total) * 100).toFixed(1)
          return ` ${value} envíos (${pct}%)`
        },
      },
    },
  },
}
</script>
