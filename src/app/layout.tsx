import { fontNeueMontreal } from "@utils/app-font";
import CustomCursor from "@app/_components/Cursor";
import { cn } from "@utils/utils";
import AppMetadata from "@utils/app-metadata";
import AppI18nConfig, { LocaleProps } from "@utils/app-i18n-config";
import AppProvider from "@providers/AppProvider";
import "@styles/global.css";

export const generateStaticParams = AppI18nConfig.setLanguagesParams;

export const generateMetadata = () => {
  const isLocalMetadata = true;
  const m = new AppMetadata(isLocalMetadata)
  return m.completeMetadata;
}

interface RootLayoutProps extends LocaleProps {
  children: React.ReactNode;
}

export default function RootLayout({
  children,
  params,
}: RootLayoutProps) {
  return (
    <html lang={params.lang} suppressHydrationWarning>
      <body className={cn("bg-primary", fontNeueMontreal.className)}>
        <AppProvider>
          <CustomCursor />
          {children}
        </AppProvider>
      </body>
    </html>
  );
}
