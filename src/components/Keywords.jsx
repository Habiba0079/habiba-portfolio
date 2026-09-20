import { Fragment } from 'react';

// Text can mark keywords with **double asterisks**. They are rendered highlighted.
export function parseKeywords(text) {
  return text
    .split(/\*\*(.+?)\*\*/g)
    .map((part, i) => ({ text: part, kw: i % 2 === 1 }))
    .filter((seg) => seg.text !== '');
}

export const stripKeywords = (text) => text.replace(/\*\*(.+?)\*\*/g, '$1');

export default function Keywords({ children }) {
  return parseKeywords(children).map((seg, i) =>
    seg.kw ? (
      <mark key={i} className="kw">
        {seg.text}
      </mark>
    ) : (
      <Fragment key={i}>{seg.text}</Fragment>
    )
  );
}
