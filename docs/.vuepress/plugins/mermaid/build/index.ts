import fs from 'fs-extra';
import path from 'path';

fs.copySync(path.resolve( __dirname,'../src/client/styles'), path.resolve( __dirname,'../lib/client/styles'))
