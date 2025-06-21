import {ReactComponentProps} from "@/interfaces";
import Header from "./Header";
import Footer from "./Footer"


const Layout: React.FC<ReactComponentProps> = ({children}) => {
    return (
        <>
        {/* Site header */}
        <Header/>
        <main className="min-h-screen">
            {children}
            {/* Content area */}
        </main>
        <Footer/>
        {/* Site footer */}
        </>
    )
}

export default Layout;