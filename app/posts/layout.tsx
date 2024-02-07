import type { Metadata } from 'next';

export const metadata: Metadata = {
    title: 'Posts',
    description: 'Posts',
};

export default function PostsLayout({
    children,
}: Readonly<{
    children: React.ReactNode;
}>) {
    return <>{children}</>;
}
