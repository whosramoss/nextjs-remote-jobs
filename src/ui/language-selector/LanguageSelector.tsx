"use client";

import { useRouter, usePathname } from "next/navigation";
import AppI18nConfig from "@utils/app-i18n-config";
import { cn } from "@utils/utils";

interface LanguageSelectorProps {
  currentLanguage: string;
}

export function LanguageSelector({ currentLanguage }: LanguageSelectorProps) {
  const router = useRouter();
  const pathname = usePathname();

  const handleChange = (value: string) => {
    router.push(`/${value}${pathname.replace(`/${currentLanguage}`, "")}`);
  };

  return (
    <div className="top-10 left-0 flex p-1 gap-[4px] rounded-full  backdrop-blur-2xl">
      {AppI18nConfig.getLanguageOptions().map(({ locale }) => {
        const isCurrentLang = currentLanguage === locale
        return (
          <div
            key={locale}
            onClick={() => handleChange(locale)}
            className={cn(
              "cursor-pointer mx-[0.8px] py-1 px-3 rounded-full text-base hover:bg-[#696c71]  select-none",
              { 'bg-secondary': isCurrentLang },
            )}
          >
            {locale.toUpperCase()}
          </div>
        )
      })}
    </div>
  )
}
