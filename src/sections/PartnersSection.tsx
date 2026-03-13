import { motion } from 'framer-motion';

const partners = [
  { name: 'ME&DEN', initials: 'M&D' },
  { name: 'ARCHITECTURE', initials: 'ARC' },
  { name: 'BRICK', initials: 'BRK' },
  { name: 'CONSTRUCTION', initials: 'CON' },
  { name: 'ARCHITECT', initials: 'ACH' },
  { name: 'HOME BUILD', initials: 'HB' },
  { name: 'HOMEGARD', initials: 'HG' },
];

export default function PartnersSection() {
  return (
    <section className="py-16 lg:py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center text-xs font-medium tracking-wider text-muted-foreground uppercase mb-12"
        >
          We're proud to partner with best-in-class clients
        </motion.p>

        {/* Partners Grid */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="flex flex-wrap justify-center items-center gap-8 lg:gap-16"
        >
          {partners.map((partner, index) => (
            <motion.div
              key={partner.name}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: index * 0.05 }}
              className="group cursor-pointer"
            >
              <div className="flex flex-col items-center gap-2 opacity-60 hover:opacity-100 transition-opacity">
                {/* Logo placeholder - using styled text */}
                <div className="relative">
                  {partner.name === 'ME&DEN' && (
                    <div className="font-bold text-xl tracking-tight">
                      ME<span className="text-accent">&</span>DEN
                    </div>
                  )}
                  {partner.name === 'ARCHITECTURE' && (
                    <div className="flex items-center gap-1">
                      <div className="w-6 h-8 border-2 border-navy flex items-end justify-center">
                        <div className="w-4 h-5 bg-navy" />
                      </div>
                      <span className="text-xs font-medium">ARCHITECTURE</span>
                    </div>
                  )}
                  {partner.name === 'BRICK' && (
                    <div className="flex flex-col items-center">
                      <div className="flex gap-0.5">
                        {[...Array(3)].map((_, i) => (
                          <div key={i} className="w-3 h-2 bg-navy rounded-sm" />
                        ))}
                      </div>
                      <div className="flex gap-0.5 mt-0.5">
                        {[...Array(2)].map((_, i) => (
                          <div key={i} className="w-3 h-2 bg-navy rounded-sm" />
                        ))}
                      </div>
                      <span className="text-xs font-bold mt-1">BRICK</span>
                    </div>
                  )}
                  {partner.name === 'CONSTRUCTION' && (
                    <div className="flex items-center gap-1">
                      <div className="w-0 h-0 border-l-[8px] border-l-transparent border-r-[8px] border-r-transparent border-b-[16px] border-b-navy" />
                      <span className="text-xs font-bold">CONSTRUCTION</span>
                    </div>
                  )}
                  {partner.name === 'ARCHITECT' && (
                    <div className="flex flex-col items-center">
                      <div className="flex gap-1">
                        <div className="w-0 h-0 border-l-[6px] border-l-transparent border-r-[6px] border-r-transparent border-b-[12px] border-b-navy" />
                        <div className="w-0 h-0 border-l-[6px] border-l-transparent border-r-[6px] border-r-transparent border-b-[12px] border-b-navy" />
                      </div>
                      <span className="text-xs font-bold mt-1">ARCHITECT</span>
                    </div>
                  )}
                  {partner.name === 'HOME BUILD' && (
                    <div className="flex items-center gap-1">
                      <div className="w-6 h-6 border-2 border-navy rounded-sm flex items-center justify-center">
                        <div className="w-0 h-0 border-l-[4px] border-l-transparent border-r-[4px] border-r-transparent border-b-[6px] border-b-navy" />
                      </div>
                      <div className="text-xs">
                        <div className="font-bold leading-tight">HOME</div>
                        <div className="font-bold leading-tight">BUILD</div>
                      </div>
                    </div>
                  )}
                  {partner.name === 'HOMEGARD' && (
                    <div className="font-bold text-xl">
                      HO<span className="text-accent">M</span>EGARD
                    </div>
                  )}
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
