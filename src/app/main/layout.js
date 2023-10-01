import AntDesignRegistry from "../Providers/AntDProvider/Registery";
import { Providers } from "../Providers/ReduxProvider/Provider";
import StyledComponentsRegistry from "../Providers/StyledComponentProvider/registery";
import { Providers as AntDProvider } from "../Providers/AntDProvider/Provider";
import { ThemeProviders } from "../Providers/StyledComponentProvider/ThemeProvider";
import { GlobalStyleProviders } from "../Providers/StyledComponentProvider/GlobalStyleProvider";
import MainLayout from "@/Components/MainLayout/MainLayout";

export const metadata = {
  title: "Create Next App",
  description: "Generated by create next app",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
        <Providers>
          <StyledComponentsRegistry>
            <AntDesignRegistry>
              <AntDProvider>
                <ThemeProviders>
                  <GlobalStyleProviders />
                  <MainLayout>{children}</MainLayout>
                </ThemeProviders>
              </AntDProvider>
            </AntDesignRegistry>
          </StyledComponentsRegistry>
        </Providers>
      </body>
    </html>
  );
}
