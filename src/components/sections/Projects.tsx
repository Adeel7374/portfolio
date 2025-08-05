"use client";

import React from 'react';
import { motion } from 'framer-motion';
import { ExternalLink, Github, Smartphone } from 'lucide-react';
import Card from '../ui/Card';
import Button from '../ui/Button';

interface Project {
  id: number;
  title: string;
  description: string;
  image: string;
  technologies: string[];
  githubUrl?: string;
  liveUrl?: string;
  category: 'mobile' | 'web' | 'other';
}

const Projects: React.FC = () => {
  const projects: Project[] = [
    {
      id: 1,
      title: 'E-Commerce Mobile App',
      description: 'A full-featured e-commerce mobile application built with Flutter. Features include user authentication, product catalog, shopping cart, payment integration, and order tracking.',
      image: '/api/placeholder/400/300',
      technologies: ['Flutter', 'Dart', 'Firebase', 'Stripe API'],
      githubUrl: 'https://github.com',
      liveUrl: 'https://play.google.com',
      category: 'mobile'
    },
    {
      id: 2,
      title: 'Fitness Tracking App',
      description: 'A comprehensive fitness tracking application with workout plans, progress tracking, and social features. Built with React Native for cross-platform compatibility.',
      image: '/api/placeholder/400/300',
      technologies: ['React Native', 'JavaScript', 'Redux', 'Firebase'],
      githubUrl: 'https://github.com',
      liveUrl: 'https://apps.apple.com',
      category: 'mobile'
    },
    {
      id: 3,
      title: 'Food Delivery App',
      description: 'A food delivery application with real-time order tracking, restaurant management, and payment processing. Developed using Native Android for optimal performance.',
      image: '/api/placeholder/400/300',
      technologies: ['Android', 'Kotlin', 'Retrofit', 'Google Maps API'],
      githubUrl: 'https://github.com',
      liveUrl: 'https://play.google.com',
      category: 'mobile'
    },
    {
      id: 4,
      title: 'Task Management App',
      description: 'A productivity app for task management with team collaboration features, reminders, and progress analytics. Built with Flutter for seamless cross-platform experience.',
      image: '/api/placeholder/400/300',
      technologies: ['Flutter', 'Dart', 'SQLite', 'Local Notifications'],
      githubUrl: 'https://github.com',
      liveUrl: 'https://apps.apple.com',
      category: 'mobile'
    },
    {
      id: 5,
      title: 'Portfolio Website',
      description: 'A modern, responsive portfolio website built with Next.js and TypeScript. Features smooth animations, dark mode, and optimal performance.',
      image: '/api/placeholder/400/300',
      technologies: ['Next.js', 'TypeScript', 'Tailwind CSS', 'Framer Motion'],
      githubUrl: 'https://github.com',
      liveUrl: 'https://portfolio.com',
      category: 'web'
    },
    {
      id: 6,
      title: 'Weather App',
      description: 'A beautiful weather application with real-time weather data, forecasts, and location-based services. Built with React Native for iOS and Android.',
      image: '/api/placeholder/400/300',
      technologies: ['React Native', 'JavaScript', 'Weather API', 'Geolocation'],
      githubUrl: 'https://github.com',
      liveUrl: 'https://play.google.com',
      category: 'mobile'
    }
  ];

  return (
    <section id="projects" className="py-20 bg-gray-50 dark:bg-gray-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white mb-4">
            My Projects
          </h2>
          <p className="text-lg text-gray-600 dark:text-gray-400 max-w-3xl mx-auto">
            Here are some of the projects I've worked on. Each project represents 
            my passion for creating innovative and user-friendly applications.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <motion.div
              key={project.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              viewport={{ once: true }}
            >
              <Card className="h-full">
                {/* Project Image */}
                <div className="relative mb-4">
                  <div className="w-full h-48 bg-gradient-to-br from-blue-100 to-indigo-100 dark:from-blue-900/30 dark:to-indigo-900/30 rounded-lg flex items-center justify-center">
                    <Smartphone className="w-16 h-16 text-blue-600 dark:text-blue-400" />
                  </div>
                  <div className="absolute top-2 right-2">
                    <span className="px-2 py-1 bg-blue-600 text-white text-xs rounded-full">
                      {project.category}
                    </span>
                  </div>
                </div>

                {/* Project Content */}
                <div className="flex-1">
                  <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-2">
                    {project.title}
                  </h3>
                  <p className="text-gray-600 dark:text-gray-400 mb-4 line-clamp-3">
                    {project.description}
                  </p>

                  {/* Technologies */}
                  <div className="flex flex-wrap gap-2 mb-4">
                    {project.technologies.map((tech) => (
                      <span
                        key={tech}
                        className="px-2 py-1 bg-gray-100 dark:bg-gray-700 text-gray-700 dark:text-gray-300 text-xs rounded"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>

                  {/* Project Links */}
                  <div className="flex gap-2">
                    {project.githubUrl && (
                      <Button
                        variant="outline"
                        size="sm"
                        className="flex items-center gap-1"
                        onClick={() => window.open(project.githubUrl, '_blank')}
                      >
                        <Github size={16} />
                        Code
                      </Button>
                    )}
                    {project.liveUrl && (
                      <Button
                        variant="primary"
                        size="sm"
                        className="flex items-center gap-1"
                        onClick={() => window.open(project.liveUrl, '_blank')}
                      >
                        <ExternalLink size={16} />
                        Live
                      </Button>
                    )}
                  </div>
                </div>
              </Card>
            </motion.div>
          ))}
        </div>

        {/* View More Button */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.5 }}
          viewport={{ once: true }}
          className="text-center mt-12"
        >
          <Button variant="outline" size="lg">
            View All Projects
          </Button>
        </motion.div>
      </div>
    </section>
  );
};

export default Projects; 