import Link from 'next/link';
import { BookData } from '../types';
import styles from './book-item.module.css';
// import Image from 'next/image';
function BookItem({
  id,
  title,
  subTitle,
  author,
  publisher,
  coverImgUrl,
  description,
}: BookData) {
  return (
    <Link href={`/book/${id}`} className={styles.container}>
      <image src={coverImgUrl} alt={'df'} />
      <div className={styles.title}>{title}</div>
      <div className={styles.subTitle}>{subTitle}</div>
      <br />
      <div className={styles.author}>
        {author} | {publisher}
      </div>
    </Link>
  );
}

export default BookItem;
