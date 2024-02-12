import { BsDiscord } from "react-icons/bs";
import { GoPlus } from "react-icons/go";
import { FaCompass } from "react-icons/fa6";

const Sidebar = () => {
  return (
    <nav className="sidebar">
      <header className="sidebar__header">
        <div className="sidebar__item direct-messages clickable">
          <BsDiscord color="#fff" />
        </div>
      </header>
      <div className="sidebar__item add-server">
        <GoPlus color="#2DC770" />
      </div>
      <div className="sidebar__item explore-servers">
        <FaCompass color="#2DC770" />
      </div>
    </nav>
  );
};

export default Sidebar;
