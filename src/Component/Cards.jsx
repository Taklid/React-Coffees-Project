


const Cards = ({ coffee }) => {
    const { name, image, category, origin, type, id, rating, popularity } = coffee || {}

    return (
        <div className="max-w-[1200px] mx-auto transition hover:scale-105 mt-7">
            <div className="card bg-base-100 w-96 shadow-xl">
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
            </div>

        </div>
    );
};

export default Cards;