"use client";

import { useState } from "react";

const lessons = [
  { number: "01", title: "The Grid", text: "Build responsive layouts with containers, rows, and twelve flexible columns.", badge: "Layout" },
  { number: "02", title: "Components", text: "Compose polished interfaces from buttons, cards, navbars, alerts, and more.", badge: "UI" },
  { number: "03", title: "Utilities", text: "Fine-tune spacing, color, display, and alignment without writing extra CSS.", badge: "Speed" },
];

export default function Home() {
  const [copied, setCopied] = useState(false);

  const copySnippet = async () => {
    await navigator.clipboard.writeText('<button class="btn btn-primary">Hello Bootstrap!</button>');
    setCopied(true);
    window.setTimeout(() => setCopied(false), 1800);
  };

  return (
    <main>
      <nav className="navbar navbar-expand-lg fixed-top lecture-nav" aria-label="Main navigation">
        <div className="container">
          <a className="navbar-brand fw-bold d-flex align-items-center gap-2" href="#top">
            <span className="brand-mark">B</span> Bootstrap Lab
          </a>
          <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navLinks" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon" />
          </button>
          <div className="collapse navbar-collapse" id="navLinks">
            <div className="navbar-nav ms-auto align-items-lg-center gap-lg-2">
              <a className="nav-link" href="#concepts">Concepts</a>
              <a className="nav-link" href="#demo">Live demo</a>
              <a className="btn btn-dark rounded-pill px-4 ms-lg-2" href="#challenge">Try it yourself</a>
            </div>
          </div>
        </div>
      </nav>

      <section id="top" className="hero d-flex align-items-center position-relative overflow-hidden">
        <div className="hero-orb orb-one" /><div className="hero-orb orb-two" />
        <div className="container position-relative">
          <div className="row align-items-center g-5">
            <div className="col-lg-7">
              <div className="eyebrow mb-3"><span /> BOOTSTRAP 5 · QUICK START</div>
              <h1 className="display-2 fw-bold lh-1 mb-4">Build better.<br /><span className="gradient-text">Build faster.</span></h1>
              <p className="lead text-secondary mb-4 hero-copy">A practical introduction to the world’s most popular front-end toolkit—designed to take you from a blank page to a responsive interface.</p>
              <div className="d-flex flex-wrap gap-3">
                <a href="#concepts" className="btn btn-primary btn-lg rounded-pill px-4">Start the lesson <span aria-hidden="true">→</span></a>
                <a href="#demo" className="btn btn-outline-dark btn-lg rounded-pill px-4">See the demo</a>
              </div>
              <div className="d-flex gap-4 mt-5 small text-secondary">
                <span><b className="text-dark">12</b> columns</span><span><b className="text-dark">6</b> breakpoints</span><span><b className="text-dark">0</b> setup drama</span>
              </div>
            </div>
            <div className="col-lg-5">
              <div className="code-window shadow-lg">
                <div className="code-top"><span className="dot red" /><span className="dot yellow" /><span className="dot green" /><span className="ms-auto text-secondary small">index.html</span></div>
                <pre className="mb-0"><code><span className="code-blue">&lt;div</span> <span className="code-green">class</span>=<span className="code-orange">&quot;container&quot;</span><span className="code-blue">&gt;</span>{"\n  "}<span className="code-blue">&lt;div</span> <span className="code-green">class</span>=<span className="code-orange">&quot;row g-4&quot;</span><span className="code-blue">&gt;</span>{"\n    "}<span className="code-blue">&lt;div</span> <span className="code-green">class</span>=<span className="code-orange">&quot;col-md-6&quot;</span><span className="code-blue">&gt;</span>{"\n      "}Hello, Bootstrap!{"\n    "}<span className="code-blue">&lt;/div&gt;</span>{"\n  "}<span className="code-blue">&lt;/div&gt;</span>{"\n"}<span className="code-blue">&lt;/div&gt;</span></code></pre>
                <div className="result-card"><div className="result-label">RESULT</div><div className="d-flex gap-2"><div className="result-block">Hello,</div><div className="result-block accent">Bootstrap!</div></div></div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section id="concepts" className="section-pad bg-white">
        <div className="container">
          <div className="row mb-5 align-items-end"><div className="col-lg-7"><div className="eyebrow mb-2"><span /> THE CORE IDEA</div><h2 className="display-5 fw-bold mb-0">Three tools. Endless layouts.</h2></div><div className="col-lg-5"><p className="text-secondary mb-0 mt-3 mt-lg-0">Bootstrap gives us a shared visual language. Learn these three foundations and the rest clicks into place.</p></div></div>
          <div className="row g-4">
            {lessons.map((lesson) => <div className="col-md-4" key={lesson.number}><article className="lesson-card h-100"><div className="d-flex justify-content-between align-items-start mb-5"><span className="lesson-number">{lesson.number}</span><span className="badge text-bg-light rounded-pill px-3 py-2">{lesson.badge}</span></div><h3 className="h4 fw-bold">{lesson.title}</h3><p className="text-secondary mb-4">{lesson.text}</p><a href="#demo" className="card-link">Explore concept <span>→</span></a></article></div>)}
          </div>
        </div>
      </section>

      <section id="demo" className="section-pad demo-section">
        <div className="container">
          <div className="row g-5 align-items-center">
            <div className="col-lg-5">
              <div className="eyebrow light mb-3"><span /> LIVE COMPONENT</div><h2 className="display-5 fw-bold text-white">One class.<br />Instant polish.</h2><p className="text-white-50 my-4">This button is styled entirely with Bootstrap utility classes. Copy it, paste it, and make it yours.</p>
              <button className="btn btn-light rounded-pill px-4 py-3 fw-semibold" onClick={copySnippet}>{copied ? "Copied! ✓" : "Copy the snippet"}</button>
            </div>
            <div className="col-lg-7">
              <div className="demo-canvas">
                <div className="d-flex justify-content-between align-items-center border-bottom pb-3 mb-4"><span className="fw-semibold">Component preview</span><span className="status-pill"><span /> Live</span></div>
                <div className="preview-stage"><button className="btn btn-primary btn-lg shadow-sm">Hello Bootstrap!</button></div>
                <div className="snippet mt-4"><span className="text-secondary">&lt;button class=</span><span className="code-orange">&quot;btn btn-primary&quot;</span><span className="text-secondary">&gt;</span>Hello Bootstrap!<span className="text-secondary">&lt;/button&gt;</span></div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section id="challenge" className="section-pad bg-light-subtle">
        <div className="container"><div className="challenge-box text-center position-relative overflow-hidden"><span className="challenge-label">YOUR TURN</span><h2 className="display-5 fw-bold mt-3">Ready to build something?</h2><p className="text-secondary mx-auto mb-4">Try changing the button color, rearranging the columns, or building a card of your own. The fastest way to learn is to ship.</p><div className="d-flex flex-wrap gap-3 justify-content-center"><a href="https://getbootstrap.com/docs/5.3/getting-started/introduction/" className="btn btn-primary btn-lg rounded-pill px-4" target="_blank" rel="noreferrer">Open Bootstrap docs ↗</a><a href="#top" className="btn btn-outline-dark btn-lg rounded-pill px-4">Back to top</a></div></div></div>
      </section>

      <footer className="py-4 bg-white border-top"><div className="container d-flex flex-wrap justify-content-between gap-2 small text-secondary"><span>Built for the classroom with Bootstrap 5.3</span><span>Responsive · Accessible · Ready to remix</span></div></footer>
    </main>
  );
}
