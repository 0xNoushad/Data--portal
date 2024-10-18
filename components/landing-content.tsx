"use client";

import { Card, CardContent, CardHeader, CardTitle } from "./ui/card";

const testimonials = [
  {
    name: "John Doe",
    avatar: "JD",
    title: "Software Engineer",
    description: "This is the best application I've ever used!",
  },
  {
    name: "Jane Smith",
    avatar: "JS",
    title: "UX Designer",
    description: "The AI-generated designs are incredibly inspiring!",
  },
  {
    name: "Mike Johnson",
    avatar: "MJ",
    title: "Content Creator",
    description: "This tool has revolutionized my content creation process.",
  },
  {
    name: "Emily Brown",
    avatar: "EB",
    title: "Marketing Manager",
    description: "The AI-powered analytics have greatly improved our campaigns.",
  },
]

export default function LandingContent() {
  return (
    <div className="w-full flex justify-center px-4 py-20">
      <div className="w-full max-w-6xl space-y-10">
        <h2 className="text-center text-4xl text-white font-extrabold">
          Testimonials
        </h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {testimonials.map((item) => (
            <Card 
              key={item.name} 
              className="bg-black bg-opacity-80 border-none text-white rounded-2xl hover:bg-opacity-100 transition-all duration-200"
            >
              <CardHeader>
                <CardTitle className="flex items-center gap-x-4">
                
                  <div>
                    <p className="text-lg font-semibold">{item.name}</p>
                    <p className="text-zinc-400 text-sm">{item.title}</p>
                  </div>
                </CardTitle>
              </CardHeader>
              <CardContent className="pt-4 px-6">
                "{item.description}"
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </div>
  )
}