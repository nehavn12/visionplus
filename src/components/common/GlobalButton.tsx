// export default async function GlobalButton({
//   title,
//   onClick,
//   className,
// }: {
//   title: string;
//   onClick?: () => void;
//   className?: string;
// }) {
//   return (
//     <button
//       onClick={onClick}
//       className={`
//         bg-[#E31E25]
//         text-white
//         px-8
//         py-3
//         rounded-[10px]
//         text-[18px]
//         hover:bg-red-700
//         transition
//         ${className ? className : ""}
//       `}
//     >
//       {title}
//     </button>
//   );
// }

import Link from "next/link";
import React from "react";

type ButtonProps = {
  className?: string;
  type?: "button" | "link";
  text: string;
  href?: string;
  target?: string;
  onClick?: () => void;
};

const Button: React.FC<ButtonProps> = ({
  className = "px-6 py-3 rounded-[0.625rem] bg-secondary text-white align-middle leading-[1.4063]  text-base font-bold  hover:bg-red-700 transition",
  type = "button",
  text,
  href = "#",
  target,
  onClick,
}) => {
  if (type === "link") {
    return (
      <Link href={href} className={className} target={target}>
        {text}
      </Link>
    );
  }

  return (
    <button className={className} onClick={onClick}>
      {text}
    </button>
  );
};

export default Button;
