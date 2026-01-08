"use client";
import { makeStore } from "@/lib/store";
import React, { useMemo } from "react";
import { Provider } from "react-redux";

const StateProvider = ({ children }: { children: React.ReactNode }) => {
  const store = useMemo(() => makeStore(), []);
  return <Provider store={store}>{children}</Provider>;
};

export default StateProvider;
