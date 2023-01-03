// @ts-check
/**
 * Run `build` or `dev` with `SKIP_ENV_VALIDATION` to skip env validation.
 * This is especially useful for Docker builds.
 */
import nextMDX from '@next/mdx'
import remarkFrontmatter from 'remark-frontmatter';

!process.env.SKIP_ENV_VALIDATION && (await import("./src/env/server.mjs"));

const withMDX = nextMDX({
  // By default only the .mdx extension is supported.
  // extension: /\.mdx?$/,
  options: {
    // providerImportSource: '@mdx-js/react',  /* otherOptions… */
    remarkPlugins: [ [ remarkFrontmatter, [ 'yaml' ] ] ],
  }
})


export default withMDX({
  // Support MDX files as pages:
  pageExtensions: [ 'md', 'mdx', 'tsx', 'ts', 'jsx', 'js' ],
})


// /** @type {import("next").NextConfig} */
// export const config = withMDX({
//   pageExtensions: [ "js", "jsx", "ts", "tsx", "md", "mdx" ],
//   images: {
//     remotePatterns: [
//       {
//         protocol: "https",
//         hostname: "avatars.githubusercontent.com",
//       }
//     ]
//   },

//   reactStrictMode: true,
//   swcMinify: true,
//   i18n: {
//     locales: [ "en" ],
//     defaultLocale: "en",
//   },
// });