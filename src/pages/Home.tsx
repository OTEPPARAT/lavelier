import { Link } from "react-router-dom";
import { Sparkles, Droplets, Heart } from "lucide-react";
import heroImage from "@/assets/hero-underwater.png";
import underwaterImage from "@/assets/hero-coral.png";
import deepSeaProducts from "@/assets/lavelier-products-final.png";
const Home = () => {
  return <main className="min-h-screen">
      {/* Hero Section */}
      <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0 bg-cover animate-underwater" style={{
        backgroundImage: `url(${heroImage})`,
        backgroundPosition: 'center bottom'
      }} />
        <div className="absolute inset-0 bg-black/50" />
        <div className="absolute inset-0 bg-gradient-to-b from-background/30 via-transparent to-background/50" />
        
        <div className="relative z-10 container mx-auto px-4 py-32 text-center">
          <h1 className="font-serif text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold mb-6 animate-float mt-20">
            <span className="font-didot font-thin text-white text-4xl">The Luxurious</span>
            <br />
            <span className="text-foreground font-didot font-thin px-0 py-0 text-4xl">Science of Beauty</span>
          </h1>
          
          <div className="max-w-3xl mx-auto mb-12">
            <h2 className="font-serif sm:text-4xl md:text-5xl font-semibold mb-8 text-2xl">
              <span className="gradient-text-aqua font-didot">a new frontier of anti-aging</span>
            </h2>
            
            <p className="text-base sm:text-lg text-muted-foreground leading-relaxed mb-8">"Lavelier is not just skincare — it is a scientific journey beneath the surface, 
where nature and innovation converge to defy aging at its origin. 
From deep-sea treasures to the deepest care 
for your skin's timeless beauty."</p>
          </div>

          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <Link to="/products" className="glass-button px-8 py-4 rounded-full text-amber-50/80 font-light hover:scale-105 transition-transform">
              สำรวจผลิตภัณฑ์
            </Link>
            <Link to="/spa" className="glass-button px-8 py-4 rounded-full bg-secondary/20 text-amber-50/80 font-light hover:scale-105 transition-transform border-secondary/50">
              จองสปา
            </Link>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-20 relative overflow-hidden bg-gradient-to-b from-blue-500/10 via-transparent to-transparent">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-3 gap-8">
            <div className="glass-card p-8 rounded-2xl text-center group hover:scale-105 transition-transform overflow-hidden">
              <div className="mb-6 rounded-xl overflow-hidden">
                <img src={deepSeaProducts} alt="Deep Sea Treasures" className="w-full h-auto" />
              </div>
              <div className="inline-block p-4 rounded-full bg-primary/20 mb-6 group-hover:animate-wave">
                <Droplets className="w-8 h-8 text-primary" />
              </div>
              <h3 className="font-serif text-2xl font-semibold mb-4 gradient-text-coral text-cyan-200">
                Deep Sea Treasures
              </h3>
              <p className="text-muted-foreground">
                สารสกัดจากใต้ท้องทะเลลึก ที่อุดมไปด้วยแร่ธาตุและสารอาหารที่มีประสิทธิภาพ
              </p>
            </div>

            <div className="glass-card p-8 rounded-2xl text-center group hover:scale-105 transition-transform">
              <div className="inline-block p-4 rounded-full bg-secondary/20 mb-6 group-hover:animate-wave">
                <Sparkles className="w-8 h-8 text-secondary" />
              </div>
              <h3 className="font-serif text-2xl font-semibold mb-4 gradient-text-aqua">
                Scientific Innovation
              </h3>
              <p className="text-muted-foreground">
                นวัตกรรมทางวิทยาศาสตร์ที่สุดเพื่อผิวพรรณที่เปล่งประกายและเยาว์วัย
              </p>
            </div>

            <div className="glass-card p-8 rounded-2xl text-center group hover:scale-105 transition-transform">
              <div className="inline-block p-4 rounded-full bg-accent/20 mb-6 group-hover:animate-wave">
                <Heart className="w-8 h-8 text-accent" />
              </div>
              <h3 className="font-serif text-2xl font-semibold mb-4 text-accent">
                Timeless Beauty
              </h3>
              <p className="text-muted-foreground">
                ความงามที่ไร้กาลเวลา ด้วยการบำรุงผิวที่ลึกล้ำและยั่งยืน
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Underwater Section */}
      <section className="relative py-20 overflow-hidden">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div className="relative">
              <img src={underwaterImage} alt="Deep sea beauty" className="rounded-3xl shadow-2xl animate-float" />
            </div>
            
            <div>
              <h2 className="font-serif text-4xl sm:text-5xl font-bold mb-6">
                <span className="gradient-text-coral">deep dive</span>
                <br />
                <span className="gradient-text-aqua">into...</span>
                <br />
                <span className="gradient-text-aqua">secrets of youth</span>
              </h2>
              
              <p className="text-lg text-muted-foreground mb-8 leading-relaxed">
                ลาวีเลียร์นำสารสกัดจากปะการังลำค่าและสร้างสรรค์เป็นสูตรลับแห่ง
                ความงามด้วยวิทยาการล้ำหน้าที่สุดเพื่อผิวที่ออนเยาว์และเปล่งประกาย
                เหนือกาลเวลา... ค้นพบส่มผสมแห่งผิวที่แตกต่างในครูที่แรกที่เคาน์เตอร์
              </p>

              <p className="text-base text-secondary font-medium mb-4">
                Lavelier ทุกสาขา พร้อมประสบการณ์ด้าติ่งสุดการพิมพ์ฟิวชั่นลึกในสปาส่วนตัวที่
              </p>
              
              <p className="font-serif text-2xl gradient-text-aqua">
                Lavelier Aquaterra Lounge เซ็นทรัลเวิร์ล
              </p>
            </div>
          </div>
        </div>
      </section>
    </main>;
};
export default Home;