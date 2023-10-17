import { AiOutlineArrowLeft } from "react-icons/ai";
import { useLoaderData, useNavigate } from "react-router-dom";

const Details = () => {
    const navigate = useNavigate()
    const handleBack = () =>{
        navigate(-1)
        }
    const loadedCoffees = useLoaderData()
    const { name, chef, supplier, taste, category, details, photo} = loadedCoffees || {};

    return (
        <div className="hero bg-[#F4F3F0]" style={{backgroundImage: 'url(https://i.ibb.co/thwFYLm/11.png)'}}>
            <div className="hero-content text-center text-[#374151] bg-[#F4F3F0]  my-10 md:m-20 ">
                <div className="text-left">
                    <p onClick={handleBack} className='cursor-pointer text-[#374151] -mt-12 text-xl flex items-center gap-2'><AiOutlineArrowLeft/>Back to home</p>
                    <div className="flex flex-col md:flex-row justify-center items-center p-5 sm:p-10 md:p-20 rounded bg-[#F5F4F1] gap-10 md:gap-20">
                        <img src={photo} alt={`image of ${name}`} className='h-60'/>
                        <div className="text-2xl skew-y-5">
                            <h1><b>Name: </b>{name}</h1>
                            <h1><b>Chef: </b>{chef}</h1>
                            <h1><b>Category: </b>{category}</h1>
                            <h1><b>Supplier: </b>{supplier}</h1>
                            <h1><b>Taste: </b>{taste}</h1>
                            <h1><b>Details: </b>{details}</h1>
                        </div>
                    </div>
                </div>
            </div>
        </div>

    );
};

export default Details;