"use client";
import { useEffect } from "react";
import { RootState } from "@/lib/store";
import { useAppDispatch, useAppSelector } from "@/lib/hooks";
import { setLogOut, setUser } from "@/lib/features/auth/AuthSlice";
import { useLoadUserQuery } from "@/lib/features/auth/userApi";
import Loading from "@/components/layout/Loading";

export const AuthInitializer = ({
  children,
}: {
  children: React.ReactNode;
}) => {
  const dispatch = useAppDispatch();
  const { data, isSuccess, isLoading } = useLoadUserQuery();

  useEffect(() => {
    if (isSuccess && data?.user) {
      // Once API verifies the cookie, sync it to Redux state
      dispatch(setUser(data.user));
    } else {
      dispatch(setLogOut());
    }
  }, [isSuccess, data, dispatch]);
  if (isLoading) {
    <div>
      <Loading />
    </div>;
  }

  return <>{children}</>;
};
