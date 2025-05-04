import BlurFade from "@/components/magicui/blur-fade";
import { getBlogPosts } from "@/data/blog";
import Link from "next/link";
import Breadcrumbs from '@mui/material/Breadcrumbs';
import { RiArticleLine, RiHome2Line } from "@remixicon/react";

export const metadata = {
  title: "Blog, discussions, and reflexions",
  description: "Mes pensées, réflexions et discussions sur le développement web, la technologie, l'éthique au travail et la vie en général.",
};

const BLUR_FADE_DELAY = 0.04;

export default async function BlogPage() {
  const posts = await getBlogPosts();

  return (
    <section>
      <div className="mb-4">
        <Breadcrumbs aria-label="breadcrumb">
          <Link
            href="/"
          >
            <div className="flex items-center">
              <RiHome2Line className="mr-2"/>
              Accueil
            </div>
          </Link>
          <Link
            href="/blog"
          >
            <div className="flex items-center">
              <RiArticleLine className="mr-2"/>
              Blog
            </div>
          </Link>
        </Breadcrumbs>
      </div>
     
      <BlurFade delay={BLUR_FADE_DELAY}>
        <h1 className="font-medium text-2xl tracking-tighter">{metadata.title}</h1>
        <div className="text-muted-foreground text-sm mb-4">
          {metadata.description}
        </div>
      </BlurFade>
      {posts
        .sort((a, b) => {
          if (
            new Date(a.metadata.publishedAt) > new Date(b.metadata.publishedAt)
          ) {
            return -1;
          }
          return 1;
        })
        .map((post, id) => (
          <BlurFade delay={BLUR_FADE_DELAY * 2 + id * 0.05} key={post.slug}>
            <Link
              className="flex flex-col space-y-1 mb-4"
              href={`/blog/${post.slug}`}
            >
              <div className="w-full flex flex-col">
                <p className="tracking-tight">{post.metadata.title}</p>
                <p className="text-muted-foreground text-sm mb-4">
                  {post.metadata.description}
                </p>
                <p className="h-6 text-xs text-muted-foreground">
                  {post.metadata.publishedAt}
                </p>
              </div>
            </Link>
          </BlurFade>
        ))}
    </section>
  );
}
