import Link from "next/link";
import Head from "next/head";

export default function Layout({ children, title, description }) {
  return (
    <div>
      <Head>
        <title>{title}</title>
        <meta name="description" content={description} />
      </Head>
      <div className="container">
        <nav>
          <Link href="/">
            <a>
              <span class="main-title">Hacker Next</span>
            </a>
          </Link>
        </nav>
        {children}
      </div>

      <style jsx>{`
        .container {
          max-width: 800px;
          margin: 0 auto;
          background: #f6f6f6;
        }
        nav {
          background: #f60;
          padding: 1em;
        }
        nav > * {
          display: inline-block;
          color: black;
        }
        nav a {
          text-decoration: none;
        }
        nav .main-title {
          font-weight: bold;
        }
      `}</style>
      <style global jsx>{`
        body {
          background: white;
          font-family: Verdana, Geneva, sans-serif;
        }
      `}</style>
    </div>
  );
}
