import Error from "next/error";
import StoryList from "../components/StroyList";
import Layout from "../components/Layout";
import Link from "next/link";

class Index extends React.Component {
  static async getInitialProps(ctx) {
    const { req, res, query } = ctx;
    let stories = [];
    const page = Number(query.page) || 1;
    try {
      const resp = await fetch(
        `https://node-hnapi.herokuapp.com/news?page=${page}`
      );
      stories = await resp.json();
    } catch (error) {
      console.log(error);
    }
    return { stories, page };
  }

  render() {
    const { stories, page } = this.props;
    console.log("page", this.props);
    if (!stories.length) {
      return <Error statusCode={503} />;
    }
    return (
      <Layout
        title="Hacker Next"
        description="A Hacker news clone using Next.js"
      >
        <StoryList stories={stories} />
        <footer>
          <Link href={`/?page=${page + 1}`}>
            <a>Next page ({page + 1})</a>
          </Link>
        </footer>
        <style jsx>{`
          footer {
            padding: 1em;
          }
          footer a {
            font-weight: bold;
            text-decoration: none;
            color: #000;
          }
        `}</style>
      </Layout>
    );
  }
}

export default Index;
