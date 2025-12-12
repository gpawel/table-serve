// src/App.tsx
import React from "react";
import "./App.css"; // you can remove this import if you deleted App.css
import { HeroSection } from "./components/home/HeroSection";
import { HowItWorksSection } from "./components/home/HowItWorksSection";
import { LessonsPreviewSection } from "./components/home/LessonsPreviewSection";
import { PracticePreviewSection } from "./components/home/PracticePreviewSection";
import { StoriesTeaserSection } from "./components/home/StoriesTeaserSection";
import { WhoIsThisForSection } from "./components/home/WhoIsThisForSection";





function App() {
  const handleStartLesson = () => {
    // For now we just log. Later this will navigate to Lesson 1.
    console.log("Start Lesson 1 clicked");
  };

  const handleTryPractice = () => {
    // For now we just log. Later this will navigate to Practice.
    console.log("Try Practice clicked");
  };
  const handleOpenLesson = (lessonId: string) => {
    console.log("Open lesson clicked:", lessonId);
    // later: navigate(`/lesson/${lessonId}`)
  };
  const handleGoToStories = () => {
    console.log("Navigate to stories page");
    // later: navigate("/stories")
  };


  return (
    <div
      style={{
        fontFamily: "system-ui, -apple-system, BlinkMacSystemFont, 'Segoe UI', sans-serif",
        backgroundColor: "#FFFFFF",
        minHeight: "100vh",
      }}
    >
      {/* Simple temp header just so it's not empty */}
      <header
        style={{
          padding: "1rem 1.5rem",
          borderBottom: "1px solid #E5E5E5",
          marginBottom: "1rem",
        }}
      >
        <div
          style={{
            maxWidth: "960px",
            margin: "0 auto",
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
          }}
        >
          <div style={{ fontWeight: 600 }}>TableServing.app</div>
          <nav style={{ fontSize: "0.95rem", display: "flex", gap: "1rem" }}>
            <span>Learn</span>
            <span>Practice</span>
            <span>Stories 🔒</span>
          </nav>
        </div>
      </header>

      {/* Our HeroSection */}
      <HeroSection
        onStartLesson={handleStartLesson}
        onTryPractice={handleTryPractice}
      />
      <HowItWorksSection />
      <LessonsPreviewSection onOpenLesson={handleOpenLesson} />
      <PracticePreviewSection onTryPractice={handleTryPractice} />
      <StoriesTeaserSection onGoToStories={handleGoToStories} />
      <WhoIsThisForSection />

    </div>
  );
}

export default App;