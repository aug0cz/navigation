import type { NextPage } from 'next'

import styles from '@styles/pages/Index.module.scss'

const Index: NextPage = () => {
  return (
    <div className={styles.name}>
      <button className={styles.buttonPrimary}>primary</button>
      <button className={styles.buttonSecondary}>secondary</button>
    </div>
  )
}

export default Index
