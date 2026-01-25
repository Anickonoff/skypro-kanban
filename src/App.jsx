import AppRoutes from "./AppRoutes";
import AuthProvider from "./context/AuthPROVIDER.JSX";
import { TaskProvider } from "./context/TaskProvider";
import ThemeModeProvider from "./context/ThemeModeProvider";

function App() {
  return (
    <ThemeModeProvider>
      <AuthProvider>
        <TaskProvider>
          <AppRoutes />
        </TaskProvider>
      </AuthProvider>
    </ThemeModeProvider>
  );
}

export default App;
