import { AiOutlineArrowLeft } from "react-icons/ai";
import { useNavigate } from "react-router-dom";
import Navbar from "../../Component/Shared/Navbar/Navbar";

const ErrorPage = () => {
    const navigate = useNavigate()
    const handleBack = () =>{
        navigate(-1)
        }
    return (
        <>
            <Navbar/>
            <div className="relative">
                <img src={'https://i.ibb.co/ww1nnL3/404.gif'} alt="" className="w-full md:px-[10%] lg:px-[20%]"/>
                <div className="absolute top-10 md:top-20 w-full text-center">
                    <p onClick={handleBack} className='cursor-pointer text-[#374151] text-xl md:text-2xl flex justify-center items-center gap-2'><AiOutlineArrowLeft/>Go back</p>
                </div>
        </div>
        </>
    );
};

export default ErrorPage;