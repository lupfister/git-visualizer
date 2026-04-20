import { useEffect, type DependencyList } from 'react';

export function useMapSvgGlobalEffects(register: () => (() => void) | void, deps: DependencyList) {
  useEffect(() => register(), deps);
}
