import Link from "next/link";

export function Logo() {
  return (
    <Link
      href="/"
      className="notranslate select-none rounded-xl px-2 py-1 font-extrabold shadow-app"
      style={{ background: 'var(--accent)', color: 'var(--navy)' }}
      translate="no"
      data-no-translate="true"
      aria-label="Heleno Vitor — Home"
      title="Heleno Vitor — Home"
    >
      <span className="notranslate" translate="no">HV</span>
    </Link>
  );
}

