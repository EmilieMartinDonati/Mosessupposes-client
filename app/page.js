'use client';

import Header from "@/components/Header";
import { SessionBanner } from "@/components/SessionBanner";

export default function Home() {
  return <>
    <Header title="MOSES SUPPOSES" logo="icons/logo_red.png" />
    <SessionBanner title="Welcome to MOSES SUPPOSES" prompt="Join our live session!" participantsCount={24} />
  </>;
}
