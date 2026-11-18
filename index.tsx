import React from "react";

export type SuspenseOptions<T> = {
	fallback?: React.ComponentType<T> | React.ReactNode;
} & Omit<React.SuspenseProps, "children" | "fallback" | "name">;

export function withSuspense<T extends object>(Component: React.ComponentType<T>, { fallback, ...options }: SuspenseOptions<T> = {}): React.FC<T> {
	const displayName = `WithSuspense(${Component.displayName || Component.name || "Component"})`;

	return Object.assign((props: T) => {
		const node = typeof fallback === "function"
			? React.createElement(fallback as React.ComponentType<T>, props)
			: fallback;

		return (
			<React.Suspense {...options} fallback={node} name={displayName}>
				<Component {...props} />
			</React.Suspense>
		);
	}, {
		displayName
	});
}
