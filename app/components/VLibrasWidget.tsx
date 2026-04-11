"use client";

import Script from "next/script";

declare global {
  interface Window {
    VLibras?: {
      Widget: new (url: string) => unknown;
    };
    __vlibrasInitialized?: boolean;
  }
}

function initializeVLibras() {
  if (typeof window === "undefined") {
    return;
  }

  if (!window.VLibras || window.__vlibrasInitialized) {
    return;
  }

  const root = document.getElementById("vlibras-root");

  if (!root) {
    return;
  }

  new window.VLibras.Widget("https://vlibras.gov.br/app");
  window.__vlibrasInitialized = true;
}

export function VLibrasWidget() {
  return (
    <>
      <Script
        src="https://vlibras.gov.br/app/vlibras-plugin.js"
        strategy="afterInteractive"
        onLoad={initializeVLibras}
      />

      <div id="vlibras-root" {...{ vw: "" }} className="enabled">
        <div {...{ "vw-access-button": "" }} className="active" />
        <div {...{ "vw-plugin-wrapper": "" }}>
          <div className="vw-plugin-top-wrapper" />
        </div>
      </div>
    </>
  );
}
