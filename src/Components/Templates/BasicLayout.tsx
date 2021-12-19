import React from "react"
import Footer from "../Organisms/Footer"
import Navbar from "../Organisms/Navbar"

type BasicLayoutProps = {
    children: React.ReactNode
}

const BasicLayout = ({children}: BasicLayoutProps) => {
    return (
        <div className="min-h-screen bg-sky-200">
            <Navbar />
                {children}
            <Footer />
        </div>
    )
}

export default BasicLayout