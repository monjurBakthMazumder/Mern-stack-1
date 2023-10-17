import { useEffect, useState } from "react";
import CategoryCard from "./CategoryCard";

const Category = () => {
    const [categories, setCategories] = useState([])
    useEffect(()=> {
        fetch('category.json')
        .then(res=> res.json())
        .then(data=> setCategories(data))
    },[])
    return (
        <div className="flex flex-wrap justify-between items-center gap-5 bg-[#ECEAE3] px-[10%] py-10">
            {
                categories.map(category=> 
                    <CategoryCard
                        key={category.id}
                        category={category}
                    />
                )
            }
        </div>
    );
};

export default Category;