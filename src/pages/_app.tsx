import { type AppType } from "next/app"

import { trpc } from "../utils/trpc"

import "../styles/globals.css"

const MyApp: AppType = ({ Component, pageProps }) => {
  return <div>
    <Component {...pageProps} />
  </div >
}

export default trpc.withTRPC(MyApp)
