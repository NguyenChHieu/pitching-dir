import { defineQuery } from "next-sanity";

export const STARTUPS_QUERY = defineQuery(
    `*[_type == "startup" && defined(slug.current)] | order(_createdAt desc) {
        _id,
        title,
        slug,
        _createdAt,
        views,
        description,
        image,
        category,
        "author": author->{
            _id,
            name,
            image,
            bio
        }
    }`
)