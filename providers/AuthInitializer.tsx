"use client";
import { useEffect } from "react";
import { RootState } from "@/lib/store";
import { useAppDispatch, useAppSelector } from "@/lib/hooks";
import { useCheckAuthMutation } from "@/lib/features/auth/userApi";
import { setLogOut, setUser } from "@/lib/features/auth/AuthSlice";

export const AuthInitializer = ({
  children,
}: {
  children: React.ReactNode;
}) => {
  const dispatch = useAppDispatch();
  const [checkAuth, { isLoading }] = useCheckAuthMutation();
  const isCheckingAuth = useAppSelector(
    (state: RootState) => state.auth.isCheckingAuth
  );

  useEffect(() => {
    const init = async () => {
      try {
        const response = await checkAuth({}).unwrap();
        dispatch(setUser(response.user));
      } catch (err) {
        dispatch(setLogOut());
      }
    };
    init();
  }, [checkAuth, dispatch]);

  // Prevent UI flicker by showing a loader while checking the cookie
  // if (isLoading || isCheckingAuth) {
  //   return <div>Loading session...</div>;
  // }

  return <>{children}</>;
};
