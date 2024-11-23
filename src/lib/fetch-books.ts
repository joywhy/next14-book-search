import { BookData } from '@/types';

export default async function fetchBooks(): Promise<BookData[]> {
  const url = 'https://localhost:12345/book';
  try {
    const response = await fetch(url);

    if (!response.ok) {
      throw new Error();
    }
    return await response.json();
  } catch (e) {
    console.error('fetchBooks error', e);
    return [];
  }
}
