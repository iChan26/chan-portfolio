"use client";

import React from "react";
import styled, { keyframes } from "styled-components";

/**
 * FeaturedSection.jsx
 *
 * Make sure the following assets exist in /public:
 * - /img/Web Development/Redeemer Hospice.webp
 * - /img/Web Development/WeBuilt.webp
 * - /img/Web Development/The Shift Method™.webp
 * - /svg/wordpress.svg
 * - /svg/elementor.svg
 * - /svg/gohighlevel.svg
 * - /svg/html.svg
 * - /svg/shopify.svg
 * - /svg/liquid.svg
 *
 * Usage: <FeaturedSection />
 */

const floatY = keyframes`
  0%   { transform: translateY(-6%); }
  50%  { transform: translateY(6%);  }
  100% { transform: translateY(-6%); }
`;

const popZ = keyframes`
  0% { transform: translateZ(0) translateY(0); }
  100% { transform: translateZ(10px) translateY(-6px); }
`;

/* shimmer for title */
const shine = keyframes`
  0% { transform: translateX(-140%) skewX(-20deg); }
  100% { transform: translateX(140%) skewX(-20deg); }
`;

export default function FeaturedSection() {
  const cards = [
    {
      image: "/img/Web Development/Redeemer Hospice.webp",
      title: "Reedemer Hospice",
      description: "Reedemer Hospice – Web Development",
      tools: ["/svg/wordpress.svg", "/svg/Elementor.svg"],
      viewLink: "https://redeemerhospice.com/",
    },
    {
      image: "/img/Web Development/WeBuilt.webp",
      title: "WeBuilt AI Agents",
      description: "Deploy AI Agents – Frontend/Web Design",
      tools: ["/svg/gohighlevel.svg", "/svg/html.svg"],
      viewLink:
        "https://app.gohighlevel.com/v2/preview/dFp5wWMfb2kkwa1xxKO4#col-6u7nxbS48p",
    },
    {
      image: "/img/Web Development/The Shift Method™.webp",
      title: "The Shift Method™",
      description: "Shift Toolkit – Web Development",
      tools: ["/svg/Shopify.svg", "/svg/liquid.svg"],
      viewLink: "https://theshiftteam.com/",
    },
  ];

  return (
    <Section id="featured-works">
      <div className="wrap">
        <header className="header">
          <h2 className="heading">
            <span className="muted">Featured</span>{" "}
            <span className="accent">Works</span>
          </h2>
          <p className="lede">Selected projects — quality design, performant builds.</p>
        </header>

        <div className="grid">
          {cards.map((c, i) => (
            <article className="parent" key={i} aria-label={c.title}>
              <div className="card" role="group" tabIndex={0}>
                <div className="logo" aria-hidden>
                  <span className="circle circle1" />
                  <span className="circle circle2" />
                  <span className="circle circle3" />
                  <span className="circle circle4" />
                  <span className="circle circle5">
                    {/* small icon in the top stack */}
                    <svg viewBox="0 0 32 32" className="logo-svg" aria-hidden>
                      <circle cx="16" cy="16" r="14" fill="#111" />
                    </svg>
                  </span>
                </div>

                <div className="glass" />

                <div className="media" aria-hidden>
                  <img src={c.image} alt={c.title} className="media-img" />
                </div>

                <div className="panel">
                  <h3 className="title-3d" aria-hidden>
                    <span className="title-layer title-front">{c.title}</span>
                    <span className="title-layer title-mid">{c.title}</span>
                    <span className="title-layer title-back">{c.title}</span>
                  </h3>

                  <div className="panel-body">
                    <p className="desc">{c.description}</p>

                    <div className="actions">
                      <div className="tools" aria-hidden>
                        {c.tools.map((t, k) => (
                          <button
                            className="tool"
                            key={k}
                            title={`Tool: ${t.split("/").pop().replace(".svg", "")}`}
                          >
                            <img src={t} alt="" draggable="false" />
                          </button>
                        ))}
                      </div>

                      <a
                        className="view"
                        href={c.viewLink}
                        target="_blank"
                        rel="noreferrer noopener"
                        aria-label={`Open ${c.title}`}
                      >
                        <span className="view-circle" aria-hidden>
                          <svg viewBox="0 0 24 24" className="eye">
                            <path
                              d="M12 5c-7 0-11 7-11 7s4 7 11 7 11-7 11-7-4-7-11-7zm0 11a4 4 0 1 1 0-8 4 4 0 0 1 0 8z"
                              fill="currentColor"
                            />
                            <circle cx="12" cy="12" r="2" fill="currentColor" />
                          </svg>
                        </span>
                        <span className="view-text">View</span>
                        <svg className="chev" viewBox="0 0 24 24" aria-hidden>
                          <path
                            d="m6 9 6 6 6-6"
                            stroke="currentColor"
                            strokeWidth="1.6"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            fill="none"
                          />
                        </svg>
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            </article>
          ))}
        </div>
      </div>
    </Section>
  );
}

/* ========= Styled (gold & black, 3D visuals) ========= */
const Section = styled.section`
  --gold: #d4af37;
  --gold-dark: #b8872a;
  --bg-1: #070707;
  --muted: #9b937f;

  padding: 64px 20px;
  background: linear-gradient(180deg, var(--bg-1) 0%, #0f0f0f 100%);
  color: #fff;

  .wrap {
    max-width: 1200px;
    margin: 0 auto;
  }

  .header {
    text-align: center;
    margin-bottom: 28px;
  }
  .heading {
    margin: 0;
    font-weight: 900;
    font-size: 48px;
    letter-spacing: -0.02em;
  }
  .heading .muted {
    color: #fff;
    margin-right: 8px;
  }
  .heading .accent {
    color: var(--gold);
  }
  .lede {
    margin-top: 8px;
    color: rgba(255, 255, 255, 0.75);
    font-size: 21px;
  }

  .grid {
    display: grid;
    grid-template-columns: 1fr;
    gap: 22px;
    justify-items: center;
  }

  @media (min-width: 780px) {
    .grid {
      grid-template-columns: repeat(3, 1fr);
      gap: 28px;
    }
  }

  /* ==== CARD SIZE ADJUSTMENT (only the card/container sizes) ==== */
  .parent {
    width: 100%;
    max-width: 380px; /* slightly enlarged from 340 -> 380 */
    height: 400px;    /* slightly taller from 360 -> 400 */
    perspective: 1100px;
  }

  .card {
    position: relative;
    height: 100%;
    border-radius: 36px;
    background: linear-gradient(135deg, #0b0b0b 0%, #141212 100%);
    transform-style: preserve-3d;
    transition: transform 0.5s cubic-bezier(.2,.9,.2,1), box-shadow 0.45s ease;
    box-shadow: 0 20px 60px rgba(0, 0, 0, 0.55), inset 0 1px 0 rgba(255,255,255,0.02);
    overflow: hidden;
    cursor: default;
  }

  /* top-right decorative stacked circles (now gold-themed) */
  .logo {
    position: absolute;
    right: 0;
    top: 0;
    transform-style: preserve-3d;
    pointer-events: none;
    z-index: 30;
  }
  .logo .circle {
    position: absolute;
    border-radius: 50%;
    transition: transform 0.45s ease;
    box-shadow: 0 8px 24px rgba(0, 0, 0, 0.45);
    /* make circles noticeably gold with gentle translucency */
    background: radial-gradient(circle at 30% 30%, rgba(212,175,55,0.22), rgba(212,175,55,0.12) 40%, rgba(212,175,55,0.06) 100%);
    border: 1px solid rgba(212,175,55,0.06);
  }
  .logo .circle1 { width: 170px; height: 170px; top: 6px; right: 6px; transform: translate3d(0,0,12px); }
  .logo .circle2 { width: 135px; height: 135px; top: 12px; right: 12px; transform: translate3d(0,0,28px); }
  .logo .circle3 { width: 100px; height: 100px; top: 20px; right: 20px; transform: translate3d(0,0,44px); }
  .logo .circle4 { width: 72px; height: 72px; top: 26px; right: 26px; transform: translate3d(0,0,62px); }
  .logo .circle5 {
    width: 46px; height: 46px; top: 32px; right: 32px;
    transform: translate3d(0,0,82px);
    display:grid; place-items:center;
    background: linear-gradient(180deg, var(--gold) 0%, var(--gold-dark) 100%);
    border-radius:50%;
    box-shadow: 0 10px 30px rgba(212,175,55,0.12);
    border: 1px solid rgba(0,0,0,0.25);
  }
  .logo .logo-svg { width: 18px; height: 18px; fill: #111; }

  .glass {
    position: absolute;
    inset: 10px;
    border-radius: 32px;
    border-top-right-radius: 100%;
    background: linear-gradient(0deg, rgba(255,255,255,0.04), rgba(255,255,255,0.06));
    transform: translate3d(0,0,20px);
    border-left: 1px solid rgba(255,255,255,0.02);
    border-bottom: 1px solid rgba(255,255,255,0.02);
    pointer-events: none;
    z-index: 8;
    transition: transform 0.45s ease;
  }

  .media {
    position: absolute;
    inset: 0;
    overflow: hidden;
    border-radius: 36px;
    z-index: 2;
  }

  .media-img {
    width: 100%;
    height: 100%;
    object-fit: cover;
    transform: translateY(-6%);
    will-change: transform;
    animation: ${floatY} 7.5s ease-in-out infinite;
    filter: saturate(1.02) contrast(1.03);
    display: block;
    pointer-events: none;
  }

  .panel {
    position: absolute;
    left: 12px;
    right: 12px;
    bottom: 12px;
    z-index: 22;
    transform: translate3d(0,0,36px);
    display: flex;
    flex-direction: column;
    gap: 8px;
  }

  /* 3D stacked title */
  .title-3d {
    margin: 0;
    font-weight: 900;
    font-size: 16px; /* unchanged per your request */
    line-height: 1;
    text-align: center;
    position: relative;
    height: 36px;
    perspective: 500px;
    display: flex;
    align-items: center;
    justify-content: center;
  }
  .title-layer {
    position: absolute;
    left: 50%;
    transform: translateX(-50%);
    white-space: nowrap;
    -webkit-font-smoothing: antialiased;
  }
  .title-front {
    color: #111;
    background: linear-gradient(90deg, var(--gold), var(--gold-dark));
    padding: 8px 14px;
    border-radius: 10px;
    z-index: 30;
    transform: translateZ(18px);
    box-shadow: 0 8px 22px rgba(0,0,0,0.65);
    font-size: 15px; /* unchanged */
    position: relative;
    overflow: hidden; /* for shimmer */
  }
  /* shimmer overlay that loops */
  .title-front::after {
    content: "";
    position: absolute;
    top: -5%;
    left: -140%;
    width: 60%;
    height: 110%;
    transform: skewX(-20deg);
    background: linear-gradient(90deg, rgba(255,255,255,0) 0%, rgba(255,255,255,0.85) 50%, rgba(255,255,255,0) 100%);
    animation: ${shine} 2.2s linear infinite;
    mix-blend-mode: overlay;
    pointer-events: none;
    opacity: 0.95;
  }

  .title-mid {
    color: rgba(0,0,0,0.2);
    transform: translateY(2px) translateZ(8px);
    filter: blur(0.5px);
    z-index: 20;
  }
  .title-back {
    color: rgba(0,0,0,0.08);
    transform: translateY(4px) translateZ(0px);
    z-index: 10;
  }

  /* subtle pulsing on hover focus for the front title (keeps text size same) */
  .parent:hover .title-front,
  .parent:focus-within .title-front {
    animation: ${popZ} 320ms ease forwards;
  }

  /* PANEL BODY: glossy blurred effect */
  .panel-body {
    position: relative;
    background: linear-gradient(180deg, rgba(255,255,255,0.04), rgba(255,255,255,0.02));
    padding: 12px;
    border-radius: 12px;
    box-shadow: 0 8px 20px rgba(0,0,0,0.5);
    border: 1px solid rgba(255,255,255,0.05);
    overflow: hidden;
    /* glassy blur */
    backdrop-filter: blur(10px) saturate(130%);
    -webkit-backdrop-filter: blur(10px) saturate(130%);
    z-index: 24;
  }
  /* glossy highlight stripe */
  .panel-body::before {
    content: "";
    position: absolute;
    left: -10%;
    top: -30%;
    width: 120%;
    height: 60%;
    background: linear-gradient(180deg, rgba(255,255,255,0.14), rgba(255,255,255,0.02));
    transform: rotate(-12deg);
    filter: blur(8px);
    opacity: 0.8;
    pointer-events: none;
  }
  /* subtle inner top gloss */
  .panel-body::after {
    content: "";
    position: absolute;
    left: 0;
    top: 0;
    width: 100%;
    height: 8px;
    background: linear-gradient(90deg, rgba(255,255,255,0.18), rgba(255,255,255,0.02));
    pointer-events: none;
    border-top-left-radius: 12px;
    border-top-right-radius: 12px;
  }

  .desc {
    margin: 4px 0 12px;
    font-size: 13px;
    color: #fdc100;
    font-weight:700;
    text-align: center;
  }

  .actions {
    display: flex;
    align-items: center;
    justify-content: space-between;
    gap: 8px;
  }

  .tools {
    display: flex;
    gap: 10px;
  }

  .tool {
    width: 38px;
    height: 38px;
    border-radius: 999px;
    padding: 6px;
    display: grid;
    place-items: center;
    background: #fff;
    border: none;
    box-shadow: 0 10px 18px rgba(0,0,0,0.45);
    transition: transform 0.28s ease, box-shadow 0.28s ease;
    cursor: pointer;
  }
  .tool img { width: 18px; height: 18px; object-fit: contain; user-select: none; pointer-events: none; }
  .tool:hover { transform: translateY(-8px) rotateX(8deg); box-shadow: 0 18px 28px rgba(0,0,0,0.6); background: #111; }
  .tool:hover img { filter: brightness(0) invert(1); }

  .view {
    display: inline-flex;
    align-items: center;
    gap: 10px;
    text-decoration: none;
    color: var(--gold);
    padding: 8px 12px;
    border-radius: 999px;
    background: linear-gradient(180deg, rgba(212,175,55,0.04), rgba(212,175,55,0.02));
    border: 1px solid rgba(212,175,55,0.12);
    font-weight: 800;
    box-shadow: 0 8px 20px rgba(0,0,0,0.45), inset 0 1px 0 rgba(255,255,255,0.02);
    transform-style: preserve-3d;
    transition: transform 0.22s ease, box-shadow 0.22s ease;
  }

  .view-circle {
    display:inline-grid;
    place-items:center;
    width:34px; height:34px;
    border-radius:50%;
    background: linear-gradient(180deg, var(--gold), var(--gold-dark));
    color: #111;
    box-shadow: 0 8px 18px rgba(212,175,55,0.12);
    transform: translateZ(8px);
  }
  .view .eye { width:16px; height:16px; color: #111; }

  .view-text { font-size: 13px; color: var(--gold); }

  .chev { width: 14px; height: 14px; color: var(--gold); }

  .view:hover {
    transform: translateY(-6px);
    box-shadow: 0 20px 40px rgba(0,0,0,0.6);
  }

  /* hover interactions for the whole card */
  .parent:hover .card,
  .parent:focus-within .card {
    transform: rotate3d(1, 1, 0, 20deg) translateY(-8px);
    box-shadow: 0 30px 90px rgba(0,0,0,0.7);
  }

  .parent:hover .glass { transform: translate3d(0,0,36px); }
  .parent:hover .logo .circle2 { transform: translate3d(0,0,46px); }
  .parent:hover .logo .circle3 { transform: translate3d(0,0,72px); }
  .parent:hover .logo .circle4 { transform: translate3d(0,0,96px); }
  .parent:hover .logo .circle5 { transform: translate3d(0,0,132px); }

  /* responsive adjustments */
  @media (max-width: 520px) {
   .title-3d {margin-right:80px;}
  .heading {font-size:31px;}
  .lede {font-size:17px;}
    .parent { max-width: 100%; height: 420px; } /* keep slightly taller on mobile */
    .title-front { padding: 8px 10px; font-size: 14px; }
    .panel { left: 8px; right: 8px; bottom: 10px; }
  }
`;
