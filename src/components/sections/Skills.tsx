"use client";

import React from 'react';
import { motion } from 'framer-motion';
import { Code, Smartphone, Database, Cloud } from 'lucide-react';
import Card from '../ui/Card';

interface SkillCategory {
  title: string;
  icon: React.ComponentType<{ size?: number; className?: string }>;
  skills: Array<{
    name: string;
    level: number;
    color: string;
  }>;
}

const Skills: React.FC = () => {
  const skillCategories: SkillCategory[] = [
    {
      title: 'Mobile Development',
      icon: Smartphone,
      skills: [
        { name: 'Flutter', level: 95, color: 'bg-blue-500' },
        { name: 'React Native', level: 90, color: 'bg-blue-600' },
        { name: 'Android (Kotlin)', level: 85, color: 'bg-green-500' },
        { name: 'iOS (Swift)', level: 80, color: 'bg-gray-600' },
      ]
    },
    {
      title: 'Programming Languages',
      icon: Code,
      skills: [
        { name: 'Dart', level: 95, color: 'bg-blue-500' },
        { name: 'JavaScript', level: 90, color: 'bg-yellow-500' },
        { name: 'TypeScript', level: 85, color: 'bg-blue-600' },
        { name: 'Kotlin', level: 85, color: 'bg-purple-500' },
      ]
    },
    {
      title: 'Backend & APIs',
      icon: Database,
      skills: [
        { name: 'Firebase', level: 90, color: 'bg-orange-500' },
        { name: 'REST APIs', level: 85, color: 'bg-green-600' },
        { name: 'GraphQL', level: 75, color: 'bg-pink-500' },
        { name: 'Node.js', level: 70, color: 'bg-green-500' },
      ]
    },
    {
      title: 'Tools & Platforms',
      icon: Cloud,
      skills: [
        { name: 'Git', level: 90, color: 'bg-orange-600' },
        { name: 'Docker', level: 75, color: 'bg-blue-500' },
        { name: 'AWS', level: 70, color: 'bg-yellow-600' },
        { name: 'CI/CD', level: 80, color: 'bg-purple-600' },
      ]
    }
  ];

  return (
    <section id="skills" className="py-20 bg-gray-50 dark:bg-gray-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white mb-4">
            Skills & Expertise
          </h2>
          <p className="text-lg text-gray-600 dark:text-gray-400 max-w-3xl mx-auto">
            My technical skills and expertise across various technologies and platforms.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-8">
          {skillCategories.map((category, categoryIndex) => (
            <motion.div
              key={category.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: categoryIndex * 0.1 }}
              viewport={{ once: true }}
            >
              <Card>
                <div className="flex items-center mb-6">
                  <div className="bg-blue-100 dark:bg-blue-900/30 w-12 h-12 rounded-lg flex items-center justify-center mr-4">
                    <category.icon className="w-6 h-6 text-blue-600 dark:text-blue-400" />
                  </div>
                  <h3 className="text-xl font-bold text-gray-900 dark:text-white">
                    {category.title}
                  </h3>
                </div>

                <div className="space-y-4">
                  {category.skills.map((skill, skillIndex) => (
                    <motion.div
                      key={skill.name}
                      initial={{ opacity: 0, x: -20 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      transition={{ duration: 0.6, delay: (categoryIndex * 0.1) + (skillIndex * 0.05) }}
                      viewport={{ once: true }}
                    >
                      <div className="flex justify-between items-center mb-2">
                        <span className="text-sm font-medium text-gray-700 dark:text-gray-300">
                          {skill.name}
                        </span>
                        <span className="text-sm text-gray-500 dark:text-gray-400">
                          {skill.level}%
                        </span>
                      </div>
                      <div className="w-full bg-gray-200 dark:bg-gray-700 rounded-full h-2">
                        <motion.div
                          className={`h-2 rounded-full ${skill.color}`}
                          initial={{ width: 0 }}
                          whileInView={{ width: `${skill.level}%` }}
                          transition={{ duration: 1, delay: (categoryIndex * 0.1) + (skillIndex * 0.05) + 0.3 }}
                          viewport={{ once: true }}
                        />
                      </div>
                    </motion.div>
                  ))}
                </div>
              </Card>
            </motion.div>
          ))}
        </div>

        {/* Additional Skills */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.5 }}
          viewport={{ once: true }}
          className="mt-16"
        >
          <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-8 text-center">
            Additional Skills
          </h3>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            {[
              'UI/UX Design', 'Agile/Scrum', 'Testing', 'Performance Optimization',
              'State Management', 'Local Storage', 'Push Notifications', 'App Store Deployment'
            ].map((skill, index) => (
              <motion.div
                key={skill}
                initial={{ opacity: 0, scale: 0.8 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.3, delay: index * 0.05 }}
                viewport={{ once: true }}
                className="bg-white dark:bg-gray-800 p-4 rounded-lg border border-gray-200 dark:border-gray-700 text-center hover:shadow-md transition-shadow duration-200"
              >
                <span className="text-sm font-medium text-gray-700 dark:text-gray-300">
                  {skill}
                </span>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Skills; 