"use client";
import Image from "next/image";

import { Avatar } from "@/components/ui/avatar";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Separator } from "@/components/ui/separator";
import { Badge } from "@/components/ui/badge";
import { 
  Briefcase, 
  GraduationCap, 
  Mail, 
  MapPin, 
  Github, 
  Linkedin,
  Award,
  ExternalLink,
  Code,
  Users,
  Cpu
} from "lucide-react";
import { useState } from "react";

export default function Home() {
  const [activeSection, setActiveSection] = useState("about");

  return (
    <main className="min-h-screen bg-gradient-to-b from-gray-50 to-white">
      {/* Header/Banner Section */}
      <div className="relative ">
        <div className="w-full h-64 bg-gradient-to-r from-blue-600 via-blue-700 to-indigo-800 relative overflow-hidden">
          <div className="absolute inset-0 bg-[url('/frame.png')]  bg-cover bg-center" />
          <div className="absolute inset-0 bg-gradient-to-b from-transparent to-black/30" />
        </div>
        
        {/* Quick Navigation */}
        <div className="absolute bottom-0 left-1/2 transform -translate-x-1/2 ml-[-300px] flex gap-4 mb-4">
          {["about", "experience", "education", "skills"].map((section) => (
            <Button
              key={section}
              variant={activeSection === section ? "default" : "secondary"}
              className="transition-all duration-300"
              onClick={() => setActiveSection(section)}
            >
              {section.charAt(0).toUpperCase() + section.slice(1)}
            </Button>
          ))}
        </div>
      </div>
   
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Profile Section */}
        <Card className=" mb-8 relative border-none shadow-2xl bg-white/80 backdrop-blur-sm mt-16">
          <div className="p-8">
            <div className="flex flex-col md:flex-row items-center md:items-start gap-8">
              <Avatar className="w-40 h-40 border-4 border-white shadow-xl ring-4 ring-blue-500/20">
                
                <Image 
  src="/download.png" 
  alt="Profile" 
  width={160} 
  height={160} 
  className="rounded-full object-cover"
/>
              </Avatar>
              
              <div className="text-center md:text-left ">
                <div className="flex items-center gap-3">
                  <h1 className="text-3xl font-bold bg-gradient-to-r from-blue-600 to-indigo-600 text-transparent bg-clip-text">MUHAMMAD SHAH MIR IQBAL</h1>
                  <Badge variant="secondary" className="h-6">Available for hire</Badge>
                </div>
                <p className="text-xl text-gray-600 mt-1 font-medium">junior Software Engineer</p>
                <div className="flex flex-wrap items-center gap-4 mt-3 text-gray-600 justify-center md:justify-start">
                  <div className="flex items-center gap-2">
                    <MapPin className="w-4 h-4 text-blue-500" />
                    <span>Karachi, Pakistan</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <Mail className="w-4 h-4 text-blue-500" />
                    <span>john.doe@example.com</span>
                  </div>
                </div>
                
                <div className="flex gap-3 mt-6 flex-wrap justify-center md:justify-start">
                  <Button className="bg-blue-600 hover:bg-blue-700">
                    <Users className="w-4 h-4 mr-2" />
                    Connect
                  </Button>
                  <Button variant="outline" className="border-blue-200 hover:bg-blue-50">
                    <Mail className="w-4 h-4 mr-2" />
                    Message
                  </Button>
                  <Button variant="ghost" size="icon" className="text-gray-600 hover:text-blue-600 hover:bg-blue-50">
                    <Github className="w-5 h-5" />
                  </Button>
                  <Button variant="ghost" size="icon" className="text-gray-600 hover:text-blue-600 hover:bg-blue-50">
                    <Linkedin className="w-5 h-5" />
                  </Button>
                </div>
              </div>
            </div>
          </div>
        </Card>

        {/* About Section */}
        <Card className="mb-8 transform hover:scale-[1.02] transition-all duration-300">
          <div className="p-8">
            <div className="flex items-center gap-3 mb-6">
              <Code className="w-6 h-6 text-blue-500" />
              <h2 className="text-2xl font-bold">About</h2>
            </div>
            <p className="text-gray-600 leading-relaxed text-lg">
              Passionate software engineer with over 8 years of experience in building scalable web applications.
              Specialized in React, Node.js, and cloud technologies. Committed to writing clean, maintainable code
              and mentoring junior developers.
            </p>
            <div className="mt-6 flex gap-3">
              <Badge variant="secondary" className="text-blue-600">
                <Cpu className="w-3 h-3 mr-1" /> Tech Lead
              </Badge>
              <Badge variant="secondary" className="text-blue-600">
                <Users className="w-3 h-3 mr-1" /> Mentor
              </Badge>
            </div>
          </div>
        </Card>

        {/* Experience Section */}
        <Card className="mb-8 overflow-hidden">
          <div className="p-8">
            <div className="flex items-center gap-3 mb-8">
              <Briefcase className="w-6 h-6 text-blue-500" />
              <h2 className="text-2xl font-bold">Experience</h2>
            </div>
            
            <div className="space-y-8">
              <div className="relative pl-8 border-l-2 border-blue-100 hover:border-blue-500 transition-colors duration-300">
                <div className="absolute w-4 h-4 bg-blue-500 rounded-full -left-[9px] top-0" />
                <h3 className="text-xl font-bold text-gray-900">Senior Software Engineer</h3>
                <p className="text-blue-600 font-medium">Tech Corp • Full-time</p>
                <p className="text-sm text-gray-500 mt-1">Jan 2020 - Present</p>
                <p className="mt-4 text-gray-600 leading-relaxed">
                  Led development of microservices architecture, improving system scalability by 300%.
                  Mentored junior developers and implemented best practices.
                </p>
                <div className="mt-4 flex gap-2 flex-wrap">
                  {["React", "Node.js", "AWS"].map((tech) => (
                    <Badge key={tech} variant="outline" className="bg-blue-50">
                      {tech}
                    </Badge>
                  ))}
                </div>
              </div>
              
              <div className="relative pl-8 border-l-2 border-blue-100 hover:border-blue-500 transition-colors duration-300">
                <div className="absolute w-4 h-4 bg-blue-500 rounded-full -left-[9px] top-0" />
                <h3 className="text-xl font-bold text-gray-900">Software Engineer</h3>
                <p className="text-blue-600 font-medium">StartUp Inc • Full-time</p>
                <p className="text-sm text-gray-500 mt-1">Jun 2017 - Dec 2019</p>
                <p className="mt-4 text-gray-600 leading-relaxed">
                  Developed and maintained multiple React applications. Implemented CI/CD pipelines
                  and reduced deployment time by 50%.
                </p>
                <div className="mt-4 flex gap-2 flex-wrap">
                  {["React", "TypeScript", "Docker"].map((tech) => (
                    <Badge key={tech} variant="outline" className="bg-blue-50">
                      {tech}
                    </Badge>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </Card>

        {/* Education Section */}
        <Card className="mb-8 transform hover:scale-[1.02] transition-all duration-300">
          <div className="p-8">
            <div className="flex items-center gap-3 mb-6">
              <GraduationCap className="w-6 h-6 text-blue-500" />
              <h2 className="text-2xl font-bold">Education</h2>
            </div>
            
            <div className="bg-gradient-to-r from-blue-50 to-transparent p-6 rounded-lg">
              <h3 className="text-xl font-bold text-gray-900">Bachelor of Science in Computer Science</h3>
              <p className="text-blue-600 font-medium">University of Technology</p>
              <p className="text-sm text-gray-500 mt-1">2013 - 2017</p>
              <div className="mt-4 flex gap-2">
                <Badge variant="secondary">3.8 GPA</Badge>
                <Badge variant="secondary">Dean's List</Badge>
              </div>
            </div>
          </div>
        </Card>

        {/* Skills Section */}
        <Card className="mb-8">
          <div className="p-8">
            <div className="flex items-center gap-3 mb-8">
              <Award className="w-6 h-6 text-blue-500" />
              <h2 className="text-2xl font-bold">Skills</h2>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="space-y-4">
                <h3 className="font-semibold text-gray-900 mb-3">Frontend</h3>
                <div className="flex flex-wrap gap-2">
                  {["JavaScript", "TypeScript", "React", "Next.js", "TailwindCSS"].map((skill) => (
                    <div
                      key={skill}
                      className="px-4 py-2 bg-gradient-to-r from-blue-50 to-blue-100 rounded-full text-sm text-blue-700 font-medium hover:from-blue-100 hover:to-blue-200 transition-colors duration-300 cursor-default"
                    >
                      {skill}
                    </div>
                  ))}
                </div>
              </div>
              
              <div className="space-y-4">
                <h3 className="font-semibold text-gray-900 mb-3">Backend</h3>
                <div className="flex flex-wrap gap-2">
                  {["Node.js", "Python", "GraphQL", "MongoDB", "PostgreSQL"].map((skill) => (
                    <div
                      key={skill}
                      className="px-4 py-2 bg-gradient-to-r from-blue-50 to-blue-100 rounded-full text-sm text-blue-700 font-medium hover:from-blue-100 hover:to-blue-200 transition-colors duration-300 cursor-default"
                    >
                      {skill}
                    </div>
                  ))}
                </div>
              </div>
              
              <div className="space-y-4">
                <h3 className="font-semibold text-gray-900 mb-3">DevOps</h3>
                <div className="flex flex-wrap gap-2">
                  {["AWS", "Docker", "Kubernetes", "CI/CD", "Linux"].map((skill) => (
                    <div
                      key={skill}
                      className="px-4 py-2 bg-gradient-to-r from-blue-50 to-blue-100 rounded-full text-sm text-blue-700 font-medium hover:from-blue-100 hover:to-blue-200 transition-colors duration-300 cursor-default"
                    >
                      {skill}
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </Card>
      </div>
    </main>
  );
}