import jwt from "jsonwebtoken";

export default (req, res, next) => {
  const token = (req.headers.authorization || "").replace(/Bearer\s?/, "");
  console.log(token);

  if (token) {
    try {
      const decoded = jwt.verify(token, "secret123");
      console.log(decoded);

      req.userId = decoded._id;
      next();
    } catch (e) {
      return res.status(403).json({
        message: "Нет доступа1",
      });
    }
  } else {
    return res.status(403).json({
      message: "Нет доступа2",
    });
  }
};
