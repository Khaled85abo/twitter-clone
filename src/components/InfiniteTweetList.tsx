import InfiniteScroll from "react-infinite-scroll-component";

type Tweet = {
  id: string;
  content: string;
  createdAt: Date;
  likeCont: number;
  likedByMe: boolean;
  user: { id: string; image: string | null; name: string | null };
};
type InfiniteTweetListTypes = {
  tweets: Tweet[];
  isLoading: boolean;
  isError: boolean;
  hasMore: boolean;
  fetchNewTweets: () => Promise<unknown>;
};
export function InfiniteTweetList({
  tweets,
  isError,
  isLoading,
  fetchNewTweets,
  hasMore,
}: InfiniteTweetListTypes) {
  if (isLoading) return <h1>Loading...</h1>;
  if (isError) return <h1>Error</h1>;
  if (tweets == null || tweets.length == 0) {
    return (
      <h2 className="my-4 text-center text-2xl text-gray-500">No Tweets</h2>
    );
  }
  return (
    <ul>
      <InfiniteScroll
        dataLength={tweets.length}
        next={fetchNewTweets}
        hasMore={hasMore}
        loader={"Loading..."}
      >
        {tweets.map((tweet) => {
          return <div key={tweet.id}>{tweet.content}</div>;
        })}
      </InfiniteScroll>
    </ul>
  );
}
