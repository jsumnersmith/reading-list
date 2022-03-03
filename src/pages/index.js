import * as React from "react"
import Layout from "../components/Layout";
import { graphql } from 'gatsby'

const IndexPage = ({data}) => {
  return (
    <Layout>
      <main>
        <title>Home Page</title>
        <h1>
          Reading List
        </h1>
        {
          data.allBooks.nodes.map(book => 
            <p>Hi, {book.title}</p>
          )
        }
      </main>
    </Layout>
  )
}

export const query = graphql`
  query IndexPageQuery {
    allBooks {
      nodes {
        author
        title
      }
    }
  }
`

export default IndexPage
