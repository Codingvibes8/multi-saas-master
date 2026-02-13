import { Card, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { cn } from "@/lib/utils"
import { MessageSquare, Code, ImageIcon, Music, VideoIcon, ArrowRight } from "lucide-react"
import Link from "next/link"

const tools = [
    {
        label: "Conversation",
        icon: MessageSquare,
        href: "/conversation",
        color: "text-violet-500",
        bgColor: "bg-violet-500/10",
    },
    {
        label: "Code Generation",
        icon: Code,
        href: "/code",
        color: "text-green-500",
        bgColor: "bg-green-500/10",
    },
    {
        label: "Image Generation",
        icon: ImageIcon,
        href: "/image",
        color: "text-pink-500",
        bgColor: "bg-pink-500/10",
    },
    {
        label: "Music Generation",
        icon: Music,
        href: "/music",
        color: "text-orange-500",
        bgColor: "bg-orange-500/10",
    },
    {
        label: "Video Generation",
        icon: VideoIcon,
        href: "/video",
        color: "text-blue-500",
        bgColor: "bg-blue-500/10",
    },
]

export default async function DashboardPage() {
    const user = await (await import("@/lib/supabaseServer")).getServerUser()

    if (!user?.id) {
        return null
    }

    return (
        <div>
            <div className="mb-8 space-y-4">
                <h2 className="text-2xl md:text-4xl font-bold text-center">Explore the Power of AI</h2>
                <p className="text-muted-foreground font-light text-sm md:text-lg text-center">
                    Chat with the smartest AI - Experience the power of AI with our tools
                </p>
            </div>
            <div className="px-4 md:px-20 lg:px-32 space-y-4">
                <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
                    {tools.map((tool) => (
                        <Link href={tool.href} key={tool.href}>
                            <Card className="border-black/5 flex flex-col justify-between h-full hover:shadow-md transition cursor-pointer">
                                <CardHeader>
                                    <div className="flex items-center gap-x-2">
                                        <div className={cn("p-2 w-fit rounded-md", tool.bgColor)}>
                                            <tool.icon className={cn("w-6 h-6", tool.color)} />
                                        </div>
                                        <CardTitle className="text-lg">{tool.label}</CardTitle>
                                    </div>
                                </CardHeader>
                                <CardFooter className="flex justify-end">
                                    <ArrowRight className="w-5 h-5" />
                                </CardFooter>
                            </Card>
                        </Link>
                    ))}
                </div>
            </div>
        </div>
    )
}

