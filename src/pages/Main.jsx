import React from 'react';

const Main = ({ blogtopic }) => {
    return (
        <div className="max-w-4xl mx-auto p-6 bg-slate-50 min-h-screen rounded-2xl">
            {/* Component Header Header */}
            <div className="mb-8">
                <h1 className="text-2xl font-black text-slate-800 tracking-tight sm:text-3xl">
                    Latest Publications
                </h1>
                <p className="text-sm text-slate-500 mt-1">
                    Deep dives, guides, and developer tutorials.
                </p>
            </div>

            {/* Articles Grid Container */}
            <div className="grid gap-6 md:grid-cols-2">
                {blogtopic.map((blog, index) => (
                    <article 
                        key={index}
                        className="group flex flex-col bg-white border border-slate-100 rounded-2xl overflow-hidden shadow-sm transition-all duration-300 hover:shadow-md hover:-translate-y-1"
                    >
                        {/* Blog Thumbnail Container */}
                        <div className="relative aspect-[16/9] w-full bg-slate-200 overflow-hidden">
                            <img 
                                src={blog.image || "https://unsplash.com"} 
                                alt={blog.title} 
                                className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                            />
                            {/* Target Audience Tag Overlapping Image */}
                            <span className="absolute top-3 left-3 bg-slate-900/80 backdrop-blur-sm text-[11px] font-bold text-white uppercase tracking-wider px-2.5 py-1 rounded-md">
                                {blog.target_audience || "General"}
                            </span>
                        </div>

                        {/* Article Meta & Content */}
                        <div className="flex flex-col flex-1 p-5">
                            {/* URL Slug Segment */}
                            <span className="text-xs font-mono font-semibold text-blue-600 mb-2 block hover:underline cursor-pointer">
                                /{blog.slug}
                            </span>

                            {/* Main Title */}
                            <h2 className="text-lg font-bold text-slate-800 leading-snug group-hover:text-blue-600 transition-colors duration-200 line-clamp-2 mb-3">
                                {blog.title}
                            </h2>

                            {/* Interactive Read More Link footer */}
                            <div className="mt-auto pt-4 border-t border-slate-50 flex items-center justify-between text-xs font-bold text-slate-400 group-hover:text-blue-500 transition-colors">
                                <span>Read Article</span>
                                <svg className="w-4 h-4 transform transition-transform group-hover:translate-x-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
                                </svg>
                            </div>
                        </div>
                    </article>
                ))}
            </div>

            {/* Empty State Fallback Handling */}
            {blogtopic.length === 0 && (
                <div className="text-center py-12 border-2 border-dashed border-slate-200 rounded-2xl bg-white">
                    <p className="text-sm font-medium text-slate-400">No blog posts found matching this criteria.</p>
                </div>
            )}
        </div>
    );
};

export default Main;
