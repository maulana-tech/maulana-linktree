"use client";

import { motion } from "framer-motion";
import { IconBrandGithub, IconBrandLinkedin, IconBrandTwitter, IconBrandInstagram, IconWorld } from "@tabler/icons-react";
import { ProfileCard } from "@/components/ui/profile-card";
import { LinkCard } from "@/components/ui/link-card";
import { getProfile, getLinks, type Link } from "@/lib/data";

const container = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1,
      delayChildren: 0.3,
    },
  },
};

export default function Home() {
  const profile = getProfile();
  const links = getLinks();

  // Function to render the appropriate icon based on the icon name
  const renderIcon = (iconName: string) => {
    switch (iconName) {
      case "github":
        return <IconBrandGithub className="h-5 w-5" />;
      case "linkedin":
        return <IconBrandLinkedin className="h-5 w-5" />;
      case "twitter":
        return <IconBrandTwitter className="h-5 w-5" />;
      case "instagram":
        return <IconBrandInstagram className="h-5 w-5" />;
      case "world":
        return <IconWorld className="h-5 w-5" />;
      default:
        return <IconWorld className="h-5 w-5" />;
    }
  };

  return (
    <div className="min-h-screen p-8 pb-20 flex flex-col items-center justify-center gap-8 sm:p-20 font-[family-name:var(--font-geist-sans)]">
      <motion.main 
        className="w-full max-w-md flex flex-col gap-6 items-center"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.5 }}
      >
        <ProfileCard 
          name={profile.name}
          username={profile.username}
          bio={profile.bio}
          avatarUrl={profile.avatarUrl}
        />
        
        <motion.div 
          className="w-full space-y-3"
          variants={container}
          initial="hidden"
          animate="show"
        >
          {links.map((link, index) => (
            <LinkCard 
              key={index}
              href={link.url}
              title={link.title}
              icon={renderIcon(link.icon)}
            />
          ))}
        </motion.div>
      </motion.main>
      
      <motion.footer 
        className="text-center text-sm text-muted-foreground"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.8, duration: 0.5 }}
      >
        <p>© {new Date().getFullYear()} Maulana. All rights reserved.</p>
      </motion.footer>
    </div>
  );
}
