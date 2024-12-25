'use client'

import { useEffect, useState } from 'react'
import { Search, RefreshCw, Plus, Menu, X } from 'lucide-react'
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Sidebar } from '@/components/SideBar'
import { repositories } from '@/lib/authButtons'
import Image from 'next/image'


export default function RepositoryDashboard() {
  const [isOpen, setIsOpen] = useState(false)

  // Add effect to handle body class
  useEffect(() => {
    if (isOpen) {
      document.body.classList.add('bg-[#f7f3f3]')
    } else {
      document.body.classList.remove('bg-[#f7f3f3]')
    }

    // Cleanup function
    return () => {
      document.body.classList.remove('bg-[#f7f3f3]')
    }
  }, [isOpen])

  return (
    <div className={`min-h-screen flex flex-col md:flex-row ${isOpen ? 'bg-[#f7f3f3]' : ''}`}>
      {/* Desktop Sidebar */}
      <aside className="hidden md:block w-56 border-r">
        <Sidebar />
      </aside>

      {/* Mobile Header & Sidebar */}
      <div className="md:hidden fixed top-0 left-0 right-0 z-10 bg-background border-b">
        <div className="flex items-center justify-between p-4">
          <div className="flex items-center gap-2">
            <Image src="/logo.svg" alt="CodeAnt AI" width={32} height={32} className="w-auto h-8" />
            <span className="text-2xl text-[#181D27]">CodeAnt AI</span>
          </div>
          <Button variant="ghost" size="icon" onClick={() => setIsOpen(!isOpen)}>
            {isOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
          </Button>
        </div>
        {isOpen && (
          <div className="border-b">
            <Sidebar isMobile={true} />
          </div>
        )}
      </div>

      {/* Main Content */}
      <main className={`flex-1 md:p-8 w-full md:pt-8 pt-20 ${isOpen ? 'bg-[#f7f3f3]' : 'bg-[#FAFAFA]'}`}>
        <div className="pt-4 md:border border-[#D5D7DA] mx-auto md:bg-white md:pt-3 rounded-lg">
          <div className="px-4 flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4 mb-6">
            <div>
              <h2 className="text-2xl text-[#181D27] font-bold">Repositories</h2>
              <p className="text-muted-foreground">33 total repositories</p>
            </div>
            <div className="flex gap-2 w-full sm:w-auto">
              <Button variant="outline" className="flex-1 w-2/4 sm:flex-initial">
                <RefreshCw className="w-4 h-4 mr-2" />
                Refresh All
              </Button>
              <Button className="flex-1 w-2/4 sm:flex-initial bg-[#1570EF] ">
                <Plus className="w-4 h-4 mr-2" />
                Add Repository
              </Button>
            </div>
          </div>

          <div className="mb-6 px-4 md:w-[45%] lg:w-[35%] xl:w-[25%]">
            <div className="relative">
              <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-muted-foreground" />
              <Input
                placeholder="Search Repositories"
                className="pl-9"
              />
            </div>
          </div>

          <div>
            {repositories.map((repo) => (
              <div
                key={repo.name}
                className={`p-4 border-t border-[#D5D7DA] hover:bg-accent/50 transition-colors ${isOpen ? 'bg-[#f7f3f3]' : ''}`}
              >
                <div className="flex flex-col sm:flex-row sm:items-center gap-2 sm:gap-4">
                  <div className="flex-1">
                    <div className="flex items-center gap-2">
                      <h3 className="font-semibold text-[#181D27]">{repo.name}</h3>
                      <Badge variant={repo.isPublic ? "secondary" : "outline"} className='bg-[#EFF8FF] border border-[#B2DDFF] text-[#175CD3]'>
                        {repo.isPublic ? 'Public' : 'Private'}
                      </Badge>
                    </div>
                    <div className="flex items-center gap-4 text-sm mt-1 text-[#181D27]">
                      <div className="flex items-center gap-1 ">
                        {repo.language}
                        <span className="w-2 h-2 rounded-full bg-[#1570EF]" />
                      </div>
                      <div className='flex justify-center items-center gap-1'>
                        <Image src="./database.svg" alt='Database logo'width={10} height={10} className="w-auto h-3" />
                        {repo.size}
                      </div>
                      <div>Updated {repo.updatedAt}</div>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </main>
    </div>
  )
}

