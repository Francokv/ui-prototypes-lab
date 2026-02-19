// ── Top Clientes Frecuentes ──────────────────────────────
export interface TopClient {
    initials: string
    name: string
    time: string
    count: number
    rank: number
}

export const topClients: TopClient[] = [
    { initials: 'CA', name: 'Comercial Andina SpA', time: 'Hoy', count: 48, rank: 1 },
    { initials: 'DE', name: 'Distribuidora El Sol', time: 'Ayer', count: 35, rank: 2 },
    { initials: 'TM', name: 'Tienda Mapocho Ltda.', time: 'Hoy', count: 31, rank: 3 },
    { initials: 'FC', name: 'Farmacia Central', time: 'Hace 2 días', count: 28, rank: 4 },
    { initials: 'EF', name: 'eCommerce FastShop', time: 'Ayer', count: 24, rank: 5 },
    { initials: 'LS', name: 'Librería Santiago', time: 'Hoy', count: 22, rank: 6 },
    { initials: 'RP', name: 'Repuestos Patricio', time: 'Hace 3 días', count: 19, rank: 7 },
    { initials: 'MV', name: 'Moda Vitacura', time: 'Ayer', count: 18, rank: 8 },
    { initials: 'TC', name: 'TechnoChile Store', time: 'Hoy', count: 17, rank: 9 },
    { initials: 'PF', name: 'Perfumería Floral', time: 'Hace 2 días', count: 15, rank: 10 },
    { initials: 'JD', name: 'Juguetería del Sur', time: 'Ayer', count: 14, rank: 11 },
    { initials: 'AM', name: 'AutoMax Accesorios', time: 'Hoy', count: 13, rank: 12 },
    { initials: 'VN', name: 'Vinos del Norte', time: 'Hace 4 días', count: 12, rank: 13 },
    { initials: 'CS', name: 'Casa & Stilo Deco', time: 'Ayer', count: 11, rank: 14 },
    { initials: 'FN', name: 'FitNutrición Chile', time: 'Hoy', count: 10, rank: 15 },
    { initials: 'OE', name: 'ÓpticaExpress', time: 'Hace 2 días', count: 9, rank: 16 },
    { initials: 'PL', name: 'Pet Lovers Shop', time: 'Ayer', count: 8, rank: 17 },
    { initials: 'GS', name: 'GourmetSelect SpA', time: 'Hoy', count: 7, rank: 18 },
    { initials: 'BH', name: 'BabyHouse Chile', time: 'Hace 3 días', count: 6, rank: 19 },
    { initials: 'EM', name: 'ElectroMundo', time: 'Ayer', count: 5, rank: 20 },
]

// ── Comunas ──────────────────────────────────────────────
export interface Comuna {
    name: string
    count: number
    color: string
}

export const comunas: Comuna[] = [
    { name: 'Las Condes', count: 245, color: '#3B82F6' },
    { name: 'Providencia', count: 198, color: '#10B981' },
    { name: 'Maipú', count: 167, color: '#F97316' },
    { name: 'Ñuñoa', count: 145, color: '#EF4444' },
    { name: 'Quilicura', count: 132, color: '#F59E0B' },
    { name: 'Santiago Centro', count: 128, color: '#8B5CF6' },
    { name: 'Vitacura', count: 98, color: '#6366F1' },
    { name: 'La Florida', count: 89, color: '#14B8A6' },
    { name: 'Puente Alto', count: 76, color: '#F97316' },
    { name: 'Peñalolén', count: 65, color: '#EC4899' },
]
