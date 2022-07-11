import fs from 'fs-extra';
import path from 'path';

fs.copySync(path.resolve(__dirname, '../src/client/styles'), path.resolve(__dirname, '../lib/client/styles'))
fs.copySync(path.resolve(__dirname, '../src/client/language'), path.resolve(__dirname, '../lib/client/language'))
fs.copySync(path.resolve(__dirname, '../src/client/plugins'), path.resolve(__dirname, '../lib/client/plugins'))
