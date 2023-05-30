import Link from 'next/link'

interface ButtonProps {
  href: string
  content: string
}

export default function Button(props: ButtonProps) {
  return (
    <Link
      href={props.href}
      className="flex h-[50px] w-[150px] items-center justify-center rounded border bg-primary transition-colors hover:bg-red-600"
    >
      {props.content}
    </Link>
  )
}
