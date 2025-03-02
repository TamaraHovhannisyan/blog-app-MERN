import User from "../models/User.js";

export async function register(req, res) {
  try {
    const { username, password } = req.body;
    const existingUser = await User.findOne({ username });
    if (existingUser) {
      return res.status(400).json({ error: "Username already exists" });
    }
    const userDoc = await User.create({
      username,
      password,
    });

    res.status(201).json(userDoc);
  } catch (error) {
    res.status(500).json({ error: "Server error", details: error.message });
  }
}
