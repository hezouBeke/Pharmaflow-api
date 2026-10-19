

const authorize = (rolesAutorises) => {
  return (req, res, next) => {
    const userRole = req.user?.role;

    if (!rolesAutorises.includes(userRole)) {
      return res.status(403).json({ error: `Role non autorisé` });
    }

    next();
  };
};

module.exports = authorize;
