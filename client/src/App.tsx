import { Outlet } from "react-router-dom";
import SidebarNav from "./components/SidebarNav";
import Footer from "./components/Footer";

export default function App() {
  return (
    <div className="min-h-screen flex bg-white text-neutral-900">
      <SidebarNav />
      <main id="content" className="flex-1 min-w-0 flex flex-col">
        <div className="flex-1">
          <Outlet />
        </div>
        <Footer />
      </main>
    </div>
  );
}
