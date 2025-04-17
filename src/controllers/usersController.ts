import { Request, Response } from 'express';
import { User, Thought } from "../models/index.js";

export const getUsers = async (_req: Request, res: Response) :Promise<void> => {
  try {
    const users = await User.find();
    res.json(users);
  } catch (err) {
    res.status(500).json(err);
  }
};

export const getSingleUser = async (req: Request, res: Response) : Promise<void> => {
  try {
    const user = await User.findById(req.params.userId)
      .populate('thoughts')
      .populate('friends');

    if (!user) {
    res.status(404).json({ message: 'User not found' });
    return;
    }

    res.json(user);
  } catch (err) {
    res.status(500).json(err);
  }
};

export const createUser = async (req: Request, res: Response) : Promise<void> => {
  try {
    const newUser = await User.create(req.body);
    res.status(201).json(newUser);
  } catch (err) {
    res.status(500).json(err);
  }
};

export const updateUser = async (req: Request, res: Response) : Promise<void> => {
  try {
    const updatedUser = await User.findByIdAndUpdate(
      req.params.userId,
      req.body,
      { new: true }
    );

    if (!updatedUser) {
    res.status(404).json({ message: 'User not found' });
    return;
    }

    res.json(updatedUser);
  } catch (err) {
    res.status(500).json(err);
  }
};

export const deleteUser = async (req: Request, res: Response) : Promise<void> => {
  try {
    const user = await User.findByIdAndDelete(req.params.userId);

    if (!user) {
    res.status(404).json({ message: 'User not found' });
    return;
    }

    await Thought.deleteMany({ _id: { $in: user.thoughts } });

    res.json({ message: 'User and associated thoughts deleted' });
  } catch (err) {
    res.status(500).json(err);
  }
};

export const addFriend = async (req: Request, res: Response) : Promise<void> => {
  try {
    const user = await User.findById(req.params.userId);
    const friend = await User.findById(req.params.friendId);

    if (!user || !friend) {
  res.status(404).json({ message: 'User or Friend not found' });
  return;
    }

    if (!user.friends.includes(friend.id)) {
      user.friends.push(friend._id);
      await user.save();
      res.json(user);
    } else {
      res.status(400).json({ message: 'Friend already added' });
    }
  } catch (err) {
    res.status(500).json(err);
  }
};

export const removeFriend = async (req: Request, res: Response) : Promise<void> => {
  try {
    const user = await User.findById(req.params.userId);
    const friend = await User.findById(req.params.friendId);

    if (!user || !friend) {
    res.status(404).json({ message: 'User or Friend not found' });
    return;
    }

    user.friends.pull(friend._id);
    await user.save();
    res.json(user);
  } catch (err) {
    res.status(500).json(err);
  }
};
