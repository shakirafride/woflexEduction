export interface NavLink {
    title: string;
    href: string;
    submenu?: NavLink[];
}

export const navLinks: NavLink[] = [
    {
        title: "Home",
        href: "#",
        submenu: [
            {
                title: "Home Demo - 1",
                href: "/",
            },
        ],
    },
    {
        title: "About",
        href: "/about",
    },
    {
        title: "Services",
        href: "#",
        submenu: [
            {
                title: "Services",
                href: "/services",
            },
            {
                title: "Service Details",
                href: "/service-details",
            },
        ],
    },
    {
        title: "Pages",
        href: "#",
        submenu: [
            {
                title: "Team",
                href: "/team",
            },
            {
                title: "Team Details",
                href: "/team-details",
            },
            {
                title: "Login",
                href: "/login",
            },
            {
                title: "Register",
                href: "/register",
            },
            {
                title: "404 Error Page",
                href: "/not-found",
            },
        ],
    },
    {
        title: "Contact",
        href: "/contact",
    },
];