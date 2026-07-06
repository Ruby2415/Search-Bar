import type { LucideIcon } from 'lucide-react';
import { Monitor, Moon, Sun } from 'lucide-react';
import type { Appearance } from '@/hooks/use-appearance';
import { useAppearance } from '@/hooks/use-appearance';
import { useState, useEffect } from 'react';
import { router, usePage } from '@inertiajs/react';
import { Input } from '@/components/ui/input';
import { useIsMobile } from '@/hooks/use-mobile';
import axios from 'axios';

import {
    DropdownMenu,
    DropdownMenuContent,
    DropdownMenuTrigger,
} from '@/components/ui/dropdown-menu';

import {
    SidebarMenu,
    SidebarMenuButton,
    SidebarMenuItem,
    useSidebar,
} from '@/components/ui/sidebar';

export function QuickSearchBar(){

    const [query, setQuery] = useState('');
    const [open, setOpen] = useState(false);
    const [results, setResults] = useState<{ authors: Array<{ id: number; name: string }>; novels: Array<{ id: number; title: string }> }>({
        authors: [],
        novels: [],
    });

    useEffect(() => {
        const term = query.trim();

        if (!term) {
            setResults({ authors: [], novels: [] });
            setOpen(false);
            return;
        }

        const timer = setTimeout(() => {
            axios.get('/search/results', {
                params: { query: term },
            })
            .then((response) => {
                const nextResults = {
                    authors: response.data.authors ?? [],
                    novels: response.data.novels ?? [],
                };

                setResults(nextResults);
                setOpen(nextResults.authors.length > 0 || nextResults.novels.length > 0);
            });
        }, 250);

        return () => clearTimeout(timer);
    }, [query]);

    return (
        <>
            <div>
                <Input
                    value={query}
                    onChange={(e) => setQuery(e.target.value)}
                    placeholder="Search..."
                />

                {open && (
                    <div>
                        {results.authors.map((author: any) => (
                            <div key={author.id}>{author.name}</div>
                        ))}
                        {results.novels.map((novel: any) => (
                            <div key={novel.id}>{novel.title}</div>
                        ))}
                    </div>
                )}
            </div>

        </>
    );
}

