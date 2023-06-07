import { useEffect, useState } from "react";
import { styles } from "../../styles";
import { Link } from "react-router-dom";
import logo from "../../../public/logo.png";
import { navLinks } from "../../constants";
import { menu, close } from "../../assets";

const Navbar: React.FC<{}> = ({}) => {
  useEffect(() => {
    //  const window =
    return () => {};
  }, []);

  const [active, setActive] = useState<String>("");
  const [toggle, setToggle] = useState<Boolean>(false);
  return (
    <nav
      className={`
    ${styles.paddingX} w-full flex items-center py-5 fixed top-0 z-20 bg-primary
    `}
    >
      <div className="w-full flex justify-between items-center max-w-7xl mx-auto">
        <Link
          to={""}
          className=" flex items-center gap-2"
          onClick={() => {
            setActive("");
            window.scrollTo(0, 0);
          }}
        >
          <img src={logo} alt={logo} className="w-9 h-9 object-contain" />
          <p className="text-white text-[18px] flex gap-2 font-medium cursor-pointer">
            Anmol Raj
            <span className="sm:block hidden">| &nbsp; UI Developer</span>
          </p>
        </Link>

        <ul className="list-none hidden sm:flex flex-row gap-10">
          {navLinks.map((link: any) => (
            <li
              key={link.id}
              className={`${
                active === link.title ? "text-white" : "text-secondary"
              } hover:text-white text-[18px] font-medium cursor-pointer`}
              onClick={() => setActive(link.title)}
            >
              <a href={`#${link.id}`}>{link.title}</a>
            </li>
          ))}
        </ul>

        <div className={`sm:hidden flex flex-1 justify-end items-center`}>
          <img
            src={!toggle ? close : menu}
            alt={"menu"}
            className={` w-[28px] h-[28px] object-contain cursor-pointer`}
            onClick={() => setToggle(!toggle)}
          />

          <div
            className={`${
              toggle ? "hidden" : "flex"
            } p-6 black-gradient absolute top-20 right-0 mx-4 my-2 min-w[140px] z-10 rounded-xl`}
          >
            <ul
              className={`flex flex-col list-none gap-4 justify-end items-start`}
            >
              {navLinks.map((link: any) => (
                <li
                  key={link.id}
                  className={`${
                    active === link.title ? "text-white" : "text-secondary"
                  } text-[16px] font-medium cursor-pointer font-poppins`}
                  onClick={() => {
                    setToggle(!toggle);
                    setActive(link.title);
                  }}
                >
                  <a href={`#${link.id}`}>{link.title}</a>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </nav>
  );
};
export default Navbar;
