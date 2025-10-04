import { Link } from "react-router-dom";
import { Sparkles, Droplets, Heart, Crown } from "lucide-react";
import heroImage from "@/assets/hero-underwater.png";
import underwaterImage from "@/assets/hero-coral.png";
import deepSeaProducts from "@/assets/lavelier-products-final.png";
import spaGreenProducts from "@/assets/product-spa-green.png";
import serumPinkProducts from "@/assets/product-serum-pink.png";
import limitedGoldProducts from "@/assets/product-limited-gold.png";
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
        
        {/* Floating Bubbles */}
        <div className="absolute inset-0 pointer-events-none">
          {[...Array(12)].map((_, i) => (
            <div
              key={i}
              className="absolute bottom-0 rounded-full animate-bubble"
              style={{
                left: `${10 + i * 7}%`,
                width: `${6 + i * 2}px`,
                height: `${6 + i * 2}px`,
                background: `radial-gradient(circle at 30% 30%, rgba(255, 255, 255, 0.4), rgba(120, 220, 255, 0.14) 40%, rgba(120, 220, 255, 0.03))`,
                boxShadow: `
                  inset -3px -3px 6px rgba(255, 255, 255, 0.2),
                  inset 3px 3px 6px rgba(0, 150, 200, 0.1),
                  0 3px 10px rgba(100, 200, 255, 0.14)
                `,
                border: '1px solid rgba(255, 255, 255, 0.14)',
                animationDelay: `${i * 1.2}s`,
                animationDuration: `${8 + i * 0.8}s`,
              }}
            />
          ))}
        </div>
        
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
            
            <p className="text-base sm:text-lg text-muted-foreground leading-relaxed mb-8 font-light">"Lavelier is not just skincare — it is a scientific journey beneath the surface, 
...
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
        {/* Animated Light Blobs */}
        <div className="absolute inset-0 pointer-events-none">
          <div 
            className="absolute w-96 h-96 rounded-full blur-3xl animate-pulse"
            style={{
              background: 'radial-gradient(circle, rgba(255, 248, 220, 0.15), transparent)',
              top: '10%',
              left: '10%',
              animation: 'float 8s ease-in-out infinite'
            }}
          />
          <div 
            className="absolute w-80 h-80 rounded-full blur-3xl animate-pulse"
            style={{
              background: 'radial-gradient(circle, rgba(255, 253, 240, 0.12), transparent)',
              top: '60%',
              right: '15%',
              animation: 'float 10s ease-in-out infinite 2s'
            }}
          />
          <div 
            className="absolute w-72 h-72 rounded-full blur-3xl animate-pulse"
            style={{
              background: 'radial-gradient(circle, rgba(255, 250, 230, 0.1), transparent)',
              bottom: '20%',
              left: '50%',
              animation: 'float 12s ease-in-out infinite 4s'
            }}
          />
        </div>
        
        <div className="container mx-auto px-4 relative z-10">
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="glass-card p-8 rounded-2xl text-center group hover:scale-105 transition-transform overflow-hidden">
              <div className="mb-6 rounded-xl overflow-hidden">
                <img src={deepSeaProducts} alt="Deep Sea Treasures" className="w-full h-auto" />
              </div>
              <div className="inline-block p-4 rounded-full bg-cyan-500/20 mb-6 group-hover:animate-wave">
                <Droplets className="w-8 h-8 text-cyan-400" />
              </div>
              <h3 className="font-didot text-2xl font-semibold mb-4 text-cyan-300">
                Deep Sea Treasures
              </h3>
              <p className="text-muted-foreground font-light">
                สารสกัดจากใต้ท้องทะเลลึก ที่อุดมไปด้วยแร่ธาตุและสารอาหารที่มีประสิทธิภาพ
              </p>
            </div>

            <div className="glass-card p-8 rounded-2xl text-center group hover:scale-105 transition-transform overflow-hidden">
              <div className="mb-6 rounded-xl overflow-hidden">
                <img src={spaGreenProducts} alt="Spa Collection" className="w-full h-auto" />
              </div>
              <div className="inline-block p-4 rounded-full mb-6 group-hover:animate-wave" style={{ backgroundColor: 'rgba(73, 83, 80, 0.25)' }}>
                <Sparkles className="w-8 h-8" style={{ color: '#495350' }} />
              </div>
              <h3 className="font-didot text-2xl font-semibold mb-4" style={{ color: '#495350' }}>
                Spa Collection
              </h3>
              <p className="text-muted-foreground font-light">
                คอลเลคชั่นสปา ที่ผสานนวัตกรรมและธรรมชาติ เพื่อประสบการณ์การบำรุงผิวที่สมบูรณ์แบบ
              </p>
            </div>

            <div className="glass-card p-8 rounded-2xl text-center group hover:scale-105 transition-transform overflow-hidden">
              <div className="mb-6 rounded-xl overflow-hidden">
                <img src={serumPinkProducts} alt="Serum Collection" className="w-full h-auto" />
              </div>
              <div className="inline-block p-4 rounded-full bg-rose-400/20 mb-6 group-hover:animate-wave">
                <Heart className="w-8 h-8 text-rose-400" />
              </div>
              <h3 className="font-didot text-2xl font-semibold mb-4 text-rose-300">
                Serum Collection
              </h3>
              <p className="text-muted-foreground font-light">
                เซรั่มบำรุงผิวเข้มข้น ที่มอบความชุ่มชื้นและความเปล่งประกายให้ผิวคุณ
              </p>
            </div>

            <div className="glass-card p-8 rounded-2xl text-center group hover:scale-105 transition-transform overflow-hidden">
              <div className="mb-6 rounded-xl overflow-hidden">
                <img src={limitedGoldProducts} alt="Limited Edition" className="w-full h-auto" />
              </div>
              <div className="inline-block p-4 rounded-full bg-yellow-600/20 mb-6 group-hover:animate-wave">
                <Crown className="w-8 h-8 text-yellow-600" />
              </div>
              <h3 className="font-didot text-2xl font-semibold mb-4 text-yellow-500">
                Limited Edition
              </h3>
              <p className="text-muted-foreground font-light">
                คอลเลคชั่นพิเศษสุดหรู ที่ผสานทองคำและสารสกัดล้ำค่า เพื่อผิวที่สมบูรณ์แบบที่สุด
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Underwater Section */}
      <section className="relative py-20 overflow-hidden">
        <div className="container mx-auto px-4">
          <div className="relative h-[600px] md:h-[700px]">
            <img src={underwaterImage} alt="Deep sea beauty" className="rounded-3xl shadow-2xl w-full h-full object-cover" />
            
            {/* Text Overlay */}
            <div className="absolute inset-0 flex items-center justify-center md:justify-start p-8 md:p-16">
              <div className="max-w-2xl">
                <h2 className="font-serif text-4xl sm:text-5xl font-bold mb-6 text-brand-pink">
                  <span className="font-didot">deep dive</span>
                  <br />
                  <span className="font-didot">into...</span>
                  <br />
                  <span className="font-didot">secrets of youth</span>
                </h2>
                
                <p className="text-lg text-muted-foreground mb-8 leading-relaxed font-light">
                  ลาวีเลียร์นำสารสกัดจากปะการังลำค่าและสร้างสรรค์เป็นสูตรลับแห่ง
                  ความงามด้วยวิทยาการล้ำหน้าที่สุดเพื่อผิวที่ออนเยาว์และเปล่งประกาย
                  เหนือกาลเวลา... ค้นพบส่มผสมแห่งผิวที่แตกต่างในครูที่แรกที่เคาน์เตอร์
                </p>

                <p className="text-base text-secondary font-light mb-4">
                  Lavelier ทุกสาขา พร้อมประสบการณ์ด้าติ่งสุดการพิมพ์ฟิวชั่นลึกในสปาส่วนตัวที่
                </p>
                
                <p className="font-didot text-2xl gradient-text-aqua">
                  Lavelier Aquaterra Lounge เซ็นทรัลเวิร์ล
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </main>;
};
export default Home;