import User from '../models/User.js';
import { upload } from '../utils/multer.js';

export { upload };


export const getUserProfile = async (req, res) => {
  const user = await User.findById(req.user._id);

  if (user) {
    res.json({
      _id: user._id,
      fullName: user.fullName,
      email: user.email,
      profileImage: user.profileImage,
    });
  } else {
    res.status(404).json({ message: 'User not found' });
  }
};


export const updateUserProfile = async (req, res) => {
  const user = await User.findById(req.user._id);

  if (user) {
    user.fullName = req.body.fullName || user.fullName;
    user.email = req.body.email || user.email;
    if (req.body.password) {
      user.password = req.body.password;
    }

    const updatedUser = await user.save();

    res.json({
      _id: updatedUser._id,
      fullName: updatedUser.fullName,
      email: updatedUser.email,
      profileImage: updatedUser.profileImage,
    });
  } else {
    res.status(404).json({ message: 'User not found' });
  }
};


export const uploadProfilePhoto = async (req, res) => {
  const user = await User.findById(req.user._id);

  if (user && req.file) {
    user.profileImage = `/uploads/profiles/${req.file.filename}`;
    await user.save();
    res.json({
      message: 'Image uploaded successfully',
      profileImage: user.profileImage,
    });
  } else {
    res.status(400).json({ message: 'No file uploaded or user not found' });
  }
};
