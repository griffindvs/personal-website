import Navbar from './navbar';
import Footer from './footer';
import Social from './social';

import Head from 'next/head';

export default function Layout({ children, title } : any) {
    let page_title = title + " - Griffin Davis";
    if (title === "Home") {
        page_title = "Griffin Davis";
    }
    const pageClass = title + " container mx-auto max-w-7xl px-2 sm:px-6 lg:px-8";

    return (
        <>
            <Head>
                <title>{page_title}</title>

                <meta name="twitter:image" content="/assets/img/og-image.jpg" />
                <meta property="og:image:width" content="279" />
                <meta property="og:image:height" content="279" />
                <meta property="og:title" content="Griffin Davis" />
                <meta property="og:url" content="https://gcd.dev" />
                <meta property="og:image" content="https://gcd.dev/assets/img/og-image.jpg" />

                <link rel="apple-touch-icon" sizes="180x180" href="/assets/compat/apple-touch-icon.png?v=jav28r2qmy" />
                <link rel="icon" type="image/png" sizes="32x32" href="/assets/compat/favicon-32x32.png?v=jav28r2qmy" />
                <link rel="icon" type="image/png" sizes="16x16" href="/assets/compat/favicon-16x16.png?v=jav28r2qmy" />
                <link rel="manifest" href="/assets/compat/site.webmanifest?v=jav28r2qmy" />
                <link rel="mask-icon" href="/assets/compat/safari-pinned-tab.svg?v=jav28r2qmy" color="#395eb5" />
                <link rel="shortcut icon" href="/assets/compat/favicon.ico?v=jav28r2qmy" />
                <meta name="msapplication-TileColor" content="#2b5797" />
                <meta name="msapplication-config" content="/assets/compat/browserconfig.xml?v=jav28r2qmy" />
                <meta name="theme-color" content="#395eb5" />

                <link rel="preconnect" href="https://fonts.googleapis.com"></link>
                <link rel="preconnect" href="https://fonts.gstatic.com"></link>
            </Head>
            <Navbar />
            <div className={pageClass}>
                <main className="px-3">{children}</main>
            </div>
            { title != "CS6375" && <Social /> }
            <Footer />
        </>
    )
}