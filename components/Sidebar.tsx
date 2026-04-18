'use client';
import { SidebarItem } from './SidebarItem';
import { UserIcon, AdjustmentsHorizontalIcon, PlayIcon, HomeModernIcon } from "@heroicons/react/24/outline";
import { useUI } from "@/store/UIStore";

const navItems = [
    {
        logo: <HomeModernIcon className="w-4 h-4" />,
        description: "Accueil",
        href: "/admin"
    },
    {
        logo: <PlayIcon className="w-4 h-4" />,
        description: "Ateliers",
        href: "/admin/sessions"
    },
    {
        logo: <UserIcon className="w-4 h-4" />,
        description: "Joueurs",
        href: "/admin/players"
    },
    {
        logo: <AdjustmentsHorizontalIcon className="w-4 h-4" />,
        description: "Paramètres",
        href: "/admin/settings"
    }
]

export function Sidebar() {

    const { isSidebarExpanded, toggleSidebar } = useUI();


    return (
        <div className={`admin-navbar ${isSidebarExpanded ? "admin-navbar-expanded" : "admin-navbar-collapsed"}`}
            onMouseEnter={() => toggleSidebar(true)}
            onMouseLeave={() => toggleSidebar(false)}
        >
            {navItems.map(({ logo, description, href }, index) => (
                <SidebarItem key={index} href={href} logo={logo} description={description} isExpanded={isSidebarExpanded} />
            ))
            }
        </div>
    )

}