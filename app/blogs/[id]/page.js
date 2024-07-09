// import { useRouter } from 'next/router'

export default function ({params}) {
   console.log(params.id) 
    return <> Blogs: {params.id}</>
}