"use client";

import { useCallback, useState } from "react";
import CTASection from "@/components/CTASection";
import DemoModal from "@/components/DemoModal";
import FAQ from "@/components/FAQ";
import FeaturesBento from "@/components/FeaturesBento";
import Footer from "@/components/Footer";
import Hero from "@/components/Hero";
import HowItWorks from "@/components/HowItWorks";
import LogoCloud from "@/components/LogoCloud";
import Navbar from "@/components/Navbar";
import Pricing from "@/components/Pricing";
import Testimonials from "@/components/Testimonials";
import TrialModal from "@/components/TrialModal";

export default function Home() {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [isDemoOpen, setIsDemoOpen] = useState(false);
  const [modalMode, setModalMode] = useState<"trial" | "signin">("trial");
  const [selectedPlan, setSelectedPlan] = useState("Nexora trial");

  const openModal = useCallback((plan = "Nexora trial", mode: "trial" | "signin" = "trial") => {
    setSelectedPlan(plan);
    setModalMode(mode);
    setIsModalOpen(true);
  }, []);

  const closeModal = useCallback(() => setIsModalOpen(false), []);
  const openDemo = useCallback(() => {
    setIsModalOpen(false);
    setIsDemoOpen(true);
  }, []);
  const closeDemo = useCallback(() => setIsDemoOpen(false), []);

  return (
    <div className="min-h-screen bg-white">
      <Navbar onOpenModal={openModal} />
      <Hero onOpenModal={openModal} onOpenDemo={openDemo} />
      <LogoCloud />
      <FeaturesBento />
      <HowItWorks />
      <Pricing onOpenModal={openModal} />
      <Testimonials />
      <FAQ />
      <CTASection onOpenModal={openModal} onOpenDemo={openDemo} />
      <Footer />
      <TrialModal
        isOpen={isModalOpen}
        onClose={closeModal}
        selectedPlan={selectedPlan}
        mode={modalMode}
        onModeChange={setModalMode}
        onOpenDemo={openDemo}
      />
      <DemoModal isOpen={isDemoOpen} onClose={closeDemo} />
    </div>
  );
}
