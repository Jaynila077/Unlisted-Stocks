import { loginService } from "../../../service/user";

const loginUser = async (req, res) => { 
  try {
    const { name, password } = req.body;

    const user = await loginService.authenticateUser(name, password);
    
    res.status(200).json({ success: true, data: user });
  } catch (err) {
    console.error('Error in loginUser controller:', err);
    res.status(401).json({ error: 'Authentication failed' });
  }
};

export default {
  loginUser,
};
