import { Url } from 'url'

export type TypeSite = {
  name: string
  key: string
  imgUrl: string
  site: string | Url
  category: string // 分类
}

export const sites: TypeSite[] = [
  {
    name: 'ccms',
    key: 'ccms',
    imgUrl: '',
    site: 'http://ccms.inner',
    category: 'PROD'
  },
  {
    name: 'test-ccms',
    key: 'test-ccms',
    imgUrl: '',
    site: 'http://test.ccms.inner',
    category: 'DEV'
  }
]
