import Error from "next/error";
import StoryList from "../components/StroyList";
import Layout from "../components/Layout";

class Index extends React.Component {
  static async getInitialProps() {
    let stories = [];
    try {
      const resp = await fetch(`https://node-hnapi.herokuapp.com/news?page=1`);
      stories = await resp.json();
      return { stories };
    } catch (error) {
      console.log(error);
    }
    return { stories };
  }

  render() {
    const { stories } = this.props;
    if (!stories.length) {
      return <Error statusCode={503} />;
    }
    return (
      <Layout title="Hacker Next" description="A Hacker news clone using Next.js">
        <StoryList stories={stories} />
      </Layout>
    );
  }
}

export default Index;
