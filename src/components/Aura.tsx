export function Aura({ children }) {
  return <div className="bg-gradient-to-b from-red-800 to-[rgba(0,0,0,0)]">
    <div className="bg-gradient-to-r from-green-300 to-orange-300">{children}</div>
  </div>
}