import PropTypes from "prop-types";

const Cart = ({ cart, handleRemovebtn }) => {
  let count = 0;
  const name = cart.map((i) => (
    <div
      key={i.id}
      className="flex bg-black p-1 justify-between container px-2"
    >
      <h2 className="">{`${count++}. ${i.name}`}</h2>
      <button onClick={() => handleRemovebtn(i.id)}>
        <i className="fa-solid text-red-500 fa-trash"></i>
      </button>
    </div>
  ));

  // const totalPrice = cart.reduce((prev, current) => prev + current.price, 0);
  let total = 0;
  for (const item of cart) {
    total = total + item.price;
  }

  const mybalance = 50;
  const remaining = mybalance - total;

  // if (remaining < 0) {
  //   alert("insufficient balance Please Add Banlance");
  // }

  return (
    <div className="bg-gray-400 p-5">
      <div className="flex justify-between">
        <div>
          <h2 className="text-xl font-semibold text-black">
            Movies item: {cart.length}
          </h2>
        </div>
      </div>
      <h2 className="text-lg ">Your balace:{mybalance}</h2>
      <h2 className="text-lg ">Remaining Balance:{remaining}</h2>

      <h2 className="text-lg ">Total Cost:{total}</h2>
      <div className="text-lg text-green-200 space-y-1">{name}</div>
      <button className="btn btn-active btn-secondary">Clear All</button>
    </div>
  );
};
Cart.propTypes = {
  cart: PropTypes.array.isRequired,
  handleRemovebtn: PropTypes.func.isRequired,
};

export default Cart;
