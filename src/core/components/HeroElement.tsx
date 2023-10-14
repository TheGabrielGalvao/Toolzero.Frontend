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
        "flex flex-col justify-center items-center w-full bg-primary h-80 gap-6"
      )}
    >
      {children}
    </section>
  );
};
