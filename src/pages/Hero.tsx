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
    const contentBox = appRef.current;
    if (!contentBox) return;

    const handleMouseMove = (e: MouseEvent) => {
      const rect = contentBox.getBoundingClientRect();
      const x = e.clientX - rect.left;
      const y = e.clientY - rect.top;

      // Only set position if mouse is within bounds
      if (x >= 0 && x <= rect.width && y >= 0 && y <= rect.height) {
        setMousePos({ x, y });
        setIsVisible(true);
        const mouseX = Math.round((x / rect.width) * 100);
        const mouseY = Math.round((y / rect.height) * 100);
        contentBox.style.setProperty("--mouse-x", mouseX + "%");
        contentBox.style.setProperty("--mouse-y", mouseY + "%");
      } else {
        setIsVisible(false);
      }
    };

    const handleMouseLeave = () => {
      setIsVisible(false);
    };

    contentBox.addEventListener("mousemove", handleMouseMove);
    contentBox.addEventListener("mouseleave", handleMouseLeave);

    return () => {
      contentBox.removeEventListener("mousemove", handleMouseMove);
      contentBox.removeEventListener("mouseleave", handleMouseLeave);
    };
  }, []);

  const layers: Layer[] = [
    { scale: 4, opacity: 0.3, blur: 8 },
    { scale: 3.8, opacity: 0.4, blur: 6 },
    { scale: 3.6, opacity: 0.5, blur: 3 },
  ];

  return (
    <div className="relative w-screen h-screen overflow-hidden flex p-8 justify-center items-center bg-whitePale">
      <div
        className="app px-10 md:px-30 lg:px-40 mt-10 pt-10 md:pt-30 lg:pt-40  pb-10 md:pb-10 lg:pb-20  max-w-6xl relative overflow-hidden  text-stone-600"
        ref={appRef}
        style={
          {
            "--mouse-x": "50%",
            "--mouse-y": "50%",
          } as React.CSSProperties
        }
      >
        <h1 className="font-headline text-5xl md:text-7xl mb-8 leading-tight ">
          pavika
          <span className="block text-4xl md:text-6xl mt-4">
            is a <span className="italic">frontend developer</span>
          </span>
        </h1>

        <div className="max-w-4xl font-headline text-1xl md:text-3xl tracking-wide mb-20">
          <p className="leading-relaxed">
            <span className="font-headline-italic">₊*</span> she crafts{" "}
            <span className="">beautiful digital spaces</span> & fast with experiments ˗ˋ bringing{" "}
            <span className="italic">ideas to life</span> with{" "}
            <span className="underline">code</span> & <span className="underline">creativity</span>{" "}
            ｡˚ when not coding, you'll find her at the <span className="">beach</span> and playing
            with cats and dogs ꕁ
          </p>
        </div>
        <div className="flex justify-end ">
          <button
            onClick={() =>
              document.getElementById("typeWrite")?.scrollIntoView({ behavior: "smooth" })
            }
            className="animate-pulse
              text-xs
              text-stone-600font-button py-1 px-2 rounded-xs hover:underline hover:bg-stone-600 hover:text-pale border-b border-stone-600 transition-colors md:text-sm shadow-lg"
          >
            ↓ Discover More
          </button>
        </div>
        {/* Clover Cursor */}
        {isVisible &&
          layers.map((layer, index) => (
            <div
              key={index}
              className="absolute pointer-events-none -z-10"
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
    </div>
  );
}

export default Hero;
