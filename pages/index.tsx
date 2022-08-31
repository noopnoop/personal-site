import TOC from '../components/TOC'
import Layout from '../components/layout'
import Head from 'next/head'

export default function Index() {
  return (
    <>
      <Layout>
        <Head>
          <title>The Inter Net</title>
        </Head>
        <TOC/>
      </Layout>
    </>
  )
}