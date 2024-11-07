
import Navber from "../Component/Navber";
import Footer from "../Component/Footer";
import { Outlet } from "react-router-dom";



const MainLayouts = () => {
    return (
        <div>
            {/* Navber */}
            <div className="h-16">
            <Navber></Navber>
            </div>
            
            <div className="min-h-[calc(100vh-232px)]">
                {/* Daynamic Section */}
               


                <Outlet></Outlet>
           
                
            </div>
            <Footer></Footer>
           
            
            
        </div>
    );
};

export default MainLayouts;