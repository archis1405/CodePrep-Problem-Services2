const marked = require('marked');
const sanitizeHtml = require('sanitize-html');
const TurndownService = require('turndown');


function sanitizeMarkdown(markdownContent){
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

const input = `
#Hello World

###this is a maarkdown

-something 
<script>
    alert('heloo')
</script>

[Link](www.google.com)

`;

sanitizeMarkdown(input);


// module.exports = sanitizeMarkdown;