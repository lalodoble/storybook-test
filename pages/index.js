import Head from 'next/head'

import Page from '../stories/Page'

export default function Home() {
  return (
    <main>
      <Head>
        <title>Bytelion</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <Page />

    </main>
  )
}
