import { useEffect } from 'react';

interface useDocumentTitleProps {
  title: string;
}
export default function useDocumentTitle({ title }: useDocumentTitleProps) {
  useEffect(() => {
    document.title = title;
  }, [title]);
}
