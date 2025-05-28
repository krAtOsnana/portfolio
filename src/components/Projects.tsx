import { Card } from "@/components/ui/card"
import Image from "next/image"

export default function Component() {
  const cards = [
    {
      title: "Banner 1",
      image: "/placeholder.svg?height=400&width=300",
      description: "Explore amazing content",
    },
    {
      title: "Banner 2",
      image: "/placeholder.svg?height=400&width=300",
      description: "Discover new items",
    },
    {
      title: "Banner 3",
      image: "/placeholder.svg?height=400&width=300",
      description: "Special offers inside",
    },
    {
      title: "Banner 4",
      image: "/placeholder.svg?height=400&width=300",
      description: "Limited time deals",
    },
    {
      title: "Banner 5",
      image: "/placeholder.svg?height=400&width=300",
      description: "New arrivals here",
    },
    {
      title: "Banner 6",
      image: "/placeholder.svg?height=400&width=300",
      description: "Featured collection",
    },
    {
      title: "Banner 7",
      image: "/placeholder.svg?height=400&width=300",
      description: "Trending now",
    },
  ]

  return (
    <div className="w-full p-4">
      <div className="flex overflow-x-auto space-x-3 pb-4 snap-x snap-mandatory no-scrollbar">
        {cards.map((card, index) => (
          <div key={index} className="snap-center shrink-0">
            <Card className="w-[200px] h-[200px] overflow-hidden ">
              <div className="h-[70%] relative">
                <Image
                  height={300}
                  width={300}
                  src={card.image || "/placeholder.svg"}
                  alt={`Banner for ${card.title}`}
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="h-[30%] p-4 flex flex-col justify-center">
                <h3 className="text-xl font-semibold mb-2">{card.title}</h3>
                <p className="text-sm text-muted-foreground">{card.description}</p>
              </div>
            </Card>
          </div>
        ))}
      </div>
    </div>
  )
}

