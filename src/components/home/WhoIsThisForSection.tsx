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
      style={{
        padding: "3rem 1.5rem 4rem",
        maxWidth: "960px",
        margin: "0 auto",
        textAlign: "center",
      }}
    >
      <h2
        style={{
          fontSize: "1.8rem",
          marginBottom: "0.75rem",
          color: "#1F1F1F",
        }}
      >
        Who is this for?
      </h2>

      <p
        style={{
          marginBottom: "1.75rem",
          fontSize: "1rem",
          color: "#3A3A3A",
        }}
      >
        This app is designed for anyone who wants to feel more confident around
        the table.
      </p>

      <ul
        style={{
          listStyle: "none",
          padding: 0,
          margin: 0,
          maxWidth: "720px",
          marginInline: "auto",
          textAlign: "left",
        }}
      >
        {items.map((text, index) => (
          <li
            key={index}
            style={{
              display: "flex",
              alignItems: "flex-start",
              gap: "0.5rem",
              marginBottom: "0.75rem",
              fontSize: "0.98rem",
              color: "#3A3A3A",
            }}
          >
            <span
              style={{
                marginTop: "0.2rem",
              }}
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
