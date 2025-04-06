import React from "react";

const MissionCard = ({ children }: { children: React.ReactNode }) => {
  return (
    <article className="text-neutral-900 bg-yellow-50 rounded-sm p-8 border border-yellow-200 first:bg-green-50 first:border-green-200 last:bg-orange-50 last:border-orange-200">
      <p className="text-xl font-bold uppercase">{children}</p>
    </article>
  );
};

export default MissionCard;
