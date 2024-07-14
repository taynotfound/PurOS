import { useMemo } from "react";
import { NAME } from "../../constants/branding.const";

/**
 * Generates static class name using BEM notation
 */
export function useStaticClassName(block?: string, element?: string, modifier?: string) {
	return useMemo(() => {
		if (block == null)
			return null;

		let className = `${NAME}-${block}`;

		if (element != null)
			className += `_${element}`;
		if (modifier != null)
			className += `--${modifier}`;

		return className;
	}, [block, element, modifier]);
}

/**
 * Combine clas names and an optional static class name
 */
export function useClassNames(classNames: (string | undefined)[], block?: string, element?: string, modifier?: string) {
	const staticClassName = useStaticClassName(block, element, modifier);

	return useMemo(() => {
		const resultClassNames = [...classNames];

		resultClassNames.filter((className) => className != null);

		if (staticClassName != null)
			resultClassNames.unshift(staticClassName);

		return resultClassNames.join(" ");
	}, [classNames, staticClassName]);
}