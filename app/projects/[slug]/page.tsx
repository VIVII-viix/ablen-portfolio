import { notFound } from "next/navigation";
import Link from "next/link";
import styles from "../../css/project-page-style.module.css";
import { fetchProject } from "@/app/lib/api";

type Props = { params: Promise<{ slug: string }> };

export const dynamic = "force-dynamic";

export default async function ProjectPage({ params }: Props) {
  const { slug } = await params;

  let project;
  try {
    project = await fetchProject(slug);
  } catch (e) {
    if (e instanceof Error && e.message === "404") notFound();
    throw e;
  }

  if (!project) notFound();

  return (
    <main className="px-16 py-8">
      <Link href="/projects" className={styles.back}>
        &lt; Back
      </Link>
      <h1 className="text-4xl font-bold">{project.title}</h1>
      <p className="mt-2 text-neutral-500">Made in {project.year}</p>
      <p className="mt-6 text-xl">{project.summary}</p>
    </main>
  );
}
