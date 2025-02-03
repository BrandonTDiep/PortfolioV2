import { Button } from "@/components/ui/button"
import { icons } from "lucide-react";
import { Mail, FileUser  } from "lucide-react"
import Link from "next/link"
import Image from "next/image"
import ContactForm from "@/components/contact-form"
import ProjectCard from "@/components/project-card"
import TechStack from "@/components/tech-stack"

import Brandon from "@/public/images/photoofme.jpg"




export default function Home() {
  return (
    <div className="min-h-screen bg-background">
      <header className="sticky top-0 z-50 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60 mx-auto px-5">
        <div className="container mx-auto flex h-14 items-center">
          <div className="mr-4  md:flex">
            <Link className="mr-6 flex items-center space-x-2" href="/">
              <span className="font-bold sm:inline-block">Brandon Diep</span>
            </Link>
            <nav className="flex items-center space-x-6 text-sm font-medium">
              <Link href="#about" className="transition-colors hover:text-foreground/80">
                About
              </Link>
              <Link href="#projects" className="transition-colors hover:text-foreground/80">
                Projects
              </Link>
              <Link href="#contact" className="transition-colors hover:text-foreground/80">
                Contact
              </Link>
            </nav>
          </div>
          <Link href="/pdfs/Brandon_Diep_Resume.pdf" target="_blank" className="ml-auto">
            <Button variant="outline">
              Resume
            </Button>
          </Link>
        </div>
      </header>

      <main className="container px-4 md:px-6 mx-auto">
        <section id="about" className="py-12 md:py-24 lg:py-32">
          <div className="container px-4 md:px-6">
            <div className="flex flex-col items-center justify-center space-y-4 text-center">
              <Image
                src={Brandon}
                alt="Brandon Diep"
                width={128}
                height={128}
                className="object-cover rounded-full"
              />
              <div className="space-y-2">
                <h1 className="text-4xl font-semibold">Brandon Diep</h1>
                <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl lg:text-6xl/none">
                  Full Stack Developer
                </h2>
                <p className="mx-auto max-w-[700px] text-gray-500 md:text-xl dark:text-gray-400">
                  Dedicated to applying technical skills to solve real-world challenges and deliver impactful solutions.
                </p>
              </div>
              <div className="space-x-4">
                <Link href="https://github.com/BrandonTDiep" target="_blank">
                  <Button variant="outline" size="icon">
                    <icons.Github className="h-4 w-4" />
                    <span className="sr-only">GitHub</span>
                  </Button>
                </Link>
                <Link href="https://www.linkedin.com/in/brandon-diep" target="_blank">
                  <Button variant="outline" size="icon">
                    <icons.Linkedin className="h-4 w-4" />
                    <span className="sr-only">LinkedIn</span>
                  </Button>
                </Link>
                <Link href="/pdfs/Brandon_Diep_Resume.pdf" target="_blank">
                  <Button variant="outline" size="icon">
                    <FileUser className="h-4 w-4" />
                    <span className="sr-only">Resume</span>
                  </Button>
                </Link>
                <Link href="mailto:brandondiep2711@gmail.com">
                  <Button variant="outline" size="icon">
                    <Mail className="h-4 w-4" />
                    <span className="sr-only">Email</span>
                  </Button>
                </Link>
              </div>
            </div>
          </div>
        </section>

        <section id="projects" className="py-12 md:py-24 lg:py-32">
          <div className="container px-4 md:px-6">
            <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl mb-12 text-center">Projects</h2>
            <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
              <ProjectCard
                title="SentiMusic"
                description="Music Recommender site that provides songs based on a user's mood or feelings to add to Spotify."
                image="/gifs/sentimusic.gif"
                github="https://github.com/BrandonTDiep/SentiMusic"
                link="https://sentimusic.onrender.com"
                tags={["React", "Express.js", "Node.js", "TailwindCSS"]}
              />
              <ProjectCard
                title="B-commerce"
                description="E-commerce site for users to search, save, and add products to your cart."
                image="/gifs/b-commerce.gif"
                github="https://github.com/BrandonTDiep/B-commerce"
                link="https://b-commerce-client.onrender.com"
                tags={["React", "Express.js", "Node.js", "MongoDB"]}
              />
              <ProjectCard
                title="My Pokémon Card Facts"
                description="Pokémon card site that provides information and prices on a pokémon."
                image="/gifs/pokemon.gif"
                github="https://github.com/BrandonTDiep/MyPokemonCardFacts"
                link="https://mypokemoncardfacts.netlify.app"
                tags={["React", "TailwindCSS", "shadcn/ui"]}
              />
              <ProjectCard
                title="MovieTime"
                description="Movie Review site allowing users to create reviews and follow each other."
                image="/gifs/movietime.gif"
                github="https://github.com/BrandonTDiep/MovieTime"
                link="https://movietime-84jm.onrender.com"
                tags={["HTML5", "CSS3", "Javascript", "Node.js", "Express.js", "MongoDB"]}
              />
              <ProjectCard
                title="Civil Engr. Faculty Search Engine"
                description="Civil Engr. Faculty Search Engine for information based on various research interests, publications, and more."
                image="/gifs/search-engine.gif"
                github="https://github.com/CastroIROCZ/4250.01-Search-Engine-Project"
                link="https://civil-eng-search-engine.onrender.com"
                tags={["HTML5", "CSS3", "Javascript", "Flask"]}
              />
              <ProjectCard
                title="Cookie Clicker Game"
                description="Cookie Clicker Game with online saves, a leaderboard, and an interactive shop."
                image="/gifs/cookie-clicker.gif"
                github="https://github.com/CS4650FallSemester2023/FinalProject"
                link="https://mypokemoncardfacts.netlify.app"
                tags={["React", "Django"]}
              />
              <ProjectCard
                title="Stargazers Society"
                description="Stargazers Society site integrating NASA API APOD to display astronomy picture of the day and its description."
                image="/gifs/stargazer.gif"
                github="https://github.com/BrandonTDiep/Stargazers-Society"
                link="https://stargazerssociety.netlify.app/"
                tags={["HTML5", "CSS3", "Javascript"]}
              />
              <ProjectCard
                title="Blossom Hair Salon"
                description="Blossom Hair Salon site debuting stylists, gallery of looks and services."
                image="/gifs/blossomhairsalon.gif"
                github="https://github.com/BrandonTDiep/Blossom-Hair-Salon"
                link="https://blossomhairsalon.netlify.app"
                tags={["HTML5", "CSS3", "Javascript"]}
              />
              <ProjectCard
                title="Patient Scheduling System"
                description="Patient Scheduling System helping patients create an account and schedule appointments."
                image="/gifs/pss.gif"
                github="https://github.com/CS3560-01-2-patient/patient-scheduling-system"
                link=""
                tags={["Java", "SQL"]}
              />
              <ProjectCard
                title="Mama's Recipes"
                description="Mama's Recipe app made for anyone looking for an easy way to save their beloved mama's recipes."
                image="/gifs/mama-recipe.gif"
                github="https://github.com/BrandonTDiep/mama-recipe"
                link=""
                tags={["Dart", "Flutter", "Firebase"]}
              />
            </div>
          </div>
        </section>

        <section className="py-12 md:py-24 lg:py-32">
          <div className="container px-4 md:px-6">
            <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl mb-12 text-center">
              Tech Stack
            </h2>
            <TechStack />
          </div>
        </section>

        <section id="contact" className="py-12 md:py-24 lg:py-32">
          <div className="container px-4 md:px-6">
            <div className="mx-auto max-w-2xl">
              <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl mb-12 text-center">
                Get in Touch
              </h2>
              <div className="flex flex-row justify-center gap-5">
                <Link href="https://github.com/BrandonTDiep" target="_blank" className="hover:text-foreground/80">
                    <icons.Github className="h-28 w-28" />
                    <span className="sr-only">GitHub</span>
                </Link>
                <Link href="https://www.linkedin.com/in/brandon-diep" target="_blank" className="hover:text-foreground/80">
                    <icons.Linkedin className="h-28 w-28" />
                    <span className="sr-only">LinkedIn</span>
                </Link>
                <Link href="mailto:brandondiep2711@gmail.com" className="hover:text-foreground/80">
                    <Mail className="h-28 w-28"/>
                    <span className="sr-only">Email</span>
                </Link>
              </div>
              
              {/* <ContactForm /> */}
            </div>
          </div>
        </section>
      </main>

      <footer className="border-t">
        <div className="container flex flex-col gap-2 sm:flex-row py-6 w-full shrink-0 items-center justify-center px-4 md:px-6 mx-auto">
          <p className="text-xs text-gray-500 dark:text-gray-400">© {new Date().getFullYear()} Brandon Diep. All rights reserved.</p>
        </div>
      </footer>
    </div>
  )
}

