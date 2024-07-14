import { ReactNode } from "react";
import styles from "./UtilMenu.module.css";
import { useClassNames } from "../../../hooks";

interface UtilMenuProps {
	active: boolean;
	setActive: Function;
	className: string;
	children: ReactNode;
}

export function UtilMenu({ active, setActive: _setActive, className, children }: UtilMenuProps) {
	const classNames = [styles.UtilMenuContainer];
	if (active)
		classNames.push(styles.Active);
	if (className != null)
		classNames.push(className);

	return (<div className={classNames.join(" ")}>
		<div className={useClassNames([styles.UtilMenu], "Taskbar", "Menu", "Util")}>
			{children}
		</div>
	</div>);
}