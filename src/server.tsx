import { Card } from "flowbite-react";
import { useEffect, useMemo, useState } from "react";

export interface PlayerInformation {
  max: number;
  online: number;
}

export interface ServerPing {
  favicon: string;
  players: PlayerInformation;
}

export function ServerBanner() {
  const [ping, setPing] = useState<ServerPing | undefined>(undefined);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    const run = async () => {
      const res = await fetch(
        `https://api.minetools.eu/ping/mc.realliance.net/25565`,
      );
      setPing(await res.json());
    };

    if (!loading && !ping) {
      setLoading(true);
      run();
    }
  }, [loading, ping]);

  return (
    <Card className="max-w-md bg-slate-700 text-white">
      <div className="flex flex-row gap-2 items-center">
        <img src="/reABackground.png" className="rounded-md h-16 w-16" />
        <div>
          <h5 className="text-2xl font-bold tracking-tight text-white">
            Realliance Communtiy
          </h5>
          <h5 className="font-mono text-lg font-bold tracking-tight text-white">
            mc.realliance.net
          </h5>
        </div>
      </div>
      {!ping && loading && (
        <div className="h-6 max-w-20 rounded animate-pulse bg-slate-600"></div>
      )}
      {ping && (
        <p className="text-lg">
          {ping?.players.online}/{ping?.players.max} Online
        </p>
      )}
    </Card>
  );
}
