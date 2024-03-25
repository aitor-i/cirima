import MapComponent from '@/components/MapComponent/MapComponent'
import { LocateIcon } from 'lucide-react'

export default function Locate() {
  return (
    <section className="overflow-hidden rounded-2xl">
      <div className="grid items-center mb-4 gap-2">
        <LocateIcon />
        <h2 className="text-3xl font-bold tracking-tight">Encuentranos aqui</h2>
      </div>
      <div className="relative rounded-lg aspect-[2/1]">
        <MapComponent />
      </div>
    </section>

  )
}
