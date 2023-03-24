const pushRouter = (router) => {
  router.push(
    {
      pathname: router.pathname,
      query: router.query,
    },
    undefined,
    { scroll: false }
  );
};

export default pushRouter;
