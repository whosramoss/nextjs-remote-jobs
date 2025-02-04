import { ExampleProvider } from "@providers/ExampleProvider";
import { CustomQueryProvider } from "@providers/QueryProvider";
import { ThemeProvider } from "@providers/ThemeProvider";
import { CommonsProps } from "@utils/utils";

export default async function AppProvider({ children }: CommonsProps) {
  return (
    <ThemeProvider attribute="class" defaultTheme="light">
      <CustomQueryProvider>
        <ExampleProvider>{children}</ExampleProvider>
      </CustomQueryProvider>
    </ThemeProvider>
  );
}
