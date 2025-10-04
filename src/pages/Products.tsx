import productNew1 from "@/assets/product-new-1.png";
import productNew2 from "@/assets/product-new-2.png";
import productNew3 from "@/assets/product-new-3.png";
import productNew4 from "@/assets/product-new-4.png";
import productNew5 from "@/assets/product-new-5.png";
import productNew6 from "@/assets/product-new-6.png";

const products = [
  {
    id: 1,
    name: "Lavelier Gold Renewal Cream",
    image: productNew1,
    description: "ครีมบำรุงผิวสูตรพรีเมี่ยมที่อุดมไปด้วยสารสกัดจากทองคำและแร่ธาตุจากทะเลลึก",
    benefits: ["ลดเลือนริ้วรอย", "เพิ่มความยืดหยุ่น", "ผิวกระจ่างใส"],
    collection: "Luxury Collection"
  },
  {
    id: 2,
    name: "Aquaterra Hydrating Essence",
    image: productNew2,
    description: "เอสเซนส์เข้มข้นจากแร่ธาตุใต้ท้องทะเล เติมเต็มความชุ่มชื้นลึกสู่ผิว",
    benefits: ["เติมความชุ่มชื้น", "ผิวเนียนนุ่ม", "ฟื้นฟูผิว"],
    collection: "Aquaterra Collection"
  },
  {
    id: 3,
    name: "Limited Edition Anti-Aging Serum",
    image: productNew3,
    description: "เซรั่มต้านอนุมูลอิสระสูตรพิเศษ จากความลับแห่งมหาสมุทร",
    benefits: ["ลดริ้วรอยลึก", "กระชับรูขุมขน", "ผิวเปล่งปลั่ง"],
    collection: "Limited Edition"
  },
  {
    id: 4,
    name: "Deep Sea Revitalizing Elixir",
    image: productNew4,
    description: "น้ำยาฟื้นฟูผิวจากสารสกัดหายาก เพิ่มความเปล่งประกายให้ผิว",
    benefits: ["เพิ่มความกระจ่างใส", "ต่อต้านริ้วรอย", "ฟื้นฟูผิวหมองคล้ำ"],
    collection: "Deep Sea Collection"
  },
  {
    id: 5,
    name: "Ocean Pearl Brightening Cream",
    image: productNew5,
    description: "ครีมเพิ่มความกระจ่างใสจากสารสกัดไข่มุก บำรุงผิวให้เปล่งประกาย",
    benefits: ["ผิวขาวกระจ่างใส", "ลดจุดด่างดำ", "เนียนนุ่มชุ่มชื้น"],
    collection: "Pearl Collection"
  },
  {
    id: 6,
    name: "Marine Collagen Intense Serum",
    image: productNew6,
    description: "เซรั่มคอลลาเจนจากทะเลลึก ฟื้นฟูความยืดหยุ่นของผิว",
    benefits: ["เพิ่มความยืดหยุ่น", "ลดริ้วรอยชะลอวัย", "กระชับผิว"],
    collection: "Marine Collection"
  },
];

const Products = () => {
  return (
    <main className="min-h-screen pt-32 pb-20 bg-gradient-to-b from-background via-cyan-950 to-background">
      <div className="container mx-auto px-4">
        {/* Header */}
        <div className="text-center mb-16">
          <h1 className="font-serif text-5xl sm:text-6xl md:text-7xl font-bold mb-6">
            <span className="gradient-text-coral font-light">ผลิตภัณฑ์</span>
            <br />
            <span className="text-foreground font-didot">Lavelier</span>
          </h1>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto font-light">
            ค้นพบคอลเลกชันครีมบำรุงผิวพรีเมี่ยม<br />จากส่วนผสมแห่งท้องทะเลลึก
          </p>
        </div>

        {/* Products Grid */}
        <div className="grid md:grid-cols-2 gap-8 lg:gap-12">
          {products.map((product) => (
            <article
              key={product.id}
              className="glass-card rounded-3xl overflow-hidden group hover:scale-[1.02] transition-transform duration-500 opacity-70"
            >
              <div className="relative overflow-hidden bg-gradient-to-br from-background to-muted/30 p-8">
                <div className="absolute top-4 right-4">
                  <span className="glass-button px-4 py-2 rounded-full text-xs font-medium text-muted-foreground/60">
                    {product.collection}
                  </span>
                </div>
                
                <img
                  src={product.image}
                  alt={product.name}
                  className="w-full h-80 object-contain group-hover:scale-110 transition-transform duration-700 animate-float"
                />
              </div>

              <div className="p-8 pt-4">
                <h2 className="font-didot text-2xl sm:text-3xl font-semibold mb-4 text-amber-50">
                  {product.name}
                </h2>
                
                <p className="text-stone-300/80 mb-6 leading-relaxed font-light">
                  {product.description}
                </p>

                <div className="space-y-3">
                  <h3 className="text-sm font-semibold text-foreground font-light">
                    คุณสมบัติพิเศษ
                  </h3>
                  <ul className="space-y-2">
                    {product.benefits.map((benefit, index) => (
                      <li
                        key={index}
                        className="text-sm text-muted-foreground flex items-center gap-2 font-light"
                      >
                        <span className="w-1.5 h-1.5 rounded-full bg-amber-100/80" />
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
            <span className="gradient-text-coral font-light">พบกับผลิตภัณฑ์ </span><span className="gradient-text-coral font-didot">Lavelier</span>
          </h2>
          <p className="text-muted-foreground mb-8 max-w-2xl mx-auto font-light">
            สัมผัสประสบการณ์ผลิตภัณฑ์ Lavelier ได้ที่เคาน์เตอร์ทุกสาขา
            หรือเยี่ยมชม Lavelier Aquaterra Lounge เซ็นทรัลเวิร์ล
          </p>
          <a
            href="tel:+66-XXX-XXX-XXXX"
            className="glass-button px-8 py-4 rounded-full inline-block text-foreground font-light hover:scale-105 transition-transform"
          >
            ติดต่อสอบถาม
          </a>
        </div>
      </div>
    </main>
  );
};

export default Products;
