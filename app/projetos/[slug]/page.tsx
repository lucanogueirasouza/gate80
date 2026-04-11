import { notFound } from "next/navigation";
import type { Metadata } from "next";
import CaseStudyClient from "./CaseStudyClient";
import { getProjectCaseStudy, projectCaseStudies } from "../data";

type Params = Promise<{ slug: string }>;

export async function generateStaticParams() {
  return projectCaseStudies.map((project) => ({
    slug: project.slug,
  }));
}

export async function generateMetadata(props: {
  params: Params;
}): Promise<Metadata> {
  const { slug } = await props.params;
  const project = getProjectCaseStudy(slug);

  if (!project) {
    return {
      title: "Projeto",
    };
  }

  return {
    title: project.name,
    description: project.description,
  };
}

export default async function ProjetoCaseStudyPage(props: {
  params: Params;
}) {
  const { slug } = await props.params;
  const project = getProjectCaseStudy(slug);

  if (!project) {
    notFound();
  }

  return <CaseStudyClient project={project} />;
}
