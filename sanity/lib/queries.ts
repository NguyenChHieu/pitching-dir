import { defineQuery } from "next-sanity";

export const STARTUPS_QUERY = defineQuery(
  `*[_type == "startup" && defined(slug.current) && !defined($search) || title match $search || category match $search || author->name match $search] | order(_createdAt desc) {
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
);

export const STARTUPS_QUERY_BY_ID = defineQuery(
  `*[_type == "startup" && _id == $id][0] {
        _id,
        title,
        slug,
        _createdAt,
        views,
        description,
        image,
        category,
        pitch,
        "author": author->{
            _id,
            name,
            username,
            image,
            bio
        }
    }`
);

export const STARTUPS_VIEW_QUERY = defineQuery(
  `*[_type == "startup" && _id == $id][0]{
        _id,
        views
    }`
);

export const AUTHOR_BY_GITHUB_ID_QUERY = defineQuery(`
    *[_type == "author" && id == $id][0]{
        _id,
        id,
        name, 
        username,
        email,
        image,
        bio
    }
    `);
