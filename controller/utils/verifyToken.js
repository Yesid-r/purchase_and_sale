import jwt from 'jsonwebtoken';

const verifyToken = (req, res, next) => {
    const authHeader = req.headers.authorization;
  
    
    if (!authHeader || !authHeader.startsWith("Bearer ")) {
      return res.status(401).json({ success: false, message: "Unauthorized" });
    }
  
    
    const token = authHeader.split(" ")[1];
    console.log(`token: ${token}`);
  
    try {
      jwt.verify(token, process.env.JWT_SECRET_KEY, (err, user) => {
        if (err) {
          return res.status(401).json({ success: false, message: "token is invalid" });
        }
        req.user = user;
        next();
      });
    } catch (error) {
      console.log(error);
      return res.status(401).json({ success: false, message: "Unauthorized" });
    }
  };

export const verifyUser = (req, res, next) => {
    verifyToken(req, res, () => {
        if (req.user.id === req.params.userId || req.user.isAdmin) {
            next();
        } else {
            res.status(403).json({ success: false, message: "Forbidden" });
        }
    });
};
