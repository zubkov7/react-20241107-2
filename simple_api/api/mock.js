const normalizedReviews = [
  {
    id: "asdad312143e3r2re12e",
    user: "hr83h29h9h9u12h9213",
    text: "Потрясающий дизайн и комфорт.",
    rating: 3,
  },
  {
    id: "as3121asdad43e3r2re12e",
    user: "jg4985gj94",
    text: "Хорошо работают с iPhone.",
    rating: 5,
  },
  {
    id: "aad31214sd2fr2rwede3r2re12e",
    user: "asdasdoi29tu384f",
    text: "Отличное качество звука.",
    rating: 4,
  },
  {
    id: "asdad3qdqwdqwd12143e3r2re12e",
    user: "hr83h29h9h9u12h9213",
    text: "Отличный звук.",
    rating: 3,
  },
  {
    id: "as31dqwdqwd21asdad43e3r2re12e",
    user: "jg4985gj94",
    text: "Удобное управление.",
    rating: 5,
  },
  {
    id: "aad31214sd2fr2rwede3rqwdqwd2re12e",
    user: "asdasdoi29tu384f",
    text: "Хорошая автономность.",
    rating: 4,
  },
];

const normalizedUsers = [
  {
    id: "hr83h29h9h9u12h9213",
    name: "Artem",
  },
  {
    id: "jg4985gj94",
    name: "Andrey",
  },
  {
    id: "asdasdoi29tu384f",
    name: "Irina",
  },
];

const normalizedCodecs = [
  { id: "ngu45hg8374hg3g8", type: "SBC" },
  { id: "djuh34782g6g7", type: "AAC" },
  { id: "djuh347adas2g6g7", type: "LDAC" },
  { id: "djuaddfs2g6g7", type: "aptX" },
  { id: "dju41241dfs2g6g7", type: "aptX HD" },
  { id: "djuaddfs2g623543534g7", type: "aptX LL" },
];

const normalizedHeadphones = [
  {
    name: "Apple AirPods Pro",
    id: "MLXJ2LLA",
    type: "in-ear",
    maxVolume: "80 dB",
    brand: "Apple",
    reviews: [
      "asdad312143e3r2re12e",
      "as3121asdad43e3r2re12e",
      "aad31214sd2fr2rwede3r2re12e",
    ],
    codecs: ["ngu45hg8374hg3g8", "djuh34782g6g7"],
  },
  {
    name: "Sony WF-1000XM3",
    id: "WF1000XM3V",
    type: "true wireless",
    maxVolume: "100 dB",
    brand: "Sony",
    reviews: [
      "asdad3qdqwdqwd12143e3r2re12e",
      "as31dqwdqwd21asdad43e3r2re12e",
      "aad31214sd2fr2rwede3rqwdqwd2re12e",
    ],
    codecs: ["djuh347adas2g6g7", "djuh34782g6g7", "ngu45hg8374hg3g8"],
  },
  {
    name: "Sennheiser Momentum 3",
    id: "M3IEG",
    type: "on-ear",
    maxVolume: "120 dB",
    brand: "Sennheiser",
    reviews: [
      "asdad312143e3r2re12e",
      "as3121asdad43e3r2re12e",
      "aad31214sd2fr2rwede3r2re12e",
    ],
    codecs: ["djuaddfs2g6g7", "djuh34782g6g7", "ngu45hg8374hg3g8"],
  },
  {
    name: "Bose QuietComfort 35 II",
    id: "794418",
    type: "over-ear",
    maxVolume: "115 dB",
    brand: "Bose",
    reviews: [
      "asdad3qdqwdqwd12143e3r2re12e",
      "as31dqwdqwd21asdad43e3r2re12e",
      "aad31214sd2fr2rwede3rqwdqwd2re12e",
    ],
    codecs: ["djuh34782g6g7", "ngu45hg8374hg3g8"],
  },
  {
    name: "Marshall Major IV",
    id: "MARSHALLMAJORIVBLK",
    type: "on-ear",
    maxVolume: "99 dB",
    brand: "Marshall",
    reviews: [
      "asdad3qdqwdqwd12143e3r2re12e",
      "as31dqwdqwd21asdad43e3r2re12e",
      "aad31214sd2fr2rwede3rqwdqwd2re12e",
    ],
    codecs: ["djuh34782g6g7", "ngu45hg8374hg3g8"],
  },
  {
    name: "Beats Studio 3",
    id: "HTCIA62",
    type: "on-ear",
    maxVolume: "98 dB",
    brand: "Beats",
    reviews: [
      "asdad3qdqwdqwd12143e3r2re12e",
      "as31dqwdqwd21asdad43e3r2re12e",
      "aad31214sd2fr2rwede3rqwdqwd2re12e",
    ],
    codecs: ["djuh34782g6g7", "ngu45hg8374hg3g8"],
  },
  {
    name: "Anker Soundcore Life Q30",
    id: "A3153301",
    type: "on-ear",
    maxVolume: "96 dB",
    brand: "Anker",
    reviews: [
      "asdad312143e3r2re12e",
      "as3121asdad43e3r2re12e",
      "aad31214sd2fr2rwede3r2re12e",
    ],
    codecs: ["djuaddfs2g6g7", "djuh34782g6g7", "ngu45hg8374hg3g8"],
  },
  {
    name: "Panasonic RZS300WGE",
    id: "RZS300WGEK",
    type: "true wireless",
    maxVolume: "90 dB",
    brand: "Panasonic",
    reviews: [
      "asdad3qdqwdqwd12143e3r2re12e",
      "as31dqwdqwd21asdad43e3r2re12e",
      "aad31214sd2fr2rwede3rqwdqwd2re12e",
    ],
    codecs: ["djuh34782g6g7", "ngu45hg8374hg3g8"],
  },
  {
    name: "Shure AONIC 5",
    id: "SH-AONIC5",
    type: "closed-back",
    maxVolume: "97 dB",
    brand: "Shure",
    reviews: [
      "asdad312143e3r2re12e",
      "as3121asdad43e3r2re12e",
      "aad31214sd2fr2rwede3r2re12e",
    ],
    codecs: [
      "djuaddfs2g623543534g7",
      "djuh347adas2g6g7",
      "djuh34782g6g7",
      "ngu45hg8374hg3g8",
    ],
  },
];

module.exports = {
  products: normalizedHeadphones,
  codecs: normalizedCodecs,
  reviews: normalizedReviews,
  users: normalizedUsers,
};
