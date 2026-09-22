"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import {
  BarChart3,
  Users,
  Share2,
  BookOpen,
  Rocket,
  MessageSquare,
  UserPlus,
  ChevronRight,
  Upload,
} from "lucide-react";

// ─── Mock data ────────────────────────────────────────────────────────────────
const CAMPAIGN = {
  name: "Help Build Nakawa Community Library",
  goal: "UGX 5,000,000",
  raised: "UGX 1,500,000",
  raisedRaw: 1500000,
  goalRaw: 5000000,
  donors: 24,
  shares: 156,
  views: 892,
  avatar: "https://images.unsplash.com/photo-1503676260728-1c00da094a0b?auto=format&fit=crop&w=200&q=80",
};

const DAILY_TASKS = [
  {
    id: 1,
    icon: "momentum",
    title: "Momentum is a fundraiser's best friend. Get your #1s to help get it started",
    subtitle: "Share with 3–5 friends →",
    href: "#share",
    completed: false,
    color: "#e1f6f6",
    iconColor: "#03b2cb",
  },
  {
    id: 2,
    icon: "social",
    title: "Let social media do its thing. Your post is all ready to go.",
    subtitle: "Get your story out there →",
    href: "#social",
    completed: false,
    color: "#e9fcce",
    iconColor: "#02a95c",
  },
  {
    id: 3,
    icon: "connect",
    title: "Streamline fundraising with a centralized support system",
    subtitle: "Connect your contacts →",
    href: "#connect",
    completed: false,
    color: "#eccff6",
    iconColor: "#a048c0",
  },
];

const SIDEBAR_LINKS = [
  { label: "Today",      icon: <BarChart3 size={18} />,  href: "/dashboard", active: true },
  { label: "Supporters", icon: <Users size={18} />,      href: "#supporters" },
  { label: "Sharehub",   icon: <Share2 size={18} />,     href: "#sharehub" },
  { label: "Fundraiser", icon: <BookOpen size={18} />,   href: "#fundraiser" },
];

// ─── Page ─────────────────────────────────────────────────────────────────────

export default function Dashboard() {
  const pct = Math.round((CAMPAIGN.raisedRaw / CAMPAIGN.goalRaw) * 100);

  return (
    <div style={{ flex: 1, background: "#fff", minHeight: "100vh", display: "flex" }}>
      {/* ── Sidebar ─────────────────────────────────────────────────────── */}
      <aside
        style={{
          width: 220,
          flexShrink: 0,
          borderRight: "1px solid #f2f2f2",
          padding: "2rem 0",
          display: "flex",
          flexDirection: "column",
          gap: 2,
        }}
      >
        {SIDEBAR_LINKS.map((link) => (
          <SidebarLink key={link.label} {...link} />
        ))}
      </aside>

      {/* ── Main ────────────────────────────────────────────────────────── */}
      <main style={{ flex: 1, padding: "2.5rem 3rem", maxWidth: 780 }}>

        {/* Campaign hero card */}
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.45 }}
          style={{
            background: "linear-gradient(135deg, #ccf88e 0%, #acf86c 100%)",
            borderRadius: 20,
            padding: "2rem",
            position: "relative",
            marginBottom: "2rem",
            overflow: "hidden",
          }}
        >
          {/* Share button */}
          <button
            style={{
              position: "absolute",
              top: "1.25rem",
              right: "1.25rem",
              display: "flex",
              alignItems: "center",
              gap: "0.4rem",
              background: "#0b291a",
              color: "#fff",
              border: "none",
              borderRadius: 9999,
              padding: "0.5rem 1.1rem",
              fontWeight: 700,
              fontSize: "0.875rem",
              cursor: "pointer",
              transition: "background 0.2s",
            }}
          >
            <Upload size={14} />
            Share
          </button>

          {/* Avatar ring */}
          <div style={{ display: "flex", justifyContent: "center", marginBottom: "1.25rem" }}>
            <div
              style={{
                width: 72,
                height: 72,
                borderRadius: "50%",
                border: "3px solid #0b291a",
                overflow: "hidden",
                boxShadow: "0 4px 16px rgba(0,0,0,0.15)",
              }}
            >
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img
                src={CAMPAIGN.avatar}
                alt="Campaign"
                style={{ width: "100%", height: "100%", objectFit: "cover" }}
              />
            </div>
          </div>

          {/* Goal */}
          <div style={{ textAlign: "center", marginBottom: "1.25rem" }}>
            <div style={{ display: "inline-flex", alignItems: "center", gap: "0.4rem" }}>
              <span style={{ fontSize: "1.75rem", fontWeight: 900, color: "#0b291a" }}>
                {CAMPAIGN.goal} goal
              </span>
              <ChevronRight size={20} color="#0b291a" />
            </div>
            <p style={{ fontSize: "0.9rem", color: "#274a34", fontWeight: 500, marginTop: "0.25rem" }}>
              {CAMPAIGN.name}
            </p>
          </div>

          {/* Stat chips */}
          <div style={{ display: "flex", justifyContent: "center", gap: "0.6rem", flexWrap: "wrap" }}>
            {[
              { label: "Donors", value: CAMPAIGN.donors },
              { label: "Shares", value: CAMPAIGN.shares },
              { label: "Views",  value: CAMPAIGN.views },
            ].map((s) => (
              <div
                key={s.label}
                style={{
                  background: "rgba(255,255,255,0.75)",
                  borderRadius: 9999,
                  padding: "0.35rem 1rem",
                  fontWeight: 700,
                  fontSize: "0.875rem",
                  color: "#0b291a",
                  backdropFilter: "blur(4px)",
                  border: "1px solid rgba(255,255,255,0.5)",
                }}
              >
                {s.value} {s.label}
              </div>
            ))}
          </div>
        </motion.div>

        {/* Progress row */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.4, delay: 0.2 }}
          style={{
            background: "#fff",
            border: "1px solid #e9e9e9",
            borderRadius: 16,
            padding: "1.25rem 1.5rem",
            marginBottom: "2rem",
            display: "flex",
            flexDirection: "column",
            gap: "0.6rem",
          }}
        >
          <div style={{ display: "flex", justifyContent: "space-between", alignItems: "baseline" }}>
            <div>
              <p style={{ fontSize: "0.75rem", fontWeight: 700, color: "#6f6f6f", textTransform: "uppercase", letterSpacing: "0.06em", marginBottom: "0.2rem" }}>
                Current Goal
              </p>
              <p style={{ fontSize: "1.75rem", fontWeight: 900, color: "#101014" }}>
                {CAMPAIGN.raised}
              </p>
              <p style={{ fontSize: "0.875rem", color: "#6f6f6f" }}>
                raised of {CAMPAIGN.goal}
              </p>
            </div>
            <span style={{ fontSize: "1.25rem", fontWeight: 800, color: "#02a95c" }}>{pct}%</span>
          </div>

          {/* Bar */}
          <div style={{ background: "#f2f2f2", borderRadius: 9999, height: 8, overflow: "hidden" }}>
            <motion.div
              initial={{ width: 0 }}
              animate={{ width: `${pct}%` }}
              transition={{ duration: 1, delay: 0.4 }}
              style={{ background: "#02a95c", height: "100%", borderRadius: 9999 }}
            />
          </div>
        </motion.div>

        {/* Daily plan */}
        <div>
          <div style={{ textAlign: "center", marginBottom: "1.75rem" }}>
            <div style={{ display: "flex", justifyContent: "center", marginBottom: "0.5rem" }}>
              <span style={{ fontSize: "1.25rem" }}>🚀</span>
            </div>
            <h2 style={{ fontSize: "1.5rem", fontWeight: 800, color: "#101014", marginBottom: "0.25rem" }}>
              Your daily plan
            </h2>
            <p style={{ fontSize: "0.9rem", color: "#6f6f6f" }}>
              A few quick tasks per day to keep things moving
            </p>
          </div>

          <div style={{ display: "flex", flexDirection: "column", gap: "1rem" }}>
            {DAILY_TASKS.map((task, i) => (
              <motion.div
                key={task.id}
                initial={{ opacity: 0, y: 14 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.35, delay: 0.3 + i * 0.08 }}
              >
                <TaskCard task={task} />
              </motion.div>
            ))}
          </div>
        </div>
      </main>
    </div>
  );
}

// ─── Sidebar Link ─────────────────────────────────────────────────────────────

function SidebarLink({
  label,
  icon,
  href,
  active = false,
}: {
  label: string;
  icon: React.ReactNode;
  href: string;
  active?: boolean;
}) {
  return (
    <Link
      href={href}
      style={{
        display: "flex",
        alignItems: "center",
        gap: "0.75rem",
        padding: "0.65rem 1.5rem",
        fontSize: "0.9rem",
        fontWeight: active ? 700 : 600,
        color: active ? "#02a95c" : "#585858",
        background: active ? "#f0fdf4" : "transparent",
        borderLeft: active ? "3px solid #02a95c" : "3px solid transparent",
        textDecoration: "none",
        transition: "all 0.15s",
      }}
      onMouseEnter={(e) => {
        if (!active) {
          (e.currentTarget as HTMLElement).style.background = "#fafafa";
          (e.currentTarget as HTMLElement).style.color = "#101014";
        }
      }}
      onMouseLeave={(e) => {
        if (!active) {
          (e.currentTarget as HTMLElement).style.background = "transparent";
          (e.currentTarget as HTMLElement).style.color = "#585858";
        }
      }}
    >
      {icon}
      <span>{label}</span>
    </Link>
  );
}

// ─── Task Card ────────────────────────────────────────────────────────────────

function TaskIcon({ type, bg, color }: { type: string; bg: string; color: string }) {
  const icons: Record<string, React.ReactNode> = {
    momentum: <Rocket size={22} color={color} />,
    social:   <MessageSquare size={22} color={color} />,
    connect:  <UserPlus size={22} color={color} />,
  };

  return (
    <div
      style={{
        width: 52,
        height: 52,
        borderRadius: 12,
        background: bg,
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        flexShrink: 0,
      }}
    >
      {icons[type]}
    </div>
  );
}

function TaskCard({ task }: { task: (typeof DAILY_TASKS)[number] }) {
  return (
    <Link
      href={task.href}
      style={{
        display: "flex",
        alignItems: "center",
        gap: "1rem",
        background: "#fff",
        border: "1px solid #e9e9e9",
        borderRadius: 16,
        padding: "1.1rem 1.25rem",
        textDecoration: "none",
        color: "inherit",
        transition: "box-shadow 0.2s, transform 0.15s",
        boxShadow: "0 1px 4px rgba(0,0,0,0.04)",
      }}
      onMouseEnter={(e) => {
        (e.currentTarget as HTMLElement).style.boxShadow = "0 4px 16px rgba(0,0,0,0.08)";
        (e.currentTarget as HTMLElement).style.transform = "translateY(-1px)";
      }}
      onMouseLeave={(e) => {
        (e.currentTarget as HTMLElement).style.boxShadow = "0 1px 4px rgba(0,0,0,0.04)";
        (e.currentTarget as HTMLElement).style.transform = "translateY(0)";
      }}
    >
      <TaskIcon type={task.icon} bg={task.color} color={task.iconColor} />

      <div style={{ flex: 1 }}>
        <p style={{ fontWeight: 700, fontSize: "0.95rem", color: "#101014", marginBottom: "0.25rem", lineHeight: 1.35 }}>
          {task.title}
        </p>
        <p style={{ fontSize: "0.85rem", color: "#02a95c", fontWeight: 600 }}>
          {task.subtitle}
        </p>
      </div>

      <ChevronRight size={18} color="#d1d5db" />
    </Link>
  );
}
