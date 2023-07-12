export function EmptyMemories() {
  return (
    <div className="flex flex-1 items-center justify-center">
      <p className="text-center leading-relaxed w-[360px]">
        You haven't saved any memories yet,{' '}
        <a href="" className="underline hover:text-gray-50">start creating one now</a>!
      </p>
    </div>
  )
}