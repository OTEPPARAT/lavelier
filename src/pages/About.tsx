import { Waves, Sparkles, Heart, Award } from "lucide-react";
import starfishBlue from "@/assets/starfish-blue.png";
const About = () => {
  return <main className="min-h-screen pt-32 pb-20 bg-gradient-to-b from-cyan-950/30 via-blue-950/40 to-slate-950/50">
      <div className="container mx-auto px-4">
        {/* Header */}
        <div className="text-center mb-16">
          <h1 className="font-serif text-5xl sm:text-6xl md:text-7xl font-bold mb-6">
            <span className="gradient-text-brand-pink font-light">รู้จักเรา</span>
            <br />
            <span className="text-foreground font-didot">Lavelier</span>
          </h1>
        </div>

        {/* Brand Story */}
        <div className="glass-card rounded-3xl p-12 mb-16">
          <h2 className="font-serif text-4xl mb-8 text-center font-thin">
            <span className="gradient-text-aqua font-didot">The Luxurious Science of Beauty</span>
          </h2>
          
          <div className="max-w-3xl mx-auto space-y-6 text-lg text-muted-foreground leading-relaxed font-light">
            <p>
              Lavelier คือแบรนด์ความงามระดับลักชัวรี่ที่ผสมผสานวิทยาศาสตร์สมัยใหม่
              เข้ากับความมหัศจรรย์จากธรรมชาติใต้ท้องทะเลลึก
            </p>
            
            <p>
              เรานำสารสกัดจากปะการัง แร่ธาตุล้ำค่า และองค์ประกอบหายากจากมหาสมุทร
              มาพัฒนาเป็นผลิตภัณฑ์บำรุงผิวที่มีประสิทธิภาพสูงสุด
              เพื่อต่อต้านริ้วรอยและการเสื่อมสภาพของผิว
            </p>

            <p>
              ด้วยเทคโนโลยีการสกัดขั้นสูง เราสามารถรักษาคุณค่าของสารสำคัญ
              เพื่อมอบความงามที่ยั่งยืนและผิวพรรณที่เปล่งประกายอย่างเป็นธรรมชาติ
            </p>
          </div>
        </div>

        {/* Features Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 mb-16">
          <div className="glass-card rounded-2xl p-8 text-center group hover:scale-105 transition-transform">
            <div className="inline-block p-4 rounded-full bg-secondary/20 mb-6 group-hover:animate-wave">
              <Waves className="w-8 h-8 text-secondary" />
            </div>
            <h3 className="font-didot text-xl font-semibold mb-3 text-foreground">
              Deep Sea Ingredients
            </h3>
            <p className="text-sm text-muted-foreground font-light">
              สารสกัดจากทะเลลึกที่อุดมด้วยแร่ธาตุและสารอาหาร
            </p>
          </div>

          <div className="glass-card rounded-2xl p-8 text-center group hover:scale-105 transition-transform">
            <div className="inline-block p-4 rounded-full bg-primary/20 mb-6 group-hover:animate-wave">
              <Sparkles className="w-8 h-8 text-primary" />
            </div>
            <h3 className="font-didot text-xl font-semibold mb-3 text-foreground">
              Advanced Technology
            </h3>
            <p className="text-sm text-muted-foreground font-light">
              เทคโนโลยีการสกัดและการผลิตชั้นนำระดับสากล
            </p>
          </div>

          <div className="glass-card rounded-2xl p-8 text-center group hover:scale-105 transition-transform">
            <div className="inline-block p-4 rounded-full bg-accent/20 mb-6 group-hover:animate-wave">
              <Heart className="w-8 h-8 text-accent" />
            </div>
            <h3 className="font-didot text-xl font-semibold mb-3 text-foreground">
              Sustainable Beauty
            </h3>
            <p className="text-sm text-muted-foreground font-light">
              คำนึงถึงความยั่งยืนและการอนุรักษ์สิ่งแวดล้อม
            </p>
          </div>

          <div className="glass-card rounded-2xl p-8 text-center group hover:scale-105 transition-transform">
            <div className="inline-block p-4 rounded-full bg-secondary/20 mb-6 group-hover:animate-wave">
              <Award className="w-8 h-8 text-secondary" />
            </div>
            <h3 className="font-didot text-xl font-semibold mb-3 text-foreground">
              Premium Quality
            </h3>
            <p className="text-sm text-muted-foreground font-light">
              คุณภาพระดับพรีเมี่ยมที่ผ่านการรับรองมาตรฐานสากล
            </p>
          </div>
        </div>

        {/* Philosophy */}
        <div className="glass-card rounded-3xl p-12 text-center">
          <h2 className="font-serif text-4xl font-bold mb-6">
            <span className="gradient-text-brand-pink font-didot">Our Philosophy</span>
          </h2>
          
          <p className="text-xl text-foreground mb-8 italic max-w-3xl mx-auto font-light">
            "Lavelier is not just skincare — it is a scientific journey beneath the surface, 
            where nature and innovation converge to defy aging at its origin."
          </p>

          <div className="max-w-2xl mx-auto text-muted-foreground">
            <p className="leading-relaxed font-light">
              เราเชื่อว่าความงามที่แท้จริงเกิดจากการบำรุงผิวที่ลึกล้ำและยั่งยืน
              ด้วยนวัตกรรมจากธรรมชาติและวิทยาศาสตร์ที่ทันสมัย
              เราจึงสามารถมอบผลลัพธ์ที่เหนือความคาดหมายและความงามที่ไร้กาลเวลา
            </p>
          </div>
        </div>
      </div>

      {/* Fixed Starfish - Bottom Left */}
      <div className="fixed bottom-0 left-0 w-48 h-48 pointer-events-none z-50" style={{
      transform: 'translate(-15%, 15%)'
    }}>
        <img src={starfishBlue} alt="Starfish" className="w-full h-full object-contain" />
      </div>
    </main>;
};
export default About;