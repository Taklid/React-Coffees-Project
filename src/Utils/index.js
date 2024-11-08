import toast from "react-hot-toast";

 

const getAllFavorite =() => {
    const all = localStorage.getItem('favorites')
    console.log(all);
    
   
    if(all){
        const favorites = JSON.parse(all) 
        return favorites
       
    }
    else{
        return[]
    }
    
}


 const addFavorite = coffee => {
    console.log(coffee);
    const favorites = getAllFavorite()
    const isExist = favorites.find(item => item.id == coffee.id)
    if(isExist) return toast.error('This is an error!');
    favorites.push(coffee)
    localStorage.setItem('favorites', JSON.stringify(favorites))
    toast.success('Successfully created!');
   
 }

 const removeFavorite = id => {

    const favorites = getAllFavorite()
    const remaining  =favorites.filter(coffee => coffee.id != id)
    localStorage.setItem('favorites', JSON.stringify(remaining))
    toast.success('Successfully Removed!');


 }


 export {addFavorite, getAllFavorite, removeFavorite}