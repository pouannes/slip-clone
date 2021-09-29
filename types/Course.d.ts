import { Lesson } from "./Lesson";

export type Course = {
  id: string;
  title: string;
  published_status: "draft";
  language?: string;
  lessons: Lesson[];
};
