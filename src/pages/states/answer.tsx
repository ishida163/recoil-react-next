import { Answer } from "@/types/answer";
import { atom, selector } from "recoil";

export const storeAnswer = atom<Array<Answer>>({
    key: "storeAnswer",
    default: [],
  });