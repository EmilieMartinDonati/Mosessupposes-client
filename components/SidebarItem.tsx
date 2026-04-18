import { ReactNode } from "react";
import Link from "next/link";

type SidebarItemProps = {
    logo: ReactNode;
    description: string;
    href: string;
    isExpanded: boolean;
}

export function SidebarItem({ logo, description, href, isExpanded = true }: SidebarItemProps) {
    return (
        <Link href={href} className="flex items-center">
            <div className="flex justify-center">
                {logo}
            </div>

            <span
                className={`text-sm
                    ml-2 whitespace-nowrap transition-width duration-200
                   ${isExpanded 
                        ? "opacity-100 translate-x-0 max-w-[200px]" 
                        : "opacity-0 -translate-x-2 max-w-0 overflow-hidden"
                    }
                `}
            >
                {description}
            </span>
        </Link>
    )

}