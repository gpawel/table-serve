// src/data/stories.ts
export type Story = {
  id: string;
  title: string;
  requiredLessonId: number; // << gating
  excerpt?: string;
  content: string[];
};



export const stories: Story[] = [
  {
    id: "story-knife-inward",
    title: "Why the knife faces inward",
    requiredLessonId: 1,
    content: [
      "In many traditions, the knife blade faces inward to signal safety and respect.",
      "It’s a small design detail that became a social convention over time.",
      "For our MVP: you unlock this story after completing Lesson 1.",
    ],
  },
  {
    id: "story-fork-journey",
    title: "The journey of the fork from right to left",
    requiredLessonId: 2,
    content: [
      "Fork placement evolved differently across regions and centuries.",
      "In some contexts it moved from right-hand use toward a left-side standard.",
      "For MVP: this becomes available after Lesson 2.",
    ],
  },
  {
    id: "story-glass-placement",
    title: "Why the glass sits above the knife",
    requiredLessonId: 3,
    content: [
      "The glass is placed above the knife so it’s easy to reach and consistent across settings.",
      "It also helps keep the working area around the plate uncluttered.",
      "For MVP: available after Lesson 3.",
    ],
  },
];

export function isStoryUnlocked(story: Story, completedLessons: number[]) {
  return completedLessons.includes(story.requiredLessonId);
}