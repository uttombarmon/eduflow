"use client";
import { makeStore } from "@/lib/store";
import React, { useMemo } from "react";
import { Provider } from "react-redux";
import { AuthInitializer } from "./AuthInitializer";

const StateProvider = ({ children }: { children: React.ReactNode }) => {
  const store = useMemo(() => makeStore(), []);
  return (
    <Provider store={store}>
      <AuthInitializer>{children}</AuthInitializer>
    </Provider>
  );
};

export default StateProvider;
