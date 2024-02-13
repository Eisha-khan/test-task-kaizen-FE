/* eslint-disable @typescript-eslint/no-explicit-any */
import { Link, Outlet, To, useLocation } from "react-router-dom";
import apiClient from "../lib/apiClient";
import {
  ArrowRightStartOnRectangleIcon,
  ArrowTrendingUpIcon,
  ClipboardDocumentListIcon,
  CurrencyDollarIcon,
  DocumentIcon,
  HomeIcon,
  InformationCircleIcon,
  ShoppingBagIcon,
  Squares2X2Icon,
  UserCircleIcon,
  UserGroupIcon,
  UsersIcon,
  WrenchScrewdriverIcon,
} from "@heroicons/react/24/outline";

type Props = {
  name: string;
  to: To;
  active: boolean;
  onClick?: () => void;
  Icon: any;
};

const SidebarItem = ({ name, to, active, onClick, Icon }: Props) => (
  <Link
    to={to}
    className={`flex space-x-3 items-center px-4 py-3 ${
      active ? "bg-gray-200 hover:bg-gray-200" : "hover:bg-gray-100"
    } rounded-md`}
  >
    <div
      className="flex space-x-3 items-center"
      onClick={() => {
        if (name === "Logout" && onClick) onClick();
      }}
    >
      {/* <img
        src="https://icons.veryicon.com/png/o/file-type/file-icon-collection/operation-item-registration.png"
        width={30}
        height={30}
      /> */}
      {Icon}
      <h4>{name}</h4>
    </div>
  </Link>
);

const Layout = () => {
  const location = useLocation();
  const { pathname } = location;

  const handleLogout = async () => {
    await apiClient
      .post("/accounts/logout", {
        revoke_token: true,
      })
      .then(() => {
        localStorage.removeItem("user");
      })
      .catch((e) => console.log(e));
  };

  return (
    <div className="flex">
      <nav className="flex flex-col h-[100vh] w-72 px-10 py-5 justify-between">
        <div className="flex flex-col">
          <SidebarItem
            name="Home"
            to=""
            active={pathname === ""}
            Icon={<HomeIcon className="icon" />}
          />
          <SidebarItem
            name="Items"
            to="/items"
            active={pathname === "/items" || pathname === "/"}
            Icon={<Squares2X2Icon className="icon" />}
          />
          <SidebarItem
            name="Stock"
            to=""
            active={pathname === ""}
            Icon={<ArrowTrendingUpIcon className="icon" />}
          />
          <SidebarItem
            name="Build"
            to=""
            active={pathname === ""}
            Icon={<ClipboardDocumentListIcon className="icon" />}
          />
          <SidebarItem
            name="Customers"
            to=""
            active={pathname === ""}
            Icon={<UsersIcon className="icon" />}
          />
          <SidebarItem
            name="Sales Orders"
            to=""
            active={pathname === ""}
            Icon={<CurrencyDollarIcon className="icon" />}
          />
          <SidebarItem
            name="Suppliers"
            to=""
            active={pathname === ""}
            Icon={<UserGroupIcon className="icon" />}
          />
          <SidebarItem
            name="Manufacturers"
            to=""
            active={pathname === ""}
            Icon={<WrenchScrewdriverIcon className="icon" />}
          />
          <SidebarItem
            name="Purchase Orders"
            to=""
            active={pathname === ""}
            Icon={<ShoppingBagIcon className="icon" />}
          />
          <SidebarItem
            name="Reports"
            to=""
            active={pathname === ""}
            Icon={<DocumentIcon className="icon" />}
          />
        </div>

        <div className="flex flex-col">
          <SidebarItem
            name="Help!"
            to=""
            active={pathname === ""}
            Icon={<InformationCircleIcon className="icon" />}
          />
          <SidebarItem
            name="Integrations"
            to=""
            active={pathname === ""}
            Icon={<HomeIcon className="icon" />}
          />
          <SidebarItem
            name="Logout"
            to=""
            active={pathname === ""}
            onClick={handleLogout}
            Icon={<ArrowRightStartOnRectangleIcon className="icon" />}
          />
          <SidebarItem
            name="My Profile"
            to=""
            active={pathname === ""}
            Icon={<UserCircleIcon className="icon" />}
          />
        </div>
      </nav>

      <div className="flex flex-1">
        <Outlet />
      </div>
    </div>
  );
};

export default Layout;
