import SearchableLayout from '@/components/searchable-layout';
// import ButtonAbleLayout from '@/components/buttonable-layout';
import style from './index.module.css';
import { ReactNode } from 'react';
import books from '@/mock/books.json';
import BookItem from '@/components/book-item';
import { InferGetServerSidePropsType } from 'next';
import fetchBooks from '@/lib/fetch-books';

export const getServerSideProps = async () => {
  // 컴포넌트보다 먼저 실행됨
  //서버사이드에서 실행되어서 window 객체 사용할 ㅅ 없업
  const allBooks = await fetchBooks();
  return { props: { allBooks } };
};

export default function Home({
  allBooks,
}: InferGetServerSidePropsType<typeof getServerSideProps>) {
  /// 두번 실행됨
  console.log(allBooks);
  return (
    <div className={style.container}>
      <section>
        <h3>지금 추천하는 도서</h3>
        {books.map((book) => (
          <BookItem key={book.id} {...book} />
        ))}
      </section>
      <section>
        <h3>등록된 모든 도서</h3>
        {allBooks.map((book) => (
          <BookItem key={book.id} {...book} />
        ))}
      </section>
    </div>
  );
}
Home.getLayout = (page: ReactNode) => {
  return <SearchableLayout>{page}</SearchableLayout>;
};
