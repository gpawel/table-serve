// src/pages/HomePage.tsx
import React from "react";

import { HeroSection } from "../components/home/HeroSection";
import { HowItWorksSection } from "../components/home/HowItWorksSection";
import { LessonsPreviewSection } from "../components/home/LessonsPreviewSection";
import { PracticePreviewSection } from "../components/home/PracticePreviewSection";
import { StoriesTeaserSection } from "../components/home/StoriesTeaserSection";
import { WhoIsThisForSection } from "../components/home/WhoIsThisForSection";

export const HomePage: React.FC = () => {
  const handleStartLesson = () => {
    console.log("Start Lesson 1 clicked");
  };

  const handleTryPractice = () => {
    console.log("Try Practice clicked");
  };

  const handleOpenLesson = (lessonId: string) => {
    console.log("Open lesson clicked:", lessonId);
  };

  const handleGoToStories = () => {
    console.log("Navigate to stories page");
  };

  return (
    <>
      <HeroSection
        onStartLesson={handleStartLesson}
        onTryPractice={handleTryPractice}
      />

      <HowItWorksSection />

      <LessonsPreviewSection onOpenLesson={handleOpenLesson} />

      <PracticePreviewSection onTryPractice={handleTryPractice} />

      <StoriesTeaserSection onGoToStories={handleGoToStories} />

      <WhoIsThisForSection />
    </>
  );
};
