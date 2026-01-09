// src/data/lessons.ts
export type QuizChoice = {
  id: string;
  text: string;
};

export type QuizQuestion = {
  id: string;
  text: string;
  choices: QuizChoice[];
  correctChoiceId: string;
};

export type Lesson = {
  id: number;
  title: string;
  summary: string;
  content: string[]; // simple paragraphs for MVP
  quiz: QuizQuestion[];
};

export const lessons: Lesson[] = [
  {
    id: 1,
    title: "Basics of Table Setting",
    summary: "Plate, cutlery, glass, napkin — the foundation of every place.",
    content: [
      "A basic place setting gives your guest everything needed for the meal.",
      "For the MVP: we keep it simple and focus on consistent placement.",
      "Later we’ll add visuals and drag-and-drop steps directly inside lessons.",
    ],
    quiz: [
      {
        id: "q1",
        text: "Where does the fork go in a basic setting?",
        choices: [
          { id: "a", text: "Left of the plate" },
          { id: "b", text: "Right of the plate" },
          { id: "c", text: "Above the plate" },
        ],
        correctChoiceId: "a",
      },
      {
        id: "q2",
        text: "Where does the knife go in a basic setting?",
        choices: [
          { id: "a", text: "Left of the plate" },
          { id: "b", text: "Right of the plate" },
          { id: "c", text: "Below the plate" },
        ],
        correctChoiceId: "b",
      },
      {
        id: "q3",
        text: "Where does the water glass usually go?",
        choices: [
          { id: "a", text: "Above the knife (upper right)" },
          { id: "b", text: "Below the plate" },
          { id: "c", text: "Left of the fork" },
        ],
        correctChoiceId: "a",
      },
      {
        id: "q4",
        text: "What is the goal of a place setting?",
        choices: [
          { id: "a", text: "Decoration only" },
          { id: "b", text: "Give everything needed to eat comfortably" },
          { id: "c", text: "Make the table look crowded" },
        ],
        correctChoiceId: "b",
      },
      {
        id: "q5",
        text: "Fun one: If the fork is on the right… what are you probably doing?",
        choices: [
          { id: "a", text: "Testing the app 😄" },
          { id: "b", text: "Following the basic rule perfectly" },
          { id: "c", text: "Reading a map" },
        ],
        correctChoiceId: "a",
      },
    ],
  },
  {
    id: 2,
    title: "Plates & Napkins",
    summary: "Different plate types and simple napkin placement rules.",
    content: [
      "In real dining, plate types depend on the meal courses.",
      "For now we focus on the idea: the plate is the center anchor of the setting.",
      "Napkins should be easy to reach and consistent in placement.",
    ],
    quiz: [
      {
        id: "q1",
        text: "In most settings, the plate is…",
        choices: [
          { id: "a", text: "The center anchor of the setting" },
          { id: "b", text: "Placed on the edge of the table" },
          { id: "c", text: "Optional and rarely used" },
        ],
        correctChoiceId: "a",
      },
      {
        id: "q2",
        text: "A napkin should be placed…",
        choices: [
          { id: "a", text: "So it's easy to reach" },
          { id: "b", text: "Under the chair" },
          { id: "c", text: "Far away from the guest" },
        ],
        correctChoiceId: "a",
      },
      {
        id: "q3",
        text: "For MVP lessons, our focus is mainly on…",
        choices: [
          { id: "a", text: "Consistency and clarity" },
          { id: "b", text: "Every advanced rule immediately" },
          { id: "c", text: "Random placement" },
        ],
        correctChoiceId: "a",
      },
      {
        id: "q4",
        text: "Which item is the 'center' visually?",
        choices: [
          { id: "a", text: "Fork" },
          { id: "b", text: "Plate" },
          { id: "c", text: "Glass" },
        ],
        correctChoiceId: "b",
      },
      {
        id: "q5",
        text: "Fun one: The best napkin placement is…",
        choices: [
          { id: "a", text: "The one your guests can find instantly" },
          { id: "b", text: "Inside your pocket" },
          { id: "c", text: "On the ceiling" },
        ],
        correctChoiceId: "a",
      },
    ],
  },
  {
    id: 3,
    title: "Cutlery Basics",
    summary: "Where forks, knives, and spoons live around the plate.",
    content: [
      "Cutlery placement is designed for easy use and consistency.",
      "Forks are usually on the left; knives and spoons are usually on the right.",
      "Later, we’ll expand this into multiple course rules and stories.",
    ],
    quiz: [
      {
        id: "q1",
        text: "Forks are usually placed…",
        choices: [
          { id: "a", text: "Left of the plate" },
          { id: "b", text: "Right of the plate" },
          { id: "c", text: "Above the glass" },
        ],
        correctChoiceId: "a",
      },
      {
        id: "q2",
        text: "Knives are usually placed…",
        choices: [
          { id: "a", text: "Left of the fork" },
          { id: "b", text: "Right of the plate" },
          { id: "c", text: "On the napkin" },
        ],
        correctChoiceId: "b",
      },
      {
        id: "q3",
        text: "Why do we use consistent cutlery placement?",
        choices: [
          { id: "a", text: "To confuse guests" },
          { id: "b", text: "So the table is predictable and easy to use" },
          { id: "c", text: "To hide cutlery" },
        ],
        correctChoiceId: "b",
      },
      {
        id: "q4",
        text: "Spoons (basic) are most commonly…",
        choices: [
          { id: "a", text: "On the right side" },
          { id: "b", text: "Under the plate" },
          { id: "c", text: "On the left of the fork" },
        ],
        correctChoiceId: "a",
      },
      {
        id: "q5",
        text: "Fun one: If you place EVERYTHING randomly…",
        choices: [
          { id: "a", text: "You invented 'creative dining'" },
          { id: "b", text: "That’s the official standard" },
          { id: "c", text: "It guarantees perfect etiquette" },
        ],
        correctChoiceId: "a",
      },
    ],
  },
];

export function getLessonById(id: number) {
  return lessons.find((l) => l.id === id);
}
