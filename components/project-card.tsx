import { Card, CardContent, CardFooter } from "@/components/ui/card"
import Image from "next/image";
import { icons } from "lucide-react";
import { Globe } from 'lucide-react';

import Link from "next/link"

interface ProjectCardProps {
  title: string
  description: string
  image: string
  github: string
  link: string
  tags: string[]
}


export default function ProjectCard({ title, description, image, github, link, tags }: ProjectCardProps) {

  return (
    <Card className="overflow-hidden">
      <div className="relative aspect-video">
      <Link href={link.length > 0 ? link : github} target="_blank">
        <div className="relative aspect-video">
          <Image
            src={image}
            alt={title}
            fill
            className="object-cover transition-transform hover:scale-105"
            unoptimized
          />
        </div>
      </Link>
      </div>
      <CardContent className="p-4">
        <h3 className="font-semibold text-xl mb-2">{title}</h3>
        <p className="text-sm text-muted-foreground mb-4">{description}</p>
        <div className="flex flex-wrap gap-2">
          {tags.map((tag) => (
            <span
              key={tag}
              className="inline-flex items-center rounded-md bg-muted px-2 py-1 text-xs font-medium ring-1 ring-inset ring-gray-500/10"
            >
              {tag}
            </span>
          ))}
        </div>
      </CardContent>
      <CardFooter className="p-4 pt-0 space-x-4">
        <Link href={github} target="_blank" className="inline-flex items-center gap-2 text-sm hover:underline">
          <icons.Github className="h-4 w-4" />
          View on GitHub
        </Link>

        {link.length > 0 && 
          <Link href={link.length > 0 ? link : github} target="_blank" className="inline-flex items-center gap-2 text-sm hover:underline">
            <Globe className="h-4 w-4" />
            View Website
          </Link>
        }
      </CardFooter>
    </Card>
  )
}

