import { Outlet, useLoaderData } from "react-router-dom";
import Banner from "../Component/Banner";
import Heading from "../Component/Heading";
import Categories from "../Component/Categories";


const Home = () => {
    const categories = useLoaderData()
    console.log(categories);
    return (
        <div>
            <p>Home</p>
            <Banner></Banner>
            <Heading titel={'Browse Coffees By Category'} 
            subtitel={'Choose Your Coffee Category fit your late'}>

            </Heading>
            <Categories categories={categories}></Categories>
            <Outlet></Outlet>
        </div>
    );
};

export default Home;