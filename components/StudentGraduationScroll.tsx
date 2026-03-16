"use client";

import { useEffect, useRef, useState } from "react";
import { useScroll, useTransform, motion } from "framer-motion";

export default function StudentGraduationScroll() {
  const containerRef = useRef<HTMLDivElement>(null);
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const [images, setImages] = useState<HTMLImageElement[]>([]);
  const totalFrames = 168;

  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end end"]
  });

  const frameIndex = useTransform(scrollYProgress, [0, 1], [1, totalFrames]);

  useEffect(() => {
    const loadedImages: HTMLImageElement[] = [];

    for (let i = 1; i <= totalFrames; i++) {
        const img = new Image();
        const paddedIndex = i.toString().padStart(3, '0');
        img.src = `/images/graduation-sequence/ezgif-frame-${paddedIndex}.jpg`;
        img.onload = () => {
            if (i === 1) {
              requestAnimationFrame(() => drawImage(1));
            }
        };
        loadedImages.push(img);
    }
    setImages(loadedImages);
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const drawImage = (index: number) => {
    if (!canvasRef.current || images.length === 0) return;
    const canvas = canvasRef.current;
    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    const imageIndex = Math.min(Math.max(1, Math.round(index)), totalFrames) - 1;
    const img = images[imageIndex];

    if (img && img.complete && img.naturalWidth > 0) {
      ctx.clearRect(0, 0, canvas.width, canvas.height);
      
      const hRatio = canvas.width / img.width;
      const vRatio = canvas.height / img.height;
      const ratio = Math.max(hRatio, vRatio);
      
      const centerShift_x = (canvas.width - img.width * ratio) / 2;
      const centerShift_y = (canvas.height - img.height * ratio) / 2;

      ctx.drawImage(img, 0, 0, img.width, img.height,
        centerShift_x, centerShift_y, img.width * ratio, img.height * ratio);
    }
  };

  useEffect(() => {
    const handleResize = () => {
      if (canvasRef.current) {
         canvasRef.current.width = window.innerWidth;
         canvasRef.current.height = window.innerHeight;
         drawImage(frameIndex.get());
      }
    };
    handleResize();
    window.addEventListener("resize", handleResize);

    return () => window.removeEventListener("resize", handleResize);
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [images, frameIndex]);

  useEffect(() => {
    const unsubscribe = frameIndex.on("change", (latest) => {
      requestAnimationFrame(() => drawImage(latest));
    });
    return () => unsubscribe();
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [frameIndex, images]);

  return (
    <section ref={containerRef} className="h-[400vh] relative bg-black w-full">
      <div className="sticky top-0 h-screen w-full overflow-hidden flex items-center justify-center">
        <canvas 
          ref={canvasRef}
          className="w-full h-full object-cover opacity-80"
        />
        <div className="absolute inset-0 z-10 flex flex-col items-center justify-center pointer-events-none bg-gradient-to-t from-[#0f172a] via-transparent to-transparent">
             <motion.h2 
               initial={{ opacity: 0, scale: 0.9 }}
               whileInView={{ opacity: 1, scale: 1 }}
               className="text-5xl md:text-7xl font-extrabold text-white drop-shadow-2xl text-center px-4 mb-4"
             >
               Journey to <span className="text-accent drop-shadow-xl">Success</span>
             </motion.h2>
             <motion.p
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              transition={{ delay: 0.2 }}
              className="text-xl md:text-2xl text-slate-200 font-semibold max-w-2xl text-center drop-shadow-md px-6"
             >
               Watch our students transform into successful graduates through dedicated mentoring and expert guidance.
             </motion.p>
        </div>
      </div>
    </section>
  );
}
