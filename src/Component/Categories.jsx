import {  NavLink } from "react-router-dom";


const Categories = ({categories}) => {
    return (
        <div className="">
            <div role="tablist" className="tabs tabs-lifted grid grid-cols-3 mx-auto text-center font-bold text-purple-600">
                
             
                {
                    categories.map( category  => (<NavLink key={category.category} to={`/category/${category.category}`} role="tab" 
                        className={({isActive}) => {` tab ${isActive? 'tab-active' : ''}`}}>{category.category}</NavLink>

                    )) 
                }
               
                
            </div>
        </div>
    );
};

export default Categories;
//