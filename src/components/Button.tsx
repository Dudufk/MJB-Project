import Link from 'next/link'

interface Href {
  href: string
}

export default function Button(props: Href) {
  return (
    <Link
      href={props.href}
      target="_blank"
      className="flex h-[50px] w-[150px] items-center justify-center rounded border border-[#aa1a21] transition-colors hover:bg-[#aa1a21]"
    >
      Clique Aqui
    </Link>
  )
}
