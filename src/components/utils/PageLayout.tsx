import React from "react";
type PageLayoutProp = {
  children: any;
};

const PageLayout = ({ children }: PageLayoutProp) => {
  return <div className="relative mt-24">{children}</div>;
};

export default PageLayout;
