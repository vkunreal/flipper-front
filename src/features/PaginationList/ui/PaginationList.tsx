import { Button } from '@/shared/ui/Button'
import { useState } from 'react'
import { useSearchParams } from 'react-router-dom'

interface PaginationListProps {
  children: React.ReactNode
  prevClick?: () => void
  nextClick?: () => void
  isParamsPage?: boolean
}

export const PaginationList: React.FC<PaginationListProps> = ({
  children,
  prevClick,
  nextClick,
  isParamsPage = true,
}) => {
  //   const [page, setPage] = useState(1)
  //   const [params] = useSearchParams()

  //   if (isParamsPage) {
  //     setPage(Number(params.get('page')) ?? 1)
  //   }

  return (
    <div>
      {children}

      <div>
        <Button
          onClick={() => {
            if (prevClick) {
              prevClick()
            }
          }}
        >
          Prev
        </Button>

        <Button
          onClick={() => {
            if (nextClick) {
              nextClick()
            }
          }}
        >
          Next
        </Button>
      </div>
    </div>
  )
}
