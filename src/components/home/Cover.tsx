"use client";

import Particles from "@/components/Particles";
import HeyThere from "@/components/home/HeyThere";
import Card from "@/components/home/Card";
import MaxWidthWrapper from "../MaxWidthWrapper";

export default function HomeCover() {
  return (
    <div className="relative min-h-screen overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0 z-10">
        <Particles
          particleColors={["#7C3AED"]}
          particleCount={700}
          particleSpread={20}
          speed={0.1}
          particleBaseSize={75}
          moveParticlesOnHover
          alphaParticles={false}
          disableRotation={false}
          pixelRatio={1}
          className="w-full h-full"
        />
      </div>

      {/* Foreground */}
      <MaxWidthWrapper className="relative min-h-screen flex flex-col">
        <HeyThere />
        <Card />
      </MaxWidthWrapper>
    </div>
  );
}