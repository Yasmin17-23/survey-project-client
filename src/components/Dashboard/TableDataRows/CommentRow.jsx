const CommentRow = ({ comment }) => {

    const showComment = () => {
       return comment?.commentRecord?.map((item, index) => {
          const commentLine = item.comment;
          return (<span key={index} >{commentLine}</span>)
       })
    }
  return (
    <tr>
      <td>{comment?.title}</td>
      <td>{comment?.questionTitle}</td>
      <td>{showComment()}</td>
    </tr>
  );
};

export default CommentRow;
