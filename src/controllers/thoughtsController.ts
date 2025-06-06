import { Request, Response } from "express";
import { User, Thought } from "../models/index.js";

export const getAllThoughts = async (_req: Request, res: Response) => {
  try {
    const thoughts = await Thought.find();
    res.json(thoughts);
  } catch (err) {
    res.status(500).json(err);
  }
};

export const getThoughtById = async (
  req: Request,
  res: Response
): Promise<void> => {
  try {
    const thought = await Thought.findById(req.params.thoughtId);
    if (!thought) {
      res.status(404).json({ message: "Thought not found" });
      return;
    }
    res.json(thought);
  } catch (err) {
    res.status(500).json(err);
  }
};

export const createThought = async (req: Request, res: Response) => {
  try {
    const { thoughtText, username, userId } = req.body;
    const newThought = await Thought.create({ thoughtText, username });

    await User.findByIdAndUpdate(
      userId,
      { $push: { thoughts: newThought._id } },
      { new: true }
    );

    res.status(201).json(newThought);
  } catch (err) {
    res.status(500).json(err);
  }
};

export const updateThought = async (
  req: Request,
  res: Response
): Promise<void> => {
  try {
    const updatedThought = await Thought.findByIdAndUpdate(
      req.params.thoughtId,
      req.body,
      { new: true, runValidators: true }
    );

    if (!updatedThought) {
      res.status(404).json({ message: "Thought not found" });
      return;
    }

    res.json(updatedThought);
  } catch (err) {
    res.status(500).json(err);
  }
};

export const deleteThought = async (
  req: Request,
  res: Response
): Promise<void> => {
  try {
    const deletedThought = await Thought.findByIdAndDelete(
      req.params.thoughtId
    );

    if (!deletedThought) {
      res.status(404).json({ message: "Thought not found" });
      return;
    }

    await User.findOneAndUpdate(
      { username: deletedThought.username },
      { $pull: { thoughts: deletedThought._id } }
    );

    res.json({ message: "Thought deleted" });
  } catch (err) {
    res.status(500).json(err);
  }
};

// Reactions
export const addReaction = async (req: Request, res: Response) : Promise<void> => {
  try {
    const updatedThought = await Thought.findByIdAndUpdate(
      req.params.thoughtId,
      { $push: { reactions: req.body } },
      { new: true, runValidators: true }
    );

    if (!updatedThought) {
    res.status(404).json({ message: "Thought not found" });
    return;
    }

    res.json(updatedThought);
  } catch (err) {
    res.status(500).json(err);
  }
};

export const removeReaction = async (req: Request, res: Response) : Promise<void> => {
  try {
    const updatedThought = await Thought.findByIdAndUpdate(
      req.params.thoughtId,
      { $pull: { reactions: { reactionId: req.params.reactionId } } },
      { new: true }
    );

    if (!updatedThought) {
    res.status(404).json({ message: "Thought not found" });
    return;
    }

    res.json(updatedThought);
  } catch (err) {
    res.status(500).json(err);
  }
};
