// Suggested code may be subject to a license. Learn more: ~LicenseLog:3084397698.
// Suggested code may be subject to a license. Learn more: ~LicenseLog:2956597906.
import { Home, Code, Shield, Book, Settings, Phone, LogOut } from 'lucide-react'
import { Button } from "@/components/ui/button"
import Image from 'next/image';
import Link from 'next/link';

interface SidebarProps {
    isMobile?: boolean;
}

export function Sidebar({ isMobile = false }: SidebarProps) {
    return (
        <div className="flex flex-col h-full">
            {!isMobile && (
                <div className="p-4 flex items-center gap-2">
                    <Image src="/logo.svg" alt="CodeAnt AI" width={32} height={32} className="w-auto h-8" />
                    <h1 className="text-2xl text-[#181D27] font-light">CodeAnt AI</h1>
                </div>
            )}
            <div className="relative px-2 flex items-center justify-center">
                <div className="relative w-full lg:w-64">
                    <select className="w-full p-2 bg-background border rounded-xl appearance-none cursor-pointer truncate pr-10">
                        <option>UtkarshDhairyaPanwar</option>
                    </select>
                    <div className="absolute right-4 top-1/2 transform -translate-y-1/2 pointer-events-none">
                        <svg width="12" height="8" viewBox="0 0 12 8" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M1 1L6 6L11 1" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
                        </svg>
                    </div>
                </div>
            </div>


            <nav className="px-2 pt-2 lg:p-2 space-y-1">
                <Button variant="ghost" className="w-full justify-start gap-2 hover:bg-[#1570EF] hover:text-white">
                    <Home className="w-4 h-4" />
                    Repositories
                </Button>
                <Button variant="ghost" className="w-full justify-start gap-2 hover:bg-[#1570EF] hover:text-white">
                    <Code className="w-4 h-4" />
                    AI Code Review
                </Button>
                <Button variant="ghost" className="w-full justify-start gap-2 hover:bg-[#1570EF] hover:text-white">
                    <Shield className="w-4 h-4" />
                    Cloud Security
                </Button>
                <Button variant="ghost" className="w-full justify-start gap-2 hover:bg-[#1570EF] hover:text-white">
                    <Book className="w-4 h-4" />
                    How to Use
                </Button>
                <Button variant="ghost" className="w-full justify-start gap-2 hover:bg-[#1570EF] hover:text-white">
                    <Settings className="w-4 h-4" />
                    Settings
                </Button>
            </nav>

            <div className="px-2 md:mt-auto lg:p-2 space-y-1">
                <Button variant="ghost" className="w-full justify-start gap-2 hover:bg-[#1570EF] hover:text-white">
                    <Phone className="w-4 h-4" />
                    Support
                </Button>
                <Link href="/">
                    <Button variant="ghost" className="w-full justify-start gap-2 hover:bg-[#1570EF] hover:text-white">
                        <LogOut className="w-4 h-4" />
                        Logout
                    </Button>
                </Link>
            </div>
        </div>
    )
}

