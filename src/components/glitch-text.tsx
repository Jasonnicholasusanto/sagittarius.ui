import { FC, CSSProperties } from "react";

interface GlitchTextProps {
  children: string;
  speed?: number;
  enableShadows?: boolean;
  enableOnHover?: boolean;
  className?: string;
}

interface CustomCSSProperties extends CSSProperties {
  "--after-duration": string;
  "--before-duration": string;
  "--after-shadow": string;
  "--before-shadow": string;
}

const GlitchText: FC<GlitchTextProps> = ({
  children,
  speed = 0.5,
  enableShadows = true,
  enableOnHover = false,
  className = "",
}) => {
  const inlineStyles: CustomCSSProperties = {
    "--after-duration": `${speed * 3}s`,
    "--before-duration": `${speed * 2}s`,
    "--after-shadow": enableShadows ? "-5px 0 red" : "none",
    "--before-shadow": enableShadows ? "5px 0 cyan" : "none",
  };

  const baseClasses =
    "relative inline-block isolate mx-auto cursor-pointer select-none text-[clamp(2rem,10vw,8rem)] font-black text-white";

  const alwaysPseudo =
    "before:content-[attr(data-text)] before:absolute before:top-0 before:left-[-10px] before:overflow-hidden before:text-white before:[clip-path:inset(0_0_0_0)] before:[text-shadow:var(--before-shadow)] " +
    "after:content-[attr(data-text)] after:absolute after:top-0 after:left-[10px] after:overflow-hidden after:text-white after:[clip-path:inset(0_0_0_0)] after:[text-shadow:var(--after-shadow)]";

  const animationClasses = enableOnHover
    ? "before:opacity-0 after:opacity-0 hover:before:opacity-100 hover:after:opacity-100 hover:before:animate-glitch-before hover:after:animate-glitch-after"
    : "before:animate-glitch-before after:animate-glitch-after";

  return (
    <div
      style={inlineStyles}
      data-text={children}
      className={`${baseClasses} ${alwaysPseudo} ${animationClasses} ${className}`}
    >
      {children}
    </div>
  );
};

export default GlitchText;
