import { useRouter } from 'next/router'
 
// rota dinamica
export default function Page() {
  const router = useRouter()
  return <p>Post: {router.query.slug}</p>
}