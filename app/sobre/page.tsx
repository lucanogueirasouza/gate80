import type { Metadata } from "next";
import SobreClient from "./SobreClient";

export const metadata: Metadata = {
  title: "Sobre",
};

export default function SobrePage() {
  return <SobreClient />;
}
