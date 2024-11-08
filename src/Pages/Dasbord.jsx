import { useEffect, useState } from "react";
import { getAllFavorite, removeFavorite } from "../Utils";
import Cards from "../Component/Cards";


const Dasbord = () => {
    const [coffees, setCoffees] = useState([])
    useEffect(() => {
        const favorites = getAllFavorite()
        setCoffees(favorites)
    }, [])
    const handelRemove = id => {
        removeFavorite(id)
        const favorites = getAllFavorite()
        setCoffees(favorites)
    }
   
    return (
        <>

            <div>
                <div className="grid grid-cols-1 lg:grid-cols-3 ">

                    {
                        coffees.map(coffee => (<Cards handelRemove={handelRemove} key={coffee.id} coffee={coffee}></Cards>))
                    }
                </div>
            </div>
        </>

    );
};

export default Dasbord;