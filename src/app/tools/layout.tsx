
import Sidebar from "@/components/Sidebar";


export default function ToolsLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <div className="bg-gray-50 min-h-screen">

      {/* Floating Background Elements */}
      <div className="floating-elements">
        <div className="floating-element gradient-bg w-20 h-20 rounded-full" style={{ left: "10%", animationDelay: "0s" }}></div>
        <div className="floating-element gradient-bg w-12 h-12 rounded-full" style={{ left: "20%", animationDelay: "5s" }}></div>
        <div className="floating-element gradient-bg w-16 h-16 rounded-full" style={{ left: "30%", animationDelay: "10s" }}></div>
        <div className="floating-element gradient-bg w-8 h-8 rounded-full" style={{ left: "40%", animationDelay: "15s" }}></div>
        <div className="floating-element gradient-bg w-24 h-24 rounded-full" style={{ left: "60%", animationDelay: "3s" }}></div>
        <div className="floating-element gradient-bg w-14 h-14 rounded-full" style={{ left: "70%", animationDelay: "8s" }}></div>
        <div className="floating-element gradient-bg w-10 h-10 rounded-full" style={{ left: "80%", animationDelay: "12s" }}></div>
        <div className="floating-element gradient-bg w-18 h-18 rounded-full" style={{ left: "90%", animationDelay: "7s" }}></div>
      </div>
      <div className="flex min-h-screen">
        <Sidebar />

        {/* Mobile sidebar overlay */}
        <div className="fixed inset-0 bg-black bg-opacity-50 z-10 md:hidden hidden" id="sidebarOverlay"></div>

        {/* Main Content Area */}
        <div className="flex-1 flex flex-col overflow-hidden">
          {children}
        </div>

      </div>

    </div>
  );
}
