"use client";

import useSWR from "swr";

const fetcher = (url: string) => fetch(url).then((res) => res.json());

const FetchComments = ({ id }: { id: string }) => {
  const { data, error, isLoading } = useSWR(
    `http://localhost:4000/blogposts/${id}?embed=comments`,
    fetcher
  );

  if (isLoading) return <p>...</p>;
  if (error) return <p>0 Comments</p>;

  const commentsAmount = data?.comments?.length || 0;
  return <p>{commentsAmount} Comments</p>;
};
export default FetchComments;
