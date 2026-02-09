import React, { useMemo } from 'react';

// Dynamically import all images from src/assets
// eager: true ensures they are bundled and URLs are available synchronously
const localImages = import.meta.glob(['/src/assets/**/*', '/src/components/logos/**/*.{png,jpg,jpeg,svg,ico,webp}'], { eager: true, import: 'default' });

const UnifiedImage = React.memo(({ src, alt, className, style, ...props }) => {
    const imageSrc = useMemo(() => {
        if (!src) return '';

        // Case 1: External URL (http/https) or Data URI
        if (src.startsWith('http') || src.startsWith('data:')) {
            return src;
        }

        // Case 2: Local Path (e.g., "src/assets/logo.png")
        // We try to match with or without the leading slash
        const normalizedPath = src.startsWith('/') ? src : `/${src}`;

        // Exact match check
        if (localImages[normalizedPath]) {
            return localImages[normalizedPath];
        }

        // Fallback: If path doesn't contain /src/, try appending it? 
        // Current usage in constants.js provides full path "src/assets/..."

        console.warn(`[UnifiedImage] Could not resolve local image: ${src}`);
        return src; // Return original as last resort
    }, [src]);

    if (!imageSrc) return null;

    return (
        <img
            src={imageSrc}
            alt={alt || ''}
            className={className}
            style={style}
            loading={props.loading || "lazy"}
            decoding={props.decoding || "async"}
            {...props}
        />
    );
});

UnifiedImage.displayName = 'UnifiedImage';

export default UnifiedImage;
