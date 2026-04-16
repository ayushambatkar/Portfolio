import { createRoot } from "react-dom/client";
import { Analytics } from "@vercel/analytics/react";
import App from "./App.tsx";
import "./index.css";
import { appConfig } from "./app_config";

const syncFavicon = () => {
	const faviconHref = appConfig.faviconPath;
	if (!faviconHref) return;

	let favicon = document.querySelector("link[rel='icon']") as HTMLLinkElement | null;
	if (!favicon) {
		favicon = document.createElement("link");
		favicon.rel = "icon";
		document.head.appendChild(favicon);
	}

	favicon.href = faviconHref;
};

syncFavicon();

createRoot(document.getElementById("root")!).render(
	<>
		<App />
		<Analytics />
	</>
);
