const Profile = require('../Models/Profile');

// Create a new profile
exports.createProfile = async (req, res) => {
  try {
    const { name } = req.body;
    const profile = new Profile({ name });
    await profile.save();
    res.status(201).json(profile);
  } catch (err) {
    res.status(400).json({ error: err.message });
  }
};

// Update profile name
exports.updateProfile = async (req, res) => {
  try {
    const { name } = req.body;
    const profile = await Profile.findByIdAndUpdate(req.params.id, { name }, { new: true });
    res.status(200).json(profile);
  } catch (err) {
    res.status(400).json({ error: err.message });
  }
};

// Get a profile by ID
exports.getProfile = async (req, res) => {
  try {
    const profile = await Profile.findById(req.params.id);
    res.status(200).json(profile);
  } catch (err) {
    res.status(400).json({ error: err.message });
  }
};
