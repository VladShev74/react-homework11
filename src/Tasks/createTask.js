import React from "react";
import { uuid } from "uuidv4";
import { LoremIpsum } from "lorem-ipsum";

const lorem = new LoremIpsum();

export default function createTask() {
  return {
    id: uuid(),
    text: lorem.generateSentences(4),
  };
};
