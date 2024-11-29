import { FaExclamationTriangle } from "react-icons/fa";

type FormErrorProps = {
  message?: string;
};

export const FormError = ({ message }: FormErrorProps) =>
  message ? (
    <div className="bg-destructive/15 p-3 rounded-md flex items-center gap-x-2 text-sm text-destructive">
      <FaExclamationTriangle className="h-4 w-4" />
      <span>{message}</span>
    </div>
  ) : null;
