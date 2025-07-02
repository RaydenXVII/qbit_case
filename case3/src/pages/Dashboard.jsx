import Navbar from "../layouts/Navbar"
import TentangKami from "../main/TentangKami"
import Menu from "../main/Menu"
import HubungiKami from "../main/KontakKami"
import Footer from "../layouts/Footer"

export default function Dashboard(){
    return(
        <div>
            <Navbar/>
            <TentangKami/>
            <Menu/>
            <HubungiKami/>
            <Footer/>
        </div>
    )
}