import Dashboard from "@/components/marketing/dashboard";
import React from 'react'
import { generateMetadata } from "@/utils";

// Leftover template demo: keep it out of search results.
export const metadata = generateMetadata({ title: "Dashboard demo", path: "/dashboard", noIndex: true });

const DashboardPage = () => {
    return (
        <div className="w-screen h-screen">
            <Dashboard />
        </div>
    )
};

export default DashboardPage;

