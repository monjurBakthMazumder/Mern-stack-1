import PropTypes from 'prop-types';

const CategoryCard = ({category}) => {
    const {name, image, description} = category || {};
    return (
        <div className="card card-compact">
            <div className="card-body">
            <figure className='mr-auto'><img src={image} alt={`image of ${name}`} /></figure>
                <h2 className="card-title font-light">{name}</h2>
                <p className='font-light text-base'>{description}</p>
            </div>
        </div>
    );
};

CategoryCard.propTypes = {
    category: PropTypes.object,
};

export default CategoryCard;