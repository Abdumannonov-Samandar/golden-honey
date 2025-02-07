"use client";

import { useDocumentTitle } from "@udemere/usehooks";

export default function Home() {
  useDocumentTitle("Home");

  return (
    <main>
      <h1>Hello World</h1>
    </main>
  );
}
