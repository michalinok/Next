import { Switch } from "@/components/ui/switch"

export default function Home() {

return (
<div className="h-screen flex flex-col items-center justify-center">
<h3 className="mb-4 text-3xl text-blue-500 font-medium">Powiadomienia Email</h3>
<div className="p-6">
<Switch />
</div>
</div>
    )
}
