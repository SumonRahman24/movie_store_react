const Header = () => {
  return (
    <div className="shadow-md">
      <nav className="flex justify-between items-center container m-auto py-4 ">
        <div>
          <h2 className="font-bold text-2xl ">Movies Store</h2>
        </div>
        <div>
          <div className="join">
            <div>
              <div>
                <input
                  className="input input-bordered join-item"
                  placeholder="Search"
                />
              </div>
            </div>
            <div className="indicator">
              <button className="btn bg-red-300 join-item">Search</button>
            </div>
          </div>
        </div>
      </nav>
      {/* <div className="divider pb-48"></div> */}
    </div>
  );
};

export default Header;
