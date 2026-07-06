import { Head } from '@inertiajs/react';
import { home } from '@/routes';

export default function Home() {
    return (
        <Head title="Home"/>
    );
}

Home.layout = {
    breadcrumbs: [
        {
            title: 'Home',
            href: home(),
        },
    ],
};
