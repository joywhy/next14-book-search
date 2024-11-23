import Link from 'next/link';
import { BookData } from '../types';
import styles from './book-item.module.css';
function BookItem({
  id,
  title,
  subTitle,
  description,
  author,
  publisher,
  coverImgUrl,
}: BookData) {
  return (
    <Link href={`/book/${id}`} className={styles.container}>
      <img src={coverImgUrl} />
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
