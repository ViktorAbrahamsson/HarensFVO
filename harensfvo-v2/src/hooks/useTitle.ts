import { useEffect } from 'react'

const SITE_NAME = 'Härens FVO'

export function useTitle(page?: string) {
  useEffect(() => {
    document.title = page ? `${page} — ${SITE_NAME}` : SITE_NAME
  }, [page])
}
