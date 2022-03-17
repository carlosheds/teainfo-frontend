import React from 'react';

import FeaturedBlogPost from './FeaturedBlogPost';
import AboutGroup from './AboutGroup';


export default function BlogContent() {
    return (
        <main className="container mt-5">
            <div className="row justify-content-between">
                <section className="col-lg-6 p-0">
                    <FeaturedBlogPost
                        imgSrc="./paper-textured-bg.jpg"
                        postTitle="Titulo"
                        postText="lorem"
                        postBtnText="Clique aqui"
                        postUrl="#" />

                    <FeaturedBlogPost
                        imgSrc="./paper-textured-bg.jpg"
                        postTitle="Titulo"
                        postText="lorem"
                        postBtnText="Clique aqui"
                        postUrl="#" />
                    <FeaturedBlogPost
                        imgSrc="./paper-textured-bg.jpg"
                        postTitle="Titulo"
                        postText="lorem"
                        postBtnText="Clique aqui"
                        postUrl="#" />
                    <FeaturedBlogPost
                        imgSrc="./paper-textured-bg.jpg"
                        postTitle="Titulo"
                        postText="lorem"
                        postBtnText="Clique aqui"
                        postUrl="#" />
                </section>



                <aside className="col-lg-4 mt-5">
                    <div className="sticky-top">

                    <h3 className="text-center">Membros</h3>
                    <AboutGroup nameTitle="Carlos" personText="Lorem ipsum dolor sit amet consectetur adipisicing elit."/>  
                    <AboutGroup nameTitle="Rafael" personText="Lorem ipsum dolor sit amet consectetur adipisicing elit."/>
                    <AboutGroup nameTitle="André" personText="Lorem ipsum dolor sit amet consectetur adipisicing elit."/>
                    </div>
                </aside>
            </div>
        </main>
    )
}