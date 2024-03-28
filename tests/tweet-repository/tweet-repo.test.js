import TweetRepository from "../../src/repository/tweet-repository.js";
import Tweet from "../../src/models/tweet.js";

jest.mock("../../src/models/tweet.js");

describe("create tweet tests", () => {
  test("should create a tweet and return it", async () => {
    const data = {
      content: "testing Tweet",
    };

    const spy = jest.spyOn(Tweet, "create").mockImplementation(() => {
      return { ...data, createdAt: "2024-02-12", updatedAt: "2024-02-12" };
    });

    const tweetRepository = new TweetRepository();

    const tweet = await tweetRepository.create(data);

    expect(spy).toHaveBeenCalled();

    expect(tweet.content).toBe(data.content);
  });

  test("should not create a tweet and throw exception", async () => {
    const data = {
      content: "Testing Tweet",
    };

    const spy = jest.spyOn(Tweet, "create").mockImplementation(() => {
      throw new Error("Something went wrong");
    });

    const tweetRepository = new TweetRepository();
    expect(spy).toHaveBeenCalled();

    const result = await tweetRepository.create(data).catch((err) => {
      expect(err).toBeInstanceOf(Error);
      expect(err.message).toBe("Something went wrong");
    });
  });
});



describe("find tweet tests", () => {
  test("getall tweets and return tweets", async () => {
    const data = {
      content: "testing tweets",
    };

    const expectedTweet = { ...data, createdAt: "2024-02-12", updatedAt: "2024-02-12" };

    const spy = jest.spyOn(Tweet, "find").mockImplementation(() => {
      return [expectedTweet, expectedTweet];
    });

    const tweetRepository = new TweetRepository();

    const res = await tweetRepository.getAllTweets();

    expect(spy).toHaveBeenCalled();

    expect(res[0].content).toBe(data.content);
  });

  test("should not get all tweets and return exception", async () => {

    const spy = jest.spyOn(Tweet, 'find').mockImplementation(() => {
      return 'Something went wrong';
    })

    const tweetRepository = new TweetRepository();

    expect(spy).toHaveBeenCalled();
    
    const response = await tweetRepository.getAllTweets().catch((err) => {
      expect(err).toBeInstanceOf(Error);
      expect(err.message).toBe("Something went wrong")
    });

  });
});
