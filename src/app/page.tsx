"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { Zap, Heart, ArrowRight, Shield, Star, CheckCircle } from "lucide-react";

// ─── Data ────────────────────────────────────────────────────────────────────

const CAUSES = [
  {
    title: "Your cause",
    image: "https://images.unsplash.com/photo-1593113514041-35b7194f42f3?auto=format&fit=crop&w=300&q=80",
    progress: 75,
    pos: { top: "6%", left: "13%" },
    size: 148,
    delay: 0,
  },
  {
    title: "Medical",
    image: "https://images.unsplash.com/photo-1516549655169-df83a0774514?auto=format&fit=crop&w=300&q=80",
    progress: 100,
    pos: { top: "44%", left: "2%" },
    size: 122,
    delay: 0.1,
  },
  {
    title: "Emergency",
    image: "https://images.unsplash.com/photo-1534488972407-5a4aa1e47d83?auto=format&fit=crop&w=300&q=80",
    progress: 40,
    pos: { bottom: "8%", left: "17%" },
    size: 132,
    delay: 0.2,
  },
  {
    title: "Education",
    image: "https://images.unsplash.com/photo-1523050854058-8df90110c9f1?auto=format&fit=crop&w=300&q=80",
    progress: 60,
    pos: { top: "6%", right: "12%" },
    size: 138,
    delay: 0.3,
  },
  {
    title: "Animal",
    image: "https://images.unsplash.com/photo-1548767797-d8c844163c4c?auto=format&fit=crop&w=300&q=80",
    progress: 85,
    pos: { top: "40%", right: "2%" },
    size: 118,
    delay: 0.4,
  },
  {
    title: "Business",
    image: "https://images.unsplash.com/photo-1556761175-5973dc0f32d7?auto=format&fit=crop&w=300&q=80",
    progress: 90,
    pos: { bottom: "10%", right: "18%" },
    size: 148,
    delay: 0.5,
  },
];

const HOW_IT_WORKS = [
  {
    step: "01",
    title: "Create your fundraiser",
    description:
      "You'll be guided by prompts to add fundraiser details and set your goal. Make updates anytime.",
    hint: "Get tips for starting your fundraiser",
    bg: "#e9fcce",
    image: "https://images.unsplash.com/photo-1587614382346-4ec70e388b28?auto=format&fit=crop&w=480&q=80",
  },
  {
    step: "02",
    title: "Reach donors by sharing",
    description:
      "Share your fundraiser link and use the resources in your dashboard to gain momentum.",
    hint: "",
    bg: "#e1f6f6",
    image: "https://images.unsplash.com/photo-1607703703520-bb638e84caf2?auto=format&fit=crop&w=480&q=80",
  },
  {
    step: "03",
    title: "Securely receive funds",
    description:
      "Add your bank information, or invite your fundraiser beneficiary to add theirs, and start receiving funds.",
    hint: "",
    bg: "#fef0ea",
    image: "https://images.unsplash.com/photo-1563013544-824ae1b704d3?auto=format&fit=crop&w=480&q=80",
  },
];

const FEATURED_CAMPAIGNS = [
  {
    title: "Help My Father Choose Life Again",
    raised: "UGX 51,675",
    donations: "2.2K donations",
    image: "https://images.unsplash.com/photo-1591604021695-0c69b7c05981?auto=format&fit=crop&w=400&q=80",
    progress: 68,
  },
  {
    title: "Support Troy Rebuild His Home",
    raised: "UGX 106,898",
    donations: "3K donations",
    image: "https://images.unsplash.com/photo-1560518883-ce09059eeffa?auto=format&fit=crop&w=400&q=80",
    progress: 82,
  },
  {
    title: "Supporting the Serkov Family",
    raised: "UGX 115,495",
    donations: "986 donations",
    image: "https://images.unsplash.com/photo-1502086223501-7ea6ecd79368?auto=format&fit=crop&w=400&q=80",
    progress: 45,
  },
  {
    title: "Community School Rebuild Fund",
    raised: "UGX 33,500",
    donations: "3.5K donations",
    image: "https://images.unsplash.com/photo-1503676260728-1c00da094a0b?auto=format&fit=crop&w=400&q=80",
    progress: 55,
  },
];

const CATEGORIES = [
  { name: "Medical", emoji: "🏥", color: "#e1f6f6" },
  { name: "Memorial", emoji: "🕊️", color: "#f8effc" },
  { name: "Emergency", emoji: "🚨", color: "#fef0ea" },
  { name: "Education", emoji: "📚", color: "#e9fcce" },
  { name: "Nonprofit", emoji: "❤️", color: "#fdeff4" },
  { name: "Animals", emoji: "🐾", color: "#fff3d0" },
  { name: "Business", emoji: "💼", color: "#e1f6f6" },
  { name: "Community", emoji: "🤝", color: "#f8effc" },
];

const TRUST_ITEMS = [
  {
    icon: <Shield size={28} />,
    title: "Simple pricing",
    body: "Fenna is free to start. A small transaction fee applies to donations received.",
  },
  {
    icon: <CheckCircle size={28} />,
    title: "Giving Guarantee",
    body: "In the rare case that something isn't right, Fenna gives you peace of mind with our donor protection.",
  },
  {
    icon: <Star size={28} />,
    title: "Trust & Safety experts",
    body: "Our team works around the clock to ensure your fundraiser is protected.",
  },
];

const FOOTER_LINKS = {
  "About Fenna": ["How Fenna works", "Why Fenna", "Fenna Giving Guarantee", "Newsroom", "Careers", "Fenna.org"],
  "Learn more": ["Fundraising ideas", "Fundraising tips", "Fundraising blog", "What is crowdfunding?", "Common questions", "Success stories"],
  "Resources": ["Help Center", "Supported countries", "Pricing", "Team fundraising", "Charity fundraising", "Sign up as nonprofit"],
  "Discover": ["Medical", "Memorial", "Emergency", "Education", "Animals", "Community"],
};

// ─── Page ─────────────────────────────────────────────────────────────────────

export default function Home() {
  return (
    <main style={{ flex: 1, display: "flex", flexDirection: "column", background: "#fff", overflow: "hidden" }}>
      {/* ══ 1. HERO ══════════════════════════════════════════════════════════ */}
      <HeroSection />

      {/* ══ 2. STATS BANNER ══════════════════════════════════════════════════ */}
      <StatsBanner />

      {/* ══ 3. HOW IT WORKS ══════════════════════════════════════════════════ */}
      <HowItWorksSection />

      {/* ══ 4. FEATURED CAMPAIGNS ════════════════════════════════════════════ */}
      <FeaturedCampaigns />

      {/* ══ 5. CATEGORIES ════════════════════════════════════════════════════ */}
      <CategoriesSection />

      {/* ══ 6. TRUST & SAFETY ════════════════════════════════════════════════ */}
      <TrustSection />

      {/* ══ 7. FOOTER ════════════════════════════════════════════════════════ */}
      <Footer />
    </main>
  );
}

// ─── Hero ─────────────────────────────────────────────────────────────────────

function HeroSection() {
  return (
    <section
      style={{
        position: "relative",
        width: "100%",
        minHeight: 680,
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        overflow: "hidden",
        background: "#fff",
      }}
    >
      {/* Soft blobs */}
      <div style={{ position: "absolute", inset: 0, pointerEvents: "none", overflow: "hidden" }}>
        <div style={{ position: "absolute", top: "20%", left: "20%", width: 300, height: 300, background: "#fff3d0", borderRadius: "50%", filter: "blur(80px)", opacity: 0.5 }} />
        <div style={{ position: "absolute", bottom: "20%", right: "20%", width: 300, height: 300, background: "#e9fcce", borderRadius: "50%", filter: "blur(80px)", opacity: 0.5 }} />
      </div>

      {/* Dashed orbit ring */}
      <div
        style={{
          position: "absolute",
          width: 740,
          height: 740,
          top: "50%",
          left: "50%",
          transform: "translate(-50%, -50%)",
          borderRadius: "50%",
          border: "1.5px dashed #d1d5db",
          pointerEvents: "none",
        }}
      />

      {/* Floating cause circles */}
      {CAUSES.map((c) => (
        <CauseCircle key={c.title} {...c} />
      ))}

      {/* Centre content */}
      <div
        style={{
          position: "relative",
          zIndex: 10,
          textAlign: "center",
          maxWidth: 540,
          padding: "0 1.5rem",
        }}
      >
        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.4 }}
          style={{ fontSize: "0.875rem", fontWeight: 700, color: "#585858", marginBottom: "1rem", letterSpacing: "0.04em" }}
        >
          #1 crowdfunding platform
        </motion.p>

        <motion.h1
          className="text-display-lg"
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.1 }}
          style={{ color: "#101014", marginBottom: "2rem" }}
        >
          Where successful<br />fundraisers start
        </motion.h1>

        <motion.div
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.25 }}
          style={{ display: "flex", gap: "0.75rem", justifyContent: "center", flexWrap: "wrap" }}
        >
          <Link href="/dashboard" className="btn-primary">
            Start a Fenna
          </Link>
          <Link href="/discover" className="btn-outline">
            Discover fundraisers
          </Link>
        </motion.div>
      </div>
    </section>
  );
}

// ─── CauseCircle ──────────────────────────────────────────────────────────────

function CauseCircle({ title, image, progress, pos, size, delay }: {
  title: string; image: string; progress: number;
  pos: React.CSSProperties; size: number; delay: number;
}) {
  const r = 46;
  const circ = 2 * Math.PI * r;
  const offset = circ - (progress / 100) * circ;

  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.5 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{ duration: 0.65, delay, type: "spring", stiffness: 100 }}
      style={{
        position: "absolute",
        ...pos,
        width: size,
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        zIndex: 20,
      }}
    >
      {/* Ring + photo */}
      <div style={{ width: size, height: size, position: "relative" }}>
        <svg viewBox="0 0 100 100" style={{ position: "absolute", inset: 0, width: "100%", height: "100%", transform: "rotate(-90deg)" }}>
          <circle cx="50" cy="50" r={r} stroke="#e5e7eb" strokeWidth="4" fill="none" />
          <circle cx="50" cy="50" r={r} stroke="#02a95c" strokeWidth="4" fill="none"
            strokeLinecap="round"
            style={{ strokeDasharray: circ, strokeDashoffset: offset, transition: "stroke-dashoffset 1s ease" }}
          />
        </svg>
        <div style={{ position: "absolute", inset: "7%", borderRadius: "50%", overflow: "hidden", border: "3px solid #fff", boxShadow: "0 4px 16px rgba(0,0,0,0.14)" }}>
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img src={image} alt={title} style={{ width: "100%", height: "100%", objectFit: "cover" }} />
        </div>
      </div>

      {/* Label */}
      <div style={{
        marginTop: -8, zIndex: 30,
        background: "rgba(255,255,255,0.95)",
        backdropFilter: "blur(4px)",
        border: "1px solid #e5e7eb",
        borderRadius: 6,
        padding: "3px 10px",
        fontSize: 11, fontWeight: 700, color: "#374151",
        boxShadow: "0 2px 8px rgba(0,0,0,0.08)",
        whiteSpace: "nowrap",
      }}>
        {title}
      </div>
    </motion.div>
  );
}

// ─── Stats Banner ─────────────────────────────────────────────────────────────

function StatsBanner() {
  return (
    <section style={{ background: "#fff3d0", padding: "1.75rem 0" }}>
      <div className="container" style={{ display: "flex", alignItems: "center", justifyContent: "center", gap: 0, flexWrap: "wrap" }}>
        <StatItem icon="⚡" text="No fee to start fundraising" />
        <Dot />
        <StatItem icon="🕐" text="1 donation made every second" />
        <Dot />
        <StatItem icon="❤️" text="8K+ fundraisers started daily" />
      </div>
    </section>
  );
}

function StatItem({ icon, text }: { icon: string; text: string }) {
  return (
    <div style={{ display: "flex", alignItems: "center", gap: "0.5rem", padding: "0 2rem", fontWeight: 700, fontSize: "0.9rem", color: "#274a34" }}>
      <span style={{ fontSize: "1.1rem" }}>{icon}</span>
      <span>{text}</span>
    </div>
  );
}

function Dot() {
  return <div style={{ width: 40, borderTop: "2px dotted #9ca3af" }} />;
}

// ─── How It Works ─────────────────────────────────────────────────────────────

function HowItWorksSection() {
  return (
    <section className="section" style={{ background: "#fff" }}>
      <div className="container">
        {/* Header */}
        <div style={{ marginBottom: "1rem" }}>
          <p style={{ fontSize: "0.875rem", fontWeight: 700, color: "#02a95c", marginBottom: "0.5rem", letterSpacing: "0.05em", textTransform: "uppercase" }}>
            How it works
          </p>
          <h2 className="text-display-md" style={{ color: "#101014", maxWidth: 560 }}>
            Fundraising on Fenna is easy, powerful, and trusted
          </h2>
        </div>

        <p className="text-body-lg" style={{ maxWidth: 560, marginBottom: "3rem" }}>
          Use our tools to create your fundraiser
        </p>

        {/* Steps */}
        <div style={{ display: "flex", flexDirection: "column", gap: "2rem" }}>
          {HOW_IT_WORKS.map((step, i) => (
            <motion.div
              key={step.step}
              initial={{ opacity: 0, x: i % 2 === 0 ? -30 : 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.1 }}
              style={{
                display: "grid",
                gridTemplateColumns: "1fr 1fr",
                gap: "2rem",
                alignItems: "center",
                background: step.bg,
                borderRadius: 20,
                overflow: "hidden",
                minHeight: 260,
                flexDirection: i % 2 === 1 ? "row-reverse" : "row",
              }}
            >
              {/* Text side */}
              <div style={{ padding: "2.5rem 2.5rem 2.5rem", order: i % 2 === 0 ? 0 : 1 }}>
                <div style={{ fontSize: "0.75rem", fontWeight: 800, color: "#274a34", marginBottom: "1rem", letterSpacing: "0.08em" }}>
                  STEP {step.step}
                </div>
                <h3 className="text-heading-xl" style={{ marginBottom: "0.75rem", color: "#101014" }}>
                  {step.title}
                </h3>
                <p className="text-body-md" style={{ color: "#585858", marginBottom: step.hint ? "1rem" : 0 }}>
                  {step.description}
                </p>
                {step.hint && (
                  <Link href="/tips" style={{ display: "inline-flex", alignItems: "center", gap: "0.4rem", color: "#274a34", fontWeight: 700, fontSize: "0.9rem", textDecoration: "none" }}>
                    {step.hint} <ArrowRight size={14} />
                  </Link>
                )}
              </div>

              {/* Image side */}
              <div style={{ height: 260, overflow: "hidden", order: i % 2 === 0 ? 1 : 0 }}>
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img
                  src={step.image}
                  alt={step.title}
                  style={{ width: "100%", height: "100%", objectFit: "cover" }}
                />
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

// ─── Featured Campaigns ───────────────────────────────────────────────────────

function FeaturedCampaigns() {
  return (
    <section className="section" style={{ background: "#fafafa" }}>
      <div className="container">
        <div style={{ display: "flex", justifyContent: "space-between", alignItems: "flex-end", marginBottom: "2rem", flexWrap: "wrap", gap: "1rem" }}>
          <div>
            <p style={{ fontSize: "0.875rem", fontWeight: 700, color: "#02a95c", marginBottom: "0.5rem", letterSpacing: "0.05em", textTransform: "uppercase" }}>
              Discover
            </p>
            <h2 className="text-display-md" style={{ color: "#101014" }}>
              Happening worldwide
            </h2>
          </div>
          <Link href="/discover" className="btn-outline" style={{ fontSize: "0.875rem" }}>
            See more
          </Link>
        </div>

        <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fill, minmax(260px, 1fr))", gap: "1.25rem" }}>
          {FEATURED_CAMPAIGNS.map((c, i) => (
            <motion.div
              key={c.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: i * 0.08 }}
            >
              <CampaignCard {...c} />
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

function CampaignCard({ title, raised, donations, image, progress }: {
  title: string; raised: string; donations: string; image: string; progress: number;
}) {
  return (
    <Link
      href="/discover"
      style={{
        display: "block",
        background: "#fff",
        borderRadius: 16,
        overflow: "hidden",
        border: "1px solid #e9e9e9",
        textDecoration: "none",
        color: "inherit",
        transition: "box-shadow 0.2s, transform 0.2s",
        boxShadow: "0 2px 8px rgba(0,0,0,0.04)",
      }}
      onMouseEnter={(e) => {
        (e.currentTarget as HTMLElement).style.boxShadow = "0 8px 28px rgba(0,0,0,0.1)";
        (e.currentTarget as HTMLElement).style.transform = "translateY(-3px)";
      }}
      onMouseLeave={(e) => {
        (e.currentTarget as HTMLElement).style.boxShadow = "0 2px 8px rgba(0,0,0,0.04)";
        (e.currentTarget as HTMLElement).style.transform = "translateY(0)";
      }}
    >
      {/* Image */}
      <div style={{ height: 180, overflow: "hidden" }}>
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img src={image} alt={title} style={{ width: "100%", height: "100%", objectFit: "cover", transition: "transform 0.4s" }} />
      </div>

      {/* Content */}
      <div style={{ padding: "1rem" }}>
        <h3 className="text-heading-sm" style={{ marginBottom: "0.75rem", color: "#101014", lineHeight: 1.35 }}>
          {title}
        </h3>

        {/* Progress bar */}
        <div style={{ background: "#f2f2f2", borderRadius: 9999, height: 6, marginBottom: "0.6rem" }}>
          <div style={{ background: "#02a95c", height: "100%", borderRadius: 9999, width: `${progress}%`, transition: "width 0.8s ease" }} />
        </div>

        <p style={{ fontWeight: 800, fontSize: "0.95rem", color: "#101014", marginBottom: "0.25rem" }}>{raised} raised</p>
        <p style={{ fontSize: "0.8rem", color: "#6f6f6f" }}>{donations}</p>
      </div>
    </Link>
  );
}

// ─── Categories ───────────────────────────────────────────────────────────────

function CategoriesSection() {
  return (
    <section className="section" style={{ background: "#fff" }}>
      <div className="container">
        <div style={{ marginBottom: "2rem" }}>
          <p style={{ fontSize: "0.875rem", fontWeight: 700, color: "#02a95c", marginBottom: "0.5rem", letterSpacing: "0.05em", textTransform: "uppercase" }}>
            Categories
          </p>
          <h2 className="text-display-md" style={{ color: "#101014" }}>
            We've got you covered
          </h2>
          <p className="text-body-lg" style={{ maxWidth: 520, marginTop: "0.75rem" }}>
            From <strong>memorial</strong> tributes and funerals to <strong>medical</strong> emergencies and <strong>nonprofits</strong>
          </p>
        </div>

        <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fill, minmax(140px, 1fr))", gap: "1rem" }}>
          {CATEGORIES.map((cat, i) => (
            <motion.div
              key={cat.name}
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.3, delay: i * 0.04 }}
            >
              <Link
                href={`/categories/${cat.name.toLowerCase()}`}
                style={{
                  display: "flex",
                  flexDirection: "column",
                  alignItems: "center",
                  justifyContent: "center",
                  gap: "0.5rem",
                  padding: "1.5rem 1rem",
                  background: cat.color,
                  borderRadius: 16,
                  textDecoration: "none",
                  color: "#274a34",
                  fontWeight: 700,
                  fontSize: "0.9rem",
                  transition: "transform 0.2s, box-shadow 0.2s",
                  textAlign: "center",
                }}
                onMouseEnter={(e) => {
                  (e.currentTarget as HTMLElement).style.transform = "translateY(-3px)";
                  (e.currentTarget as HTMLElement).style.boxShadow = "0 6px 20px rgba(0,0,0,0.08)";
                }}
                onMouseLeave={(e) => {
                  (e.currentTarget as HTMLElement).style.transform = "translateY(0)";
                  (e.currentTarget as HTMLElement).style.boxShadow = "none";
                }}
              >
                <span style={{ fontSize: "1.8rem" }}>{cat.emoji}</span>
                <span>{cat.name}</span>
              </Link>
            </motion.div>
          ))}
        </div>

        <div style={{ marginTop: "2rem", textAlign: "center" }}>
          <Link href="/how-it-works" className="btn-outline">
            Learn more about how Fenna works
          </Link>
        </div>
      </div>
    </section>
  );
}

// ─── Trust & Safety ───────────────────────────────────────────────────────────

function TrustSection() {
  return (
    <section style={{ background: "#274a34", padding: "5rem 0" }}>
      <div className="container">
        <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "4rem", alignItems: "center" }}>
          {/* Left: headline */}
          <div>
            <h2 className="text-display-md" style={{ color: "#fff", marginBottom: "1rem" }}>
              Fenna is a trusted leader in online fundraising.
            </h2>
            <p style={{ color: "#ccf88e", fontSize: "1rem", lineHeight: 1.6 }}>
              With <strong>simple pricing</strong> and a team of <strong>Trust &amp; Safety</strong> experts in your corner, you can raise money or make a donation with complete peace of mind.
            </p>
            <div style={{ marginTop: "2rem", display: "flex", gap: "0.75rem", flexWrap: "wrap" }}>
              <Link href="/dashboard" style={{
                display: "inline-flex", alignItems: "center",
                background: "#02a95c", color: "#fff",
                fontWeight: 700, padding: "0.75rem 1.5rem",
                borderRadius: 9999, textDecoration: "none",
                transition: "background 0.2s",
              }}>
                Start a Fenna
              </Link>
              <Link href="/guarantee" style={{
                display: "inline-flex", alignItems: "center",
                background: "transparent", color: "#fff",
                fontWeight: 700, padding: "0.75rem 1.5rem",
                borderRadius: 9999, textDecoration: "none",
                border: "2px solid rgba(255,255,255,0.4)",
                transition: "border-color 0.2s",
              }}>
                Learn about our guarantee
              </Link>
            </div>
          </div>

          {/* Right: trust cards */}
          <div style={{ display: "flex", flexDirection: "column", gap: "1.25rem" }}>
            {TRUST_ITEMS.map((item, i) => (
              <motion.div
                key={item.title}
                initial={{ opacity: 0, x: 30 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: i * 0.1 }}
                style={{
                  background: "rgba(255,255,255,0.07)",
                  borderRadius: 16,
                  padding: "1.25rem 1.5rem",
                  display: "flex",
                  gap: "1rem",
                  alignItems: "flex-start",
                  border: "1px solid rgba(255,255,255,0.1)",
                }}
              >
                <div style={{ color: "#ccf88e", flexShrink: 0, marginTop: 2 }}>{item.icon}</div>
                <div>
                  <h4 style={{ color: "#fff", fontWeight: 700, marginBottom: "0.3rem" }}>{item.title}</h4>
                  <p style={{ color: "rgba(255,255,255,0.7)", fontSize: "0.875rem", lineHeight: 1.5 }}>{item.body}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

// ─── Footer ───────────────────────────────────────────────────────────────────

function Footer() {
  return (
    <footer style={{ background: "#101014", color: "#b7b7b6", padding: "4rem 0 2rem" }}>
      <div className="container">
        {/* Top grid */}
        <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fill, minmax(180px, 1fr))", gap: "2.5rem", marginBottom: "3rem" }}>
          {/* Brand col */}
          <div>
            <div style={{ fontSize: "1.5rem", fontWeight: 900, color: "#02a95c", letterSpacing: "-0.04em", marginBottom: "1rem" }}>
              fenna
            </div>
            <p style={{ fontSize: "0.875rem", lineHeight: 1.6, color: "#8d8c8b" }}>
              The #1 crowdfunding platform for African university campuses and local communities.
            </p>
          </div>

          {Object.entries(FOOTER_LINKS).map(([heading, links]) => (
            <div key={heading}>
              <h5 style={{ fontWeight: 700, fontSize: "0.875rem", color: "#fff", marginBottom: "1rem" }}>
                {heading}
              </h5>
              <ul style={{ listStyle: "none", display: "flex", flexDirection: "column", gap: "0.6rem" }}>
                {links.map((link) => (
                  <li key={link}>
                    <Link
                      href="#"
                      style={{ color: "#8d8c8b", textDecoration: "none", fontSize: "0.875rem", transition: "color 0.15s" }}
                      onMouseEnter={(e) => ((e.target as HTMLElement).style.color = "#fff")}
                      onMouseLeave={(e) => ((e.target as HTMLElement).style.color = "#8d8c8b")}
                    >
                      {link}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {/* Bottom bar */}
        <div style={{
          borderTop: "1px solid rgba(255,255,255,0.08)",
          paddingTop: "1.5rem",
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
          flexWrap: "wrap",
          gap: "1rem",
        }}>
          <p style={{ fontSize: "0.8rem", color: "#585858" }}>
            © {new Date().getFullYear()} Fenna. All rights reserved. *Based on GoFundMe global fundraising data.
          </p>
          <div style={{ display: "flex", gap: "1.5rem" }}>
            {["Privacy", "Terms", "Accessibility", "Cookie settings"].map((l) => (
              <Link key={l} href="#" style={{ fontSize: "0.8rem", color: "#585858", textDecoration: "none", transition: "color 0.15s" }}
                onMouseEnter={(e) => ((e.target as HTMLElement).style.color = "#fff")}
                onMouseLeave={(e) => ((e.target as HTMLElement).style.color = "#585858")}
              >
                {l}
              </Link>
            ))}
          </div>
        </div>
      </div>
    </footer>
  );
}
