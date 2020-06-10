import Link from "next/link";
import Head from "next/head";
import Router from "next/router";

export default function Layout({ children, title, description, backButton }) {
  return (
    <div>
      <Head>
        <title>{title}</title>
        <meta name="description" content={description} />
      </Head>
      <div className="container">
        <nav>
          {backButton && (
            <span onClick={() => Router.back()} className="back-button">
              &#x2b05;
            </span>
          )}
          <Link href="/">
            <a>
              <span class="main-title">Hacker Next</span>
            </a>
          </Link>
        </nav>
        <div className="children">{children}</div>
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
        nav .back-button {
          font-size: 0.9rem;
          padding-right: 1em;
          cursor: pointer;
        }
        .children {
          padding: 0.5em 1em;
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
