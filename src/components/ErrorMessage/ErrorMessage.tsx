import { ErrorMessageProps } from "./ErrorMessage.types";


const ErrorMessage = ({ message }:ErrorMessageProps) => (
  <div>{message}</div>
);

export default ErrorMessage;