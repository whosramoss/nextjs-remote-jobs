"use client"
import { createContext, useContext } from "react";
import { ICommons } from "@utils/utils";
import { useActiveId } from "@hooks/useActiveId";

interface IActiveIdContext {
  activeId: number | null;
};

export const ActiveIdContext = createContext<IActiveIdContext | null>(null);

export function useActiveIdContext() {
  const context = useContext(ActiveIdContext);
  if (!context) {
    throw new Error(
      "useActiveIdContext must be used within a ActiveIdContextProvider"
    );
  }
  return context;
}

export default function ActiveIdContextProvider({
  children,
}: ICommons) {
  const activeId = useActiveId();

  return (
    <ActiveIdContext.Provider
      value={{
        activeId,
      }}
    >
      {children}
    </ActiveIdContext.Provider>
  );
}
