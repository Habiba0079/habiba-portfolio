// A game-window style card with an optional title bar.
export default function Panel({ title, children }) {
  return (
    <article className="panel">
      {title && <h3 className="panel-title">{title}</h3>}
      <div className="panel-body">{children}</div>
    </article>
  );
}
