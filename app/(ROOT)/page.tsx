import StartupCard, { StartupCardType } from "@/components/StartupCard";
import SearchForm from "../../components/SearchForm";
import { STARTUPS_QUERY } from "@/sanity/lib/queries";
import { sanityFetch, SanityLive } from "@/sanity/lib/live";

export default async function Home({
  searchParams,
}: {
  searchParams: Promise<{ query?: string }>;
}) {
  const query = (await searchParams).query;
  const params = {search :query|| null}
  const {data:posts} = await sanityFetch({query: STARTUPS_QUERY, params});  

  // console.log(JSON.stringify(posts, null, 2));

  // const posts = [
  //   {
  //     _createdAt: new Date(),
  //     views: 55,
  //     author: { _id: 1, name: "Henry Nguyen" },
  //     _id: 1,
  //     description: "This is a description",
  //     image:
  //       "https://avatars.githubusercontent.com/u/140675996?v=4",
  //     category: "People",
  //     title: "Founder of a startup",
  //   },
  // ];

  return (
    <>
      <section className="pink_container">
        <h1 className="heading">
          Show your startup! <br /> Connect with entrepreneurs
        </h1>
        <p className="sub-heading !max-w-3xl">
          Submit Ideas, Vote on Pitchers, get noticed!
        </p>

        <SearchForm query={query} />
      </section>

      <section className="section_container">
        <p className="text-30-semibold">
          {query ? `Search results for "${query}"` : "Latest Startups"}
        </p>

        <ul className="mt-7 card_grid">
          {posts?.length > 0 ? (
            posts.map((post: StartupCardType) => (
              <StartupCard key={post?._id} post={post} />
            ))
          ) : (
            <p className="no-results">No startups found..</p>
          )}
        </ul>
      </section>

      <SanityLive/>
    </>
  );
}
