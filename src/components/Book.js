import React from 'react';
import { styled } from 'styled-components';

const Article = styled.article`
  padding: 20px;
  border: 3px solid blue;
  & + & { margin-top: 30px; }
`

const Book = ({title="A Book", author="Mark Twain", description = "This is a book"}) => {
  return (
    <Article>
        <title>{title}</title>
        <p>{author}</p>
        <p>{description}</p>
    </Article>
  );
}
export default Book;

