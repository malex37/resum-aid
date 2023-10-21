import { Link } from 'react-router-dom'
const LinkButton = (props: { path: string, text: string }) => {
  return(
    <div className="border-b border-b-purple-500 rounded m-3 p-1px hover:border hover:border-purple-500">
      <Link to={props.path}>{props.text}</Link>
    </div>
  );
}

export default LinkButton;

