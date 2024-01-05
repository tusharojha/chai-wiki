import { useQuery } from "@tanstack/react-query"
import { useRouter } from "next/router"
import { queryKey } from "src/constants/queryKey"
import { PostDetail } from "src/types"

const usePostSlugQuery = (slug: string) => {
  console.log('slug', slug)
  const s = useQuery<PostDetail>({
    queryKey: queryKey.post(`${slug}`),
    enabled: false,
  })

  console.log(s)
  return s.data
}

export default usePostSlugQuery
