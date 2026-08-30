import { createFileRoute } from "@tanstack/react-router";
import { useEffect, useRef, useState } from "react";

const AFFILIATE_LINK = "https://giftclick.org/aff_c?offer_id=735&aff_id=174231";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Get a $750 BEST BUY Voucher | Rewards Club" },
      {
        name: "description",
        content:
          "Complete a few simple partner offers and get a $750 BEST BUY voucher delivered to your inbox.",
      },
      { property: "og:title", content: "Get a $750 BEST BUY Voucher | Rewards Club" },
      {
        property: "og:description",
        content:
          "Complete a few simple partner offers and get a $750 BEST BUY voucher delivered to your inbox.",
      },
      { property: "og:url", content: "/" },
    ],
    links: [{ rel: "canonical", href: "/" }],
  }),
  component: Index,
});

declare global {
  interface Window {
    fbq?: (...args: unknown[]) => void;
  }
}

function handleClaim() {
  if (typeof window !== "undefined" && typeof window.fbq === "function") {
    window.fbq("track", "Lead");
    window.fbq("track", "InitiateCheckout");
  }
  window.open(AFFILIATE_LINK, "_blank", "noopener,noreferrer");
}

/* ── Brand mark ─────────────────────────────────────────── */
function BestBuyLogo({ className = "" }: { className?: string }) {
  return (
    <span
      className={`inline-flex items-center justify-center rounded-[4px] bg-bb-yellow px-2 py-1 ${className}`}
      aria-label="BEST BUY"
    >
      <span className="font-display text-[10px] leading-none font-black tracking-tight text-ink">
        BEST
        <br />
        BUY
      </span>
    </span>
  );
}

/* ── Scroll reveal ──────────────────────────────────────── */
function Reveal({
  children,
  delay = 0,
  className = "",
}: {
  children: React.ReactNode;
  delay?: number;
  className?: string;
}) {
  const ref = useRef<HTMLDivElement>(null);
  const [shown, setShown] = useState(false);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const io = new IntersectionObserver(
      ([e]) => {
        if (e.isIntersecting) {
          setShown(true);
          io.disconnect();
        }
      },
      { threshold: 0.15 },
    );
    io.observe(el);
    return () => io.disconnect();
  }, []);

  return (
    <div
      ref={ref}
      className={`bb-reveal ${shown ? "is-in" : ""} ${className}`}
      style={{ transitionDelay: `${delay}ms` }}
    >
      {children}
    </div>
  );
}

/* ── CTA ────────────────────────────────────────────────── */
function ClaimButton({ label }: { label: string }) {
  return (
    <button
      type="button"
      onClick={handleClaim}
      className="w-full rounded-xl bg-bb-blue px-6 py-4 text-center font-display text-[15px] font-extrabold tracking-wide text-white uppercase shadow-[0_14px_40px_-12px_oklch(0.48_0.21_262/60%)] transition-transform duration-200 hover:brightness-110 active:scale-[0.985] sm:w-auto sm:min-w-[380px] sm:text-base"
    >
      {label}
    </button>
  );
}

function LockIcon() {
  return (
    <svg width="13" height="13" viewBox="0 0 24 24" fill="none" aria-hidden="true">
      <rect x="4" y="10" width="16" height="11" rx="2.5" fill="oklch(0.75 0.19 145)" />
      <path
        d="M8 10V7.5a4 4 0 0 1 8 0V10"
        stroke="oklch(0.75 0.19 145)"
        strokeWidth="2.2"
        strokeLinecap="round"
      />
    </svg>
  );
}

/* ── Voucher with 3D tilt ───────────────────────────────── */
function Voucher() {
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;

    const apply = (rx: number, ry: number) => {
      el.style.transform = `perspective(1100px) rotateX(${rx.toFixed(2)}deg) rotateY(${ry.toFixed(2)}deg)`;
    };

    const onMove = (e: MouseEvent) => {
      const r = el.getBoundingClientRect();
      const px = (e.clientX - r.left) / r.width - 0.5;
      const py = (e.clientY - r.top) / r.height - 0.5;
      apply(-py * 12, px * 16);
    };
    const onLeave = () => apply(0, 0);
    const onOrient = (e: DeviceOrientationEvent) => {
      const beta = Math.max(-30, Math.min(30, (e.beta ?? 0) - 40));
      const gamma = Math.max(-30, Math.min(30, e.gamma ?? 0));
      apply(-beta * 0.25, gamma * 0.4);
    };

    const isTouch = window.matchMedia("(pointer: coarse)").matches;
    if (isTouch) {
      window.addEventListener("deviceorientation", onOrient);
    } else {
      window.addEventListener("mousemove", onMove);
      el.addEventListener("mouseleave", onLeave);
    }
    return () => {
      window.removeEventListener("deviceorientation", onOrient);
      window.removeEventListener("mousemove", onMove);
      el.removeEventListener("mouseleave", onLeave);
    };
  }, []);

  return (
    <div className="relative mx-auto w-full max-w-[440px]">
      <div
        aria-hidden="true"
        className="absolute inset-x-6 bottom-0 h-16 rounded-[50%] bg-bb-blue/45 blur-3xl"
      />
      <div
        ref={ref}
        className="relative aspect-[16/9.4] w-full overflow-hidden rounded-[20px] border border-white/10 bg-[linear-gradient(135deg,oklch(0.34_0.16_264),oklch(0.24_0.11_265)_55%,oklch(0.18_0.06_268))] shadow-[0_40px_80px_-30px_rgba(0,0,0,0.9)] transition-transform duration-300 ease-out will-change-transform"
      >
        <div
          aria-hidden="true"
          className="absolute -top-10 -right-16 h-[280px] w-[280px] rounded-full border border-white/10 bg-white/[0.05]"
        />
        <div
          aria-hidden="true"
          className="bb-sheen pointer-events-none absolute inset-y-[-30%] left-0 w-1/3 bg-gradient-to-r from-transparent via-white/22 to-transparent"
        />

        <div className="relative flex h-full flex-col justify-between p-5 sm:p-6">
          <div className="flex items-start justify-between gap-3">
            <div className="flex items-center gap-2">
              <BestBuyLogo />
              <span className="font-display text-[11px] font-bold tracking-[0.24em] text-white uppercase">
                Voucher
              </span>
            </div>
            <span className="text-[11px] font-semibold text-white/55">bestbuy.com</span>
          </div>

          <div>
            <div
              className="font-display leading-[0.85] font-black text-white"
              style={{ fontSize: "clamp(52px, 17vw, 80px)", fontWeight: 900 }}
            >
              $750
            </div>
            <div className="mt-2 text-[11px] font-semibold tracking-wide text-white/55">
              bestbuy.com balance
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

const STEPS = [
  { t: "Tap Claim Now", d: "Start your reward in seconds." },
  {
    t: "Complete Quick Offers",
    d: "Finish a few simple offers from our partners. Each shows its terms first.",
  },
  { t: "Get Your Voucher", d: "Delivered straight to your inbox once confirmed." },
];

const REVIEWS = [
  {
    name: "Marcus",
    state: "Texas",
    stars: 5,
    text: "Was honestly skeptical at first but the steps were clear the whole way. Did the offers I actually liked the look of and skipped the rest. Confirmation hit my email a few days later.",
  },
  {
    name: "Janelle",
    state: "Georgia",
    stars: 5,
    text: "Nice that it tells you exactly what each offer involves before you commit to anything. No surprises. Took me a couple evenings to work through.",
  },
  {
    name: "Devin",
    state: "Ohio",
    stars: 5,
    text: "Support actually answered when I had a question about one of the partner offers. That alone made me trust it more than the other stuff I've tried.",
  },
  {
    name: "Priya",
    state: "California",
    stars: 4,
    text: "Process was smoother than I expected. Did most of it on my phone during my commute. Just read the terms on each one like it says and you're good.",
  },
  {
    name: "Tyler",
    state: "Florida",
    stars: 5,
    text: "Took my time with it, picked the offers that made sense for me, and everything came through like they said. Straightforward.",
  },
  {
    name: "Sofia",
    state: "Arizona",
    stars: 5,
    text: "Liked that there was no pressure to rush. Worked through it at my own pace over a week. Clear instructions at every step.",
  },
];

function Stars({ n }: { n: number }) {
  return (
    <div className="flex gap-0.5" aria-label={`${n} out of 5 stars`}>
      {Array.from({ length: 5 }).map((_, i) => (
        <svg
          key={i}
          width="14"
          height="14"
          viewBox="0 0 24 24"
          fill={i < n ? "currentColor" : "none"}
          stroke="currentColor"
          strokeWidth="1.6"
          className="text-bb-yellow"
          aria-hidden="true"
        >
          <path d="m12 2.6 2.9 5.9 6.5.95-4.7 4.6 1.1 6.5L12 17.5l-5.8 3.05 1.1-6.5-4.7-4.6 6.5-.95z" />
        </svg>
      ))}
    </div>
  );
}

function Index() {
  return (
    <div className="min-h-screen bg-[#0B0B0E] font-body text-white">
      {/* HEADER */}
      <header className="sticky top-0 z-50 border-b border-bb-blue/25 bg-[#08080B]/90 backdrop-blur-md">
        <div className="mx-auto grid max-w-5xl grid-cols-[minmax(0,1fr)_auto] items-center gap-4 px-4 py-3">
          <div className="flex min-w-0 items-center gap-2.5">
            <BestBuyLogo className="shrink-0" />
            <span className="truncate font-display text-[11px] font-bold tracking-[0.22em] text-white uppercase">
              Rewards Club
            </span>
          </div>
          <div className="flex shrink-0 items-center gap-2 rounded-full border border-bb-blue/45 bg-bb-blue/12 px-3 py-1.5">
            <span className="bb-pulse h-1.5 w-1.5 rounded-full bg-bb-yellow" />
            <span className="font-display text-[10px] font-bold tracking-[0.2em] text-white uppercase">
              Live
            </span>
          </div>
        </div>
      </header>

      {/* HERO */}
      <section className="relative flex min-h-[100svh] items-center overflow-hidden px-4 py-12">
        <div
          aria-hidden="true"
          className="pointer-events-none absolute top-[-10%] left-1/2 h-[720px] w-[720px] -translate-x-1/2 rounded-full bg-[radial-gradient(circle,oklch(0.48_0.21_262/26%),transparent_66%)]"
        />
        <div className="relative mx-auto w-full max-w-xl">
          <div className="bb-rise" style={{ animationDelay: "60ms" }}>
            <Voucher />
          </div>

          <h1
            className="bb-rise mt-10 text-center font-display text-[34px] leading-[1.06] font-black tracking-tight sm:text-5xl"
            style={{ animationDelay: "180ms" }}
          >
            Get a <span className="text-bb-yellow">$750 BEST BUY</span> Voucher
          </h1>

          <p
            className="bb-rise mx-auto mt-4 max-w-md text-center text-[15px] leading-relaxed text-bb-muted"
            style={{ animationDelay: "280ms" }}
          >
            Complete a few simple partner offers. Voucher delivered straight to your inbox.
          </p>

          <div
            className="bb-rise mt-8 flex flex-col items-center"
            style={{ animationDelay: "380ms" }}
          >
            <ClaimButton label="Claim my $750 BEST BUY voucher →" />
            <div className="mt-3 flex items-center gap-1.5 text-[12px] font-semibold text-white/55">
              <LockIcon />
              SSL Secure &amp; Verified
            </div>
          </div>
        </div>
      </section>

      {/* HOW IT WORKS */}
      <section className="px-4 py-16">
        <div className="mx-auto max-w-xl">
          <Reveal>
            <p className="font-display text-[11px] font-bold tracking-[0.24em] text-bb-yellow uppercase">
              3 Simple Steps
            </p>
            <h2 className="mt-2 font-display text-3xl font-extrabold tracking-tight sm:text-4xl">
              How it works
            </h2>
          </Reveal>

          <ol className="relative mt-9 space-y-8 border-l border-white/10 pl-8">
            {STEPS.map((s, i) => (
              <li key={s.t}>
                <Reveal delay={i * 110}>
                  <span className="absolute -left-[7px] mt-1.5 block h-3.5 w-3.5 rounded-full border-2 border-[#0B0B0E] bg-bb-blue ring-3 ring-bb-blue/25" />
                  <h3 className="font-display text-lg font-extrabold">
                    <span className="mr-2 text-bb-yellow">{i + 1}.</span>
                    {s.t}
                  </h3>
                  <p className="mt-1.5 text-[14.5px] leading-relaxed text-bb-muted">{s.d}</p>
                </Reveal>
              </li>
            ))}
          </ol>
        </div>
      </section>

      {/* REVIEWS */}
      <section className="py-14">
        <div className="mx-auto max-w-xl px-4">
          <Reveal>
            <h2 className="font-display text-3xl font-extrabold tracking-tight sm:text-4xl">
              What people are saying
            </h2>
          </Reveal>
        </div>

        <div
          className="no-scrollbar mt-7 flex snap-x snap-mandatory gap-4 overflow-x-auto px-4 pb-2"
          style={{ scrollPaddingLeft: "1rem" }}
        >
          {REVIEWS.map((r) => (
            <article
              key={r.name}
              className="w-[78vw] max-w-[340px] shrink-0 snap-start rounded-2xl border border-white/8 border-l-[3px] border-l-bb-blue bg-ink-2 p-5"
            >
              <Stars n={r.stars} />
              <p className="mt-3 text-[14px] leading-relaxed text-white/80">“{r.text}”</p>
              <p className="mt-4 font-display text-[12px] font-bold tracking-[0.12em] text-white/55 uppercase">
                {r.name} — {r.state}
              </p>
            </article>
          ))}
        </div>

        <div className="mx-auto mt-10 flex max-w-xl flex-col items-center px-4">
          <Reveal className="w-full sm:w-auto">
            <ClaimButton label="Claim my $750 voucher →" />
          </Reveal>
        </div>
      </section>

      {/* FOOTER */}
      <footer className="mt-8 border-t border-bb-blue/25 bg-[#08080B] px-4 py-10">
        <div className="mx-auto max-w-xl">
          <div className="flex items-center gap-2.5">
            <BestBuyLogo className="shrink-0" />
            <span className="font-display text-[11px] font-bold tracking-[0.22em] text-white uppercase">
              Rewards Club
            </span>
          </div>

          <nav className="mt-6 flex flex-wrap gap-x-6 gap-y-2 text-[13px] font-semibold text-white/60">
            <a href="/terms" className="hover:text-white">
              Terms of Service
            </a>
            <a href="/privacy" className="hover:text-white">
              Privacy Policy
            </a>
            <a href="/cookies" className="hover:text-white">
              Cookie Policy
            </a>
            <a href="/contact" className="hover:text-white">
              Contact
            </a>
          </nav>

          <p className="mt-6 text-[12px] leading-relaxed text-white/40">
            Independent promotion. Not affiliated with or endorsed by Best Buy Co., Inc. Open to US
            residents 18+.
          </p>
          <p className="mt-3 text-[12px] text-white/35">
            © 2026 Rewards Club. All rights reserved.
          </p>
        </div>

        <noscript>
          <img
            height="1"
            width="1"
            style={{ display: "none" }}
            alt=""
            src="https://www.facebook.com/tr?id=REPLACE_WITH_PIXEL_ID&ev=PageView&noscript=1"
          />
        </noscript>
      </footer>
    </div>
  );
}
