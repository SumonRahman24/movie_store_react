import { useEffect, useState } from "react";
import DisplayMoviesData from "./DisplayMoviesData";
import Cart from "./Cart";
import { addToLS, removeFromLS } from "../../public/locaStorage";

const LoadMoviesData = () => {
  const [movies, setMovies] = useState([]);
  const [cart, setCart] = useState([]);

  useEffect(() => {
    fetch("../../public/data.json")
      .then((res) => res.json())
      .then((data) => setMovies(data));
  }, []);

  const addCartBtn = (value) => {
    const isMatch = cart.find((i) => i.id === value.id);
    if (isMatch) {
      return alert("you already booked");
    }
    const newCart = [...cart, value];
    console.log(newCart);
    setCart(newCart);
    addToLS(value.id);
  };

  const handleRemovebtn = (id) => {
    const removeId = cart.filter((item) => item.id !== id);
    setCart(removeId);
    removeFromLS(id);
  };

  return (
    <div className="grid grid-cols-4 container m-auto">
      <div className="grid col-span-3">
        <div className="grid grid-cols-3 gap-8 py-8">
          {movies.map((movie) => (
            <DisplayMoviesData
              addCartBtn={addCartBtn}
              key={movie.id}
              movie={movie}
            />
          ))}
        </div>
      </div>
      <div className="grid col-span-1 pt-8 h-[100vh] sticky top-0">
        <Cart handleRemovebtn={handleRemovebtn} cart={cart} />
      </div>
    </div>
  );
};

export default LoadMoviesData;
