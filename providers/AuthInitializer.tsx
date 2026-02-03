"use client";
import { useEffect } from "react";
import { useAppDispatch } from "@/lib/hooks";
import {
  setAuthChecked,
  setLogOut,
  setUser,
} from "@/lib/features/auth/AuthSlice";
import { useLoadUserQuery } from "@/lib/features/auth/userApi";
import Loading from "@/components/layout/Loading";

export const AuthInitializer = ({
  children,
}: {
  children: React.ReactNode;
}) => {
  const dispatch = useAppDispatch();
  const { data, isSuccess, isError, isLoading } = useLoadUserQuery();

  useEffect(() => {
    if (!isLoading) {
      if (isSuccess && data?.user) {
        dispatch(setUser(data.user));
      } else if (isError) {
        dispatch(setLogOut());
        dispatch(setAuthChecked());
      } else {
        dispatch(setAuthChecked());
      }
    }
  }, [isSuccess, isError, data, dispatch, isLoading]);

  if (isLoading) {
    return (
      <div className="flex items-center justify-center h-screen">
        <Loading />
      </div>
    );
  }

  return <>{children}</>;
};
