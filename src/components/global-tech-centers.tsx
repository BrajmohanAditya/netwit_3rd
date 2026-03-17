"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { MapPin } from "lucide-react";

const locations = [
  {
    id: "rochester",
    city: "Rochester",
    country: "USA",
    address: "100 Corporate Drive, Rochester, NY",
    description: "Our headquarters, serving North American clients with cutting-edge AI solutions.",
    image: "/locations/rochester.jpg",
  },
  {
    id: "vancouver",
    city: "Vancouver",
    country: "Canada",
    address: "500 Tech Boulevard, Vancouver, BC",
    description: "Innovation hub focused on cloud infrastructure and DevOps services.",
    image: "/locations/vancouver.jpg",
  },
  {
    id: "dubai",
    city: "Dubai",
    country: "UAE",
    address: "Dubai Internet City, Building 12",
    description: "Serving Middle East and Africa with enterprise cybersecurity solutions.",
    image: "/locations/dubai.jpg",
  },
  {
    id: "london",
    city: "London",
    country: "UK",
    address: "30 St Mary Axe, London EC3A 8BF",
    description: "European hub for financial technology and compliance solutions.",
    image: "/locations/london.jpg",
  },
  {
    id: "singapore",
    city: "Singapore",
    country: "Singapore",
    address: "Marina Bay Financial Centre, Singapore",
    description: "Asia-Pacific center for QA automation and software testing services.",
    image: "/locations/singapore.jpg",
  },
];

const fadeSlideIn = {
  initial: { opacity: 0, y: 8 },
  animate: { opacity: 1, y: 0 },
};

export function GlobalTechCenters() {
  const [activeLocation, setActiveLocation] = useState(locations[0]);

  return (
    <section className="bg-surface-2 py-section">
      <div className="mx-auto max-w-[1200px] px-content-x">
        <motion.div
          initial={{ opacity: 0, y: 8 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.4, ease: "easeOut" }}
          className="mb-12 text-center"
        >
          <h2 className="font-syne text-3xl font-bold text-text md:text-4xl">
            Global Technology Centers
          </h2>
          <p className="mx-auto mt-4 max-w-[600px] text-base text-muted">
            With presence in 10+ locations worldwide, we bring world-class solutions to your doorstep
          </p>
        </motion.div>

        <div className="grid gap-8 lg:grid-cols-2">
          <motion.div
            initial={{ opacity: 0, x: -8 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.4, ease: "easeOut" }}
            className="flex flex-wrap gap-3"
          >
            {locations.map((location) => (
              <button
                key={location.id}
                onClick={() => setActiveLocation(location)}
                className={`animate-button rounded-button px-5 py-2.5 text-sm font-medium transition-all ${
                  activeLocation.id === location.id
                    ? "bg-primary text-white"
                    : "bg-surface text-muted hover:bg-primary/10 hover:text-primary"
                }`}
              >
                {location.city}
              </button>
            ))}
          </motion.div>

          <motion.div
            key={activeLocation.id}
            initial={{ opacity: 0, x: 8 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.3, ease: "easeOut" }}
            className="rounded-card border border-muted/20 bg-surface p-6"
          >
            <div className="flex h-48 items-center justify-center rounded-panel bg-primary/10">
              <MapPin className="h-16 w-16 text-primary" />
            </div>
            <h3 className="mt-4 font-syne text-xl font-bold text-text">
              {activeLocation.city}, {activeLocation.country}
            </h3>
            <p className="mt-2 text-sm text-muted">{activeLocation.address}</p>
            <p className="mt-4 text-base text-muted">{activeLocation.description}</p>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
