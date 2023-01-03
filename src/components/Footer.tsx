// footer component that spans the entire width of the page, contains a link to the source code of create-t3-app
export function Footer() {
  return (
    <div className="bg-gray-900 flex flex-col items-center">
      <div className="max-w-7xl mx-auto py-6 px-4 sm:px-6 lg:px-8">
        <a
          className="text-sm text-gray-500"
          href="https://create.t3.gg"
          rel="noopener noreferrer"
          target="_blank"
        >
          Made with Create T3 App ❤️
        </a>
      </div>
    </div>
  )
}