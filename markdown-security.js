window.renderMarkdown = function (markdown) {
    const template = document.createElement('template');
    template.innerHTML = DOMPurify.sanitize(marked.parse(markdown), {
        ADD_TAGS: ['iframe'],
        ADD_ATTR: ['allow', 'allowfullscreen', 'frameborder']
    });

    template.content.querySelectorAll('iframe').forEach(iframe => {
        try {
            const url = new URL(iframe.getAttribute('src'), window.location.href);
            const allowedHost = [
                'youtube.com',
                'www.youtube.com',
                'youtube-nocookie.com',
                'www.youtube-nocookie.com'
            ].includes(url.hostname);

            if (url.protocol !== 'https:' || !allowedHost || !/^\/embed\/[A-Za-z0-9_-]+$/.test(url.pathname)) {
                iframe.remove();
                return;
            }

            iframe.setAttribute('sandbox', 'allow-scripts allow-same-origin allow-presentation');
            iframe.setAttribute('referrerpolicy', 'strict-origin-when-cross-origin');
            iframe.setAttribute('loading', 'lazy');
        } catch {
            iframe.remove();
        }
    });

    return template.innerHTML;
};
