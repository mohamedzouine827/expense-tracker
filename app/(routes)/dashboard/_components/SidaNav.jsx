import React from "react";
import {
  LayoutDashboard,
  PiggyBank,
  ReceiptText,
  ShieldCheck,
} from "lucide-react";
import { UserButton } from "@clerk/nextjs";

function SidaNav() {
  const menuList = [
    {
      id: 1,
      name: "Dashboard",
      icon: LayoutDashboard,
    },
    {
      id: 2,
      name: "Budgets",
      icon: PiggyBank,
    },
    {
      id: 3,
      name: "Expenses",
      icon: ReceiptText,
    },
    {
      id: 4,
      name: "Upgrade",
      icon: ShieldCheck,
    },
  ];
  return (
    <div className="h-screen">
      <div className="flex justify-center items-center pt-8 flex-col">
        <div>
          <div className="text-3xl font-bold">
            Tax<span className="text-slate-600"> Homie</span>
          </div>
        </div>
        <div className="mt-20 flex gap-12 flex-col">
        {menuList.map((menu, index)=>(
            <h2 key={index} className="flex flex-row h-10 items-center px-2 rounded-xl hover:bg-neutral-700 transition-all duration-500 ease-in-out cursor-pointer hover:text-white bg-neutral-50 w-36 justify-between">
                <menu.icon />
                {menu.name}
            </h2>
        ))}
        </div>
        <div className="mt-14 flex flex-row gap-4 items-center">
            <UserButton className="w-20 h-20"/>
            <div className="text-lg font-bold">Profile</div>
        </div>
      </div>
    </div>
  );
}

export default SidaNav;
