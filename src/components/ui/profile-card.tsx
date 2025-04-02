"use client";

import * as React from "react";
import Image from "next/image";
import { motion } from "framer-motion";
import { Card, CardContent, CardHeader } from "./card";

interface ProfileCardProps {
  name: string;
  username: string;
  bio: string;
  avatarUrl: string;
}

export function ProfileCard({ name, username, bio, avatarUrl }: ProfileCardProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
    >
      <Card className="w-full max-w-md mx-auto">
        <CardHeader className="flex flex-col items-center space-y-3 pt-6">
          <motion.div
            whileHover={{ scale: 1.05 }}
            transition={{ type: "spring", stiffness: 300 }}
          >
            <Image
              src={avatarUrl}
              alt={name}
              width={80}
              height={80}
              className="rounded-full border-2 border-primary"
              priority
            />
          </motion.div>
          <div className="text-center">
            <h2 className="text-xl font-bold">{name}</h2>
            <p className="text-sm text-muted-foreground">{username}</p>
          </div>
        </CardHeader>
        <CardContent>
          <p className="text-center text-sm">{bio}</p>
        </CardContent>
      </Card>
    </motion.div>
  );
}