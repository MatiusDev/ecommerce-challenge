import routes from '../helpers/routes.js';
import { getHash } from '../helpers/utils.js';

const Router = () => {
    const hash = getHash();
    const path = hash.length > 1 ? `/${hash[1]}` : '/';
    const route = Object.values(routes).find(r => r.path === path);
    let view = null;
    if (!route) {
      view = routes.notFound.template;
    } else {
      const { subpaths, template } = route;
      view = template;
      if (hash.length > 2 && subpaths && subpaths.length > 0) {
        const subpath = subpaths.find(subpath => 
          subpath.path.split('/:').length-1 === (hash.length-2));
          view = subpath ? subpath.template : template;
      }
    }
    return view();
};

export default Router;