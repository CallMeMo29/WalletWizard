import Eingabe from "../models/Eingabe.js"
import asyncHandler from "../utils/asyncHandler.js"
import ErrorResponse from "../utils/ErrorResponse.js";

export const getAllPosts = asyncHandler(async (req, res, next) => {
  console.log('Hello There')
    const posts = await Eingabe.find();
    res.json(posts);
  });

export const getSingleEingabe = asyncHandler(async (req, res, next) => {
    const { id } = req.params;
    const post = await Eingabe.findById(id);

    if (!post) throw new ErrorResponse(`Post with ${id} does not exist`, 404);
    res.send(post);
});

export const createEingabe = asyncHandler(async (req, res, next) => {
    const { body, uid } = req;
  
    const newEingabe = await Eingabe.create({ ...body});
    const populatedEingabe = await Eingabe.findById(newEingabe._id);
    res.status(201).json(populatedEingabe);
  });
  
  export const updateEingabe = asyncHandler(async (req, res, next) => {
    const {
      body,
      params: { id },
      uid,
    } = req;
  
    const found = await Eingabe.findById(id);
  
    if (!found) throw new ErrorResponse(`Post ${id} doesn't exist`, 404);
    if (uid !== found.author.toString())
      throw new ErrorResponse('You have no permission to update this post', 401);
  
    const updatedPost = await Post.findByIdAndUpdate(id, body, {
      new: true,
    });
    res.json(updatedPost);
  });

  export const deleteEingabe = asyncHandler(async (req, res, next) => {
    const {
      body,
      params: { id },
      uid,
    } = req;
  
    const found = await Eingabe.findById(id);
  
    if (!found) throw new ErrorResponse(`Post ${id} doesn't exist`, 404);
    if (uid !== found.author.toString())
      throw new ErrorResponse('You have no permission to delete this post', 401);
  
    const deletedEingabe = await Eingabe.findByIdAndDelete(id, body, {
      new: true,
    });
    res.json({ success: `Post with ${id} was deleted` });
  });