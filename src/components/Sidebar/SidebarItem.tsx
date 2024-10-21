import React from "react";
import Link from "next/link";

import { usePathname } from "next/navigation";

const SidebarItem = ({ item, pageName, setPageName }: any) => {
  const handleClick = () => {
    const updatedPageName =
      pageName !== item.label.toLowerCase() ? item.label.toLowerCase() : "";
    return setPageName(updatedPageName);
  };

  const pathname = usePathname();

  const isActive = (item: any) => {
    if (item.route === pathname) return true;
    if (item.children) {
      return item.children.some((child: any) => isActive(child));
    }
    return false;
  };

  const isItemActive = isActive(item);

  return (
    <>
      <li>
        <Link
          href={item.route}
          onClick={handleClick}
          className={` text-white ${isItemActive ? "bg-whiten !text-black" : ""} hover:text-black rounded-lg group relative flex items-center gap-2.5  px-4 py-2 font-medium  duration-300 ease-in-out hover:bg-whiten dark:hover:bg-black-2`}
        >
          {item.icon}
          {item.label}
        
        </Link>

       
      </li>
    </>
  );
};

export default SidebarItem;
