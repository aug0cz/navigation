import Mock from 'mockjs'

export function mockSites() {
  const site = Mock.mock({
    'list|1-100': [
      {
        name: '@name',
        key: '@id',
        imgUrl: '@image',
        site: '@url',
        'category|1-10': 10
      }
    ]
  })
  return site
}
