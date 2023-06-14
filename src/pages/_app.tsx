import React from 'react'
import '@/styles/globals.css'
import type { AppProps } from 'next/app'
import { NextPage } from 'next'
import Layout from '@/components/UI/Layout'
import { Analytics } from '@vercel/analytics/react'

const App: NextPage<AppProps> = ({ Component, pageProps }: AppProps) => {
  return (
    <Layout>
      <Component {...pageProps} />
      <Analytics />
    </Layout>
  )
}

export default App
