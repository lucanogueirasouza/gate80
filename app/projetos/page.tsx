import type { Metadata } from "next";
import ProjetosClient from "./ProjetosClient";

export const metadata: Metadata = {
  title: "Projetos",
};

export default function ProjetosPage() {
  return <ProjetosClient />;
}
