import { SetStateAction } from "react";

interface Props {
  navItems: string[];
  setActiveTab: React.Dispatch<SetStateAction<string>>;
  activeTab: string;
}
export default function Navbar({ navItems, setActiveTab, activeTab }: Props) {
  return (
    <nav className="md:w-[75%] w-[90%] bg-[#F2F2F2] rounded-full border mx-auto">
      <div className="flex justify-between items-center">
        {navItems.map((item, id) => (
          <span
            onClick={() => setActiveTab(item)}
            key={id}
            className={`${
              item === activeTab && "bg-primary py-3 px-5  text-white "
            } rounded-full md:text-base text-xs cursor-pointer md:px-5 px-2 transition-all duration-500`}
          >
            {item}
          </span>
        ))}
      </div>
    </nav>
  );
}
