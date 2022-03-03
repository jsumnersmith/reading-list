// gatsby-node.js
require('dotenv').config({
  path: `.env.${process.env.NODE_ENV}`
});
const Supabase = require('@supabase/supabase-js');

const { createClient } = Supabase;

const supabase = createClient(process.env.supabaseUrl, process.env.supabaseKey);

exports.sourceNodes = async ({ actions: { createNode }, createContentDigest }) => {
  let { data: books, error } = await supabase
    .from('books')
    .select('*')

  books.forEach((book) => {
    const { id, author, title } = book;
    createNode({
      ...book,
      id: `${id}`,
      slug: `/${id}`,
      internal: {
        type: 'Books',
        contentDigest: createContentDigest(book)
      }
    });
  });
};

exports.createPages = async ({ graphql, actions }) => {
	const { createRedirect } = actions;
		
	createRedirect({ 
    fromPath: `/`, 
    toPath: `/canada-en`, 
    conditions: { 
      country: `ca`,
      language: [`en`] 
    } 
  });

  createRedirect({ 
    fromPath: `/`, 
    toPath: `/canada-fr`, 
    conditions: { 
      country: `ca`,
      language: [`fr`] 
    } 
  });
};