// YouTube marks used to signal the topic of the page (YouTube automation).
// The footer disclaimer states the site is not affiliated with YouTube.

export function YouTubeIcon({ size = 28 }: { size?: number }) {
  return (
    <svg width={size} height={size * 0.7} viewBox="0 0 28 20" aria-hidden="true" className="yt-icon">
      <path
        fill="#FF0000"
        d="M27.4 3.1A3.5 3.5 0 0 0 24.9.6C22.7 0 14 0 14 0S5.3 0 3.1.6A3.5 3.5 0 0 0 .6 3.1C0 5.3 0 10 0 10s0 4.7.6 6.9a3.5 3.5 0 0 0 2.5 2.5C5.3 20 14 20 14 20s8.7 0 10.9-.6a3.5 3.5 0 0 0 2.5-2.5C28 14.7 28 10 28 10s0-4.7-.6-6.9z"
      />
      <path fill="#fff" d="M11.2 14.3 18.4 10l-7.2-4.3v8.6z" />
    </svg>
  );
}

export function YouTubeLogo({ size = 28 }: { size?: number }) {
  return (
    <span className="yt-logo" style={{ fontSize: size * 0.82 }} aria-label="YouTube">
      <YouTubeIcon size={size} />
      <span aria-hidden="true">YouTube</span>
    </span>
  );
}

/** Extruded, glossy 3D play button built in CSS, no image needed. */
export function YouTube3D({ className = "" }: { className?: string }) {
  return (
    <div className={`yt3d ${className}`} aria-hidden="true">
      <div className="yt3d-body">
        <span className="yt3d-play" />
      </div>
    </div>
  );
}
