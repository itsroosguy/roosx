import React from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { X, ArrowRight, Award, Calendar, User } from 'lucide-react';
import { Project } from '../types';

interface ProjectModalProps {
  project: Project | null;
  onClose: () => void;
  onOpenInquiry: () => void;
}

export const ProjectModal: React.FC<ProjectModalProps> = ({ project, onClose, onOpenInquiry }) => {
  if (!project) return null;

  return (
    <AnimatePresence>
      <div className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 lg:p-8 overflow-y-auto">
        {/* Backdrop */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          onClick={onClose}
          className="fixed inset-0 bg-[#0A0A0A]/60 backdrop-blur-md"
        />

        {/* Modal Container */}
        <motion.div
          initial={{ opacity: 0, scale: 0.95, y: 20 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          exit={{ opacity: 0, scale: 0.95, y: 20 }}
          className="relative w-full max-w-4xl rounded-3xl border border-[#E4E4E7] dark:border-[#27272A] overflow-hidden z-10 my-auto shadow-2xl bg-white dark:bg-[#18181B] flex flex-col max-h-[90vh] text-[#111111] dark:text-white"
        >
          {/* Header Bar */}
          <div className="flex items-center justify-between px-6 py-4 border-b border-[#E4E4E7] dark:border-[#27272A] bg-[#FAFAFA] dark:bg-[#111111] backdrop-blur-md">
            <div className="flex items-center gap-3">
              <span className="px-3 py-1 text-xs font-semibold rounded-full bg-[#F97316]/10 text-[#F97316] border border-[#F97316]/30">
                {project.categoryLabel}
              </span>
              <span className="text-xs text-[#52525B] dark:text-[#D4D4D8] font-mono flex items-center gap-1">
                <Calendar className="w-3.5 h-3.5" /> {project.year}
              </span>
            </div>

            <button
              onClick={onClose}
              className="p-2 rounded-xl text-[#52525B] dark:text-[#D4D4D8] hover:text-[#111111] dark:hover:text-white hover:bg-slate-200/60 dark:hover:bg-slate-800 transition-colors"
            >
              <X className="w-5 h-5" />
            </button>
          </div>

          {/* Modal Scrollable Content */}
          <div className="p-6 sm:p-8 overflow-y-auto space-y-8">
            
            {/* Hero Title & Client */}
            <div>
              <div className="flex items-center gap-2 text-xs font-semibold uppercase tracking-widest text-[#F97316] mb-2">
                <User className="w-4 h-4" /> Client: {project.client}
              </div>
              <h2 className="font-display text-3xl sm:text-4xl font-extrabold text-[#111111] dark:text-white">
                {project.title}
              </h2>
              <p className="mt-3 text-[#52525B] dark:text-[#D4D4D8] text-lg leading-relaxed">
                {project.fullDescription}
              </p>
            </div>

            {/* Main Hero Media */}
            <div className="relative rounded-2xl overflow-hidden border border-[#E4E4E7] dark:border-[#27272A] group shadow-lg">
              <img
                src={project.heroImage}
                alt={project.title}
                className="w-full h-64 sm:h-96 object-cover transform group-hover:scale-105 transition-transform duration-700"
              />
            </div>

            {/* Impact Metrics Grid */}
            <div>
              <h3 className="text-sm font-semibold uppercase tracking-wider text-[#52525B] dark:text-[#D4D4D8] mb-4 flex items-center gap-2">
                <Award className="w-4 h-4 text-[#FDBA74]" /> Key Impact & Results
              </h3>
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
                {project.metrics.map((metric, i) => (
                  <div key={i} className="p-4 rounded-xl border border-[#E4E4E7] dark:border-[#27272A] text-center bg-[#FAFAFA] dark:bg-[#111111]">
                    <div className="font-display text-2xl font-bold text-[#F97316]">
                      {metric.value}
                    </div>
                    <div className="text-xs font-medium text-[#52525B] dark:text-[#D4D4D8] mt-1">
                      {metric.label}
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Tech & Capabilities Tags */}
            <div>
              <h3 className="text-sm font-semibold uppercase tracking-wider text-[#52525B] dark:text-[#D4D4D8] mb-3">
                Technologies & Deliverables
              </h3>
              <div className="flex flex-wrap gap-2">
                {project.tags.map((tag, i) => (
                  <span
                    key={i}
                    className="px-3 py-1.5 rounded-lg text-xs font-medium bg-[#F4F4F5] dark:bg-[#111111] border border-[#E4E4E7] dark:border-[#27272A] text-[#111111] dark:text-[#D4D4D8]"
                  >
                    {tag}
                  </span>
                ))}
              </div>
            </div>

            {/* Additional Media Gallery */}
            {project.galleryImages && project.galleryImages.length > 0 && (
              <div>
                <h3 className="text-sm font-semibold uppercase tracking-wider text-[#52525B] dark:text-[#D4D4D8] mb-4">
                  Visual Assets Showcase
                </h3>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  {project.galleryImages.map((img, i) => (
                    <div key={i} className="rounded-xl overflow-hidden border border-[#E4E4E7] dark:border-[#27272A]">
                      <img src={img} alt={`Gallery ${i}`} className="w-full h-48 object-cover" />
                    </div>
                  ))}
                </div>
              </div>
            )}

            {/* Modal Bottom Action Bar */}
            <div className="pt-6 border-t border-[#E4E4E7] dark:border-[#27272A] flex flex-col sm:flex-row items-center justify-between gap-4">
              <div className="text-xs text-[#52525B] dark:text-[#D4D4D8]">
                Want a tailored solution like this for your product?
              </div>

              <button
                onClick={() => {
                  onClose();
                  onOpenInquiry();
                }}
                className="w-full sm:w-auto px-6 py-3 rounded-xl bg-[#F97316] hover:bg-[#EA580C] font-semibold text-white flex items-center justify-center gap-2 shadow-lg transition-all"
              >
                <span>Request Similar Case Study</span>
                <ArrowRight className="w-4 h-4" />
              </button>
            </div>

          </div>
        </motion.div>
      </div>
    </AnimatePresence>
  );
};
