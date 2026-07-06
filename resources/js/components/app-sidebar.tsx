import { Link } from '@inertiajs/react';
import { FolderGit2, SearchCode } from 'lucide-react';
import AppLogo from '@/components/app-logo';
import { NavFooter } from '@/components/nav-footer';
import { NavMain } from '@/components/nav-main';
import { NavUser } from '@/components/nav-user';
import { QuickSearchBar } from '@/components/quick-search-bar';
import {
    Sidebar,
    SidebarContent,
    SidebarFooter,
    SidebarHeader,
    SidebarMenu,
    SidebarMenuButton,
    SidebarMenuItem,
    useSidebar,
} from '@/components/ui/sidebar';
import { search, home } from '@/routes';
import type { NavItem } from '@/types';
import { ThemeChange } from '@/components/theme-change';

const mainNavItems: NavItem[] = [
    {
        title: 'Advanced Search',
        href: search(),
        icon: SearchCode,
    },
];

const footerNavItems: NavItem[] = [
    {
        title: 'Repository',
        href: 'https://github.com/Ruby2415/Search-Bar',
        icon: FolderGit2,
        // requiresAuth: true,
    },
];

export function AppSidebar() {
    const { open } = useSidebar();
    return (
        <Sidebar collapsible="icon" variant="inset">
            <SidebarHeader>
                <SidebarMenu>
                    <SidebarMenuItem>
                        <SidebarMenuButton size="lg" asChild>
                            <Link href={home()} prefetch>
                                <AppLogo />
                            </Link>
                        </SidebarMenuButton>
                    </SidebarMenuItem>
                    {open && (
                        <SidebarMenuItem>
                            <QuickSearchBar />
                        </SidebarMenuItem>
                    )}
                </SidebarMenu>
            </SidebarHeader>

            <SidebarContent>
                <NavMain items={mainNavItems} />
            </SidebarContent>

            <SidebarFooter>
                <NavFooter items={footerNavItems} className="mt-auto" />
                {open && (<ThemeChange />)}
                <NavUser />
            </SidebarFooter>
        </Sidebar>
    );
}
