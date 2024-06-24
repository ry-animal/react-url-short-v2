import Header from "@/components/header";
import { Outlet } from "react-router-dom";

const AppLayout = () => {
    return (
        <>
            <main className="min-h-screen container">
                <Header />
                <Outlet />
            </main>

            <div className="p-6 text-center bg-gray-800 -mt-[5%]">
                LinkShrink
            </div>
        </>
    )
}

export default AppLayout;