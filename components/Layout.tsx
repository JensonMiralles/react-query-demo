import { ReactNode } from "react"

type Props = {
  title: string
  children: ReactNode
}

const Layout = (props:Props) => {
  const { children } = props
  return (
    <main className="container mx-auto">
      {children}
    </main>
  )
}

export default Layout
