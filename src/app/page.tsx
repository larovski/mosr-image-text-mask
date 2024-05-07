"use client";
import BgImage from "@/components/BgImage";
import TextMaskImage from "@/components/TextMaskImage";
import { useRef } from "react";

export default function Home() {
  const ref = useRef(null);

  return (
    <main ref={ref} className="relative h-[300vh]">
      <BgImage image="/image/be_distinct.jpg" />
      <TextMaskImage
        mainRef={ref}
        text="divergent"
        image="/image/be_distinct.jpg"
      />
    </main>
  );
}
