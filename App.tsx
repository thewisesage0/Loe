import StarryBackground from "./components/StarryBackground";

const wishes = [
  { emoji: "🌈", title: "Rainbow Days", text: "May every morning paint your sky in colours you've never seen before." },
  { emoji: "✨", title: "Endless Sparkle", text: "May your laughter shimmer brighter than every star in the night." },
  { emoji: "🌸", title: "Soft Bloom", text: "May kindness follow you like petals on a gentle spring breeze." },
  { emoji: "🍓", title: "Sweet Adventures", text: "May your days be full of tiny joys and the biggest dreams." },
  { emoji: "🦋", title: "Bright Wings", text: "May you fly free, fearless, and forever yourself." },
  { emoji: "💖", title: "Endless Love", text: "May you always feel held by all the love that surrounds you." },
];

const colors = ["pink", "peach", "lemon", "mint", "sky", "lavender"] as const;

export default function App() {
  return (
    <main style={{ position: "relative", minHeight: "100vh", overflow: "hidden" }}>
      <StarryBackground count={80} />

      {/* Hero */}
      <section
        style={{
          position: "relative",
          zIndex: 10,
          display: "flex",
          minHeight: "100vh",
          flexDirection: "column",
          alignItems: "center",
          justifyContent: "center",
          padding: "6rem 1.5rem",
          textAlign: "center",
        }}
      >
        <p
          className="animate-pop"
          style={{
            marginBottom: "1.5rem",
            display: "inline-block",
            borderRadius: "9999px",
            backgroundColor: "color-mix(in oklch, var(--card), transparent 30%)",
            padding: "0.5rem 1.25rem",
            fontSize: "0.875rem",
            fontWeight: 600,
            letterSpacing: "0.1em",
            color: "var(--primary)",
            backdropFilter: "blur(4px)",
            boxShadow: "0 8px 30px -10px oklch(0.78 0.2 350 / 0.5)",
          }}
        >
          ⋆⭒˚｡⋆ A LITTLE WISH FOR YOU ⋆⭒˚｡⋆
        </p>

        <h1
          style={{
            fontFamily: "Pacifico, cursive",
            fontSize: "clamp(5rem, 15vw, 12rem)",
            lineHeight: 1,
            backgroundImage: "var(--gradient-rainbow)",
            backgroundSize: "300% 300%",
            WebkitBackgroundClip: "text",
            backgroundClip: "text",
            color: "transparent",
            animation:
              "shimmer 8s ease-in-out infinite, pop 0.8s cubic-bezier(.34,1.56,.64,1) both",
            filter: "drop-shadow(0 6px 20px oklch(0.78 0.2 350 / 0.35))",
          }}
        >
          Loe
        </h1>

        <h2
          className="animate-pop"
          style={{
            marginTop: "2rem",
            maxWidth: "48rem",
            fontFamily: "Pacifico, cursive",
            fontSize: "clamp(1.5rem, 4vw, 3rem)",
            color: "var(--foreground)",
            animationDelay: "0.2s",
          }}
        >
          may your life be as colourful
          <br />
          and bright as the stars
        </h2>

        <p
          className="animate-pop"
          style={{
            marginTop: "2rem",
            maxWidth: "36rem",
            fontSize: "1.125rem",
            color: "var(--muted-foreground)",
            animationDelay: "0.4s",
          }}
        >
          A whole sky of wishes, painted just for you — in every shade of pink, peach, lemon, mint,
          sky and lavender.
        </p>

        <div
          className="animate-pop"
          style={{
            marginTop: "3rem",
            display: "flex",
            flexWrap: "wrap",
            alignItems: "center",
            justifyContent: "center",
            gap: "1rem",
            animationDelay: "0.6s",
          }}
        >
          <a
            href="#wishes"
            style={{
              position: "relative",
              borderRadius: "9999px",
              padding: "1rem 2rem",
              fontWeight: 600,
              color: "var(--primary-foreground)",
              textDecoration: "none",
              backgroundImage: "var(--gradient-rainbow)",
              backgroundSize: "200% 200%",
              boxShadow: "0 15px 40px -10px oklch(0.78 0.2 350 / 0.6)",
              animation: "shimmer 6s ease-in-out infinite",
              display: "inline-block",
              transition: "transform 0.15s ease",
            }}
            onMouseEnter={(e) => (e.currentTarget.style.transform = "scale(1.05)")}
            onMouseLeave={(e) => (e.currentTarget.style.transform = "scale(1)")}
          >
            See your wishes ✨
          </a>
          <a
            href="#note"
            style={{
              borderRadius: "9999px",
              border: "2px solid color-mix(in oklch, var(--primary), transparent 70%)",
              backgroundColor: "color-mix(in oklch, var(--card), transparent 30%)",
              padding: "1rem 2rem",
              fontWeight: 600,
              color: "var(--foreground)",
              textDecoration: "none",
              backdropFilter: "blur(4px)",
              display: "inline-block",
              transition: "all 0.15s ease",
            }}
            onMouseEnter={(e) => {
              e.currentTarget.style.backgroundColor = "var(--card)";
              e.currentTarget.style.borderColor = "var(--primary)";
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.backgroundColor =
                "color-mix(in oklch, var(--card), transparent 30%)";
              e.currentTarget.style.borderColor =
                "color-mix(in oklch, var(--primary), transparent 70%)";
            }}
          >
            A note for you 💌
          </a>
        </div>

        {/* Floating decorative stars */}
        {[
          { emoji: "🌟", style: { left: "8%", top: "20%" }, delay: "0s", size: "3.75rem" },
          { emoji: "💫", style: { right: "10%", top: "25%" }, delay: "1.5s", size: "3rem" },
          { emoji: "🌈", style: { left: "12%", bottom: "18%" }, delay: "2.5s", size: "3rem" },
          { emoji: "⭐", style: { right: "8%", bottom: "22%" }, delay: "1s", size: "3.75rem" },
        ].map(({ emoji, style, delay, size }) => (
          <div
            key={emoji}
            className="animate-float"
            style={{
              pointerEvents: "none",
              position: "absolute",
              fontSize: size,
              animationDelay: delay,
              ...style,
            }}
          >
            {emoji}
          </div>
        ))}
      </section>

      {/* Wishes Grid */}
      <section
        id="wishes"
        style={{
          position: "relative",
          zIndex: 10,
          margin: "0 auto",
          maxWidth: "72rem",
          padding: "6rem 1.5rem",
        }}
      >
        <h3
          style={{
            marginBottom: "1rem",
            textAlign: "center",
            fontFamily: "Pacifico, cursive",
            fontSize: "clamp(2.25rem, 6vw, 3.75rem)",
            color: "var(--foreground)",
          }}
        >
          Six little wishes
        </h3>
        <p
          style={{
            margin: "0 auto 4rem",
            maxWidth: "36rem",
            textAlign: "center",
            color: "var(--muted-foreground)",
          }}
        >
          One for every colour of the rainbow — because one star could never be enough for you.
        </p>

        <div
          style={{
            display: "grid",
            gap: "1.5rem",
            gridTemplateColumns: "repeat(auto-fit, minmax(280px, 1fr))",
          }}
        >
          {wishes.map((w, i) => {
            const c = colors[i % colors.length];
            return (
              <article
                key={w.title}
                style={{
                  position: "relative",
                  overflow: "hidden",
                  borderRadius: "1.5rem",
                  border: "2px solid rgba(255 255 255 / 0.6)",
                  backgroundColor: "color-mix(in oklch, var(--card), transparent 20%)",
                  padding: "2rem",
                  backdropFilter: "blur(4px)",
                  transition: "transform 500ms ease, box-shadow 500ms ease",
                  boxShadow: `0 20px 50px -15px var(--${c})`,
                }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.transform = "translateY(-0.5rem)";
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.transform = "translateY(0)";
                }}
              >
                <div
                  style={{
                    position: "absolute",
                    right: "-2.5rem",
                    top: "-2.5rem",
                    height: "10rem",
                    width: "10rem",
                    borderRadius: "9999px",
                    opacity: 0.4,
                    filter: "blur(40px)",
                    background: `var(--${c})`,
                    transition: "opacity 500ms ease",
                  }}
                />
                <div style={{ position: "relative" }}>
                  <div style={{ marginBottom: "1rem", fontSize: "3rem" }}>{w.emoji}</div>
                  <h4
                    style={{
                      marginBottom: "0.75rem",
                      fontFamily: "Pacifico, cursive",
                      fontSize: "1.875rem",
                      color: "var(--foreground)",
                    }}
                  >
                    {w.title}
                  </h4>
                  <p style={{ color: "var(--muted-foreground)" }}>{w.text}</p>
                </div>
              </article>
            );
          })}
        </div>
      </section>

      {/* Personal note */}
      <section
        id="note"
        style={{
          position: "relative",
          zIndex: 10,
          margin: "0 auto",
          maxWidth: "48rem",
          padding: "6rem 1.5rem",
          textAlign: "center",
        }}
      >
        <div
          style={{
            position: "relative",
            overflow: "hidden",
            borderRadius: "2.5rem",
            padding: "0.25rem",
            backgroundImage: "var(--gradient-rainbow)",
            backgroundSize: "200% 200%",
            animation: "shimmer 10s ease-in-out infinite",
          }}
        >
          <div
            style={{
              borderRadius: "2.3rem",
              backgroundColor: "color-mix(in oklch, var(--card), transparent 5%)",
              padding: "4rem 2rem",
              backdropFilter: "blur(4px)",
            }}
          >
            <div style={{ marginBottom: "1.5rem", fontSize: "3.75rem" }}>💖</div>
            <h3
              style={{
                marginBottom: "1.5rem",
                fontFamily: "Pacifico, cursive",
                fontSize: "clamp(1.875rem, 5vw, 3rem)",
                color: "var(--foreground)",
              }}
            >
              Dear Loe,
            </h3>
            <p
              style={{
                margin: "0 auto",
                maxWidth: "36rem",
                fontSize: "1.125rem",
                lineHeight: 1.625,
                color: "color-mix(in oklch, var(--foreground), transparent 20%)",
              }}
            >
              The world got a little more colourful the day you arrived in it. Every star in the
              sky is a little quieter than you — they only sparkle, but you{" "}
              <span style={{ fontFamily: "Pacifico, cursive", color: "var(--primary)" }}>
                shine
              </span>
              .
              <br />
              <br />
              Wishing you a life as bright, kind, and beautifully colourful as you already are.
            </p>
            <p
              style={{
                marginTop: "2.5rem",
                fontFamily: "Pacifico, cursive",
                fontSize: "1.5rem",
                color: "var(--primary)",
              }}
            >
              — with all the love ✨
            </p>
          </div>
        </div>
      </section>

      <footer
        style={{
          position: "relative",
          zIndex: 10,
          paddingBottom: "2.5rem",
          paddingTop: "1rem",
          textAlign: "center",
          fontSize: "0.875rem",
          color: "var(--muted-foreground)",
        }}
      >
        Made with 🌈 and a whole lot of love, just for Loe.
      </footer>
    </main>
  );
}
