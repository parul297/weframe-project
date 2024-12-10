"use client";
import MyContext from "@/utils/MyContext";
import Image from "next/image";
import { useContext, useState } from "react";

const Header = () => {
  const [sidebar, setSidebar] = useState(false);
  const data = useContext(MyContext);

  return (
    <header className="w-full bg-white shadow-md">
      <div className="flex items-center justify-between py-4 px-6">
        <div className="flex items-center">
          <Image src="/logo.png" alt="logo" width={120} height={50} />
        </div>
        <div className="flex items-center flex-1 max-w-lg mx-auto">
          <input
            type="text"
            name="search"
            id="search"
            placeholder="Rechercher un produit"
            className="flex-1 border border-gray-300 rounded-full px-4 py-2 text-sm text-gray-600 placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
          <button className="ml-2">
            <Image
              src="/search.png"
              alt="search icon"
              width={20}
              height={20}
              className="text-gray-500"
            />
          </button>
        </div>
        <div className="flex items-center space-x-6">
          <div className="flex items-center space-x-2 cursor-pointer">
            <Image src="/bulb.png" alt="bulb icon" width={20} height={20} />
            <span className="text-sm text-gray-600">Inspirations</span>
          </div>
          <div className="flex items-center space-x-2 cursor-pointer">
            <Image src="/heart.png" alt="heart icon" width={20} height={20} />
            <h1 className="whitespace-pre cursor-pointer">Mes Favoris</h1>
            <span className="bg-gray-200 text-xs px-2 py-1 rounded-full">
              {data.likes}
            </span>
          </div>
          <button className="bg-blue-500 text-white text-sm px-4 py-2 rounded-full flex items-center">
            <Image src="/shopping.png" alt="cart icon" width={20} height={20} />
            <span className="ml-2">Panier</span>
          </button>
          <select
            name="language"
            id="language"
            className="bg-gray-100 text-sm text-gray-600 rounded-full px-2 py-1 cursor-pointer"
          >
            <option value="Fr">FR</option>
            <option value="En">EN</option>
            <option value="Hi">HI</option>
          </select>
        </div>
      </div>
    </header>
  );
};

export default Header;
