import React from "react";
import Sidebar from "./_components/Sidebar";
import NavBar from "./_components/NavBar";

const DashboardLayout = ({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) => {
  return (
    <div className="h-full">
      <div className="h-[80px] md:pl-56 w-full fixed z-50">
        <NavBar />
      </div>
      <div className="hidden md:flex h-full w-56 flex-col fixed inset-y-0 z-50">
        <Sidebar />
      </div>
      <main className="md:pl-56 pt-[80px] h-full">{children}</main>
    </div>
  );
};

export default DashboardLayout;
