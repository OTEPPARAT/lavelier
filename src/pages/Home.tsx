import { Link } from "react-router-dom";
import { Sparkles, Droplets, Heart, Crown } from "lucide-react";
import heroImage from "@/assets/hero-underwater-new.png";
import underwaterImage from "@/assets/hero-coral.png";
import deepSeaProducts from "@/assets/lavelier-products-final.png";
import spaGreenProducts from "@/assets/product-spa-green.png";
import serumPinkProducts from "@/assets/product-serum-pink.png";
import limitedGoldProducts from "@/assets/product-limited-gold.png";
import coralRed from "@/assets/coral-red.png";

const Home = () => {
  return <main className="min-h-screen">
      {/* Hero Section */}
      <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0 bg-cover animate-underwater" style={{
        backgroundImage: `url(${heroImage})`,
        backgroundPosition: 'center bottom',
        filter: 'brightness(1.25) contrast(1.05)'
      }} />
        <div className="absolute inset-0 bg-black/70" />
        <div className="absolute inset-0 bg-gradient-to-b from-background/30 via-transparent to-background/50" />
        
        {/* Water Light Effect - above model's head */}
        <div className="absolute top-0 left-0 right-0 h-1/2 pointer-events-none">
          {[...Array(3)].map((_, i) => (
            <div
              key={i}
              className="absolute inset-0 animate-shimmer"
              style={{
                background: `linear-gradient(90deg, 
                  rgba(255, 255, 255, 0) 0%, 
                  rgba(255, 255, 255, 0.15) 20%,
                  rgba(255, 255, 255, 0.25) 40%, 
                  rgba(255, 255, 255, 0.3) 50%, 
                  rgba(255, 255, 255, 0.25) 60%,
                  rgba(255, 255, 255, 0.15) 80%,
                  rgba(255, 255, 255, 0) 100%)`,
                backgroundSize: '200% 100%',
                animationDelay: `${i * 2.4}s`,
                animationDuration: '7.8s',
                maskImage: 'linear-gradient(to bottom, rgba(0,0,0,0.4) 0%, rgba(0,0,0,0.2) 50%, transparent 100%)',
                WebkitMaskImage: 'linear-gradient(to bottom, rgba(0,0,0,0.4) 0%, rgba(0,0,0,0.2) 50%, transparent 100%)',
              }}
            />
          ))}
        </div>
        
        {/* Floating Bubbles */}
        <div className="absolute inset-0 pointer-events-none">
          {[
            { left: '5%', size: 8, delay: 0 },
            { left: '15%', size: 12, delay: 1.5 },
            { left: '25%', size: 10, delay: 3 },
            { left: '38%', size: 14, delay: 0.8 },
            { left: '48%', size: 9, delay: 2.2 },
            { left: '58%', size: 16, delay: 1.2 },
            { left: '68%', size: 11, delay: 3.5 },
            { left: '78%', size: 13, delay: 0.5 },
            { left: '85%', size: 10, delay: 2.8 },
            { left: '92%', size: 15, delay: 1.8 },
            { left: '12%', size: 7, delay: 4 },
            { left: '72%', size: 8, delay: 2.5 },
          ].map((bubble, i) => (
            <div
              key={i}
              className="absolute bottom-0 rounded-full animate-bubble"
              style={{
                left: bubble.left,
                width: `${bubble.size}px`,
                height: `${bubble.size}px`,
                background: `radial-gradient(circle at 30% 30%, rgba(255, 255, 255, 0.4), rgba(120, 220, 255, 0.14) 40%, rgba(120, 220, 255, 0.03))`,
                boxShadow: `
                  inset -3px -3px 6px rgba(255, 255, 255, 0.2),
                  inset 3px 3px 6px rgba(0, 150, 200, 0.1),
                  0 3px 10px rgba(100, 200, 255, 0.14)
                `,
                border: '1px solid rgba(255, 255, 255, 0.14)',
                animationDelay: `${bubble.delay}s`,
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
      <section className="py-20 relative overflow-hidden bg-gradient-to-b from-cyan-950/50 via-blue-950/60 to-slate-950/70">
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
              <div className="inline-block p-4 rounded-full mb-6 group-hover:animate-wave" style={{ backgroundColor: 'rgba(106, 142, 163, 0.25)' }}>
                <Droplets className="w-8 h-8" style={{ color: '#6A8EA3' }} />
              </div>
              <h3 className="font-didot text-2xl font-semibold mb-4" style={{ color: '#6A8EA3' }}>
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
              <div className="inline-block p-4 rounded-full mb-6 group-hover:animate-wave" style={{ backgroundColor: 'rgba(77, 102, 94, 0.25)' }}>
                <Sparkles className="w-8 h-8" style={{ color: '#4D665E' }} />
              </div>
              <h3 className="font-didot text-2xl font-semibold mb-4" style={{ color: '#4D665E' }}>
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
              <div className="inline-block p-4 rounded-full mb-6 group-hover:animate-wave" style={{ backgroundColor: 'rgba(154, 120, 115, 0.25)' }}>
                <Heart className="w-8 h-8" style={{ color: '#9A7873' }} />
              </div>
              <h3 className="font-didot text-2xl font-semibold mb-4" style={{ color: '#9A7873' }}>
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
              <div className="inline-block p-4 rounded-full mb-6 group-hover:animate-wave" style={{ backgroundColor: 'rgba(172, 137, 77, 0.25)' }}>
                <Crown className="w-8 h-8" style={{ color: '#AC894D' }} />
              </div>
              <h3 className="font-didot text-2xl font-semibold mb-4" style={{ color: '#AC894D' }}>
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
      <section className="relative py-0 overflow-hidden">
        <div className="relative h-[700px] md:h-[800px] w-full">
          <img 
            src={underwaterImage} 
            alt="Deep sea beauty" 
            className="w-full h-full object-cover"
            style={{ filter: 'brightness(0.91) contrast(1.15)' }}
          />
          
          {/* Text Overlay */}
          <div className="absolute inset-0 flex items-center justify-center md:justify-start p-8 md:p-16">
            <div className="max-w-2xl container mx-auto px-4">
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
      </section>

      {/* Fixed Red Coral - Bottom Right */}
      <div className="fixed bottom-0 right-0 w-64 h-64 pointer-events-none" style={{ transform: 'translate(15%, 10%)', zIndex: 9999 }}>
        <img 
          src={coralRed} 
          alt="Red Coral" 
          className="w-full h-full object-contain"
        />
      </div>
    </main>;
};
export default Home;