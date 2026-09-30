export type CountdownParts = {
  days: number;
  hours: number;
  minutes: number;
  seconds: number;
};

export function getCountdown(targetIso: string, now = new Date()): CountdownParts {
  const target = new Date(targetIso).getTime();
  const diff = Math.max(0, target - now.getTime());

  const days = Math.floor(diff / (1000 * 60 * 60 * 24));
  const hours = Math.floor((diff / (1000 * 60 * 60)) % 24);
  const minutes = Math.floor((diff / (1000 * 60)) % 60);
  const seconds = Math.floor((diff / 1000) % 60);

  return { days, hours, minutes, seconds };
}

export function padTwo(n: number): string {
  return n.toString().padStart(2, "0");
}
