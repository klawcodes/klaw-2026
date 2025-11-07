const { worksData } = require("./src/data/works.ts");

exports.createPages = async ({ actions }) => {
  const { createPage } = actions;

  worksData.forEach((work) => {
    createPage({
      path: `/works/${work.slug}`, // Pakai slug
      component: require.resolve("./src/templates/work-detail.tsx"),
      context: {
        workId: work.id,
      },
    });
  });
};
