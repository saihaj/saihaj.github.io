import { ReactNode } from 'react'

type ContainerProps = {
    children: ReactNode
}

const Container = ( { children }:ContainerProps ) => (
  <div className="container mx-auto max-w-4xl px-2 md:px-0">
    {children}
  </div>
)

export default Container
