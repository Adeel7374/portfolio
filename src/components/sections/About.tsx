"use client";

import React from 'react';
import { motion } from 'framer-motion';
import { User, Code, Smartphone, Award } from 'lucide-react';

const About: React.FC = () => {
  const stats = [
    { icon: User, label: 'Years Experience', value: '3+' },
    { icon: Code, label: 'Projects Completed', value: '50+' },
    { icon: Smartphone, label: 'Apps Developed', value: '30+' },
    { icon: Award, label: 'Client Satisfaction', value: '100%' },
  ];

  const skills = [
    'Flutter', 'Dart', 'Ads Integration', 'In-App-Purchases', 'XCode', 'Getx', 'Provider', 'RiverPod', 'JavaScript', 'TypeScript',
    'Android Development', 'iOS Development', 'Firebase', 'REST APIs',
    'Git', 'Github', 'Gitlab', 'UI/UX Design', 'Google Play Console', 'App Store Connect'
  ];

  return (
    <section id="about" className="py-20 bg-black">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
            About Me
          </h2>
          <p className="text-lg text-gray-300 max-w-3xl mx-auto">
            I&apos;m a passionate Mobile Application Developer with expertise in creating 
            innovative and user-friendly mobile applications.
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-12 items-center mb-16">
          {/* About Content */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <h3 className="text-2xl font-bold text-white mb-6">
              Who I Am
            </h3>
            <div className="space-y-4 text-gray-300">
              <p>
                I&apos;m a dedicated Mobile Application Developer with over 3 years of experience 
                in the mobile development industry. My journey began with a passion for 
                creating apps that make a difference in people&apos;s lives.
              </p>
              <p>
                I specialize in Flutter, React Native, and Native Android development, 
                with a strong focus on creating high-performance, scalable, and 
                user-friendly applications. My expertise includes both Android and iOS 
                platforms, ensuring cross-platform compatibility and optimal user experience.
              </p>
              <p>
                When I&apos;m not coding, you can find me exploring new technologies, 
                contributing to open-source projects, or sharing knowledge with the 
                developer community.
              </p>
            </div>
          </motion.div>

          {/* Stats */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="grid grid-cols-2 gap-6"
          >
            {stats.map((stat, index) => (
              <motion.div
                key={stat.label}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="text-center"
              >
                <div className="bg-blue-900/30 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                  <stat.icon className="w-8 h-8 text-blue-400" />
                </div>
                <div className="text-2xl font-bold text-white mb-1">
                  {stat.value}
                </div>
                <div className="text-sm text-gray-400">
                  {stat.label}
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>

        {/* Skills */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          <h3 className="text-2xl font-bold text-white mb-8 text-center">
            Skills & Technologies
          </h3>
          <div className="flex flex-wrap justify-center gap-3">
            {skills.map((skill, index) => (
              <motion.span
                key={skill}
                initial={{ opacity: 0, scale: 0.8 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.3, delay: index * 0.05 }}
                viewport={{ once: true }}
                className="px-4 py-2 bg-gray-800 text-gray-300 rounded-full text-sm font-medium hover:bg-blue-900/30 hover:text-blue-400 transition-colors duration-200"
              >
                {skill}
              </motion.span>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default About; 