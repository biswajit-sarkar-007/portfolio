import BlurFade from "@/components/magicui/blur-fade";
import { DATA } from "@/data/resume";
import Link from "next/link";

export const metadata = {
  title: "Blog",
  description: "My thoughts on software development, life, and more.",
};

const BLUR_FADE_DELAY = 0.04;

const posts = [
  {
    title: "Why I Love Open Source",
    date: "January 15, 2025",
    description:
      "Open source software has changed my life. Here's why I think everyone should contribute.",
    slug: "why-open-source",
  },
  {
    title: "The Future of Web Development",
    date: "January 10, 2025",
    description:
      "Web development is changing fast. Here are my predictions for the next 5 years.",
    slug: "future-web-dev",
  },
  {
    title: "Building Scalable Systems",
    date: "January 5, 2025",
    description:
      "Scalability is hard. Here are some tips and tricks I've learned along the way.",
    slug: "scalable-systems",
  },
];

export default function BlogPage() {
  return (
    <section>
      <BlurFade delay={BLUR_FADE_DELAY}>
        <h1 className="font-medium text-2xl mb-8 tracking-tighter">blog</h1>
      </BlurFade>
      {posts.map((post, id) => (
        <BlurFade delay={BLUR_FADE_DELAY * 2 + id * 0.05} key={post.slug}>
          <Link
            className="flex flex-col space-y-1 mb-4"
            href={`/blog/${post.slug}`}
          >
            <div className="w-full flex flex-col">
              <p className="tracking-tight">{post.title}</p>
              <p className="h-6 text-xs text-muted-foreground">{post.date}</p>
            </div>
          </Link>
        </BlurFade>
      ))}
    </section>
  );
}
