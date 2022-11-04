import logo from "./../../assets/logo.png";

const Hamburger = () => {
  return (
    <div className="space-y-2">
      <div className="w-10 h-1 bg-rose-600 rounded-full"></div>
      <div className="w-10 h-1 bg-rose-600 rounded-full"></div>
      <div className="w-10 h-1 bg-rose-600 rounded-full"></div>
    </div>
  );
};

const postsData = null;

function Header() {
  const searchHandler = () => {
    if (!data) {
      // Fetching data -> data
    }
  }

  return (
    <header className="container mx-auto flex flex-row items-center justify-between">
      <img src={logo} className="h-20"></img>
      <input onChange={}></input>
    </header>
  );
};

export default Header;
