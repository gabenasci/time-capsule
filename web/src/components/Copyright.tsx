export function Copyright(){
  return (
    <div className="text-sm leading-relaxed text-gray-200">
      © {new Date().getFullYear()}, Built by
      {` `}
      <a 
        target="_blank"
        rel="noreferrer"
        href="https://www.github.com/gabenasci"
        className="underline hover:text-gray-100"
      >
        Gabriel Nascimento
      </a>
    </div>
  )
}