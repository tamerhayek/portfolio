"use client";

import Script from "next/script";

const CookiePolicy = () => {
	return (
		<head>
			<Script
				id="oil-configuration"
				type="application/configuration"
				data-remote-config="https://tamer-hayek.avacy-cdn.com/config/tamer-hayek/006144a6-009a-4a62-9a91-1a790165a355/banner.json"
				strategy="beforeInteractive"
			/>
			<Script
				src="https://tamer-hayek.avacy-cdn.com/current/dist/oil.min.js"
				strategy="beforeInteractive"
			/>
			<Script
				src="https://tamer-hayek.avacy-cdn.com/current/dist/oilstub.min.js"
				strategy="beforeInteractive"
			/>
		</head>
	);
};

export default CookiePolicy;

