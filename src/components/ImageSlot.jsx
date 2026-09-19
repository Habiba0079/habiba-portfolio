// Shows an image, or an empty "?" slot when no image has been added yet.

// `src` is a path inside /public, without a leading slash: 'images/projects/a.png'

export default function ImageSlot({ src, alt, label }) {
  const url = src
    ? /^(https?:)?\/\//.test(src)
      ? src
      : `${import.meta.env.BASE_URL}${src.replace(/^\//, "")}`
    : null;

  return (
    <figure className={`slot ${url ? "slot--image" : "slot--empty"}`}>
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
