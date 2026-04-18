'use client';

type SessionBannerProps = {
    title: string;
    prompt: string;
    status: "upcoming" | "live" | "finished";
    startTime: string;
    endTime: string;
    participantsCount: number;
    onJoin?: () => void;
}

import {useMemo} from "react";

export function SessionBanner({ title, prompt = "Les horloges fondues du boulevard Haussmann", status = "upcoming", startTime, endTime, participantsCount, onJoin }: SessionBannerProps) {

const duration = useMemo(() => {
    const start = new Date(startTime);
    const end = new Date(endTime);
    const diff = end.getTime() - start.getTime();
    const minutes = Math.round(diff / 60000);
    return minutes;
}, [startTime, endTime]);

  return (
    <section className="bg-foreground text-background py-16 md:py-20">
      <div className="max-w-7xl mx-auto px-8">
        {/* <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.3 }}
          className="flex flex-col items-center text-center gap-8"
        > */}
        <div    className="flex flex-col items-center text-center gap-8">
          <div className="flex items-center gap-3">
            <span className="size-2 rounded-full bg-primary animate-pulse" />
            <span className="font-mono text-xs uppercase tracking-widest text-primary">
              {status === "upcoming" ? "Prochaine séance" : status === "live" ? "Séance en cours" : "Séance terminée"}
            </span>
          </div>

          <h2 className="text-4xl md:text-6xl font-serif leading-tight max-w-3xl text-balance">
         {prompt}
          </h2>

          <p className="font-display italic text-lg md:text-xl opacity-60 max-w-xl">
            Prompt généré par l'Oracle Mécanique — chaque joueur ajoutera une
            phrase sans voir la précédente.
          </p>

          <div className="flex flex-wrap justify-center gap-8 md:gap-12 mt-4 font-mono text-sm">
            <div className="flex items-center gap-3">
              {/* <Clock className="size-4 text-primary" /> */}
              <div className="text-left">
                <span className="block text-[10px] uppercase opacity-40">Début</span>
                <span>Ce soir, 21h00</span>
              </div>
            </div>
            <div className="flex items-center gap-3">
              {/* <Users className="size-4 text-primary" /> */}
              <div className="text-left">
                <span className="block text-[10px] uppercase opacity-40">Participants</span>
                <span>12 / 20 places</span>
              </div>
            </div>
            <div className="flex items-center gap-3">
              {/* <Sparkles className="size-4 text-primary" /> */}
              <div className="text-left">
                <span className="block text-[10px] uppercase opacity-40">Durée</span>
                <span>{duration}</span>
              </div>
            </div>
          </div>

          {/* <motion.button
            whileHover={{ scale: 1.02 }}
            whileTap={{ scale: 0.98 }}
            className="mt-4 bg-primary text-primary-foreground px-10 py-4 rounded-sm text-sm uppercase tracking-widest font-mono hover:brightness-110 transition-all"
          >
            Rejoindre la séance
          </motion.button> */}

          <div className="flex items-center gap-3 mt-2">
            <div className="flex -space-x-2">
              {["M", "A", "J", "S", "L"].map((initial, i) => (
                <div
                  key={i}
                  className="size-8 rounded-full bg-background/10 border border-background/20 flex items-center justify-center text-xs font-mono"
                >
                  {initial}
                </div>
              ))}
            </div>
            <span className="font-mono text-xs opacity-40">
              +7 en attente
            </span>
          </div>
          </div>
        {/* </motion.div> */}
      </div>
    </section>
  );
};