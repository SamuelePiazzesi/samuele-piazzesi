interface WindowWithHj extends Window {
	hj: (method: string, ...args: any[]) => void;
}

declare const window: WindowWithHj;
