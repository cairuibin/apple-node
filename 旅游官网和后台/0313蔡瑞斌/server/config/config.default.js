/* eslint valid-jsdoc: "off" */

'use strict';

/**
 * @param {Egg.EggAppInfo} appInfo app info
 */
module.exports = appInfo => {
  /**
   * built-in config
   * @type {Egg.EggAppConfig}
   **/
  const config    = exports = {};
  const writeList = require('./writeList');
  const Menus      = require('./menu')
  // use for cookie sign key, should change to your own and keep security
  config.keys = appInfo.name + '_1582526804220_6280';

  config.middleware = ['jwt','urlType'];
  config.jwt        = writeList;
  
  config.urlType    = Menus;
  const userConfig = {   
    security : {csrf: false},
    mysql : {
      client: {
        host: 'localhost',
        port: '3306',
        user: 'root',
        password: '123456',
        database: 'lvyou',
      },
      app: true,
      agent: false
    },
    validate:{
      convert:false,
      validateRoot:false 
    }
  };

  return {
    ...config,
    ...userConfig,
  };
};
