// Text with an RGB-split glitch. The two coloured layers are decorative and hidden from screen readers.
export default function Glitch({ children }) {
  return (
    <span className="glitch">
      <span className="glitch-main">{children}</span>
      <span className="glitch-layer glitch-a" aria-hidden="true">
        {children}
      </span>
      <span className="glitch-layer glitch-b" aria-hidden="true">
        {children}
      </span>
    </span>
  );
}
