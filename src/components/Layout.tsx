import Head from "next/head";


interface LayoutProps {
    children: React.ReactNode
    title: string
}

export default function Layout(
    {
        children,
        title = 'This is the default title',
    }: LayoutProps) {
    return (
        <>
            <Head>
                <title>{title}</title>
                <meta charSet="utf-8"/>
                <meta name="viewport" content="initial-scale=1.0, width=device-width"/>
            </Head>
            {children}
        </>
    );
}
