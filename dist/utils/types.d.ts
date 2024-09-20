import type { DOMNode } from "../intrinsics/types";
import type { Properties } from "csstype";
type ParsedHTML = DOMNode | DocumentFragment;
type CSSProperties = Properties;
export type { CSSProperties, ParsedHTML };
