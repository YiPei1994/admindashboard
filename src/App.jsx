import { BrowserRouter, Navigate, Route, Routes } from "react-router-dom";
import Applayouts from "./layouts/Applayouts";
import PageNotFound from "./page/PageNotFound";
import Login from "./page/Login";
import Dashboard from "./page/Dashboard";
import GlobalStyles from "./styles/GlobalStyles";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { Toaster } from "react-hot-toast";
import { ReactQueryDevtools } from "@tanstack/react-query-devtools";
import MiniGames from "./page/MiniGames";
import Fitness from "./page/Fitness";
import ProtectedRoute from "./ui/ProtectedRoute";
import TrainingHistory from "./page/TrainingHistory";
import User from "./page/User";

const queryClient = new QueryClient({
  defaultOptions: {
    queries: {
      staleTime: 0,
    },
  },
});
function App() {
  return (
    <>
      <QueryClientProvider client={queryClient}>
        <ReactQueryDevtools initialIsOpen={false} />
        <GlobalStyles />
        <BrowserRouter>
          <Routes>
            <Route element={<Applayouts />}>
              <Route index element={<Navigate replace to="dashboard" />} />
              <Route path="dashboard" element={<Dashboard />} />
              <Route path="fitness" element={<Fitness />} />
              <Route path="training" element={<TrainingHistory />} />
              <Route path="games" element={<MiniGames />} />
              <Route
                path="user"
                element={
                  <ProtectedRoute>
                    <User />
                  </ProtectedRoute>
                }
              />
            </Route>
            <Route path="login" element={<Login />} />
            <Route path="*" element={<PageNotFound />} />
          </Routes>
        </BrowserRouter>
        <Toaster
          position="top-center"
          gutter={12}
          containerStyle={{ margin: "8px" }}
          toastOptions={{
            sucess: { duration: 3000 },
            error: { duration: 5000 },
            style: {
              fontSize: "16px",
              maxWidth: "500px",
              padding: "16px 24px",
              backgroundColor: "var(--color-bg)",
              color: "var(--color-text)",
            },
          }}
        />
      </QueryClientProvider>
    </>
  );
}

export default App;
