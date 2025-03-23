import { cn } from "@/lib/utils";

interface SidebarProps extends React.HTMLAttributes<HTMLDivElement> {}

export function Sidebar({ className, ...props }: SidebarProps) {
  return (
    <div
      className={cn(
        "w-[88px] h-[815px] bg-[#171821] flex flex-col relative rounded-xl max-md:w-full max-md:h-auto max-md:mb-4",
        className,
      )}
      {...props}
    >
      <div className="flex items-center gap-1 p-[25px] max-md:justify-between">
        <div>
          <svg
            width="38"
            height="10"
            viewBox="0 0 38 10"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <circle cx="5" cy="5" r="5" fill="#EA1701" />
            <circle cx="19" cy="5" r="5" fill="#FEB002" />
            <circle cx="33" cy="5" r="5" fill="#029F04" />
          </svg>
        </div>
        <div className="flex items-center gap-[15px] max-md:hidden">
          <svg
            width="86"
            height="29"
            viewBox="0 0 86 29"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M14.778 17.9699L13.141 14.9478V11.8011C13.141 8.6594 10.585 6.10342 7.44333 6.10342C4.30162 6.10342 1.74565 8.6594 1.74565 11.8011V14.9478L0.108618 17.9699C0.0343797 18.1069 -0.00298452 18.2609 0.000186238 18.4167C0.00335699 18.5725 0.0469539 18.7249 0.126705 18.8588C0.206456 18.9927 0.319626 19.1036 0.455125 19.1806C0.590625 19.2576 0.743805 19.2981 0.899658 19.2981H4.1584C4.14931 19.3978 4.14471 19.4978 4.14464 19.5979C4.14464 20.4728 4.49217 21.3118 5.11079 21.9304C5.72941 22.5491 6.56844 22.8966 7.4433 22.8966C8.31816 22.8966 9.15718 22.5491 9.7758 21.9304C10.3944 21.3118 10.742 20.4728 10.742 19.5979C10.742 19.4967 10.7371 19.3969 10.7282 19.2981H13.9869C14.1428 19.298 14.2959 19.2575 14.4314 19.1805C14.5669 19.1035 14.68 18.9926 14.7598 18.8587C14.8395 18.7248 14.8831 18.5725 14.8863 18.4167C14.8894 18.2609 14.8522 18.107 14.778 17.9699Z"
              fill="white"
            />
            <circle cx="12" cy="9.10342" r="3" fill="#FC003C" />
          </svg>
        </div>
      </div>
      <nav className="flex flex-col gap-2.5 p-2.5 max-md:flex-row max-md:flex-wrap max-md:justify-center">
        <div className="w-[116px] h-9 bg-[#A9DFD8] flex items-center justify-center cursor-pointer rounded-md">
          <span className="text-[#171821] text-sm font-medium">Dashboard</span>
        </div>
        <div className="flex flex-col gap-3 mt-6 max-md:flex-row max-md:flex-wrap max-md:justify-center">
          {[
            { name: "Profile", icon: "user" },
            { name: "Leaderboard", icon: "trophy" },
            { name: "Order", icon: "shopping-cart" },
            { name: "Product", icon: "package" },
            { name: "Sales Report", icon: "bar-chart" },
            { name: "Message", icon: "message-circle" },
            { name: "Settings", icon: "settings" },
            { name: "Favourite", icon: "heart" },
            { name: "History", icon: "clock" },
            { name: "Signout", icon: "log-out" },
          ].map((item) => (
            <button
              key={item.name}
              className="flex items-center gap-2 px-4 py-2 text-[#87888C] hover:text-white hover:bg-[#21222D] rounded-md transition-colors"
            >
              <span className="text-sm">{item.name}</span>
            </button>
          ))}
        </div>
      </nav>
    </div>
  );
}
