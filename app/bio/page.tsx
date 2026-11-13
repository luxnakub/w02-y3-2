import Image from "next/image";
import Navbar from "@/components/navbar";
import Footer from "@/components/footer";
import { Badge } from "@/components/ui/badge";
import { Separator } from "@/components/ui/separator";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";

export default function BioPage() {
  return (
    <div className="min-h-screen bg-zinc-50 dark:bg-zinc-950 text-zinc-900 dark:text-zinc-50 flex flex-col justify-between">
      <Navbar />

      <main className="max-w-4xl w-full mx-auto px-6 py-10 space-y-6">
        {/* 1. การ์ดโปรไฟล์หลัก */}
        <Card className="overflow-hidden">
          <CardContent className="p-6 sm:p-8 flex flex-col sm:flex-row items-center sm:items-start gap-6">
            <div className="relative w-36 h-36 rounded-2xl overflow-hidden border-2 border-zinc-200 dark:border-zinc-800 shrink-0 shadow-sm">
              <Image
                src="/images/mao.jpg"
                alt="Thanakon Senamontri"
                fill
                className="object-cover"
              />
            </div>

            <div className="flex-1 text-center sm:text-left space-y-3">
              <div className="flex flex-wrap items-center justify-center sm:justify-start gap-2">
                <Badge variant="secondary">รหัสนักศึกษา 6714421035</Badge>
                <Badge className="bg-emerald-600 hover:bg-emerald-700 text-white">
                  สถานะ: ปกติ
                </Badge>
              </div>

              <div>
                <h1 className="text-3xl font-bold tracking-tight">
                  นายธนากร เสนามนตรี
                </h1>
                <p className="text-sm font-medium text-zinc-500 dark:text-zinc-400">
                  MR. THANAKON SENAMONTRI
                </p>
              </div>

              <p className="text-sm text-zinc-600 dark:text-zinc-300">
                นักศึกษาชั้นปีที่ 3 สาขาวิชาเทคโนโลยีสารสนเทศ คณะวิทยาการคอมพิวเตอร์และเทคโนโลยีสารสนเทศ มหาวิทยาลัยราชภัฏรำไพพรรณี (ศูนย์จันทบุรี)
              </p>

              <div className="pt-1 flex flex-wrap justify-center sm:justify-start gap-4 text-xs text-zinc-500">
                <span>📧 thanakonsenamontri@gmail.com</span>
                <span>📞 094-227-9159</span>
              </div>
            </div>
          </CardContent>
        </Card>

        {/* 2. การ์ดข้อมูลส่วนตัว และ ข้อมูลการศึกษา */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <Card>
            <CardHeader>
              <CardTitle className="text-lg">ข้อมูลส่วนตัว (Personal Info)</CardTitle>
              <CardDescription>รายละเอียดพื้นฐานและประวัติการเรียน</CardDescription>
            </CardHeader>
            <CardContent className="space-y-3 text-sm">
              <div className="flex justify-between">
                <span className="text-zinc-500">วัน/เดือน/ปีเกิด</span>
                <span className="font-medium">21 มกราคม 2549</span>
              </div>
              <Separator />
              <div className="flex justify-between">
                <span className="text-zinc-500">ภูมิลำเนา</span>
                <span className="font-medium">จ.สระแก้ว</span>
              </div>
              <Separator />
              <div className="flex justify-between">
                <span className="text-zinc-500">สัญชาติ / เชื้อชาติ</span>
                <span className="font-medium">ไทย / ไทย</span>
              </div>
              <Separator />
              <div className="flex justify-between">
                <span className="text-zinc-500">หมู่เลือด</span>
                <span className="font-medium">AB</span>
              </div>
              <Separator />
              <div className="flex justify-between">
                <span className="text-zinc-500">จบการศึกษาจาก</span>
                <span className="font-medium">โรงเรียนวังน้ำเย็นวิทยาคม</span>
              </div>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle className="text-lg">ข้อมูลนักศึกษา (Student Info)</CardTitle>
              <CardDescription>หลักสูตรวิทยาศาสตรบัณฑิต (4 ปี)</CardDescription>
            </CardHeader>
            <CardContent className="space-y-3 text-sm">
              <div className="flex justify-between">
                <span className="text-zinc-500">สาขาวิชา</span>
                <span className="font-medium">เทคโนโลยีสารสนเทศ (105780)</span>
              </div>
              <Separator />
              <div className="flex justify-between">
                <span className="text-zinc-500">คณะ</span>
                <span className="font-medium text-right">
                  วิทยาการคอมพิวเตอร์และเทคโนโลยีสารสนเทศ
                </span>
              </div>
              <Separator />
              <div className="flex justify-between">
                <span className="text-zinc-500">ปีการศึกษาที่เข้า</span>
                <span className="font-medium">1/2567 (4 มิ.ย. 2567)</span>
              </div>
              <Separator />
              <div className="flex justify-between">
                <span className="text-zinc-500">วิธีรับเข้า</span>
                <span className="font-medium">สอบคัดเลือก</span>
              </div>
              <Separator />
              <div className="flex justify-between">
                <span className="text-zinc-500">อาจารย์ที่ปรึกษา</span>
                <span className="font-medium">อาจารย์นิทัศน์ นิลฉวี</span>
              </div>
            </CardContent>
          </Card>
        </div>

        {/* 3. การ์ดสรุปผลการศึกษา */}
        <Card>
          <CardHeader>
            <CardTitle className="text-lg">สรุปผลการศึกษา (Academic Summary)</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 text-center">
              <div className="p-4 rounded-xl bg-zinc-100 dark:bg-zinc-900">
                <p className="text-xs text-zinc-500 mb-1">หน่วยกิตคำนวณ</p>
                <p className="text-2xl font-bold">118</p>
              </div>
              <div className="p-4 rounded-xl bg-zinc-100 dark:bg-zinc-900">
                <p className="text-xs text-zinc-500 mb-1">หน่วยกิตที่ลงสะสม</p>
                <p className="text-2xl font-bold">99</p>
              </div>
              <div className="p-4 rounded-xl bg-zinc-100 dark:bg-zinc-900">
                <p className="text-xs text-zinc-500 mb-1">หน่วยกิตที่ผ่านสะสม</p>
                <p className="text-2xl font-bold">93</p>
              </div>
              <div className="p-4 rounded-xl bg-primary/10 border border-primary/20">
                <p className="text-xs text-primary font-medium mb-1">เกรดเฉลี่ยสะสม (GPAX)</p>
                <p className="text-2xl font-bold text-primary">2.96</p>
              </div>
            </div>
          </CardContent>
        </Card>
      </main>

      <footer className="border-t py-6 text-center text-xs text-zinc-500 bg-white dark:bg-zinc-900">
        <Footer />
      </footer>
    </div>
  );
}