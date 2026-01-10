// src/pages/HomePage.tsx
import React from "react";
import { useNavigate } from "react-router-dom";

import { HeroSection } from "../components/home/HeroSection";
import { HowItWorksSection } from "../components/home/HowItWorksSection";
import { LessonsPreviewSection } from "../components/home/LessonsPreviewSection";
import { PracticePreviewSection } from "../components/home/PracticePreviewSection";
import { StoriesTeaserSection } from "../components/home/StoriesTeaserSection";
import { WhoIsThisForSection } from "../components/home/WhoIsThisForSection";
import { readStoredProgress } from "../data/progress";


export const HomePage: React.FC = () => {

  const completedLessons = readStoredProgress().completedLessonIds;

  const navigate = useNavigate();

  const handleStartLesson = () => {
    navigate("/lesson/1");
  };

  const handleTryPractice = () => {
    navigate("/practice");
  };

  const handleOpenLesson = (lessonId: string) => {
    // lessonId is like "lesson-1" in our demo; extract the number
    const num = lessonId.replace("lesson-", "");
    navigate(`/lesson/${num}`);
  };

  const handleGoToStories = () => {
    navigate("/stories");
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

      <StoriesTeaserSection
        onGoToStories={handleGoToStories}
        completedLessons={completedLessons}
      />


      <WhoIsThisForSection />
    </>
  );
};
