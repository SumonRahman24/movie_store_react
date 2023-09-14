import PropTypes from "prop-types";

const DisplayMoviesData = ({ movie, addCartBtn }) => {
  const { name, img, price, rating, category } = movie;
  return (
    <div className="card card-compact w-72 bg-base-100  shadow-xl">
      <figure>
        <img src={img} alt="Shoes" />
      </figure>
      <div className="card-body">
        <h2 className="card-title font-bold">{name}</h2>
        <div className="flex justify-between">
          <p className="text-lg text-gray-600">Price:{price}</p>
          <div>
            <p className=" text-md text-gray-600">{category}</p>
            <p className=" text-md text-gray-600">Rating : {rating}</p>
          </div>
        </div>

        <div className="card-actions justify-start">
          <button onClick={() => addCartBtn(movie)} className="btn glass ">
            Add to cart
          </button>
        </div>
      </div>
    </div>
  );
};

DisplayMoviesData.propTypes = {
  movie: PropTypes.object.isRequired,
  addCartBtn: PropTypes.func.isRequired,
};

export default DisplayMoviesData;
