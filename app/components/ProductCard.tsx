import Link from "next/link"
import { Pill, Droplet, Sparkles, FlaskRoundIcon as Flask, TestTubeIcon as Tube, Wind } from "lucide-react"

const iconMap = {
  pill: Pill,
  droplet: Droplet,
  sparkles: Sparkles,
  flask: Flask,
  tube: Tube,
  wind: Wind,
}

type ProductCardProps = {
  name: string
  icon: keyof typeof iconMap
}

export default function ProductCard({ name, icon }: ProductCardProps) {
  const Icon = iconMap[icon]

  return (
    <Link href={`/category/${name.toLowerCase()}`} className="block">
      <div className="bg-white rounded-lg shadow-md p-6 flex flex-col items-center justify-center cursor-pointer hover:shadow-lg transition duration-300">
        <Icon className="h-12 w-12 text-green-600 mb-4" />
        <h3 className="text-lg font-semibold text-center">{name}</h3>
      </div>
    </Link>
  )
}

