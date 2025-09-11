import Link from "next/link";
import React from "react";

type Props = {
  params: Promise<{ articlesId: string }>;
  searchParams: Promise<{ lang: "en" | "fr" | "gr" }>;
};

const ArticlesDetails = async ({ params, searchParams }: Props) => {
  const { articlesId } = await params;
  const { lang = "en" } = await searchParams;
  return (
    <div>
      <h1>This is the News Articles {articlesId} </h1>
      <p>Reading In {lang}</p>
      <div>
        <Link
          className="mr-2 text-blue-700"
          href={`/articles/${articlesId}?lang=en`}
        >
          English
        </Link>
        <Link
          className="mr-2 text-blue-700"
          href={`/articles/${articlesId}?lang=fr`}
        >
          French
        </Link>
        <Link
          className="mr-2 text-blue-700"
          href={`/articles/${articlesId}?lang=gr`}
        >
          Germany
        </Link>
      </div>
    </div>
  );
};

export default ArticlesDetails;
