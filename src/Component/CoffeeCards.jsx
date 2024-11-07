import { useLoaderData, useNavigate, useParams } from "react-router-dom";
import Cards from "./Cards";
import { useEffect, useState } from "react";


const CoffeeCards = () => {
    const data = useLoaderData()
    const {category} = useParams()
    const [coffees, setCoffees] = useState([])
    const navigate = useNavigate()
    useEffect(() => {
        if (category) {
            const ByCategory = [...data].filter(
                coffee => coffee.category === category
            )
            setCoffees(ByCategory)

        }else{
            setCoffees(data)
        }
        
    }, [category, data])
    return (
        <>
        <div className="grid grid-cols-1 lg:grid-cols-3 ">
            
            {
                coffees.map(coffee => (<Cards key={coffee.id} coffee={coffee}></Cards>)) 
            }
        </div>
        <button className="btn ml-[120px] mt-3 btn-warning text-center" onClick={() => {navigate('/coffees')}}>View All</button>
        </>
        
        
    );
};

export default CoffeeCards;