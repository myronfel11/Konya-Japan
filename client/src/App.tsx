// src/App.tsx
import { Outlet } from "react-router-dom";
import SidebarNav from "./components/SidebarNav";
import Footer from "./components/Footer";
import ScrollToTop from "./components/ScrollToTop";

// src/App.tsx
export default function App() {
  return (
    <div className="min-h-screen flex bg-white text-neutral-900">
      <SidebarNav />
      <main
        id="content"
        className="flex-1 min-w-0 flex flex-col
                   pt-[calc(env(safe-area-inset-top)+64px)] min-[1050px]:pt-0"
      >
        <ScrollToTop />
        <div className="flex-1">
          <Outlet />
        </div>
        <Footer />
      </main>
    </div>
  );
}
