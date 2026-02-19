<template>
  <section>
    <h2 class="text-lg font-bold text-gray-900 mb-1">
      Clientes Frecuentes y Recompras
    </h2>
    <p class="text-xs text-gray-400 mb-6">
      El cliente se identifica con su número de teléfono registrado al momento
      de crear el envío.
    </p>

    <div class="grid grid-cols-1 md:grid-cols-2 gap-5">
      <!-- Left column: Tasa de Recompra + Recompra Promedio -->
      <div class="flex flex-col gap-5">
        <!-- Tasa de Recompra -->
        <div class="rounded-xl border border-gray-100 bg-white p-5 shadow-sm">
          <div class="flex items-center gap-2 mb-4">
            <span
              class="w-9 h-9 rounded-lg bg-blue-50 flex items-center justify-center"
            >
              <RefreshCw class="w-5 h-5 text-blue-600" />
            </span>
            <div>
              <p class="text-sm font-semibold text-gray-800">
                Tasa de Recompra
              </p>
              <p class="text-xs text-gray-400">
                Clientes que vuelven a comprar
              </p>
            </div>
          </div>
          <p class="text-3xl font-bold text-gray-900">
            42.8%
            <span class="text-sm font-normal text-gray-400 ml-1"
              >156 de 365 clientes</span
            >
          </p>
          <div class="mt-3 h-2 rounded-full bg-gray-100 overflow-hidden">
            <div
              class="h-full rounded-full bg-blue-500 transition-all duration-700"
              style="width: 42.8%"
            />
          </div>
        </div>

        <!-- Recompra Promedio -->
        <div class="rounded-xl border border-gray-100 bg-white p-5 shadow-sm">
          <div class="flex items-center gap-2 mb-4">
            <span
              class="w-9 h-9 rounded-lg bg-emerald-50 flex items-center justify-center"
            >
              <Banknote class="w-5 h-5 text-emerald-600" />
            </span>
            <div>
              <p class="text-sm font-semibold text-gray-800">
                Recompra Promedio
              </p>
              <p class="text-xs text-gray-400">
                Pedidos promedio por cliente recurrente
              </p>
            </div>
          </div>
          <p class="text-3xl font-bold text-gray-900">
            3.7
            <span class="text-sm font-normal text-gray-400">pedidos</span>
          </p>
        </div>
      </div>

      <!-- Right column: Top Clientes Frecuentes -->
      <div class="rounded-xl border border-gray-100 bg-white p-5 shadow-sm flex flex-col">
        <div class="flex items-center justify-between mb-4">
          <div class="flex items-center gap-2">
            <span
              class="w-9 h-9 rounded-lg bg-red-50 flex items-center justify-center"
            >
              <Flame class="w-5 h-5 text-red-500" />
            </span>
            <p class="text-sm font-semibold text-gray-800">
              Top Clientes Frecuentes
            </p>
          </div>
          <span class="text-xs text-gray-400">{{ topClients.length }} clientes</span>
        </div>

        <div class="flex-1 space-y-3">
          <TransitionGroup name="fade" tag="div" class="space-y-3">
            <div
              v-for="c in paginatedClients"
              :key="c.rank"
              class="flex items-center justify-between"
            >
              <div class="flex items-center gap-3">
                <div class="relative">
                  <div
                    class="w-9 h-9 rounded-full bg-gray-100 flex items-center justify-center text-xs font-semibold text-gray-600 uppercase"
                  >
                    {{ c.initials }}
                  </div>
                  <span
                    class="absolute -top-1 -right-1 w-4 h-4 rounded-full bg-gray-800 text-[10px] text-white flex items-center justify-center font-bold"
                  >
                    {{ c.rank }}
                  </span>
                </div>
                <div>
                  <p class="text-sm font-medium text-gray-800 leading-tight">
                    {{ c.name }}
                  </p>
                  <p class="text-xs text-gray-400">{{ c.time }}</p>
                </div>
              </div>
              <span class="text-sm font-semibold text-gray-700">{{
                c.count
              }}</span>
            </div>
          </TransitionGroup>
        </div>

        <!-- Pagination controls -->
        <div class="flex items-center justify-between mt-4 pt-3 border-t border-gray-100">
          <button
            :disabled="currentPage === 1"
            class="flex items-center gap-1 text-xs font-medium transition-colors"
            :class="currentPage === 1 ? 'text-gray-300 cursor-not-allowed' : 'text-gray-500 hover:text-gray-800'"
            @click="currentPage--"
          >
            <ChevronLeft class="w-4 h-4" />
            Anterior
          </button>

          <div class="flex items-center gap-1.5">
            <button
              v-for="p in totalPages"
              :key="p"
              class="w-7 h-7 rounded-lg text-xs font-semibold transition-all duration-200"
              :class="p === currentPage
                ? 'bg-gray-800 text-white shadow-sm'
                : 'text-gray-400 hover:bg-gray-100 hover:text-gray-700'"
              @click="currentPage = p"
            >
              {{ p }}
            </button>
          </div>

          <button
            :disabled="currentPage === totalPages"
            class="flex items-center gap-1 text-xs font-medium transition-colors"
            :class="currentPage === totalPages ? 'text-gray-300 cursor-not-allowed' : 'text-gray-500 hover:text-gray-800'"
            @click="currentPage++"
          >
            Siguiente
            <ChevronRight class="w-4 h-4" />
          </button>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup lang="ts">
import { ref, computed } from 'vue'
import { RefreshCw, Flame, Banknote, ChevronLeft, ChevronRight } from 'lucide-vue-next'
import { topClients } from '../mock-data'

const PAGE_SIZE = 5
const currentPage = ref(1)
const totalPages = computed(() => Math.ceil(topClients.length / PAGE_SIZE))

const paginatedClients = computed(() => {
  const start = (currentPage.value - 1) * PAGE_SIZE
  return topClients.slice(start, start + PAGE_SIZE)
})
</script>

<style scoped>
.fade-enter-active,
.fade-leave-active {
  transition: all 0.25s ease;
}
.fade-enter-from {
  opacity: 0;
  transform: translateY(6px);
}
.fade-leave-to {
  opacity: 0;
  transform: translateY(-6px);
}
</style>
