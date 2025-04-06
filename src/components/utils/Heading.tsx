import React from "react";

const Heading = ({
  heading,
  subheading,
  align = 'left'
}: {
  heading: string;
  subheading?: string;
  align?: 'left' | "center" | "right"
}) => {
  return (
    <div className={`space-y-3 text-${align}`}>
      <h1 className="text-4xl font-extrabold uppercase">{heading}</h1>
      <h2 className="text-lg capitalize">{subheading}</h2>
    </div>
  );
};

export default Heading;
