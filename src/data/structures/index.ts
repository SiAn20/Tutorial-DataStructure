import { array } from "./array";
import { stack } from "./stack";
import { queue } from "./queue";
import { deque } from "./deque";
import { linkedList } from "./linked-list";
import { hashMap } from "./hash-map";
import { set } from "./set";
import { priorityQueue } from "./priority-queue";
import type { DataStructure } from "@/types";

export const dataStructures: DataStructure[] = [
  array,
  stack,
  queue,
  deque,
  linkedList,
  hashMap,
  set,
  priorityQueue,
];

export function getStructureBySlug(slug: string): DataStructure | undefined {
  return dataStructures.find((s) => s.slug === slug);
}

export function getAllSlugs(): string[] {
  return dataStructures.map((s) => s.slug);
}
