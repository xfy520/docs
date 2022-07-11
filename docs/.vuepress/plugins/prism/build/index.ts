import fs from 'fs-extra';
import path from 'path';

fs.copySync(path.resolve( __dirname,'../static'), path.resolve( __dirname,'../lib/static'))
