const CommentSection = ({ comments }) => {
  if (comments.length === 0) {
    return <p>There are no comments yet!</p>;
  }
  return comments.map((comment: { id: string; name: string; content: string; date: string }) => (
    <section key={comment.id}>
      <h3 className="text-md">
        {comment.name}&nbsp;-&nbsp;<span className="text-primary text-sm">Posted {comment.date.slice(0, 10)}</span>
      </h3>
      <p>{comment.content}</p>
    </section>
  ));
};

export default CommentSection;
