const FetchComments = async ({ id }: { id: string }) => {
  console.log("id", id);
  const response = await fetch(`http://localhost:4000/blogposts/${id}?embed=comments`);
  const data = await response.json();
  console.log(data);
  const commentsAmount = data.comments.length;
  return <p>{commentsAmount} Comments</p>;
};
export default FetchComments;
