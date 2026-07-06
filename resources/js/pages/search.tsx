import { Head } from '@inertiajs/react';
import { search } from '@/routes';
import { PlaceholderPattern } from '@/components/ui/placeholder-pattern';

export default function Search() {
    return (
        <>
            <Head title="Search"/>
            <div className="flex min-h-screen max-w-[1500px] w-5/6 self-center flex-col items-center bg-[#FDFDFC] p-4 lg:p-6 dark:bg-[#0a0a0a]">
                <div className="h-full w-full rounded-2xl items-center">
                    <input type="search" placeholder="Search for title..." className="w-full rounded-lg border px-3 py-2" />
                </div>
            </div>
        </>
    );
}

Search.layout = {
    breadcrumbs: [
        {
            title: 'Search',
            href: search(),
        },
    ],
};
