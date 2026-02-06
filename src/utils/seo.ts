// SEO Utility Functions
export interface SEOConfig {
  title: string;
  description: string;
  keywords?: string;
  ogImage?: string;
  canonical?: string;
  type?: string;
}

export const updatePageSEO = (config: SEOConfig) => {
  // Title
  document.title = config.title;

  // Meta Description
  updateMetaTag('name', 'description', config.description);
  updateMetaTag('name', 'title', config.title);

  // Keywords
  if (config.keywords) {
    updateMetaTag('name', 'keywords', config.keywords);
  }

  // Open Graph
  updateMetaTag('property', 'og:title', config.title);
  updateMetaTag('property', 'og:description', config.description);
  updateMetaTag('property', 'og:type', config.type || 'website');
  
  if (config.ogImage) {
    updateMetaTag('property', 'og:image', config.ogImage);
  }

  if (config.canonical) {
    updateMetaTag('property', 'og:url', config.canonical);
    updateCanonicalLink(config.canonical);
  }

  // Twitter
  updateMetaTag('property', 'twitter:title', config.title);
  updateMetaTag('property', 'twitter:description', config.description);
  
  if (config.ogImage) {
    updateMetaTag('property', 'twitter:image', config.ogImage);
  }
};

const updateMetaTag = (attr: string, attrValue: string, content: string) => {
  let element = document.querySelector(`meta[${attr}="${attrValue}"]`);
  
  if (!element) {
    element = document.createElement('meta');
    element.setAttribute(attr, attrValue);
    document.head.appendChild(element);
  }
  
  element.setAttribute('content', content);
};

const updateCanonicalLink = (url: string) => {
  let link = document.querySelector('link[rel="canonical"]');
  
  if (!link) {
    link = document.createElement('link');
    link.setAttribute('rel', 'canonical');
    document.head.appendChild(link);
  }
  
  link.setAttribute('href', url);
};

// Structured Data Helper
export const addStructuredData = (data: object) => {
  const script = document.createElement('script');
  script.type = 'application/ld+json';
  script.text = JSON.stringify(data);
  
  // Remove existing structured data for this page
  const existing = document.querySelector('script[type="application/ld+json"][data-page]');
  if (existing) {
    existing.remove();
  }
  
  script.setAttribute('data-page', 'true');
  document.head.appendChild(script);
};
