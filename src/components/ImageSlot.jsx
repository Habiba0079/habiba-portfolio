// Shows an image, or an empty "?" slot when no image has been added yet.
// `src` is a path inside /public, without a leading slash: 'images/projects/a.png'
export function resolveImage(src) {
  if (!src) return null;
  if (/^(https?:)?\/\/|^data:/.test(src)) return src;
  return `${import.meta.env.BASE_URL}${src.replace(/^\//, "")}`;
}

export default function ImageSlot({ src, alt, label, ratio = "16 / 9" }) {
  const url = resolveImage(src);

  return (
    <figure className={`slot ${url ? "slot--image" : "slot--empty"}`} style={{ aspectRatio: ratio }}>
      {url ? (
        <img src={url} alt={alt} loading="lazy" />
      ) : (
        <div className="slot-empty">
          <span className="qblock qblock--small" aria-hidden="true">
            <span className="qmark">?</span>
          </span>
          <figcaption>{label}</figcaption>
        </div>
      )}
    </figure>
  );
}
