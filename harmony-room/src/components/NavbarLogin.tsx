import Link from "next/link"; 

const NavbarLogin = () => {
  return (
    <nav className="bg-dark1 shadow-md fixed top-0 left-0 w-full z-50">
      <div className="max-w-7xl mx-auto flex justify-between items-center p-2">
        
        <div className="flex items-center space-x-2 ml-0">
          <img src="/logo.png" alt="Logo" className="h-10 w-10" /> 
          <span className="sb1 text-white font-bold">Harmony Room</span>
        </div>

        
        <div className="flex items-center space-x-6">
          <Link
            href="/login"
            className="b1 text-white hover:text-primary"
          >
            Login
          </Link>
          <div className="bg-primary text-white px-4 py-2 rounded-md">
            <Link
              href="/signup"
              className="b1 hover:text-white"
            >
              Signup
            </Link>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default NavbarLogin;
