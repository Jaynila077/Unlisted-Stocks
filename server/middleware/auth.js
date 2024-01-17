require('dotenv').config();
import jwt from 'jsonwebtoken';

const authenticateToken = (req, res, next) => {
  const token = req.header('Authorization');
  const secretkey = process.env.ACCESS_TOKEN_SECRET;
  if (!token) return res.status(401).json({ error: 'Unauthorized' });

  jwt.verify(token, secretkey, (err, user) => {
    if (err) return res.status(403).json({ error: 'Invalid token' });

    req.user = user.userId;
    next(); 
  });
};

export default authenticateToken;