import Navbar from "@/components/navbar";
import Footer from "@/components/footer";
import { Badge } from "@/components/ui/badge";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";

export default function AssignmentPage() {
  const assignments = [
    {
      id: "w01",
      title: "สัปดาห์ที่ 1: แนะนำรายวิชาและเตรียมเครื่องมือพัฒนาเว็บ",
      description: "ติดตั้ง Node.js, VS Code และทำความเข้าใจพื้นฐานการทำงานของเว็บแอปพลิเคชัน",
      status: "ส่งแล้ว",
      completed: true,
    },
    {
      id: "w02",
      title: "สัปดาห์ที่ 2: สร้างเว็บไซต์โปรไฟล์ด้วย Next.js และ shadcn/ui",
      description:
        "ออกแบบหน้าเว็บประกอบด้วย Home, Bio, Assignment สร้าง Component ของตัวเองอย่างน้อย 2 รายการ (Navbar, Footer) และเรียกใช้งาน shadcn/ui",
      status: "กำลังดำเนินการ (ครบกำหนด 20 พ.ย.)",
      completed: true,
    },
  ];

  return (
    <div className="min-h-screen bg-zinc-50 dark:bg-zinc-950 text-zinc-900 dark:text-zinc-50 flex flex-col justify-between">
      <Navbar />

      <main className="max-w-4xl w-full mx-auto px-6 py-10 space-y-6">
        <div>
          <h1 className="text-3xl font-bold tracking-tight">
            รายการงานที่ได้รับมอบหมาย (Assignments)
          </h1>
          <p className="text-sm text-zinc-500 mt-1">
            รวบรวมผลงานและแบบฝึกหัดในรายวิชา
          </p>
        </div>

        <div className="space-y-4">
          {assignments.map((item) => (
            <Card key={item.id}>
              <CardHeader className="flex flex-row items-start justify-between gap-4">
                <div>
                  <div className="flex items-center gap-2 mb-1">
                    <Badge variant="outline" className="uppercase">
                      {item.id}
                    </Badge>
                    <Badge
                      className={
                        item.completed
                          ? "bg-emerald-600 hover:bg-emerald-700 text-white"
                          : ""
                      }
                    >
                      {item.status}
                    </Badge>
                  </div>
                  <CardTitle className="text-lg">{item.title}</CardTitle>
                  <CardDescription className="mt-1">
                    {item.description}
                  </CardDescription>
                </div>
              </CardHeader>
              <CardContent>
                <p className="text-xs text-zinc-500">
                  เทคโนโลยีที่ใช้: Next.js, TypeScript, Tailwind CSS, shadcn/ui
                </p>
              </CardContent>
            </Card>
          ))}
        </div>
      </main>

      <footer className="border-t py-6 text-center text-xs text-zinc-500 bg-white dark:bg-zinc-900">
        <Footer />
      </footer>
    </div>
  );
}