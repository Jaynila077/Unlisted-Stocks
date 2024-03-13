require('dotenv').config();
import jwt from 'jsonwebtoken';
const { getUserService } = require("../service/user/index");

const authenticateToken = async (req, res, next) => {
    try {
        if (req.headers.authorization && req.headers.authorization.startsWith('Bearer')) {

            const token = req.headers.authorization.split(' ')[1];
            const decoded = jwt.verify(token, process.env.ACCESS_TOKEN_SECRET);
            if (!decoded || !decoded.userId) {
                return res.status(401).json({ message: 'Invalid token or missing user ID' });
            }

            const user = await getUserService.byId(decoded.userId);

            if (!user) {
                return res.status(404).json({ message: 'User not found' });
            }
            
            req.user = user;
            next();
        } else {
            return res.status(401).json({ message: 'Authorization header missing or invalid' });
        }
    } catch (error) {
        console.error('Error authenticating token:', error);
        return res.status(500).json({ message: 'Internal server error' });
    }
};

export default authenticateToken;
