import { loadEnvConfig } from "@next/env";

loadEnvConfig(process.cwd());

async function seed() {
  const { db } = await import("./index");
  const { projects } = await import("./schema");
  await db
    .insert(projects)
    .values([
      {
        slug: "store-ledger",
        title: "Ablen Tindahan Ledger",
        year: 2026,
        summary: "Records store credit instead of a paper notebook.",
      },
      {
        slug: "kawaii-count",
        title: "Kawaii Count",
        year: 2025,
        summary:
          "A restaurant inventory system that saves information of each food and records the amount sold and overall revenue.",
      },
      {
        slug: "css-gallery",
        title: "CSS Gallery",
        year: 2025,
        summary:
          "One of my first projects, it is a simple gallery featuring my favorite characters from the game Zenless Zone Zero (ZZZ).",
      },
      {
        slug: "horse-racing-2d",
        title: "Horse Racing 2d",
        year: 2026,
        summary: "An oversimplified 2d horse racing game made just for fun.",
      },
      {
        slug: "yaw8",
        title: "Ya!W8",
        year: 2026,
        summary:
          "A Y8-esque website that allows aspiring game developers in iACADEMY to showcase their games for the other students to play while also allowing them to collaborate with each other.",
      },
    ])
    .onConflictDoNothing();
  console.log("Seeded projects");
  process.exit(0);
}

seed();
