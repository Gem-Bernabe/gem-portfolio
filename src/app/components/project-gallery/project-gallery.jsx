import Image from "next/image";
import { Card, CardContent } from "@/components/ui/card";

export function ProjectGallery() {
  // Sample gallery items - replace with your actual project screenshots
  const galleryItems = [
    {
      id: 1,
      src: "/placeholder.svg?height=600&width=800",
      alt: "Project Screenshot 1",
    },
    {
      id: 2,
      src: "/placeholder.svg?height=600&width=800",
      alt: "Project Screenshot 2",
    },
    {
      id: 3,
      src: "/placeholder.svg?height=600&width=800",
      alt: "Project Screenshot 3",
    },
    {
      id: 4,
      src: "/placeholder.svg?height=600&width=800",
      alt: "Project Screenshot 4",
    },
  ];

  return (
    <div className="grid grid-cols-1 gap-6 md:grid-cols-2">
      {galleryItems.map((item) => (
        <Card key={item.id} className="overflow-hidden">
          <CardContent className="p-0">
            <div className="relative aspect-video overflow-hidden">
              <Image
                src={item.src || "/placeholder.svg"}
                alt={item.alt}
                width={800}
                height={600}
                className="object-cover transition-transform duration-300 hover:scale-105"
              />
            </div>
          </CardContent>
        </Card>
      ))}
    </div>
  );
}
