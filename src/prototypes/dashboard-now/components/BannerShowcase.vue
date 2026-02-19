<template>
    <div class="space-y-12">
        <div>
            <h1 class="text-3xl font-bold text-gray-900">Banner Component Showcase</h1>
            <p class="mt-2 text-gray-500">
                Variations of the announcement banner component used in the dashboard.
            </p>
        </div>

        <!-- Layout: Column -->
        <div class="space-y-8 max-w-4xl">

            <!-- Section: Colors & Backgrounds -->
            <section class="space-y-4">
                <h2 class="text-sm font-semibold text-gray-400 uppercase tracking-wider border-b pb-2">
                    Color Variations
                </h2>

                <Banner :icon="MapPin" title="Green Gradient (Success/Growth)"
                    description="Used for coverage updates and positive news"
                    bg="bg-gradient-to-r from-emerald-600 to-emerald-500" />

                <Banner :icon="Percent" title="Violet Gradient (Promotions)"
                    description="Used for discounts, campaigns and special offers"
                    bg="bg-gradient-to-r from-violet-600 to-indigo-500" />

                <Banner :icon="Clock" title="Orange Gradient (Attention/Time)"
                    description="Used for schedules, deadlines and operating hours"
                    bg="bg-gradient-to-r from-amber-600 to-orange-500" />

                <Banner :icon="Info" title="Blue Gradient (Information)"
                    description="General information and system updates"
                    bg="bg-gradient-to-r from-blue-600 to-cyan-500" />

                <Banner :icon="AlertTriangle" title="Red Gradient (Critical)"
                    description="Service disruptions or urgent alerts" bg="bg-gradient-to-r from-red-600 to-rose-500" />
            </section>

            <!-- Section: Icon Variations -->
            <section class="space-y-4">
                <h2 class="text-sm font-semibold text-gray-400 uppercase tracking-wider border-b pb-2">
                    Icon Variations
                </h2>

                <Banner :icon="Truck" title="Transportation Icon" bg="bg-slate-700" />

                <Banner :icon="Package" title="Package Icon" bg="bg-slate-700" />

                <Banner :icon="Shield" title="Security Icon" bg="bg-slate-700" />

                <Banner :icon="Star" title="Feature Icon" bg="bg-slate-700" />
            </section>

            <!-- Section: Content Depth -->
            <section class="space-y-4">
                <h2 class="text-sm font-semibold text-gray-400 uppercase tracking-wider border-b pb-2">
                    Content Variations
                </h2>

                <Banner :icon="Sparkles" title="Minimal (Title Only)" bg="bg-gradient-to-r from-pink-600 to-rose-500" />

                <Banner :icon="Sparkles" title="With Description"
                    description="This version includes a supporting description text line to provide more context about the announcement."
                    bg="bg-gradient-to-r from-pink-600 to-rose-500" />
            </section>

            <!-- Section: With Background Image -->
            <section class="space-y-4">
                <h2 class="text-sm font-semibold text-gray-400 uppercase tracking-wider border-b pb-2">
                    Texture & Images
                </h2>

                <Banner :icon="Sparkles" title="With Background Image Texture"
                    description="Uses a subtle pattern overlay mixed with the background color"
                    bg="bg-gradient-to-r from-slate-800 to-slate-700" :bg-image="(bannerBg as any).src ?? bannerBg" />
            </section>

            <!-- Section: Call to Actions -->
            <section class="space-y-4">
                <h2 class="text-sm font-semibold text-gray-400 uppercase tracking-wider border-b pb-2">
                    Call-to-Action Variations
                </h2>

                <Banner :icon="ExternalLink" title="Default Button" description="Standard translucent button style"
                    bg="bg-gray-800" cta="Learn More" cta-href="#" />

                <Banner :icon="Percent" title="High Contrast Button"
                    description="White button with colored text for high visibility"
                    bg="bg-gradient-to-r from-violet-600 to-indigo-500" cta="Claim Offer" cta-href="#"
                    cta-style="bg-white text-violet-700 border-white/80 hover:bg-white/90 hover:shadow-md" />

                <Banner :icon="Zap" title="Outlined Button" bg="bg-gradient-to-r from-blue-700 to-blue-600"
                    cta="Execute Action" cta-href="#" cta-style="border border-white text-white hover:bg-white/10" />
            </section>

        </div>
    </div>
</template>

<script setup lang="ts">
import Banner from './Banner.vue'
import {
    MapPin,
    Percent,
    Clock,
    Sparkles,
    Truck,
    Package,
    Shield,
    Star,
    Info,
    AlertTriangle,
    ExternalLink,
    Zap
} from 'lucide-vue-next'
import bannerBg from '../assets/banner-promo-bg.png'
</script>
