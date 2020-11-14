export const colors = [
  { name: "darkGray", value: "#252525" },
  { name: "red", value: "#E2190C" },
  { name: "turquoise", value: "#00FFC2" },
  { name: "violet", value: "#C9CEFF" },
  { name: "white", value: "#fff" },
];

export const textPositions = [
  { label: "oben", value: "start" },
  { label: "mitte", value: "center" },
  { label: "unten", value: "end" },
];

export const corporateThemes = [
  "darkGray_white",
  "darkGray_turquoise",
  "turquoise_darkGray",
  "violet_red",
  "red_violet",
];

export const secondaryThemes = [
  "darkGray_red",
  "red_darkGray",
  "red_white",
  "white_red",
];

export const colorThemes = [
  {
    label: "darkGray_white",
    name: "dunkelgrau & weiß",
    colors: ["darkGray", "white"],
  },
  {
    label: "darkGray_turquoise",
    name: "dunkelgrau & türkis",
    colors: ["darkGray", "turquoise"],
  },
  {
    label: "turquoise_darkGray",
    name: "türkis & dunkelgrau",
    colors: ["turquoise", "darkGray"],
  },
  {
    label: "violet_red",
    name: "violett & rot",
    colors: ["violet", "red"],
  },
  {
    label: "red_violet",
    name: "rot & violett",
    colors: ["red", "violet"],
  },
  {
    label: "darkGray_red",
    name: "dunkelgrau & rot",
    colors: ["darkGray", "red"],
  },
  {
    label: "red_darkGray",
    name: "rot & dunkelgrau",
    colors: ["red", "darkGray"],
  },
  {
    label: "red_white",
    name: "rot & weiß",
    colors: ["red", "white"],
  },
  {
    label: "white_red",
    name: "weiß & rot",
    colors: ["white", "red"],
  },
];

export const primaryColors = [
  { label: "turquoise", name: "türkis" },
  { label: "violet", name: "violet" },
  { label: "red", name: "rot" },
];

export const templates = [
  {
    name: "Diskursintervention",
    link: "templates/diskursintervention",
    thumbnailSrc: "../assets/images/templates/diskursintervention.jpg",
  },
  {
    name: "Diskursintervention mit Bild",
    link: "templates/diskursintervention-mit-bild",
    thumbnailSrc: "../assets/images/templates/diskursintervention-mit-bild.jpg",
  },
  {
    name: "Selbstrepräsentation",
    link: "templates/selbstrepraesentation",
    thumbnailSrc: "../assets/images/templates/selbstrepraesentation.jpg",
  },
  {
    name: "Mitglieder",
    link: "templates/mitglieder",
    thumbnailSrc: "../assets/images/templates/mitglieder.jpg",
  },
  {
    name: "Zitat",
    link: "templates/zitat",
    thumbnailSrc: "../assets/images/templates/zitat.jpg",
  },
  {
    name: "Pass the Mic",
    link: "templates/pass-the-mic",
    thumbnailSrc: "../assets/images/templates/pass-the-mic.jpg",
  },
  {
    name: "Veranstaltung",
    link: "templates/veranstaltung",
    thumbnailSrc: "../assets/images/templates/veranstaltung.jpg",
  },
  {
    name: "Politische Bildung",
    link: "templates/politische-bildung",
    thumbnailSrc: "../assets/images/templates/politische-bildung.jpg",
  },
];

const templateSize = 400;

export const textStyles = [
  [
    {
      marginTop: `${templateSize * 0.6625}px`,
      transform: "rotate(0deg)",
      marginLeft: `${templateSize * 0.6625}px`,
      width: `${templateSize * (1 - 0.6625)}px`,
    },
    {
      marginTop: `${templateSize * 0.75}px`,
      transform: "rotate(-6deg)",
    },
    { transform: "rotate(-7deg)" },
  ],
  [
    { marginTop: "200px", transform: "rotate(4deg)", marginLeft: "430px" },
    { marginTop: "200px", transform: "rotate(-2deg)", marginLeft: "430px" },
    { transform: "rotate(-2deg)" },
  ],
  [
    { marginTop: "200px", transform: "rotate(5deg)", marginLeft: "430px" },
    { marginTop: "200px", transform: "rotate(-6deg)", marginLeft: "430px" },
    { transform: "rotate(5.66deg)" },
  ],
  [
    { marginTop: "200px", transform: "rotate(0)", marginLeft: "430px" },
    { marginTop: "200px", transform: "rotate(-4deg)", marginLeft: "430px" },
    { transform: "rotate(-13.01deg)" },
  ],
  [
    { marginTop: "200px", transform: "rotate(0)", marginLeft: "430px" },
    { marginTop: "200px", transform: "rotate(-1deg)", marginLeft: "430px" },
    { transform: "rotate(0)" },
  ],
];
