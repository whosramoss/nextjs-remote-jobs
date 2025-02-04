import AppI18nConfig from "@utils/app-i18n-config";
import { NextResponse } from "next/server";
import type { NextRequest } from "next/server";

const PUBLIC_FILE = /\.(.*)$/;

export function middleware(request: NextRequest) {
  const { pathname } = request.nextUrl;

  if (AppI18nConfig.isUrlLocalized(pathname)) return

  const isRequestForStaticFiles = pathname.startsWith("/_next")
    || pathname.includes("/server/")
    || pathname.includes("/api/")
    || PUBLIC_FILE.test(pathname);

  if (isRequestForStaticFiles) return;

  const url = AppI18nConfig.setUrlByDefaultLocale(pathname);

  return NextResponse.redirect(new URL(url, request.url));
}
