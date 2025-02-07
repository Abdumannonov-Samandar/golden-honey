"use client";
import { YandexMetrica } from "@/components/analytics/yandex-metrica";
import { ChildrenProps } from "@/types";
import { SessionProvider } from "next-auth/react";
import GoogleAnalyticsProvider from "../analytics/google-analytics";

const RootProvider = ({ children }: ChildrenProps) => {
  return (
    <SessionProvider>
      <YandexMetrica>{children}</YandexMetrica>
      <GoogleAnalyticsProvider />
    </SessionProvider>
  );
};

export default RootProvider;
