import { ReactNode } from "react";

interface Props {
	children: ReactNode;
  onHide: () => void
}

const Alert = ({ children, onHide }: Props) => {
	return (
		<div className="alert alert-primary alert-dismissible fade show" role="alert">
			{children}
			<button type="button" onClick={onHide} className="btn-close" data-bs-dismiss="alert" aria-label="Close"></button>
		</div>
	);
};

export default Alert;
