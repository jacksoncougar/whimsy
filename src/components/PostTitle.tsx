// title and date are props passed to the component
// nice layout

export function PostTitle({ title, date, readingTime }) {
  return (
    <div className="flex flex-col gap-2">
      <h1 className="text-6xl font-bold tracking-tight text-white">{title}</h1>
      <div className="flex flex-col">
        <span className="text-gray-200 text-lg">{new Date(date).toLocaleDateString(undefined, { month: 'long', day: 'numeric', year: 'numeric' })}</span>
        <span className="text-gray-200 text-lg">{readingTime}</span>
      </div>
    </div>
  )
}