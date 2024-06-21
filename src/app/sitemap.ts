const sitemap = async () => {
  const staticRoutes = [
    "",
    "/upcoming",
    "/previous",
    "/recordings",
    "/personal-room",
    "/meeting(.*)",
  ];

  const routes = staticRoutes.map((route) => ({
    url: `${process.env.NEXT_PUBLIC_BASE_URL}${route}`,
    lastModified: new Date().toString(),
  }));

  return [...routes];
};

export default sitemap;
