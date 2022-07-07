import { StaticImageData } from "next/image";
import borje from "../public/exhibition/images/borje.jpg";
import henri from "../public/exhibition/images/henri.jpg";
import iiro from "../public/exhibition/images/iiro.jpg";
import jami from "../public/exhibition/images/jami-mikko.jpg";
import janne from "../public/exhibition/images/janne.jpg";
import jesse from "../public/exhibition/images/jesse.jpg";
import kalle from "../public/exhibition/images/kalle.jpg";
import lauri from "../public/exhibition/images/lauri.jpg";
import mikko from "../public/exhibition/images/mikko.jpg";
import pekka from "../public/exhibition/images/pekka.jpg";
import sameli from "../public/exhibition/images/sameli.jpg";
import intro from "../public/exhibition/images/santeri-jussi-yrjo.jpg";
import sauli from "../public/exhibition/images/sauli.jpg";
import vp from "../public/exhibition/images/vesa-pekka.jpg";

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
  image: StaticImageData;
  mdFile: string;
};

export type SlugsConfig = Record<Slug, SlideDetails>;

export const config: SlugsConfig = {
  intro: {
    title: "Intro",
    image: intro,
    mdFile: "intro.md",
  },
  borje: {
    title: "Börje",
    image: borje,
    mdFile: "borje.md",
  },
  sameli: {
    title: "Sameli",
    image: sameli,
    mdFile: "sameli.md",
  },
  henri: {
    title: "Henri",
    image: henri,
    mdFile: "henri.md",
  },
  iiro: {
    title: "Iiro",
    image: iiro,
    mdFile: "iiro.md",
  },
  "jami-mikko": {
    title: "Jami ja Mikko",
    image: jami,
    mdFile: "jami-mikko.md",
  },
  janne: {
    title: "Janne",
    image: janne,
    mdFile: "janne.md",
  },
  kalle: {
    title: "Kalle",
    image: kalle,
    mdFile: "kalle.md",
  },
  lauri: {
    title: "Lauri",
    image: lauri,
    mdFile: "lauri.md",
  },
  mikko: {
    title: "Mikko",
    image: mikko,
    mdFile: "mikko.md",
  },
  pekka: {
    title: "Pekka",
    image: pekka,
    mdFile: "pekka.md",
  },
  "santeri-jussi-yrjo": {
    title: "Santeri, Jussi ja Yrjö",
    image: intro,
    mdFile: "santeri-jussi-yrjo.md",
  },
  sauli: {
    title: "Sauli",
    image: sauli,
    mdFile: "sauli.md",
  },
  "vesa-pekka": {
    title: "Vesa-Pekka",
    image: vp,
    mdFile: "vesa-pekka.md",
  },
  jesse: {
    title: "Jesse",
    image: jesse,
    mdFile: "jesse.md",
  },
};
