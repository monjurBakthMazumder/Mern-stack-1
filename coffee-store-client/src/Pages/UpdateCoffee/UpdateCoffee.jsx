import { useLoaderData } from "react-router-dom";
import Swal from 'sweetalert2'
import { useNavigate } from 'react-router-dom';
import { AiOutlineArrowLeft } from 'react-icons/ai';
const UpdateCoffee = () => {
        const navigate = useNavigate()
        const handleBack = () =>{
            navigate(-1)
        }
    const loadedCoffees = useLoaderData()
    const {_id, name, chef, supplier, taste, category, details, photo} = loadedCoffees || {};
    
    const handleSubmit = e => {
        e.preventDefault();
        const form =e.target;
        const name = form.name.value;
        const chef = form.chef.value;
        const supplier = form.supplier.value;
        const taste = form.taste.value;
        const category = form.category.value;
        const details = form.details.value;
        const photo = form.photo.value;
        const UpdatedCoffee = {name, chef, supplier, taste, category, details, photo};

        // send data to the server 
        fetch(`http://localhost:5000/coffees/${_id}`,{
            method: 'PUT',
            headers:{
                'content-type' : 'application/json'
            },
            body: JSON.stringify(UpdatedCoffee)
        })
        .then(res=> res.json())
        .then(data=> {
            console.log(data);
            if(data.modifiedCount){
                Swal.fire({
                    title: 'Success!',
                    text: 'Coffee updated successfully',
                    icon: 'success',
                    confirmButtonText: 'Cool'
                  })
            }
            console.log(data);
        })
    }
    return (
        <div className="hero bg-[#F4F3F0]" style={{backgroundImage: 'url(https://i.ibb.co/thwFYLm/11.png)'}}>
            <div className="hero-content text-center text-[#374151] bg-[#F4F3F0]  my-10 md:m-20">
                <div className="text-left">
                    <p onClick={handleBack} className='cursor-pointer text-[#374151] -mt-12 text-xl flex items-center gap-2'><AiOutlineArrowLeft/>Back to home</p>
                    <form onSubmit={handleSubmit} className='text-center p-5 sm:p-10 md:p-20 '>
                        <h1 className="font-light text-2xl md:text-3xl lg:text-4xl">Update a Coffee</h1>
                        <p className="font-light my-5 md:px-[10%]">It is a long established fact that a reader will be distraceted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using Content here.</p>
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-5 mb-5 text-left">
                            <label htmlFor="name">Name
                                <input type="text" name="name" defaultValue={name} placeholder="Enter coffee name" className="input input-bordered border-white w-full focus:outline-[#E3B577] mt-2" />
                            </label>
                            <label htmlFor="chef">Chef
                                <input type="text" name="chef" defaultValue={chef} placeholder="Enter coffee chef"  className="input input-bordered border-white w-full focus:outline-[#E3B577] mt-2"/>
                            </label>
                        </div>
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-5 mb-5 text-left">
                            <label htmlFor="supplier">Supplier
                                <input type="text" name="supplier" defaultValue={supplier} placeholder="Enter coffee supplier" className="input input-bordered border-white w-full focus:outline-[#E3B577] mt-2" />
                            </label>
                            <label htmlFor="taste">Taste
                                <input type="text" name="taste" defaultValue={taste} placeholder="Enter coffee taste"  className="input input-bordered border-white w-full focus:outline-[#E3B577] mt-2"/>
                            </label>
                        </div>
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-5 mb-5 text-left">
                            <label htmlFor="category">Category
                                <input type="text" name="category" defaultValue={category} placeholder="Enter coffee category" className="input input-bordered border-white w-full focus:outline-[#E3B577] mt-2" />
                            </label>
                            <label htmlFor="details">Details
                                <input type="text" name="details" defaultValue={details} placeholder="Enter coffee details"  className="input input-bordered border-white w-full focus:outline-[#E3B577] mt-2"/>
                            </label>
                        </div>
                        <div className="mb-5 text-left">
                            <label htmlFor="photo">Photo
                                <input type="text" name="photo" defaultValue={photo} placeholder="Enter photo URL" className="input input-bordered border-white w-full focus:outline-[#E3B577] mt-2" />
                            </label>
                        </div>
                        <input type="submit" value="Add Coffee"  className="btn bg-[#E3B577] rounded-none border-0 hover:border hover:text-[#E3B577] hover:border-[#E3B577] hover:bg-transparent font-light btn-block" />
                    </form>
                </div>
            </div>
        </div>
    );
};

export default UpdateCoffee;