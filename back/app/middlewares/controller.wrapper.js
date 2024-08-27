export default (controller) => {
  return async (req, res, next) => {
    try {
      await controller(req, res, next);
    } catch (error) {
      console.error(error);
      res.status(500).json("Internal server error, try again later");
    }
  };
};
