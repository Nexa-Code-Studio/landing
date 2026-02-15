"use client";

import Hero from '@/components/sections/Hero';
import ProblemStatement from '@/components/sections/ProblemStatement';
import Services from '@/components/sections/Services';
import Portfolio from '@/components/sections/Portfolio';
import WhyUs from '@/components/sections/WhyUs';
import Process from '@/components/sections/Process';
import FAQ from '@/components/sections/FAQ';
import CTA from '@/components/sections/CTA';
import Footer from '@/components/sections/Footer';

export default function Home() {
    return (
        <main className="min-h-screen bg-white">
            <Hero />
            <ProblemStatement />
            <Services />
            <Portfolio />
            <WhyUs />
            <Process />
            <FAQ />
            <CTA />
            <Footer />
        </main>
    );
}
