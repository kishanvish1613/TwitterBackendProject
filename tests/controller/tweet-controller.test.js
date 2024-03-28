import { getTweetWithComments } from "../../src/controllers/tweet-controller.js";
import TweetService from "../../src/services/tweet-service.js";
import {mockRequest, mockResponse} from '../mocker.js'


jest.mock("../../src/services/tweet-service.js");

describe("test tweet-controller", () => {
  test("should return a tweet with comments when successful", async () => {
    const mockResult = {
      content: "tweetcon",
      user: "123456789",
      likes: "123456789",
      comments: "123456789",
      image: "qwertyuiop",
    };

    (TweetService.prototype.getTweetComment).mockResolvedValue(mockResult);

    const res = mockResponse();
    const req = mockRequest();
    
    await getTweetWithComments(req, res);

    expect(res.status).toHaveBeenCalledWith(200);
    expect(res.json).toHaveBeenCalledWith({
        data: mockResult,
        success: true,
        message: "successfully fetch a tweet with comment",
        err: {},
    })

  });
});
