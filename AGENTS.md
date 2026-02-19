Aquí tienes el contenido completo para tu archivo **`AGENTS.md`**.
Está diseñado específicamente para tu proyecto **Astro + Tailwind** enfocado en generación rápida de prototipos y diseños para clientes.

---

```markdown
# AGENTS.md

# 🧠 Contexto del Proyecto

Este proyecto es un **Laboratorio de Prototipos UI** construido con:

- Astro
- Tailwind CSS
- Vue.js (opcional)
- lucide-vue-next (opcional)
- vue-chartjs (opcional)

Su propósito NO es construir aplicaciones finales en producción.
Su objetivo es:

> Generar rápidamente diseños visuales y prototipos para presentar a clientes.

El enfoque es:
- Velocidad
- Claridad visual
- Variaciones de diseño
- Modularidad
- Aislamiento entre prototipos

---

# 🎯 Objetivo de los Agentes

Cualquier agente que interactúe con este proyecto debe:

1. Generar diseños visuales rápidos.
2. Crear prototipos aislados por carpeta.
3. Evitar agregar complejidad innecesaria.
4. Priorizar claridad visual sobre lógica compleja.
5. Pensar en "presentación a cliente", no en arquitectura backend.

---

# 🗂 Estructura del Proyecto

```

src/
layouts/
BaseLayout.astro

prototypes/
nombre-del-prototipo/
+meta.ts
mock-data.ts
index.astro
components/
assets/

pages/
index.astro
preview/[slug].astro

styles/
base.css

```

---

# 📦 Cómo Funciona el Sistema

## 1️⃣ Cada prototipo vive en su propia carpeta:

```

src/prototypes/dashboard-analytics/

````

Debe contener:

- `index.astro` → Diseño principal
- `+meta.ts` → Información para la galería
- `mock-data.ts` → Datos mock para el prototipo

Ejemplo de `+meta.ts`:

```ts
export const meta = {
  name: "Dashboard Analytics Minimal",
  description: "Dashboard SaaS minimal enfocado en métricas.",
  theme: "light"
};
````

---

## 2️⃣ Acceso a prototipos

Cada prototipo se accede vía:

```
/preview/{slug}
```

Ejemplo:

```
/preview/dashboard-analytics
```

La página `index.astro` muestra la galería automáticamente.

---

# 🎨 Filosofía de Diseño

Los agentes deben:

* Priorizar diseño limpio y moderno
* Usar Tailwind de forma consistente
* Evitar estilos inline
* Usar utilidades Tailwind en vez de CSS custom cuando sea posible
* Mantener coherencia en spacing, radius y tipografía

---

# ⚡ Principios de Generación

Al crear nuevos prototipos:

✅ Usar estructura clara de layout
✅ Simular datos con contenido ficticio (mock-data.ts)
✅ Mantener jerarquía visual clara
✅ Diseñar pensando en SaaS modernos
✅ Usar grids y spacing consistentes
✅ Generar prototipos interactivos
✅ Generar prototipos aislados por carpeta

Evitar:

❌ Agregar librerías innecesarias
❌ Agregar lógica compleja
❌ Simular backend real
❌ Usar dependencias externas pesadas

---

# 🧩 Sistema de Layout

Todos los prototipos deben renderizar dentro de:

```
BaseLayout.astro
```

El layout base proporciona:

* Header
* Navegación a galería
* Contenedor principal

Los prototipos NO deben redefinir HTML completo.

---

# 🧪 Tipos de Prototipos Esperados

El agente puede generar:

* Dashboards SaaS
* CRM UI
* Admin panels
* Landing pages
* Fintech dashboards
* E-commerce backoffice
* Analytics platforms

---

# 🧠 Enfoque Estratégico

Este proyecto es una herramienta comercial.

El objetivo final es:

1. Mostrar múltiples opciones visuales al cliente.
2. Permitir decidir rápidamente una dirección estética.
3. Luego convertir el diseño elegido en proyecto real.

Por lo tanto:

> La velocidad de iteración es más importante que la perfección técnica.

---

# 🎨 Variaciones de Diseño

Los agentes deben poder generar:

* Versión minimal
* Versión dark
* Versión enterprise
* Versión startup moderna
* Versión densa (muchos datos)
* Versión aireada (más whitespace)

---

# 📏 Convenciones de Diseño

Espaciado recomendado:

* Secciones grandes: `py-12`
* Contenedores: `max-w-7xl mx-auto px-6`
* Cards: `rounded-xl shadow-sm border`

Tipografía:

* Títulos: `text-2xl font-bold`
* Subtítulos: `text-sm text-gray-500`
* Métricas principales: `text-3xl font-semibold`

---

# 🚀 Cómo Debe Operar un Agente

Cuando se le solicite un nuevo diseño:

1. Crear nueva carpeta en `/prototypes/`
2. Agregar `+meta.ts`
3. Crear `index.astro`
4. Usar Tailwind únicamente
5. Mantener coherencia visual
6. No modificar la estructura global

---

# 🧱 Nivel de Abstracción

Este proyecto es:

UI First.
No Backend.
No Estado complejo.
No APIs reales.

Simular datos con:

* Números
* Tablas ficticias
* Gráficos estáticos
* Badges de estado

---

# 📤 Resultado Esperado

Cada prototipo debe:

* Verse profesional
* Ser presentable a cliente
* Tener identidad clara
* Poder enviarse como URL

---

# 🔮 Futuras Extensiones (Opcional)

Si se requiere mayor sofisticación:

* Sistema de themes
* Dark mode toggle
* Screenshots automáticos
* Filtros en galería
* Organización por categorías

Pero mantener siempre la simplicidad como prioridad.

---

# 🏁 Resumen para Agentes

Este proyecto es una:

> Máquina de generar diseños visuales rápidamente.

No es una app productiva.
No es un SaaS final.
Es una herramienta estratégica de diseño.

Siempre priorizar:

Velocidad.
Claridad.
Estética.
Modularidad.
Aislamiento.
