import { useRouter } from 'next/router'
import { UrlObject } from 'url'

const useGoTO = (go: string | UrlObject) => {
  return useRouter().push(go)
}
export default useGoTO
