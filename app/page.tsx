import Link from "next/link";
import Navbar from "@/components/navbar";
import Footer from "@/components/footer";
import { buttonVariants } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";

export default function Home() {
  return (
    <div className="min-h-screen bg-zinc-50 dark:bg-zinc-950 text-zinc-900 dark:text-zinc-50 flex flex-col justify-between">
      <Navbar />

      <main className="max-w-4xl w-full mx-auto px-6 py-12 space-y-8">
        {/* ส่วนต้อนรับหลัก */}
        <section className="text-center space-y-4 py-8">
          <Badge variant="secondary" className="px-3 py-1">
            รายวิชา 9024131 • Web Development
          </Badge>
          <h1 className="text-4xl sm:text-5xl font-bold tracking-tight">
            ยินดีต้อนรับสู่เว็บไซต์โปรไฟล์
          </h1>
          <p className="text-zinc-600 dark:text-zinc-400 max-w-xl mx-auto">
            เว็บไซต์รวบรวมข้อมูลประวัติส่วนตัว ประวัติการศึกษา และผลงานการส่งงานในรายวิชา พัฒนาด้วย Next.js, Tailwind CSS และ shadcn/ui
          </p>
          <div className="flex justify-center gap-3 pt-2">
            <Link href="/bio" className={buttonVariants({ variant: "default" })}>
              ดูประวัติส่วนตัว (Bio)
            </Link>
            <Link
              href="/assignment"
              className={buttonVariants({ variant: "outline" })}
            >
              ดูรายการงาน (Assignment)
            </Link>
          </div>
        </section>

        {/* การ์ดสรุปเมนูย่อย */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
          <Card>
            <CardHeader>
              <CardTitle>ประวัติส่วนตัว (Bio)</CardTitle>
              <CardDescription>
                ข้อมูลนักศึกษา ประวัติการศึกษา และผลการเรียนสะสม
              </CardDescription>
            </CardHeader>
            <CardContent>
              <p className="text-sm text-zinc-600 dark:text-zinc-400 mb-4">
                นายธนากร เสนามนตรี สาขาวิชาเทคโนโลยีสารสนเทศ คณะวิทยาการคอมพิวเตอร์และเทคโนโลยีสารสนเทศ
              </p>
              <Link
                href="/bio"
                className={buttonVariants({ variant: "secondary", size: "sm" })}
              >
                ไปยังหน้า Bio &rarr;
              </Link>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle>รายการงานที่ได้รับมอบหมาย (Assignment)</CardTitle>
              <CardDescription>
                รวบรวมแบบฝึกหัดและชิ้นงานประจำสัปดาห์
              </CardDescription>
            </CardHeader>
            <CardContent>
              <p className="text-sm text-zinc-600 dark:text-zinc-400 mb-4">
                ติดตามความคืบหน้าการส่งงานและการพัฒนาเว็บแอปพลิเคชันในแต่ละสัปดาห์
              </p>
              <Link
                href="/assignment"
                className={buttonVariants({ variant: "secondary", size: "sm" })}
              >
                ไปยังหน้า Assignment &rarr;
              </Link>
            </CardContent>
          </Card>
        </div>
      </main>

      <footer className="border-t py-6 text-center text-xs text-zinc-500 bg-white dark:bg-zinc-900">
        <Footer />
      </footer>
    </div>
  );
}