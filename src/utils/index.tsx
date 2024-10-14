import { Suspense } from "react"

const Loading = () => {
  return (
    <div className="w-screen h-screen flex items-center justify-center">Loading</div>
  )
}

const SuspenseComponent = ({children} : {children: JSX.Element}) => {
    return <Suspense fallback={<Loading />}>{children}</Suspense>
}

export {Loading,SuspenseComponent}