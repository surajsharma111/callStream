import { Link } from "react-router-dom";
export default function Header() {
  return (
    <div>
      <div className="  w-screen flex flex-row justify-between items-center">
        <div className=" px-4">
        </div>
      

        <div className="  flex flex-row gap-4 justify-between px-4 items-center mr-4 ">
          <Link className=" flex flex-row items-center" to="/">
            Home
          </Link>
          <Link to="/details">Details</Link>
          <Link to="/abouts">Abouts</Link>
          <Link to="/contacts">Contacts</Link>
        </div>
      </div>
    </div>
  );
}
