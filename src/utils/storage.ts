export function loadBellState() {
  try {
    const stored = localStorage.getItem("bell-state");
    if (stored) return JSON.parse(stored);
  } catch {}
  return { count: 0, log: [] };
}

export function saveBellState(state: any) {
  try {
    localStorage.setItem("bell-state", JSON.stringify(state));
  } catch {}
}
