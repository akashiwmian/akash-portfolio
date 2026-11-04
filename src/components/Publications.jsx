import React, { useState } from 'react';
import { 
  BookOpen, 
  ExternalLink, 
  Copy, 
  Check, 
  FileText, 
  Award, 
  ChevronDown, 
  ChevronUp, 
  Sparkles, 
  Calendar, 
  Bookmark,
  Share2
} from 'lucide-react';
import { publicationsData } from '../data/portfolioData';

export default function Publications() {
  const [copiedId, setCopiedId] = useState(null);
  const [expandedAbstractId, setExpandedAbstractId] = useState(null);
  const [filterYear, setFilterYear] = useState('All');

  const copyBibtex = (id, bibtex) => {
    navigator.clipboard.writeText(bibtex);
    setCopiedId(id);
    setTimeout(() => {
      setCopiedId(null);
    }, 2500);
  };

  const toggleAbstract = (id) => {
    setExpandedAbstractId(expandedAbstractId === id ? null : id);
  };

  const filteredPublications = filterYear === 'All'
    ? publicationsData
    : publicationsData.filter(p => p.year.toString() === filterYear);

  return (
    <section id="publications" className="py-20 bg-white border-b border-nature-border/80 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-12">
          <div className="max-w-3xl">
            <div className="inline-flex items-center space-x-2 px-3 py-1 rounded-full bg-nature-accentLight/60 text-nature-primary text-xs font-bold uppercase tracking-wider mb-3">
              <BookOpen className="w-3.5 h-3.5" />
              <span>Peer-Reviewed Scientific Output</span>
            </div>
            <h2 className="text-3xl sm:text-4xl font-extrabold text-nature-primary tracking-tight">
              Featured Journal Publications
            </h2>
            <p className="mt-3 text-base text-nature-text/80 leading-relaxed">
              International peer-reviewed journal articles investigating crop-water modeling, regional hydrochemistry, and climate change projections published in premier Elsevier journals.
            </p>
          </div>

          {/* Year Filter Buttons */}
          <div className="mt-6 md:mt-0 flex items-center space-x-2 p-1 bg-nature-surface rounded-xl border border-nature-border shadow-soft self-start">
            {['All', '2026', '2024'].map((yr) => (
              <button
                key={yr}
                onClick={() => setFilterYear(yr)}
                className={`px-4 py-1.5 rounded-lg text-xs font-bold transition-all ${
                  filterYear === yr
                    ? 'bg-nature-primary text-white shadow-sm'
                    : 'text-nature-muted hover:text-nature-primary hover:bg-nature-sand'
                }`}
              >
                {yr}
              </button>
            ))}
          </div>
        </div>

        {/* Publications Summary Badges */}
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 mb-10">
          <div className="p-4 rounded-xl bg-nature-surface border border-nature-border flex items-center space-x-3">
            <div className="p-2.5 rounded-lg bg-nature-primary text-white">
              <Award className="w-5 h-5" />
            </div>
            <div>
              <div className="text-lg font-bold text-nature-primary font-mono">3 Articles</div>
              <div className="text-xs text-nature-muted">Indexed in Scopus / ScienceDirect</div>
            </div>
          </div>

          <div className="p-4 rounded-xl bg-nature-surface border border-nature-border flex items-center space-x-3">
            <div className="p-2.5 rounded-lg bg-nature-water text-white">
              <Bookmark className="w-5 h-5" />
            </div>
            <div>
              <div className="text-lg font-bold text-nature-primary font-mono">Q1 Elsevier Journal</div>
              <div className="text-xs text-nature-muted">Agricultural Water Management (2026)</div>
            </div>
          </div>

          <div className="p-4 rounded-xl bg-nature-surface border border-nature-border flex items-center space-x-3">
            <div className="p-2.5 rounded-lg bg-emerald-700 text-white">
              <Sparkles className="w-5 h-5" />
            </div>
            <div>
              <div className="text-lg font-bold text-nature-primary font-mono">100% Peer-Reviewed</div>
              <div className="text-xs text-nature-muted">Direct Elsevier DOI Registered</div>
            </div>
          </div>
        </div>

        {/* Publication Cards List */}
        <div className="space-y-6">
          {filteredPublications.map((pub, idx) => (
            <div
              key={pub.id}
              className="bg-nature-surface rounded-3xl p-6 sm:p-8 border border-nature-border hover:border-nature-accent transition-all shadow-card hover:shadow-elevated relative overflow-hidden"
            >
              {/* Top Meta Line: Journal & Year */}
              <div className="flex flex-wrap items-center justify-between gap-3 mb-4">
                <div className="flex flex-wrap items-center gap-2">
                  <span className="px-3 py-1 rounded-full bg-nature-primary text-white text-xs font-bold tracking-wide">
                    {pub.journal}
                  </span>
                  <span className="px-2.5 py-0.5 rounded-full bg-white text-nature-muted border border-nature-border text-xs font-mono font-medium">
                    Vol. {pub.volume}, Article {pub.pages}
                  </span>
                  <span className="px-2.5 py-0.5 rounded-full bg-nature-accentLight/60 text-nature-primary text-xs font-mono font-bold">
                    {pub.year}
                  </span>
                </div>

                <span className="text-[11px] font-mono text-nature-waterDark font-semibold uppercase tracking-wider">
                  {pub.publisher} • {pub.tier}
                </span>
              </div>

              {/* Title */}
              <h3 className="text-lg sm:text-xl font-extrabold text-nature-primary leading-snug mb-3 hover:text-nature-waterDark transition-colors">
                <a
                  href={pub.doi}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:underline flex items-start gap-2"
                >
                  <span>{pub.title}</span>
                  <ExternalLink className="w-4 h-4 flex-shrink-0 mt-1 text-nature-water" />
                </a>
              </h3>

              {/* Authors List with Akash highlighted */}
              <div className="text-xs text-nature-text/90 leading-relaxed mb-4">
                <span className="font-semibold text-nature-muted">Authors: </span>
                {pub.authors.map((author, aIdx) => {
                  const isAkash = author.trim() === 'Akash';
                  return (
                    <span key={aIdx}>
                      {isAkash ? (
                        <span className="font-extrabold text-nature-primary bg-nature-accentLight px-1.5 py-0.5 rounded border border-nature-accent/50 underline decoration-nature-primary/40">
                          {author}
                        </span>
                      ) : (
                        <span>{author}</span>
                      )}
                      {aIdx < pub.authors.length - 1 ? ', ' : ''}
                    </span>
                  );
                })}
              </div>

              {/* Tag Badges */}
              <div className="flex flex-wrap gap-2 mb-6">
                {pub.tags.map((tag, tIdx) => (
                  <span
                    key={tIdx}
                    className="text-[11px] font-mono px-2.5 py-0.5 rounded-md bg-white text-nature-muted border border-nature-border"
                  >
                    #{tag}
                  </span>
                ))}
              </div>

              {/* Expandable Abstract Preview */}
              {expandedAbstractId === pub.id && (
                <div className="my-5 p-5 rounded-2xl bg-white border border-nature-border animate-fadeIn">
                  <h4 className="text-xs font-bold uppercase tracking-wider text-nature-primary mb-2 flex items-center space-x-1.5">
                    <FileText className="w-3.5 h-3.5 text-nature-water" />
                    <span>Scientific Abstract</span>
                  </h4>
                  <p className="text-xs sm:text-sm text-nature-text leading-relaxed">
                    {pub.abstract}
                  </p>
                </div>
              )}

              {/* Action Buttons Row */}
              <div className="pt-4 border-t border-nature-border/70 flex flex-wrap items-center justify-between gap-4">
                
                <div className="flex items-center space-x-3">
                  <a
                    href={pub.doi}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center space-x-1.5 px-4 py-2 rounded-xl bg-nature-primary text-white text-xs font-bold hover:bg-nature-secondary transition-all shadow-sm group"
                  >
                    <span>View on ScienceDirect</span>
                    <ExternalLink className="w-3.5 h-3.5 group-hover:translate-x-0.5 transition-transform" />
                  </a>

                  <button
                    onClick={() => copyBibtex(pub.id, pub.bibtex)}
                    className="inline-flex items-center space-x-1.5 px-4 py-2 rounded-xl bg-white border border-nature-border text-nature-primary text-xs font-bold hover:bg-nature-sand transition-all shadow-sm"
                  >
                    {copiedId === pub.id ? (
                      <>
                        <Check className="w-3.5 h-3.5 text-emerald-600" />
                        <span className="text-emerald-700">BibTeX Copied!</span>
                      </>
                    ) : (
                      <>
                        <Copy className="w-3.5 h-3.5 text-nature-muted" />
                        <span>Cite (BibTeX)</span>
                      </>
                    )}
                  </button>
                </div>

                <button
                  onClick={() => toggleAbstract(pub.id)}
                  className="inline-flex items-center space-x-1 text-xs font-bold text-nature-waterDark hover:text-nature-primary transition-colors"
                >
                  <span>{expandedAbstractId === pub.id ? 'Hide Abstract' : 'Read Abstract'}</span>
                  {expandedAbstractId === pub.id ? (
                    <ChevronUp className="w-4 h-4" />
                  ) : (
                    <ChevronDown className="w-4 h-4" />
                  )}
                </button>

              </div>

            </div>
          ))}
        </div>

      </div>
    </section>
  );
}

