import { useState } from "react";
import { Calendar, Clock, User, Phone, Mail, Sparkles } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { Calendar as CalendarComponent } from "@/components/ui/calendar";
import { Popover, PopoverContent, PopoverTrigger } from "@/components/ui/popover";
import { format } from "date-fns";
import { th } from "date-fns/locale";
import { cn } from "@/lib/utils";
import { toast } from "sonner";
import nautilusShell from "@/assets/nautilus-shell-clean.png";

const spaPackages = [{
  id: 1,
  name: "Deep Sea Facial",
  duration: "90 นาที",
  description: "ทรีทเมนต์ผิวหน้าสูตรพิเศษจากสารสกัดทะเลลึก"
}, {
  id: 2,
  name: "Aquaterra Body Treatment",
  duration: "120 นาที",
  description: "การบำรุงผิวกายเต็มรูปแบบด้วยแร่ธาตุจากมหาสมุทร"
}, {
  id: 3,
  name: "Coral Renewal Therapy",
  duration: "150 นาที",
  description: "ทรีทเมนต์ฟื้นฟูผิวระดับพรีเมี่ยมด้วยสารสกัดจากปะการัง"
}];
const timeSlots = ["10:00", "11:00", "12:00", "13:00", "14:00", "15:00", "16:00", "17:00", "18:00", "19:00"];
const Spa = () => {
  const [date, setDate] = useState<Date>();
  const [selectedTime, setSelectedTime] = useState<string>("");
  const [selectedPackage, setSelectedPackage] = useState<string>("");
  const [formData, setFormData] = useState({
    name: "",
    phone: "",
    email: "",
    notes: ""
  });
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!date || !selectedTime || !selectedPackage || !formData.name || !formData.phone) {
      toast.error("กรุณากรอกข้อมูลให้ครบถ้วน");
      return;
    }

    // Here you would normally send the data to Lovable Cloud
    toast.success("ส่งคำขอจองสำเร็จ! เราจะติดต่อกลับเร็วๆ นี้", {
      description: `วันที่: ${format(date, "PPP", {
        locale: th
      })} เวลา: ${selectedTime}`
    });

    // Reset form
    setDate(undefined);
    setSelectedTime("");
    setSelectedPackage("");
    setFormData({
      name: "",
      phone: "",
      email: "",
      notes: ""
    });
  };
  return <main className="relative min-h-screen pt-32 pb-20 bg-gradient-to-b from-cyan-950/70 via-blue-950/80 to-slate-950/90" style={{ overflow: 'visible' }}>
      {/* Background Shell Image */}
      <div className="absolute inset-0 pointer-events-none" style={{ overflow: 'visible' }}>
        <div 
          className="absolute opacity-60"
          style={{
            top: '380px',
            right: '-384px',
            width: '480%',
            height: '480%',
            backgroundImage: `url(${nautilusShell})`,
            backgroundSize: 'contain',
            backgroundRepeat: 'no-repeat',
            backgroundPosition: 'right top',
          }}
        />
      </div>

      <div className="container mx-auto px-4 relative z-10">
        {/* Header */}
        <div className="text-center mb-16">
          <h1 className="font-serif text-5xl sm:text-6xl md:text-7xl mb-6 font-thin">
            <span className="gradient-text-coral font-light">Lavelier</span>
            <br />
            <span className="gradient-text-aqua font-light">Aquaterra Lounge</span>
          </h1>
          <p className="text-lg max-w-2xl mx-auto font-light" style={{ color: '#FFF8DC' }}>
            สัมผัสประสบการณ์สปาระดับโลก<br />ด้วยนวัตกรรมจากท้องทะเลลึก
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12">
          {/* Spa Packages */}
          <div>
            <h2 className="font-serif text-3xl font-light mb-8 gradient-text-aqua">
              แพ็คเกจสปา
            </h2>
            
            <div className="space-y-4">
              {spaPackages.map(pkg => <button key={pkg.id} onClick={() => setSelectedPackage(pkg.name)} className={cn("w-full glass-card rounded-2xl p-6 text-left transition-all hover:scale-[1.02]", selectedPackage === pkg.name && "border-secondary border-2 bg-secondary/10")}>
                  <div className="flex items-start justify-between mb-3">
                    <h3 className="font-didot text-xl font-semibold" style={{ color: '#FFF8DC' }}>
                      {pkg.name}
                    </h3>
                    <span className="glass-button px-3 py-1 rounded-full text-xs text-secondary flex items-center gap-1">
                      <Clock className="w-3 h-3" />
                      {pkg.duration}
                    </span>
                  </div>
                  <p className="text-sm text-muted-foreground">{pkg.description}</p>
                </button>)}
            </div>
          </div>

          {/* Booking Form */}
          <div className="glass-card rounded-3xl p-8">
            <h2 className="font-serif text-3xl font-light mb-8 gradient-text-coral">
              จองคิว
            </h2>

            <form onSubmit={handleSubmit} className="space-y-6">
              {/* Date Selection */}
              <div>
                <Label className="text-foreground mb-2 flex items-center gap-2">
                  <Calendar className="w-4 h-4 text-secondary" />
                  เลือกวันที่
                </Label>
                <Popover>
                  <PopoverTrigger asChild>
                    <Button variant="outline" className={cn("w-full justify-start text-left font-normal glass-button border-border", !date && "text-muted-foreground")}>
                      {date ? format(date, "PPP", {
                      locale: th
                    }) : "เลือกวันที่"}
                    </Button>
                  </PopoverTrigger>
                  <PopoverContent className="w-auto p-0 glass-card border-border" align="start">
                    <CalendarComponent mode="single" selected={date} onSelect={setDate} disabled={date => date < new Date()} initialFocus className="pointer-events-auto" />
                  </PopoverContent>
                </Popover>
              </div>

              {/* Time Selection */}
              <div>
                <Label className="text-foreground mb-2 flex items-center gap-2">
                  <Clock className="w-4 h-4 text-secondary" />
                  เลือกเวลา
                </Label>
                <div className="grid grid-cols-3 sm:grid-cols-5 gap-2">
                  {timeSlots.map(time => <button key={time} type="button" onClick={() => setSelectedTime(time)} className={cn("glass-button py-2 rounded-lg text-sm transition-all hover:scale-105", selectedTime === time && "bg-secondary/20 border-secondary text-secondary")}>
                      {time}
                    </button>)}
                </div>
              </div>

              {/* Name */}
              <div>
                <Label className="text-foreground mb-2 flex items-center gap-2">
                  <User className="w-4 h-4 text-secondary" />
                  ชื่อ-นามสกุล
                </Label>
                <Input value={formData.name} onChange={e => setFormData({
                ...formData,
                name: e.target.value
              })} className="glass-button border-border" placeholder="กรอกชื่อ-นามสกุล" required />
              </div>

              {/* Phone */}
              <div>
                <Label className="text-foreground mb-2 flex items-center gap-2">
                  <Phone className="w-4 h-4 text-secondary" />
                  เบอร์โทรศัพท์
                </Label>
                <Input type="tel" value={formData.phone} onChange={e => setFormData({
                ...formData,
                phone: e.target.value
              })} className="glass-button border-border" placeholder="0XX-XXX-XXXX" required />
              </div>

              {/* Email */}
              <div>
                <Label className="text-foreground mb-2 flex items-center gap-2">
                  <Mail className="w-4 h-4 text-secondary" />
                  อีเมล (ไม่บังคับ)
                </Label>
                <Input type="email" value={formData.email} onChange={e => setFormData({
                ...formData,
                email: e.target.value
              })} className="glass-button border-border" placeholder="your@email.com" />
              </div>

              {/* Notes */}
              <div>
                <Label className="text-foreground mb-2 flex items-center gap-2">
                  <Sparkles className="w-4 h-4 text-secondary" />
                  หมายเหตุ (ไม่บังคับ)
                </Label>
                <Textarea value={formData.notes} onChange={e => setFormData({
                ...formData,
                notes: e.target.value
              })} className="glass-button border-border resize-none" placeholder="ข้อมูลเพิ่มเติม..." rows={3} />
              </div>

              {/* Submit Button */}
              <Button type="submit" className="w-full glass-button py-6 text-lg font-medium bg-gradient-to-r from-primary to-secondary hover:opacity-90 transition-opacity">
                ยืนยันการจอง
              </Button>
            </form>
          </div>
        </div>

        {/* Location Info */}
        <div className="mt-20 glass-card rounded-3xl p-12 text-center">
          <h2 className="font-serif text-3xl font-light mb-4">
            <span className="gradient-text-aqua font-light">ที่ตั้ง</span>
          </h2>
          <p className="text-xl text-foreground mb-2 font-light">Lavelier Aquaterra Lounge</p>
          <p className="text-muted-foreground mb-6 font-light">
            เซ็นทรัลเวิร์ล ชั้น 7<br />
            เปิดทุกวัน 10:00 - 20:00 น.
          </p>
          <p className="text-secondary font-light">
            โทร: 02-XXX-XXXX
          </p>
        </div>
      </div>
    </main>;
};
export default Spa;