"use client";
import Link from "next/link";
import { useState } from "react";
import { Search, ChevronDown, Menu, X } from "lucide-react";

const NAV_LEFT = [
  {
    label: "Search",
    href: "/search",
    icon: true,
  },
  {
    label: "Donate",
    href: "/donate",
    dropdown: [
      { label: "Discover fundraisers and nonprofits to support", href: "/discover", bold: true },
      { label: "Categories", sub: "Browse fundraisers by category", href: "/categories" },
      { label: "Crisis relief", sub: "Donate to verified relief", href: "/crisis" },
      { label: "Social Impact Funds", sub: "Direct support for urgent needs", href: "/impact" },
      { label: "Supporter Space", sub: "Inspiration, FAQs, and where to give", href: "/supporters" },
    ],
  },
  {
    label: "Fundraise",
    href: "/fundraise",
    dropdown: [
      { label: "Start fundraising, tips, and resources", href: "/fundraise", bold: true },
      { label: "How to start a Fenna", sub: "Step-by-step help, examples, and more", href: "/how-it-works" },
      { label: "Fundraising categories", sub: "Find the right category for you", href: "/categories" },
      { label: "Team fundraising", sub: "Fundraise together with a team", href: "/team" },
      { label: "Fundraising Blog", sub: "Resources, tips, and more", href: "/blog" },
      { label: "Fundraising tips", sub: "The ultimate fundraising tips guide", href: "/tips" },
      { label: "Fundraising ideas", sub: "Ideas to spark your creativity", href: "/ideas" },
    ],
  },
];

const NAV_RIGHT = [
  {
    label: "About",
    href: "/about",
    dropdown: [
      { label: "How it works, pricing, and more", href: "/about", bold: true },
      { label: "How Fenna works", sub: "", href: "/how-it-works" },
      { label: "Fenna Giving Guarantee", sub: "", href: "/guarantee" },
      { label: "Supported countries", sub: "", href: "/countries" },
      { label: "Pricing", sub: "", href: "/pricing" },
      { label: "Help Center", sub: "", href: "/help" },
      { label: "About Fenna", sub: "", href: "/about" },
      { label: "Newsroom", sub: "", href: "/news" },
      { label: "Careers", sub: "", href: "/careers" },
    ],
  },
];

export default function Navbar() {
  const [mobileOpen, setMobileOpen] = useState(false);
  const [openDropdown, setOpenDropdown] = useState<string | null>(null);

  return (
    <nav
      style={{
        position: "sticky",
        top: 0,
        zIndex: 100,
        background: "rgba(255,255,255,0.97)",
        backdropFilter: "blur(8px)",
        borderBottom: "1px solid #e9e9e9",
      }}
    >
      <div
        className="container"
        style={{
          display: "flex",
          alignItems: "center",
          height: 64,
          gap: "1.5rem",
        }}
      >
        {/* Left nav */}
        <div style={{ display: "flex", alignItems: "center", gap: "0.25rem" }}>
          {NAV_LEFT.map((item) => (
            <NavItem
              key={item.label}
              item={item}
              open={openDropdown === item.label}
              onToggle={() =>
                setOpenDropdown(openDropdown === item.label ? null : item.label)
              }
              onClose={() => setOpenDropdown(null)}
            />
          ))}
        </div>

        {/* Logo — centred */}
        <div style={{ flex: 1, display: "flex", justifyContent: "center" }}>
          <Link
            href="/"
            style={{
              fontSize: "1.6rem",
              fontWeight: 900,
              color: "#02a95c",
              letterSpacing: "-0.04em",
              textDecoration: "none",
            }}
          >
            fenna
          </Link>
        </div>

        {/* Right nav */}
        <div
          style={{
            display: "flex",
            alignItems: "center",
            gap: "0.25rem",
          }}
        >
          {NAV_RIGHT.map((item) => (
            <NavItem
              key={item.label}
              item={item}
              open={openDropdown === item.label}
              onToggle={() =>
                setOpenDropdown(openDropdown === item.label ? null : item.label)
              }
              onClose={() => setOpenDropdown(null)}
            />
          ))}
          <Link
            href="/signin"
            style={{
              fontSize: "0.9rem",
              fontWeight: 700,
              color: "#101014",
              textDecoration: "none",
              padding: "0.5rem 0.75rem",
              borderRadius: 9999,
              transition: "background 0.15s",
            }}
            onMouseEnter={(e) =>
              ((e.target as HTMLElement).style.background = "#f5f5f5")
            }
            onMouseLeave={(e) =>
              ((e.target as HTMLElement).style.background = "transparent")
            }
          >
            Sign in
          </Link>
          <Link href="/dashboard" className="btn-primary" style={{ fontSize: "0.9rem", padding: "0.55rem 1.25rem" }}>
            Start a Fenna
          </Link>

          {/* Mobile hamburger */}
          <button
            onClick={() => setMobileOpen(!mobileOpen)}
            style={{
              display: "none",
              background: "none",
              border: "none",
              cursor: "pointer",
              padding: "0.4rem",
            }}
            className="mobile-menu-btn"
          >
            {mobileOpen ? <X size={22} /> : <Menu size={22} />}
          </button>
        </div>
      </div>

      {/* Click-away overlay */}
      {openDropdown && (
        <div
          onClick={() => setOpenDropdown(null)}
          style={{ position: "fixed", inset: 0, zIndex: 90 }}
        />
      )}
    </nav>
  );
}

function NavItem({
  item,
  open,
  onToggle,
  onClose,
}: {
  item: (typeof NAV_LEFT)[number];
  open: boolean;
  onToggle: () => void;
  onClose: () => void;
}) {
  if (!item.dropdown) {
    return (
      <Link
        href={item.href!}
        style={{
          display: "flex",
          alignItems: "center",
          gap: "0.3rem",
          fontSize: "0.9rem",
          fontWeight: 700,
          color: "#101014",
          textDecoration: "none",
          padding: "0.5rem 0.75rem",
          borderRadius: 9999,
          transition: "background 0.15s",
        }}
        onMouseEnter={(e) =>
          ((e.currentTarget as HTMLElement).style.background = "#f5f5f5")
        }
        onMouseLeave={(e) =>
          ((e.currentTarget as HTMLElement).style.background = "transparent")
        }
      >
        {item.label === "Search" && <Search size={15} />}
        {item.label}
      </Link>
    );
  }

  return (
    <div style={{ position: "relative" }}>
      <button
        onClick={onToggle}
        style={{
          display: "flex",
          alignItems: "center",
          gap: "0.3rem",
          fontSize: "0.9rem",
          fontWeight: 700,
          color: "#101014",
          background: open ? "#f5f5f5" : "transparent",
          border: "none",
          padding: "0.5rem 0.75rem",
          borderRadius: 9999,
          cursor: "pointer",
          transition: "background 0.15s",
        }}
        onMouseEnter={(e) =>
          ((e.currentTarget as HTMLElement).style.background = "#f5f5f5")
        }
        onMouseLeave={(e) => {
          if (!open)
            (e.currentTarget as HTMLElement).style.background = "transparent";
        }}
      >
        {item.label}
        <ChevronDown
          size={14}
          style={{
            transform: open ? "rotate(180deg)" : "rotate(0deg)",
            transition: "transform 0.2s",
          }}
        />
      </button>

      {open && (
        <div
          style={{
            position: "absolute",
            top: "calc(100% + 8px)",
            left: 0,
            minWidth: 300,
            background: "#fff",
            borderRadius: 12,
            boxShadow: "0 8px 32px rgba(0,0,0,0.12)",
            border: "1px solid #e9e9e9",
            padding: "0.75rem 0",
            zIndex: 200,
          }}
          onClick={onClose}
        >
          {item.dropdown!.map((d) => (
            <Link
              key={d.label}
              href={d.href}
              style={{
                display: "block",
                padding: d.bold ? "0.6rem 1.25rem 0.75rem" : "0.5rem 1.25rem",
                textDecoration: "none",
                borderBottom: d.bold ? "1px solid #f2f2f2" : "none",
                transition: "background 0.15s",
              }}
              onMouseEnter={(e) =>
                ((e.currentTarget as HTMLElement).style.background = "#f8f8f8")
              }
              onMouseLeave={(e) =>
                ((e.currentTarget as HTMLElement).style.background =
                  "transparent")
              }
            >
              <span
                style={{
                  display: "block",
                  fontWeight: d.bold ? 700 : 600,
                  fontSize: d.bold ? "0.8rem" : "0.9rem",
                  color: d.bold ? "#6f6f6f" : "#101014",
                }}
              >
                {d.label}
              </span>
              {d.sub && (
                <span
                  style={{
                    display: "block",
                    fontSize: "0.8rem",
                    color: "#6f6f6f",
                    marginTop: 1,
                  }}
                >
                  {d.sub}
                </span>
              )}
            </Link>
          ))}
        </div>
      )}
    </div>
  );
}
