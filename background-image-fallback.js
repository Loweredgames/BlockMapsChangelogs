(function () {
    function applyBackgroundFallbacks() {
        const imageSetRules = [];
        const testedImages = new Set();
        const fallbackStyle = document.createElement('style');

        function collectImageSetRules(rules) {
            for (const rule of rules) {
                if (!rule.selectorText && rule.cssRules) {
                    collectImageSetRules(rule.cssRules);
                    continue;
                }

                if (rule.selectorText && rule.style?.backgroundImage.includes('image-set(')) {
                    imageSetRules.push(rule);
                }
            }
        }

        for (const stylesheet of document.styleSheets) {
            if (stylesheet.href && new URL(stylesheet.href).origin !== window.location.origin) {
                continue;
            }

            collectImageSetRules(stylesheet.cssRules);
        }

        document.head.appendChild(fallbackStyle);

        imageSetRules.forEach(rule => {
            rule.selectorText.split(',').forEach(selector => {
                const pseudoMatch = selector.match(/::(before|after)\b/);
                if (!pseudoMatch) return;

                const pseudo = `::${pseudoMatch[1]}`;
                const targetSelector = selector.replace(pseudoMatch[0], '').trim();
                const target = document.querySelector(targetSelector);
                if (!target) return;

                const computedImage = getComputedStyle(target, pseudo).backgroundImage;
                const computedUrls = [...computedImage.matchAll(/url\(["']?(.+?)["']?\)/g)]
                    .map(match => new URL(match[1], document.baseURI).href);
                const candidates = [...rule.style.backgroundImage.matchAll(/url\(["']?(.+?)["']?\)/g)]
                    .map(match => new URL(match[1], stylesheetUrl(rule)).href);
                const webpUrl = candidates.find(url => /\.webp(?:$|[?#])/i.test(url));
                const pngUrl = candidates.find(url => /\.png(?:$|[?#])/i.test(url));
                if (!webpUrl || !pngUrl || !computedUrls.includes(webpUrl)) return;

                const testKey = `${selector}|${webpUrl}`;
                if (testedImages.has(testKey)) return;
                testedImages.add(testKey);

                const probe = new Image();
                probe.onerror = () => {
                    fallbackStyle.sheet.insertRule(
                        `${selector} { background-image: url("${pngUrl}") !important; }`,
                        fallbackStyle.sheet.cssRules.length
                    );
                };
                probe.src = webpUrl;
            });
        });

        function stylesheetUrl(rule) {
            const sheet = rule.parentStyleSheet;
            return sheet?.href || document.baseURI;
        }
    }

    if (document.readyState === 'complete') {
        applyBackgroundFallbacks();
    } else {
        document.addEventListener('DOMContentLoaded', applyBackgroundFallbacks, { once: true });
    }
})();
