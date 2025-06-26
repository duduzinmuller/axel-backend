export function isPlanActive(planExpiresAt?: Date | null): boolean {
  if (!planExpiresAt) return false;
  return planExpiresAt > new Date();
}
