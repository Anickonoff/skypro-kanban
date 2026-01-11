import { ThemeProvider } from "styled-components";
import AppRoutes from "./AppRoutes";
import AuthProvider from "./context/AuthPROVIDER.JSX";
import { lightTheme } from "./theme/theme";
import GlobalStyles from "./theme/GlobalStyles";

function App() {
  return (
    <ThemeProvider theme={lightTheme}>
      <GlobalStyles />
      <AuthProvider>
        <AppRoutes />
      </AuthProvider>
    </ThemeProvider>
  );
}

export default App;
