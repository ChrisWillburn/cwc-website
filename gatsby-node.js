const path = require('path');
const { createFilePath } = require('gatsby-source-filesystem');
const { createRemoteFileNode } = require("gatsby-source-filesystem");
const crypto = require("crypto");

// Adding the slug
exports.onCreateNode = function ({ node, getNode, actions }) {
  const { createNodeField } = actions;
  if (node.internal.type === 'MarkdownRemark') {
    const slug = createFilePath({ node, getNode });
    createNodeField({
      node,
      name: 'slug',
      value: slug.split('/')[1],
    });
  }
};

// Add fields to the MarkdownRemark GraphQL type
exports.createSchemaCustomization = ({ actions, schema }) => {
  const { createTypes } = actions;
  const typeDefs = [
    `
    type MarkdownRemark implements Node {
      fields: MarkdownRemarkFields!
    }

    type MarkdownRemarkFields {
      slug: String!
    }
    `,
  ];
  createTypes(typeDefs);
};

// Querying for the slug field
exports.createPages = async function ({ graphql, actions }) {
  const { createPage } = actions;

  const result = await graphql(`
    query {
      allMarkdownRemark {
        edges {
          node {
            fields {
              slug
            }
          }
        }
      }
    }
  `);

  result.data.allMarkdownRemark.edges.forEach(({ node }) => {
    createPage({
      path: node.fields.slug,
      component: path.resolve('./src/templates/blog-post.js'),
      context: {
        slug: node.fields.slug,
      },
    });
  });
};
