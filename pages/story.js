import Error from "next/error";
import Layout from "../components/Layout";

export default class story extends React.Component {
  static async getInitialProps(ctx) {
    let story = null;
    try {
      const { res, req, query } = ctx;
      const storyId = query.id;
      console.log("query", query);
      const resp = await fetch(
        `https://node-hnapi.herokuapp.com/item/${storyId}`
      );
      story = await resp.json();
    } catch (error) {
      console.log(error);
    }
    return { story };
  }
  render() {
    const { story } = this.props;
    if (!story) {
      return <Error statusCode={503} />;
    }
    return (
      <Layout title={story.title}>
        <main>
          <h1 className="story-title">
            <a href={story.url}>{story.title}</a>
          </h1>
          <div className="story-details">
            <strong>{story.points}</strong>
            <strong>{story.comment_count}</strong>
            <strong>{story.time_ago}</strong>
          </div>
        </main>
        <style jsx>{`
          main {
            padding: 1em;
          }
          .story-title {
            font-size: 1.2rem;
            margin: 0;
            font-weight: 300;
            padding-bottom: 0.5em;
          }
          .story-title a {
            color: #333;
            text-decoration: none;
          }
          .story-title a:hover {
            text-decoration: underline;
          }
          .story-details {
            font-size: 0.8rem;
            padding-bottom: 1em;
            border-bottom: 1px solid rgba(0, 0, 0, 0.1);
            margin-bottom: 1em;
          }
          .story-details strong {
            margin-right: 1em;
          }
          .story-details a {
            color: #f60;
          }
        `}</style>
      </Layout>
    );
  }
}
