import { LoremIpsum } from "lorem-ipsum";

const lorem = new LoremIpsum({
  sentencesPerParagraph: {
    max: 8,
    min: 4,
  },
  wordsPerSentence: {
    max: 16,
    min: 4,
  },
});

function toTitleCase(str) {
  return str.replace(
    /\w\S*/g,
    (txt) => txt.charAt(0).toUpperCase() + txt.substr(1).toLowerCase()
  );
}

export function getPosts() {
  return Array.from({ length: 10 }, (_, i) => ({
    id: i,
    title: toTitleCase(lorem.generateWords(3)),
    content: lorem.generateParagraphs(2),
  }));
}
