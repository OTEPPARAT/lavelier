import { Sparkles } from "lucide-react";
import productGold from "@/assets/product-gold.png";
import productAqua from "@/assets/product-aqua.png";
import productLimited from "@/assets/product-limited.png";
import productBottle from "@/assets/product-bottle.png";

const products = [
  {
    id: 1,
    name: "Lavelier Gold Renewal Cream",
    image: productGold,
    description: "ครีมบำรุงผิวสูตรพรีเมี่ยมที่อุดมไปด้วยสารสกัดจากทองคำและแร่ธาตุจากทะเลลึก",
    benefits: ["ลดเลือนริ้วรอย", "เพิ่มความยืดหยุ่น", "ผิวกระจ่างใส"],
    collection: "Luxury Collection"
  },
  {
    id: 2,
    name: "Aquaterra Hydrating Essence",
    image: productAqua,
    description: "เอสเซนส์เข้มข้นจากแร่ธาตุใต้ท้องทะเล เติมเต็มความชุ่มชื้นลึกสู่ผิว",
    benefits: ["เติมความชุ่มชื้น", "ผิวเนียนนุ่ม", "ฟื้นฟูผิว"],
    collection: "Aquaterra Collection"
  },
  {
    id: 3,
    name: "Limited Edition Anti-Aging Serum",
    image: productLimited,
    description: "เซรั่มต้านอนุมูลอิสระสูตรพิเศษ จากความลับแห่งมหาสมุทร",
    benefits: ["ลดริ้วรอยลึก", "กระชับรูขุมขน", "ผิวเปล่งปลั่ง"],
    collection: "Limited Edition"
  },
  {
    id: 4,
    name: "Deep Sea Revitalizing Elixir",
    image: productBottle,
    description: "น้ำยาฟื้นฟูผิวจากสารสกัดหายาก เพิ่มความเปล่งประกายให้ผิว",
    benefits: ["เพิ่มความกระจ่างใส", "ต่อต้านริ้วรอย", "ฟื้นฟูผิวหมองคล้ำ"],
    collection: "Deep Sea Collection"
  },
];

const Products = () => {
  return (
    <main className="min-h-screen pt-32 pb-20">
      <div className="container mx-auto px-4">
        {/* Header */}
        <div className="text-center mb-16">
          <h1 className="font-serif text-5xl sm:text-6xl md:text-7xl font-bold mb-6">
            <span className="gradient-text-coral">ผลิตภัณฑ์</span>
            <br />
            <span className="text-foreground">Lavelier</span>
          </h1>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            ค้นพบคอลเลกชันครีมบำรุงผิวพรีเมี่ยม จากส่วนผสมแห่งท้องทะเลลึก
          </p>
        </div>

        {/* Products Grid */}
        <div className="grid md:grid-cols-2 gap-8 lg:gap-12">
          {products.map((product) => (
            <article
              key={product.id}
              className="glass-card rounded-3xl overflow-hidden group hover:scale-[1.02] transition-transform duration-500"
            >
              <div className="relative overflow-hidden bg-gradient-to-br from-background to-muted/30 p-8">
                <div className="absolute top-4 right-4">
                  <span className="glass-button px-4 py-2 rounded-full text-xs font-medium text-secondary">
                    {product.collection}
                  </span>
                </div>
                
                <img
                  src={product.image}
                  alt={product.name}
                  className="w-full h-80 object-contain group-hover:scale-110 transition-transform duration-700 animate-float"
                />
              </div>

              <div className="p-8">
                <h2 className="font-serif text-2xl sm:text-3xl font-semibold mb-4 gradient-text-aqua">
                  {product.name}
                </h2>
                
                <p className="text-muted-foreground mb-6 leading-relaxed">
                  {product.description}
                </p>

                <div className="space-y-3">
                  <h3 className="text-sm font-semibold text-foreground flex items-center gap-2">
                    <Sparkles className="w-4 h-4 text-primary" />
                    ประโยชน์
                  </h3>
                  <ul className="space-y-2">
                    {product.benefits.map((benefit, index) => (
                      <li
                        key={index}
                        className="text-sm text-muted-foreground flex items-center gap-2"
                      >
                        <span className="w-1.5 h-1.5 rounded-full bg-secondary" />
                        {benefit}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </article>
          ))}
        </div>

        {/* CTA Section */}
        <div className="mt-20 text-center glass-card rounded-3xl p-12">
          <h2 className="font-serif text-3xl sm:text-4xl font-bold mb-4">
            <span className="gradient-text-coral">พบกับผลิตภัณฑ์ Lavelier</span>
          </h2>
          <p className="text-muted-foreground mb-8 max-w-2xl mx-auto">
            สัมผัสประสบการณ์ผลิตภัณฑ์ Lavelier ได้ที่เคาน์เตอร์ทุกสาขา
            หรือเยี่ยมชม Lavelier Aquaterra Lounge เซ็นทรัลเวิร์ล
          </p>
          <a
            href="tel:+66-XXX-XXX-XXXX"
            className="glass-button px-8 py-4 rounded-full inline-block text-foreground font-medium hover:scale-105 transition-transform"
          >
            ติดต่อสอบถาม
          </a>
        </div>
      </div>
    </main>
  );
};

export default Products;
