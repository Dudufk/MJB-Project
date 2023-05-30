import Link from 'next/link'

interface ButtonProps {
  href: string
  content: string
}

export default function ButtonBanner(props: ButtonProps) {
  return (
    <Link
      href={props.href}
      target="_blank"
      className="flex h-[50px] w-[150px] items-center justify-center rounded border border-primary transition-colors hover:bg-primary"
    >
      {props.content}
    </Link>
  )
}
