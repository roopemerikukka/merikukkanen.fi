import React from "react";

export const slugs = ["intro", "sameli", "borje"] as const;

export type Slug = typeof slugs[number];

export type SlugsConfig = Record<
  Slug,
  {
    title: string;
    component: React.FC;
  }
>;

export const config: SlugsConfig = {
  intro: {
    title: "Intro",
    component: () => null,
  },
  sameli: {
    title: "Sameli",
    component: () => null,
  },
  borje: {
    title: "Börje",
    component: () => null,
  },
};
