"use client";

import { useEffect } from "react";

interface FramerScriptProps {
  src: string;
  type?: string;
  async?: boolean;
  "data-fid"?: string;
  "data-no-nt"?: string;
  fetchpriority?: string;
  "data-framer-bundle"?: string;
}

export default function FramerScript(props: FramerScriptProps) {
  const { src, type, "data-fid": dataFid, fetchpriority, "data-framer-bundle": bundle } = props;

  useEffect(() => {
    // Evitar duplicados
    if (document.querySelector(`script[src="${src}"]`)) return;

    const script = document.createElement("script");
    script.src = src;
    if (type) script.type = type;
    script.async = true;
    if (dataFid) script.setAttribute("data-fid", dataFid);
    if (props["data-no-nt"] !== undefined) script.setAttribute("data-no-nt", "");
    if (fetchpriority) script.setAttribute("fetchpriority", fetchpriority);
    if (bundle) script.setAttribute("data-framer-bundle", bundle);

    document.body.appendChild(script);
  }, [src]);

  return null;
}
