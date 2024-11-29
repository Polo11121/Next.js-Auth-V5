import { FaCheckCircle } from "react-icons/fa";

type FormErrorProps = {
  message?: string;
};

export const FormSuccess = ({ message }: FormErrorProps) =>
  message ? (
    <div className="bg-emerald-500/15 p-3 rounded-md flex items-center gap-x-2 text-sm text-emerald-500">
      <FaCheckCircle className="h-4 w-4" />
      <span>{message}</span>
    </div>
  ) : null;
