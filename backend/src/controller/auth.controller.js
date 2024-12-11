import { User } from '../models/user.model.js';

export const authCallback = async (req, res, next) => {
  try {
    console.log('Auth!');

    const { id, firstName, lastName, imageUrl } = req.body;

    // check if user already exists
    const user = await User.findOne({ clerkId: id });

    if (!user) {
      console.log('Create user');
      // signup
      await User.create({
        clerkId: id,
        fullName: `${firstName || ''} ${lastName || ''}`.trim(),
        imageUrl,
      });
    }

    res.status(200).json({ success: true });
  } catch (error) {
    console.log('Error in auth callback', error);
    next(error);
  }
};
