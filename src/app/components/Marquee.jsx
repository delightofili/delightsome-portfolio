// no "use client" needed: this is pure CSS animation, so it renders on the server
export default function Marquee({
  items,
  speed = "30s",
  reverse = false,
  className = "",
}) {
  // the list is rendered twice; the keyframe moves it -50%, so the loop has no visible seam
  const doubled = [...items, ...items];

  return (
    <div className={`flex overflow-hidden ${className}`}>
      <div
        style={{
          "--marquee-speed": speed,
          animationDirection: reverse ? "reverse" : "normal",
        }}
        className="flex w-max shrink-0 animate-marquee items-center"
      >
        {doubled.map((item, i) => (
          <div
            key={i}
            aria-hidden={i >= items.length}
            className="flex items-center"
          >
            {item}
          </div>
        ))}
      </div>
    </div>
  );
}
