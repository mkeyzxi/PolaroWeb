import { useRef, useEffect, startTransition, useState } from "react";
import { useLocation } from "react-router-dom";

type PageTransitionProps = {
	children: React.ReactNode;
};

const PageTransition = ({ children }: PageTransitionProps) => {
	const location = useLocation();
	const [displayChildren, setDisplayChildren] = useState(children);
	const [isTransitioning, setIsTransitioning] = useState(false);
	const containerRef = useRef<HTMLDivElement>(null);

	useEffect(() => {
		// Start exit animation
		setIsTransitioning(true);

		// Wait for exit animation, then update content with startTransition
		const exitTimeout = setTimeout(() => {
			startTransition(() => {
				setDisplayChildren(children);
			});

			// Wait a frame then start enter animation
			requestAnimationFrame(() => {
				setIsTransitioning(false);
			});
		}, 200); // Exit animation duration

		return () => clearTimeout(exitTimeout);
	}, [location.pathname, children]);

	return (
		<div
			ref={containerRef}
			className={`page-transition-container ${isTransitioning ? "page-exit" : "page-enter"}`}
		>
			{displayChildren}
		</div>
	);
};

export default PageTransition;
