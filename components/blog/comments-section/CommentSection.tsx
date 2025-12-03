const CommentSection = ({ comments }) => {
  if (comments.length === 0) {
    return <p>There are no comments yet!</p>;
  }
  return comments.map((comment) => (
    <section key={comment.id}>
      <h3>
        {comment.name}&nbsp;-&nbsp;<span className="text-primary">Posted {comment.date}</span>
      </h3>
      <p>{comment.content}</p>
    </section>
  ));
};

export default CommentSection;
