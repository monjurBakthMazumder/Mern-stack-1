import { Link, useLoaderData } from "react-router-dom";
import Banner from "../../Component/Banner/Banner";
import Category from "../../Component/Category/Category";
import FollowOnInstagram from "../../Component/FollowOnInstagram/FollowOnInstagram";
import { useState } from "react";
import CoffeeCard from "../../Component/CoffeeCard/CoffeeCard";

const Home = () => {
    const loadedCoffee = useLoaderData()
    const [coffees, setCoffees] = useState(loadedCoffee)
    return (
        <div>
            <Banner/>
            <Category/>
            <div className="my-10 px-[10%]">
                <h1 className="font-light text-[#331A15] text-center md:text-lg">--- Sip & Savor ---</h1>
                <h1 className="text-3xl md:text-4xl lg:text-5xl font-light text-[#331A15] text-center">Our Popular Products</h1>
                <Link to={'/add-coffee'} className="my-5 flex justify-center items-center">
                    <input type="submit" value="Add Coffee"  className="btn bg-[#E3B577] rounded-none border-[#331A15] text-white hover:text-[#331A15] hover:border-[#331A15] hover:bg-[#F5F4F1] font-light" />
                </Link>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
                {
                    coffees.map(coffee=> 
                        <CoffeeCard
                            key={coffee._id}
                            coffee={coffee}
                            coffees={coffees}
                            setCoffees={setCoffees}
                        />
                    )
                }
                </div>
            </div>
            <FollowOnInstagram/>
        </div>
    );
};

export default Home;