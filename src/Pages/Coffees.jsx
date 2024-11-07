import { useLoaderData } from "react-router-dom";
import Cards from "../Component/Cards";
import { useState } from "react";
import { ToastContainer, toast } from 'react-toastify';
  import 'react-toastify/dist/ReactToastify.css';



const Coffees = () => {
    const data = useLoaderData()
    const [coffees, setCoffees] = useState(data)
    const tosty = () => toast('Popularty Sort Done', {position: 'top-center'})
    const tostyP = () => toast('Rating Sort Done', {position: 'top-center',})
    const handelSort =sortBy => {
        tosty()
        
        if(sortBy == 'popularity'){
            const sorted = [...data].sort((a, b) => b.popularity - a.popularity )
            setCoffees(sorted)

        }else if (sortBy == 'rating'){
            const sortedP = [...data].sort((a, b) => b.rating - a.rating )
            setCoffees(sortedP)


     }
    }

    const handelSortP =sortBy => {
        tostyP()
        
        if(sortBy == 'popularity'){
            const sorted = [...data].sort((a, b) => b.popularity - a.popularity )
            setCoffees(sorted)

        }else if (sortBy == 'rating'){
            const sortedP = [...data].sort((a, b) => b.rating - a.rating )
            setCoffees(sortedP)


     }
    }

   
    // const { name, image, category, origin, type, id, rating, popularity } = coffee || {}
    return (
        <div>
            <div className="flex justify-between items-center max-w-[900px] mx-auto px-3">
                <div className="font-bold text-purple-600
                ">
                    <p>Sort Coffee</p>
                </div>
                <div className="">
                    <ToastContainer></ToastContainer>
                    <button onClick={() => handelSort('popularity')} className="btn btn-warning mr-2">Sort Popularity</button>
                    <button onClick={() => handelSortP('rating')} className="btn btn-ghost">Sort By Rating</button>
                </div>
            </div>
            <div className="grid grid-cols-1 lg:grid-cols-3 ">

                {
                    coffees.map(coffee => (<Cards key={coffee.id} coffee={coffee}></Cards>))
                }
            </div>
        </div>

    );
};

export default Coffees;