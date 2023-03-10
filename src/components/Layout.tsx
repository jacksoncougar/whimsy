import Head from "next/head"
import { Header } from "./Header"
import { Footer } from "./Footer"
import { MDXProvider } from '@mdx-js/react'

import Image from "next/image"

type Props = {
  preview?: boolean
  children: React.ReactNode
}

const ResponsiveImage = (props: any) => (
  <Image alt={props.alt} layout="responsive" {...props} />
)

const components = {
  img: ResponsiveImage,
}

const Layout = ({ preview, children }: Props) => {
  return (
    <>
      <Head>
        <title>Whimsy</title>
        <meta name="description" content="Generated by create-t3-app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Header />
      <MDXProvider components={components}>
        <main className="aura flex min-h-screen flex-col items-center bg-gradient-to-b  from-[#2e026dFF] to-[#15162c]">
          <div className="max-w-6xl w-screen mx-auto px-4 py-16">
            {children}
          </div>
        </main>
      </MDXProvider>
      <Footer />
    </>
  )
}

export default Layout