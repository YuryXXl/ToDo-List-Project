function Navbar({ children }) {
  const curentDate = new Date().toLocaleDateString("en-US");
  return (
    <nav className="navbar">
      <div className="container">
        <div className="navbar-brand fs-3 fw-bold text-success text-opacity-75 mx-auto">
          Todo List For {curentDate}
        </div>
        {children}
      </div>
    </nav>
  );
}

export default Navbar;
