import { asyncHandler } from "../../../services/asyncHandler.js";
import {
  create,
  find,
  findById,
  findOne,
  findOneAndUpdate,
} from "../../../../Database/DBMethods.js";
import { roomModel } from "../../../../Database/model/room.model.js";
import { bookingModel } from "../../../../Database/model/booking.model.js";
import cloudinary from "../../../services/cloudinary.js";
import { workSpaceModel } from "../../../../Database/model/workSpace.model.js";
import reviewModel from "../../../../Database/model/review.model.js";

// workingspace/room/booking

export const getWsRooms = asyncHandler(async (req, res, next) => {
  const cursor = await workSpaceModel.find().cursor();
  let allWorkspaces = [];
  for (let doc = await cursor.next(); doc != null; doc = await cursor.next()) {
    let room = await find({
      model: roomModel,
      condition: { workspaceId: doc._id },
    });
    let newObj = doc.toObject(); // doc heya kol ws 3ndi 7wltaha l newObj 3shan hea json , wl newObj da b2a el array bta3 el room el 7b3to lel ws
    newObj.room = room;
    allWorkspaces.push(newObj);
  }
  res.json({ message: "Done", allWorkspaces });
});

// get a list of ws from db
export const getWorkSpaces = asyncHandler(async (req, res, next) => {
  let workSpace = await find({ model: workSpaceModel });
  res.status(200).json({ message: "Done", workSpace });
});

export const getBookingHistoryToWs = asyncHandler(async (req, res, next) => {
  let { workspaceId } = req.params;
  const History = await find({
    model: bookingModel,
    "room.workingSpace": workspaceId,
  });
  res.status(200).json({ message: "Done", History });
});

//MahmoudTry
// export const feedback=asyncHandler( async (req, res, next) => {
//     const workspaceId = req.params.id;
//     const feedback = req.body.feedback;

//       const workspace = await workSpaceModel.findById(workspaceId);

//       workspace.feedback.push(feedback);
//       await workspace.save();

//       res.status(200).json(workspace);

//});
//3amel function 3ashan el feedback yet3amal men ay user w yet3amalo save fel model automatic
// mesh e7na elly no7oto w e7na bene3mel create lel workspace

//Maryam Try 
export const createReview = asyncHandler(async (req, res, next) => {
  let { workspaceId } = req.params;
  let { rating } = req.body;

  const workspace = await findById({ model: workSpaceModel, id: workspaceId });
  if (!workspace) {
    res.status(404).json({ message: "Workspace not found" });
  } else{
    const review = await find({ model: reviewModel });
    // elmoshkela f length
    // Don't allow more than one review per user(salma)
    for (let i=0; i<review.rating.length; i++) {
      console.log(review.rating.length)
      if (workspace.rating[i].user._id.toString() === req.user._id.toString()) {
        res.status(401).json({message:"Sorry, you can only add one rate per ws"})
      }else{
        const review = await create({
          model: reviewModel,
          data: {
            createdBy:req.user._id,
            workspace: workspaceId,
            rating},
          });
          //console.log(review);
          res.status(201).json({ message: "Created" ,review});}}
        }});

//try salma
// Don't allow the course owner to post a review on their own course
// if (req.user._id.toJSON() === review.user._id.toJSON()) {
//    res.status(401).json({message:"Sorry, you can't review your own ws.");
// }

