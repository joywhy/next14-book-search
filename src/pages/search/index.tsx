import { GetServerSidePropsContext } from 'next';
import { ReactNode } from 'react';
// import { useRouter } from 'next/router';
import BookItem from '@/components/book-item';
import SearchableLayout from '@/components/searchable-layout';

import fetchBooks from '@/lib/fetch-books';
import { BookData } from '@/types';

export const getServerSideProps = async (
  context: GetServerSidePropsContext
) => {
  const q = context.query.q;
  const books = await fetchBooks(q as string);
  return { props: { books } };
};

function Page({ books }: { books: BookData[] }) {
  return (
    <div>
      {books.map((book) => (
        <BookItem key={book.id} {...book} />
      ))}
    </div>
  );
}
Page.getLayout = (page: ReactNode) => {
  return <SearchableLayout>{page}</SearchableLayout>;
};

export default Page;
