import { Head } from '@inertiajs/react';
import { home, register } from '@/routes';

export default function Home() {


}

Home.layout = {
    breadcrumbs: [
        {
            title: 'Home',
            href: home(),
        },
    ],
};
