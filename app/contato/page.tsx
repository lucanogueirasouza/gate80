import type { Metadata } from "next";
import ContatoClient from "./ContatoClient";

export const metadata: Metadata = {
  title: "Contato",
};

export default function ContatoPage() {
  return <ContatoClient />;
}
