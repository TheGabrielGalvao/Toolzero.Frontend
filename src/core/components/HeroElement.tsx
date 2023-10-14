import clsx from "clsx";
import React, { HTMLAttributes } from "react";
export const HeroElement: React.FC<HTMLAttributes<HTMLElement>> = ({
  children,
  className,
}) => {
  return (
    <section
      className={clsx(
        className,
        "flex flex-col justify-center items-center w-screen bg-primary h-60 gap-6 overflow-hidden"
      )}
    >
      {children}
    </section>
  );
};
