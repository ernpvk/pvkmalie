import React, { useState, useEffect, useRef } from "react";

interface MousePosition {
  x: number;
  y: number;
}

interface Layer {
  scale: number;
  opacity: number;
  blur: number;
}

function Hero() {
  const [mousePos, setMousePos] = useState<MousePosition>({ x: 0, y: 0 });
  const [isVisible, setIsVisible] = useState<boolean>(false);
  const appRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      setMousePos({ x: e.clientX, y: e.clientY });
      setIsVisible(true);

      if (appRef.current) {
        const mouseX = Math.round((e.clientX / window.innerWidth) * 100);
        const mouseY = Math.round((e.clientY / window.innerHeight) * 100);
        appRef.current.style.setProperty("--mouse-x", mouseX + "%");
        appRef.current.style.setProperty("--mouse-y", mouseY + "%");
      }
    };

    const handleMouseLeave = () => {
      setIsVisible(false);
    };

    window.addEventListener("mousemove", handleMouseMove);
    window.addEventListener("mouseleave", handleMouseLeave);

    return () => {
      window.removeEventListener("mousemove", handleMouseMove);
      window.removeEventListener("mouseleave", handleMouseLeave);
    };
  }, []);

  const layers: Layer[] = [
    { scale: 4, opacity: 0.3, blur: 8 },
    { scale: 3.8, opacity: 0.4, blur: 6 },
    { scale: 3.6, opacity: 0.5, blur: 3 },
  ];

  return (
    <div
      ref={appRef}
      className="app relative w-screen h-screen overflow-hidden flex items-center justify-center"
      id="app"
      style={
        {
          "--mouse-x": "50%",
          "--mouse-y": "50%",
        } as React.CSSProperties
      }
    >
      <div className="mx-auto px-6 max-w-6xl z-10">
        <h1 className="font-besley-medium text-6xl md:text-8xl mb-8 leading-tight text-primary">
          pavika
          <span className="block text-4xl md:text-6xl mt-4">
            is a <span className="italic">frontend developer</span>
          </span>
        </h1>

        <div className="max-w-4xl font-besley text-2xl md:text-4xl text-primary tracking-wide">
          <p>
            ₊* she crafts beautiful digital spaces & fast with experiments ˗ˋ bringing ideas to life
            with code & cool CSS ｡˚ when not coding, you'll find her playing with cats and dogs ꕁ
          </p>
        </div>

        <button
          onClick={() => document.getElementById("about")?.scrollIntoView({ behavior: "smooth" })}
          className="  mt-16 text-primary font-metallophile py-1 px-2 rounded-xs hover:underline hover:bg-primary hover:text-pale border border-primary transition-colors"
        >
          ↓ Discover More ↓
        </button>
      </div>

      {/* Clover Cursor */}
      {isVisible &&
        layers.map((layer, index) => (
          <div
            key={index}
            className="absolute pointer-events-none"
            style={{
              left: `${mousePos.x}px`,
              top: `${mousePos.y}px`,
              transform: `translate(-50%, -50%) scale(${layer.scale})`,
            }}
          >
            <svg
              width="120"
              height="120"
              viewBox="0 0 120 120"
              style={{
                transform: "rotate(-40deg)",
              }}
            >
              <g className="origin-center">
                <path
                  d="M60 60 Q35 35 25 50 Q15 65 35 75 Q45 80 60 60
                     M60 60 Q85 35 95 50 Q105 65 85 75 Q75 80 60 60
                     M60 60 Q35 35 50 25 Q65 15 75 35 Q80 45 60 60
                     M60 60 Q35 85 50 95 Q65 105 75 85 Q80 75 60 60"
                  fill="#f8f7e7"
                  style={{
                    opacity: layer.opacity,
                    filter: `blur(${layer.blur}px)`,
                  }}
                />
              </g>
            </svg>
          </div>
        ))}
    </div>
  );
}

export default Hero;
