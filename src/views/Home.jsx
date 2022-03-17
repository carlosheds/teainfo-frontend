import React from 'react';

import HeroSection from '../components/HeroSection';
import FeaturedBlogPost from '../components/FeaturedBlogPost';
import BlogContent from '../components/BlogContent';
export default function Home() {
    return (
        <main className="container">
            <HeroSection cardTitle="Titulo 1" />
            <BlogContent />
            
        </main>
    )
}