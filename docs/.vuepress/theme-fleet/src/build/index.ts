import fs from 'fs-extra';
import path from 'path';

// fs.copySync(path.resolve(__dirname, '../client/components'), path.resolve(__dirname, '../../lib/client/components'));
// fs.copySync(path.resolve(__dirname, '../client/layouts'), path.resolve(__dirname, '../../lib/client/layouts'));

fs.copySync(path.resolve(__dirname, '../plugins/mermaid/client/styles'), path.resolve(__dirname, '../../lib/plugins/mermaid/client/styles'));

fs.copySync(path.resolve(__dirname, '../plugins/prism/client/static'), path.resolve(__dirname, '../../lib/plugins/prism/client/static'));
fs.removeSync(path.resolve(__dirname, '../../lib/plugins/prism/client/static/language/prism-languages.js'));
fs.removeSync(path.resolve(__dirname, '../../lib/plugins/prism/client/static/plugins/prism-plugin.js'));

let buf = fs.readFileSync(path.resolve(__dirname, '../../lib/plugins/mermaid/node/mermaidPlugin.js'));
const mermaidPlugin = buf.toString();
fs.writeFile(path.resolve(__dirname, '../../lib/plugins/mermaid/node/mermaidPlugin.js'), mermaidPlugin.replace('/client/config.ts', '/client/config.js'));

buf = fs.readFileSync(path.resolve(__dirname, '../../lib/plugins/prism/node/prismPlugin.js'));
const prismPlugin = buf.toString();
fs.writeFile(path.resolve(__dirname, '../../lib/plugins/prism/node/prismPlugin.js'), prismPlugin.replace('/client/config.ts', '/client/config.js'));
