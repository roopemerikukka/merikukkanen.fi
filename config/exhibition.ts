export const slugs = [
  "intro",
  "borje",
  "sauli",
  "iiro",
  "sameli",
  "henri",
  "jami-mikko",
  "janne",
  "kalle",
  "lauri",
  "vesa-pekka",
  "mikko",
  "pekka",
  "santeri-jussi-yrjo",
  "jesse",
] as const;

export type Slug = typeof slugs[number];

export type SlideDetails = {
  title: string;
  imgName: string;
  mdFile: string;
};

export type SlugsConfig = Record<Slug, SlideDetails>;

export const config: SlugsConfig = {
  intro: {
    title: "Intro",
    imgName: "santeri-jussi-yrjo.jpg",
    mdFile: "intro.md",
  },
  borje: {
    title: "Börje",
    imgName: "borje.jpg",
    mdFile: "borje.md",
  },
  sameli: {
    title: "Sameli",
    imgName: "sameli.jpg",
    mdFile: "sameli.md",
  },
  henri: {
    title: "Henri",
    imgName: "henri.jpg",
    mdFile: "henri.md",
  },
  iiro: {
    title: "Iiro",
    imgName: "iiro.jpg",
    mdFile: "iiro.md",
  },
  "jami-mikko": {
    title: "Jami ja Mikko",
    imgName: "jami-mikko.jpg",
    mdFile: "jami-mikko.md",
  },
  janne: {
    title: "Janne",
    imgName: "janne.jpg",
    mdFile: "janne.md",
  },
  kalle: {
    title: "Kalle",
    imgName: "kalle.jpg",
    mdFile: "kalle.md",
  },
  lauri: {
    title: "Lauri",
    imgName: "lauri.jpg",
    mdFile: "lauri.md",
  },
  mikko: {
    title: "Mikko",
    imgName: "mikko.jpg",
    mdFile: "mikko.md",
  },
  pekka: {
    title: "Pekka",
    imgName: "pekka.jpg",
    mdFile: "pekka.md",
  },
  "santeri-jussi-yrjo": {
    title: "Santeri, Jussi ja Yrjö",
    imgName: "santeri-jussi-yrjo.jpg",
    mdFile: "santeri-jussi-yrjo.md",
  },
  sauli: {
    title: "Sauli",
    imgName: "sauli.jpg",
    mdFile: "sauli.md",
  },
  "vesa-pekka": {
    title: "Vesa-Pekka",
    imgName: "vesa-pekka.jpg",
    mdFile: "vesa-pekka.md",
  },
  jesse: {
    title: "Jesse",
    imgName: "jesse.jpg",
    mdFile: "jesse.md",
  },
};
