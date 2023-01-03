export function BlogListItem({ title, date }) {
  return (
    <li className="list-disc marker:text-white py-4">
      <div className="inline-flex text-lg w-[50%]">
        <span className="font-bold text-gray-200">{title}</span>
        <p className="ml-auto text-gray-500">{new Date(date).toLocaleDateString()}</p>
      </div>
    </li>
  )
}