import Link from "next/link";
import { Button } from "@/components/ui/button"


 

export default function Home() {
  return (
   
<div className="h-screen flex flex-col items-center justify-center bg-center">
<p className="text-red-600 text-4xl font-bold">Michał Krawczyk</p>
<p className="text-black text-3xl">Nr albumu: 93190</p> 

<div className="mt-2">
        <Button className="bg-lime-500"><Link href="/strona">Następna strona</Link></Button>
      </div>
      
  
</div>

  )
}

