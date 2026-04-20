import { create } from "zustand";
import { persist } from "zustand/middleware";
import { useCallback } from "react";

type PersistedStore = {
  values: Record<string, unknown>;
  set: (key: string, value: unknown) => void;
};

const useStore = create<PersistedStore>()(
  persist(
    (set) => ({
      values: {},
      set: (key, value) =>
        set((state) => ({ values: { ...state.values, [key]: value } })),
    }),
    { name: "persisted-state" }
  )
);

export function usePersistedState<T>(params: {
  key: string;
  default: T;
}): [T, React.Dispatch<React.SetStateAction<T>>] {
  const stored = useStore((state) => state.values[params.key]);
  const setStore = useStore((state) => state.set);

  const value = stored !== undefined ? (stored as T) : params.default;

  const setValue = useCallback(
    (action: React.SetStateAction<T>) => {
      const next =
        typeof action === "function"
          ? (action as (prev: T) => T)(value)
          : action;
      setStore(params.key, next);
    },
    [params.key, setStore, value]
  );

  return [value, setValue];
}
