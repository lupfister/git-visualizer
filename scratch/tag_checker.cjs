const fs = require('fs');
const content = fs.readFileSync('/Users/luca/cursor/git-visualizer/components/BranchMap.tsx', 'utf8');
const tags = content.match(/<([a-zA-Z0-9]+)|<\/([a-zA-Z0-9]+)/g);
let stack = [];
for (let tag of tags) {
  if (tag.startsWith('</')) {
    let name = tag.slice(2);
    if (stack.length === 0) {
      console.log('Extra closing tag:', tag);
    } else {
      let last = stack.pop();
      if (last !== name) {
        console.log('Mismatched tag:', last, name);
      }
    }
  } else {
    let name = tag.slice(1);
    // Ignore self-closing tags (simplified)
    if (!tag.endsWith('/>')) stack.push(name);
  }
}
console.log('Unclosed tags:', stack);
