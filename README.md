# Best Buy Rewards

Offer Name: BEST BUY

Affiliate Link: https://giftclick.org/aff_c?offer_id=735&aff_id=174231

name: Use this as the reference for every occurrence of [OFFER NAME]
throughout this prompt. Replace every [OFFER NAME] automatically with
the Offer Name provided above.

link: Use this as the destination URL for every CTA/button in the
landing page. Replace every occurrence of
REPLACE_WITH_YOUR_AFFILIATE_LINK with the Affiliate Link provided above.

Build a mobile-first, dark cinematic landing page for a “$750 [OFFER
NAME] Voucher” reward promotion. Use TanStack Start and deploy-ready for
Vercel hosting.

BRAND & THEME

Dark cinematic background #0B0B0E with subtle radial glow behind hero.

Use the official theme and branding of [OFFER NAME].

Typography: Archivo (700/800/900) headings, Mulish (400/600/700/800)
body. Load via Google Fonts in src/routes/__root.tsx.

Feel: premium retail experience — clean, trustworthy, bold. No neon. No
generic gradients.

⸻

HEADER

Left: [OFFER NAME] logo beside “REWARDS CLUB” in small bold tracked
white uppercase.

Right: small pulsing dot + “LIVE” pill using the official branding of
[OFFER NAME].

Header background: near-black with faint branded bottom border.

⸻

HERO

Full viewport height.

Background: deep dark theme matching the official branding of [OFFER
NAME] with subtle branded radial glow.

3D-tilt voucher mock (mouse parallax desktop, deviceorientation mobile,
respect prefers-reduced-motion).

VOUCHER DESIGN

Landscape, border-radius 20px.

Background uses the official branding/theme of [OFFER NAME].

Large faint circle orb on right side.

Top-left: VOUCHER small bold white tracked uppercase.

Top-right: Official website/domain of [OFFER NAME] in small muted white.

Bottom-left: $750 massive bold white (font-size 80px, font-weight 900).

Below that: Official website/domain balance label in small muted white.

White sheen/gloss sweep across voucher surface.

Soft branded glow underneath voucher.

H1: Get a $750 [OFFER NAME] Voucher — accent “$750 [OFFER NAME]” using
the official branded accent.

Subhead:

Complete a few simple partner offers. Voucher delivered straight to your
inbox.

CTA button (full-width mobile):

Solid primary branded button.

White bold text:

CLAIM MY $750 [OFFER NAME] VOUCHER →

Below button:

Small green lock icon +

SSL Secure & Verified

⸻

HOW IT WORKS

Kicker:

3 SIMPLE STEPS

using official branded accent.

H2:

How it works

Vertical timeline with connecting line and branded accent dots.

1.  Tap Claim Now — Start your reward in seconds.
2.  Complete Quick Offers — Finish a few simple offers from our
    partners. Each shows its terms first.
3.  Get Your Voucher — Delivered straight to your inbox once confirmed.

⸻

REVIEWS (Horizontally Scrollable)

Heading:

What people are saying

overflow-x: auto

scroll-snap-type: x mandatory

Hidden scrollbar all browsers.

Cards ~78% viewport width so next card peeks.

Stars use the official branded accent.

Cards: Dark themed background with subtle branded left border.

6 cards:

1.  Marcus — Texas — 5★ — “Was honestly skeptical at first but the steps
    were clear the whole way. Did the offers I actually liked the look
    of and skipped the rest. Confirmation hit my email a few days
    later.”
2.  Janelle — Georgia — 5★ — “Nice that it tells you exactly what each
    offer involves before you commit to anything. No surprises. Took me
    a couple evenings to work through.”
3.  Devin — Ohio — 5★ — “Support actually answered when I had a question
    about one of the partner offers. That alone made me trust it more
    than the other stuff I’ve tried.”
4.  Priya — California — 4★ — “Process was smoother than I expected. Did
    most of it on my phone during my commute. Just read the terms on
    each one like it says and you’re good.”
5.  Tyler — Florida — 5★ — “Took my time with it, picked the offers that
    made sense for me, and everything came through like they said.
    Straightforward.”
6.  Sofia — Arizona — 5★ — “Liked that there was no pressure to rush.
    Worked through it at my own pace over a week. Clear instructions at
    every step.”

⸻

SECOND CTA

Same branded button below reviews:

CLAIM MY $750 VOUCHER →

⸻

CTA BEHAVIOR

Both CTAs call handleClaim().

Fires Meta Pixel Lead + InitiateCheckout if window.fbq exists.

Opens

REPLACE_WITH_YOUR_AFFILIATE_LINK

in new tab.

Meta Pixel base init with

REPLACE_WITH_PIXEL_ID

placeholder + pixel image.

⸻

FOOTER

[OFFER NAME] logo + REWARDS CLUB lockup left.

Faint branded top border.

Links:

Terms of Service

Privacy Policy

Cookie Policy

Contact

Disclaimer:

“Independent promotion. Not affiliated with or endorsed by [OFFICIAL
COMPANY NAME]. Open to US residents 18+.”

Copyright:

© 2026 Rewards Club. All rights reserved.

⸻

SEO / METADATA

Title:

Get a $750 [OFFER NAME] Voucher | Rewards Club

Description:

Complete a few simple partner offers and get a $750 [OFFER NAME] voucher
delivered to your inbox.

Matching og:title / og:description.

⸻

ANIMATIONS

Staggered fade/slide reveal on mount for hero elements.

Voucher 3D tilt as described.

Scroll-triggered fade-in for each section.

All motion respects prefers-reduced-motion.

⸻

COMPLIANCE — DO NOT CHANGE

Keep all review copy and disclaimer text exactly as written.

No urgency language.

No countdown timers.

No guaranteed-result claims.

No income claims.

No “limited” availability language.

Keep the color theme relevant to the offer.

This project was built with [Lovable](https://lovable.dev).

## Build with Lovable

Continue developing this project in the [Lovable editor](https://lovable.dev/projects/a989ddf8-272b-4189-9a2b-a2fd16f8734e).

- **Ship faster**: describe what you want to build and Lovable handles the code.
- **Stay in sync**: every change made in Lovable is committed straight to this repository.
- **Full ownership**: this code is yours. Push to `main` on GitHub and your changes sync back into Lovable, ready for your next prompt.

## Development

Prefer working locally? You need Node.js and npm — [install with nvm](https://github.com/nvm-sh/nvm#installing-and-updating).

```sh
git clone <this-repository-url>
cd <repository-name>
npm i
npm run dev
```
