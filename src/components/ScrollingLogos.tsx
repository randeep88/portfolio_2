"use client";

import {
  ScrollVelocityContainer,
  ScrollVelocityRow,
} from "@/components/ui/scroll-based-velocity";
import { icons } from "./svgs";

const IMAGES_ROW_A = [
  icons.github,
  icons.tailwind,
  icons.html,
  icons.css,
  icons.js,
  icons.git,
  icons.react,
  icons.typescript,
  icons.docker,
  icons.firebase,
  icons.actions,
  icons.next,
  icons.material,
  icons.shadcn,
  icons.express,
  icons.socket,
  icons.nodejs,
];

const IMAGES_ROW_B = [
  icons.mongodb,
  icons.supabase,
  icons.mysql,
  icons.redux,
  icons.zustand,
  icons.reactQuery,
  icons.postman,
  icons.hop,
  icons.vs,
  icons.cloudflare,
  icons.gcloud,
  icons.windsurf,
  icons.cursor,
  icons.authjs,
  icons.jwt,
];

export function ScrollingLogos() {
  return (
    <div className="absolute bottom-30 flex w-full flex-col items-center justify-center py-8 my-20">
      <ScrollVelocityContainer className="w-full">
        <ScrollVelocityRow baseVelocity={6} direction={1} className="py-4">
          {IMAGES_ROW_A.map((Icon, idx) => (
            <div key={idx} className="mx-10 flex items-center justify-center">
              <Icon />
            </div>
          ))}
        </ScrollVelocityRow>
        <ScrollVelocityRow baseVelocity={6} direction={-1} className="py-4">
          {IMAGES_ROW_B.map((Icon, idx) => (
            <div key={idx} className="mx-10 flex items-center justify-center">
              <Icon />
            </div>
          ))}
        </ScrollVelocityRow>
      </ScrollVelocityContainer>

      <div className="from-background pointer-events-none absolute inset-y-0 left-0 w-1/4 bg-linear-to-r"></div>
      <div className="from-background pointer-events-none absolute inset-y-0 right-0 w-1/4 bg-linear-to-l"></div>
    </div>
  );
}
