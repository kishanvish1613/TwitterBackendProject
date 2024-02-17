import TweetService from "../services/tweet-service.js";
import upload from "../config/file-upload-s3-config.js";

const singleUploader = upload.single("image");

const tweetService = new TweetService();

export const create = async (req, res) => {
  try {
    singleUploader(req, res, async function(err, data){
        if(err){
            return res.status(500).json({
                err: err
            })
        }
        const reqdata = req.body;
        reqdata.image = req.file.location;
        const response = await tweetService.create(reqdata);
        return res.status(201).json({
        data: response,
        success: true,
        message: "successfully create a tweet",
        err: {},
        });
    });
  } catch (error) {
    return res.status(500).json({
      data: {},
      success: false,
      message: "not able to create a tweet",
      err: error,
    });
  }
};

export const getTweetWithComments = async (req, res) => {
  try {
    const result = await tweetService.getTweetComment(req.params.id);
    return res.status(200).json({
      data: result,
      success: true,
      message: "successfully fetch a tweet with comment",
      err: {},
    });
  } catch (error) {
    return res.status(500).json({
      data: {},
      success: false,
      message: "not able to fetch a tweet with comment",
      err: error,
    });
  }
};

export const getTweets = async (req, res) => {
  try {
    const result = await tweetService.getAllTweet();
    return res.status(200).json({
      data: result,
      success: true,
      message: "successfully fetched tweets",
      err: {}, // This should be null or removed if there's no error
    });
  } catch (error) {
    return res.status(500).json({
      data: null,
      success: false,
      message: "unable to fetch tweets",
      err: error.message, // Return the error message to the client
    });
  }
};
