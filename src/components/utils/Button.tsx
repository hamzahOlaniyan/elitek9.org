import Link from "next/link";
import React from "react";

const Button = ({
  title,
  href,
  varient = "black",
  onClick,
  size = "large",
  icon,
}: {
  title?: string;
  href: string;
  varient?: "black" | "white" | "ghost";
  onClick?: () => void;
  size?: "small" | "large";
  icon?: React.ReactNode;
}) => {
  return (
    <Link
      className={`
        ${varient === "ghost"
          ? "bg-transparent text-neutral-300 hover:bg-neutral-800"
          : varient === "white"
            ? "bg-white hover:bg-neutral-100 text-black outline outline-black"
            : "bg-black text-white hover:bg-neutral-800"
        }    
      ${size === "large" ? "px-5 p-2 text-sm" : "px-3 p-1 text-xs"} 
       relative rounded-sm text-semibold flex item-center justify-center gap-1`}
      href={href}
      onClick={onClick}>
      <p>{title}</p>
      {icon && <p className="relative top-[2px]">{icon}</p>}
    </Link>
  );
};

export default Button;
