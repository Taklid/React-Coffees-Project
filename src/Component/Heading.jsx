/* eslint-disable react/prop-types */


const Heading = ({titel, subtitel}) => {
    return (
        <div className="text-center mt-2 font-bold">
            <h2 className="">{titel}</h2>
            <p>{subtitel}</p>
            
        </div>
    );
};

export default Heading;