import PropTypes from 'prop-types';
import { AiFillDelete, AiFillEdit, AiFillEye } from 'react-icons/ai';
import { Link } from 'react-router-dom';
import Swal from 'sweetalert2';
const CoffeeCard = ({coffee, coffees, setCoffees}) => {
    const {_id, name, chef, category, photo} = coffee || {};
    const handleDelete = () => {
        Swal.fire({
            title: 'Are you sure?',
            text: "You won't be able to revert this!",
            icon: 'warning',
            showCancelButton: true,
            confirmButtonColor: '#3085d6',
            cancelButtonColor: '#d33',
            confirmButtonText: 'Yes, delete it!'
          }).then((result) => {
            if (result.isConfirmed) {
                fetch(`http://localhost:5000/coffees/${_id}`,{
                    method: 'DELETE'
                })
                .then(res=>res.json())
                .then(data => {
                    console.log(data);
                    if(data.deletedCount > 0){
                        Swal.fire(
                            'Deleted!',
                            'Coffee has been deleted.',
                            'success'
                          )
                    }
                    const remaining = coffees?.filter(item=> item._id !== _id)
                    setCoffees(remaining)
                })
              
            }
          })
          
    }
    return (
        <div className="flex flex-col sm:flex-row md:flex-col xl:flex-row justify-between items-center px-10 py-5 rounded bg-[#F5F4F1] gap-5">
            <div className="flex flex-col sm:flex-row md:flex-col xl:flex-row items-center gap-5">
                <img src={photo} alt={`image of ${name}`} className='h-48'/>
                <div className="text-2xl skew-y-5">
                    <h1><b>Name: </b>{name}</h1>
                    <h1><b>Chef: </b>{chef}</h1>
                    <h1><b>Category: </b>{category}</h1>
                </div>
            </div>
            <div className="flex flex-row sm:flex-col md:flex-row xl:flex-col text-3xl gap-2">
                <Link to={`/coffee/${_id}`}><AiFillEye className='text-white bg-[#D2B48C] h-10 w-10 p-2 rounded'/></Link>
                <Link to={`/update-coffee/${_id}`}><AiFillEdit className='text-white bg-[#3C393B] h-10 w-10 p-2 rounded'/></Link>
                <AiFillDelete onClick={handleDelete} className='text-white bg-[#EA4744] h-10 w-10 p-2 rounded cursor-pointer'/>
            </div>
        </div>
    );
};

CoffeeCard.propTypes = {
    coffee: PropTypes.object,
    coffees: PropTypes.array,
    setCoffees: PropTypes.func
};

export default CoffeeCard;