import { Effect } from "./effects";

export type Props = Record<string, any>
export type Modifiers<T extends Props> = (
  Effect<T>
)[];
