const marked = require('marked');
const sanitizeHtml = require('sanitize-html');
const TurndownService = require('turndown');


function sanitizeMarkdownContent(markdownContent){
    const turndownService = new TurndownService();

    // 1. Convert mrkdown to HTML
    const convertedHTML = marked.parse(markdownContent);
    console.log(convertedHTML);

    // 2. Sanitize HTML 
    const sanitizedHtml = sanitizeHtml(convertedHTML , {
        allowedTags: sanitizeHtml.defaults.allowedTags
    });

    console.log(sanitizedHtml);
    const sanitizeMarkdown = turndownService.turndown(sanitizedHtml);
    console.log(sanitizeMarkdown);

    return sanitizeMarkdown;

}
module.exports = sanitizeMarkdownContent;