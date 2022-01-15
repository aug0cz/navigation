import type { NextPage } from 'next'

import styles from '@styles/pages/Index.module.scss'
import { mockSites } from 'mocks/sites.mock'
import { useEffect, useMemo, useState } from 'react'

const Index: NextPage = () => {
  const [sites, setSites] = useState([])

  useEffect(() => {
    const d = mockSites()
    setSites(d.list)
  }, [])

  const siteCategories = useMemo(() => {
    let dataMap = {}
    sites.forEach((item) => {
      dataMap[item.category] = [...(dataMap[item.category] ?? []), item]
    })
    return dataMap
  }, [sites])
  return (
    <div className={styles.container}>
      <header className="min-w-full flex justify-center p-4">
        <button className="rounded-full bg-green-700 w-6 h-6"></button>
        <div className="mb-3 flex items-stretch flex-wrap rounded-md ">
          <button className="px-2 py-1 bg-primary-700 rounded-l-md">
            <i className="bi bi-search"></i>
          </button>
          <input
            className="bg-light-200 border border-primary-700 outline-none focus:ring-1 px-2 py-1 text-primary-700 rounded-r-md"
            type="text"
            placeholder="search"
          />
        </div>
      </header>
      <main>
        <div>
          {
            // sites.map((site) => (
            //   <div
            //     key={site.key}
            //     className="px-4 py-2 h-20 shadow-sm border rounded-2xl bg-primary-700 text-light-200"
            //   >
            //     <span>name: {site.name}</span>
            //   </div>
            // ))

            Object.keys(siteCategories).map((category) => (
              <div key={category}>
                <h3>{category}</h3>
                <div className="grid gap-x-8 gap-y-4 grid-cols-4">
                  {siteCategories[category].map((item) => (
                    <div key={item.key}>
                      <div className="px-4 py-2 h-20 shadow-sm border rounded-2xl bg-primary-700 text-light-200">
                        <span>name: {item.name}</span>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            ))
          }
        </div>
      </main>
    </div>
  )
}

export default Index
