import { Outlet } from "react-router-dom";
import { Suspense, useState } from "react";
import Loading from "./Loading";
import Sidebar from "./dashboard/Sidebar";
import DesktopSidebar from "./dashboard/DesktopSidebar";
import Header from "./dashboard/Header";

export default function Layout() {
  const [sidebarOpen, setSidebarOpen] = useState(false);

  return (
    <>
      <div>
        <Sidebar sidebarOpen={sidebarOpen} setSidebarOpen={setSidebarOpen} />
        <DesktopSidebar />

        <div className="lg:pl-72">
          <Header setSidebarOpen={setSidebarOpen} />
          <main className="py-6 px-6 xl:px-20">
            <Suspense fallback={<Loading />}>
              <Outlet />
            </Suspense>
          </main>
        </div>
      </div>
    </>
  );
}
