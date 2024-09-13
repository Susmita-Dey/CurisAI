import React from "react";

interface PageProps {
  params: {
    url: string | string[] | undefined;
  };
}

const UrlPage = ({ params }: PageProps) => {
  console.log(params);

  return (
    <>
      <p>UrlPage</p>
    </>
  );
};

export default UrlPage;
