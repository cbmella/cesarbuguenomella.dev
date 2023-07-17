import React from 'react';

const classes = {
    postContainer: "flex flex-col rounded-lg shadow-lg overflow-hidden",
    imageContainer: "flex-shrink-0",
    image: "h-48 w-full object-cover",
    contentContainer: "flex-1 bg-white p-6 flex flex-col justify-between",
    titleLink: "block",
    title: "mt-2 text-xl leading-7 font-semibold text-gray-900",
    subtitle: "mt-3 text-base leading-6 text-gray-500",
    date: "mt-3 text-sm leading-5 text-gray-500",
};

const MediumPost = ({ post }) => {
    const mediumLink = `https://medium.com/${post.author.username}/${post.uniqueSlug}`;
    const imageUrl = `https://cdn-images-1.medium.com/max/350/${post.virtuals.previewImage.imageId}`;

    return (
        <div className={classes.postContainer}>
            <div className={classes.imageContainer}>
                <img className={classes.image} src={imageUrl} alt={post.title} />
            </div>
            <div className={classes.contentContainer}>
                <div className="flex-1">
                    <a href={mediumLink} target="_blank" rel="noopener noreferrer" className={classes.titleLink}>
                        <h3 className={classes.title}>
                            {post.title}
                        </h3>
                        <p className={classes.subtitle}>
                            {post.virtuals.subtitle}
                        </p>
                    </a>
                </div>
                <p className={classes.date}>
                    Publicado en: {post.createdAt}
                </p>
            </div>
        </div>
    );
};

export default MediumPost;

