import { loginService } from "../../../service/user";

const loginUser = async (req, res) => { 
  try {
    const { name, password } = req.body;

    const user = await loginService.authenticateUser(name, password);

    const token = loginService.generateToken(user.id);

    console.log('User authenticated:', user);
    
    res.status(200).json({ data: user , token});
  } catch (err) {
    console.error('Error in loginUser controller:', err);
    res.status(401).json({ error: 'Authentication failed' });
  }
};

const signupUser = async (req, res) => {
  try {
    const { name, password , email } = req.body;

    const user = await loginService.createUser(name, password , email);

    const token = loginService.generateToken(user.id);

    console.log('User created:', user);
    
    res.status(200).json({ success: true, data: user, token});
  } catch (err) {
    console.error('Error in signupUser controller:', err);
    res.status(401).json({ error: 'Signup failed' });
  }
};

export default {
  loginUser,
  signupUser,
};

