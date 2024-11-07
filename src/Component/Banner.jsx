import profile from '../assets/banner.jpg'

const Banner = () => {
    return (
        <div className='max-w-[800px] mx-auto mt-28 lg:mt-3 px-2'>
            <img className='rounded-[5px]' src={profile} alt="" />
        </div>
    );
};

export default Banner;