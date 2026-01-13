// src/components/home/WhoIsThisForSection.tsx
import React from "react";

export const WhoIsThisForSection: React.FC = () => {
  const items = [
    "Hosts who want a simple, clear guide to setting the table.",
    "Families teaching kids good table habits in a visual way.",
    "Waitstaff and trainees practicing the basics of service.",
    "Anyone curious about table etiquette without heavy theory.",
  ];

  return (
    <section
      className="ts-who-section"
    >
      <h2
        className="ts-who-title"
      >
        Who is this for?
      </h2>

      <p
        className="ts-who-description"
      >
        This app is designed for anyone who wants to feel more confident around
        the table.
      </p>

      <ul
        className="ts-who-list"
      >
        {items.map((text, index) => (
          <li
            key={index}
            className="ts-who-list-item"
          >
            <span
              className="ts-who-bullet"
            >
              •
            </span>
            <span>{text}</span>
          </li>
        ))}
      </ul>
    </section>
  );
};
