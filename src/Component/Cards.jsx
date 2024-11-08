import { Link, useLocation } from "react-router-dom";
import { MdDelete } from "react-icons/md";




const Cards = ({ coffee, handelRemove }) => {
    const { name, image, category, origin, type, id, rating, popularity } = coffee || {}
    const {pathname} = useLocation()
    

    return (
        <div className="max-w-[1200px] mx-auto transition hover:scale-105 mt-7">
            <Link to={`/coffee/${id}`} className="card bg-base-100 w-96 shadow-xl">
                <figure className="px-10 pt-10">
                    <img
                        
                        src={image}
                        
                        alt=""
                        className="rounded-xl w-[400px] h-[200px]" />
                </figure>
                <div className="card-body ml-2 font-bold text-yellow-700">
                   <p>Name: {name}</p>
                   <p>Category: {category}</p>
                   <p>Type: {type}</p>
                   <p>Origin: {origin}</p>
                   <p>Rating: {rating}</p>
                   <p>Popular: {popularity}</p>
                 
                    
                </div>
            </Link>
            {
                pathname === '/dasboard' &&
               <p onClick={() =>handelRemove (id)} className="absolute -top-2 -right-3 bg-warning rounded-full"><MdDelete size={20} /></p>
            }

        </div>
    );
};

export default Cards;