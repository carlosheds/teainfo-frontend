import React from 'react';

export default function FeaturedBlogPost(props) {
    return (
        <section className="">
            <div className="card border-0 mt-5">
                <img src={props.imgSrc} className="card-img-top w-100" alt={props.imgAlt} />
                    <div className="card-body">
                        <h5 className="card-title">{props.postTitle}</h5>
                        <p className="card-text">{props.postText}</p>
                        <a href={props.postUrl} className="btn btn-primary">{props.postBtnText}</a>
                    </div>
            </div>
        </section>
    )
}