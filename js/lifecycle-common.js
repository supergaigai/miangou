/**
 * Lifecycle-B2B 1.0.0-20170113
 * Copyright © 2017 Lifecycle Co.,Ltd.
 * http://www.lifecycle.cn/
 */


/**
 * Created by ZhangBH on 7/24/2016.
 */
angular.module('lifecycle.common', [
    'lifecycle.common.component',
    'lifecycle.common.service',
    'lifecycle.common.util'
])
    .run([
        '$translatePartialLoader',
        function($translatePartialLoader) {
            $translatePartialLoader.addPart('common');
        }
    ]);

/**
 * Created by ZhangBH on 7/24/2016.
 */
angular.module('lifecycle.common')
    .constant('$config', {
        'app': {
            /**
             * App name
             */
            'name': 'Lifecycle B2B',
            /**
             * App version
             */
            'version': '1.0.0',
            /**
             * The minimum version of browsers we tested
             */
            'supportedBrowsers':{
                'Chrome':'28',
                'Firefox':'29',
                'IE':'11'
            },
            /**
             * Templates are folder names in /tpl/
             * E.g. default, mumuso, cotton, both
             */
            'supportedTemplates': [
                'default'
            ],
            /**
             * Switch between 'supportedTemplates'
             * E.g. default, mumuso, cotton, both
             */
            'template': 'default',
            /**
             * Themes are normally different colors in one template.
             * File name pattern: /tpl/{template}/css/theme.{theme}.css
             * E.g. red, orange, yellow, green, blue, black, golden
             */
            'supportedThemes': [
                'default',
                'red',
                'orange',
                'yellow',
                'green',
                'blue',
                'black',
                'golden'
            ],
            /**
             * Switch between 'supportedThemes'
             * E.g. red, orange, yellow, green, blue, black, golden
             */
            'theme': 'default',
            /**
             * Supported languages
             * @deprecated get it from server
             */
            /*'supportedLanguages': [
                'en',
                'zh-Hans',
                'zh-Hant',
                'fil'
            ],*/
            /**
             * Language (switch in /i18n)
             * @deprecated get it from user
             */
            /*'language': 'zh-Hans',*/
            /**
             * defined on server
             */
            'defaultLanguage': 'zh_CN',
            /**
             * en, zh-Hans, zh-Hant
             */
            'preferredLanguage': 'zh_CN',
            /**
             * en, zh-Hans, zh-Hant
             */
            'fallbackLanguage': 'en_US',

            /**
             * For APP mode only
             */
            'update': {
                'packages': {
                    'wine':{
                        'baseUrl': 'http://192.168.100.18:10190/wine/upd/',
                        'lcz':[
                            'wine.app',
                            'wine.lib'
                        ]
                    },
                    'b2b-mobile':{
                        'baseUrl': 'http://192.168.100.18:10190/b2b/m/upd/',
                        'lcz':[
                            'b2b-mobile.app',
                            'b2b-mobile.lib',
                            'b2b-mobile.tpl.default',
                            'b2b-mobile.tpl.mumuso',
                            'b2b-mobile.tpl.cotton',
                            'b2b-mobile.tpl.both'
                        ]
                    }

                }
            } ,
            'image': {
                "s":{width:60,height:60},
                "m":{width:220,height:220},
                "l":{width:400,height:400},
                "x":{width:800,height:800}
            }
        },
        'portal': {
            /**
             * Portal address.
             * E.g.
             *     '';
             *     'http://192.168.100.18:10120';
             * No '/' at the end.
             */
            'address': '',
            /**
             * '/servlets/binserv/Rest'
             */
            'restPath': '/servlets/binserv/Rest',
            /**
             * '/servlets/binserv/B2B'
             */

            'b2bPath': '/servlets/binserv/B2B',
            /**
             * '/servlets/binserv/Phone'
             */
            'reportPath': '/servlets/binserv/Phone',

            /**
             * Qualified class name for MiscCmd
             */
            'miscCmd': 'com.agilecontrol.phone.B2BCmd',
            //'miscCmd': 'com.agilecontrol.fair.MiscCmd',
            /**
             * '/servlets/binserv/Phone'
             */
            /**
             * Image path for product's allPic
             */
            'imagePath': '/pdt/l/',
            /**
             * Image path for product's allPic
             */
            'pdtImgPath': '/pdt',
            /**
             *
             */
            'reportPath': '/report/index.html#/report',
            /**
             * sessionstorage expire time
             */
            'expireTime': {
                 "hasCachekey":"30",
                 "noCachekey":"15"
            },
            'cachePoolSize':"500",
            'name':"B2B"
        },
        b2b: {
            agreementAK: 'selling_agreement_'
        },
        'adSqlKey': {
            /**
             * Navigator
             * :market as suffix
             * e.g. b2b:nav:cn
             */
            'nav': 'b2b:nav',
            /**
             * Footer
             * :language as suffix
             * e.g. b2b:footer:zh
             */
            'footer': 'b2b:footer',
            /**
             * Product summary definition
             * :platform as suffix
             * e.g. b2b.pdt:summary:pc
             */
            'pdtSummary': 'b2b:pdt:summary',
            /**
             * Product description
             * :platform as suffix
             * e.g. b2b.pdt:desc:pc
             */
            'pdtDesc':'b2b:pdt:desc'
        },
        'pdt': {
            'pagination': {
                'pageSize': 20
            },
            'orderby': {
                "items": [
                    {
                        "type": "toggle",
                        "options": [
                            {
                                "text": "pdt.orderby.pdt-orderno-asc",
                                "value": "pdt_orderno_asc",
                                "isActive": false
                            }
                        ]
                    },
                    {
                        "type": "toggle",
                        "options": [
                            {
                                "text": "pdt.orderby.pdt-price-asc",
                                "value": "pdt_price_asc",
                                "isActive": true
                            },
                            {
                                "text": "pdt.orderby.pdt-price-desc",
                                "value": "pdt_price_desc"
                            }
                        ]
                    }
                ]
            },
            /**
             * 商品摘要信息定义
             * Added by zhangbh on 20161028
             */
            'summary': [
                [
                    {"colname": "stylename"},
                    {"colname": "no"}
                ],
                [
                    {"colname": "price", "type": "currency", "style": "font-size:18px;color:red"}
                ]
            ]
        },
        'bookmark':{
            'pagination': {
                'pageSize': 20
            },
            'orderby': {
                "items": [
                    {
                        "type": "toggle",
                        "options": [
                            {
                                "text": "pdt.orderby.pdt-orderno-asc",
                                "value": "pdt_orderno_asc",
                                "isActive": false
                            }
                        ]
                    },
                    {
                        "type": "toggle",
                        "options": [
                            {
                                "text": "pdt.orderby.pdt-price-asc",
                                "value": "pdt_price_asc",
                                "isActive": false
                            },
                            {
                                "text": "pdt.orderby.pdt-price-desc",
                                "value": "pdt_price_desc"
                            }
                        ]
                    }
                ]
            }
        },
        'act':{
            'pagination': {
                'pageSize': 20
            },
            'orderby': {
                "items": [
                    {
                        "type": "toggle",
                        "options": [
                            {
                                "text": "pdt.orderby.act-orderno-asc",
                                "value": "act_orderno_asc",
                                "isActive": false
                            }
                        ]
                    },
                    {
                        "type": "toggle",
                        "options": [
                            {
                                "text": "pdt.orderby.act-price-asc",
                                "value": "act_price_asc",
                                "isActive": true
                            },
                            {
                                "text": "pdt.orderby.act-price-desc",
                                "value": "act_price_desc"
                            }
                        ]
                    }
                ]
            }
        },
        'order': {
            'pagination': {
                'pageSize': 20
            }
        },
        'imageServer': {
            'qiniu': {
                'address':"需配置"
            },
            'ali': {
                'address':"需配置"
            }
        }

    })
    .config(['$config', function($config){
        //加载时，将config.js里面的数据，替换掉$config里面的数据
        var datajson = null;
        var dst = {};
        try{
            datajson = eval(config);
        }catch(e){
            return;
        }
        angular.merge($config, $config, datajson);
    }]);

/**
 * Created by ZhangBH on 7/28/2016.
 */
angular.module('lifecycle.common.component', []);

/**
 * Created by ZhangBH on 7/28/2016.
 */
angular.module('lifecycle.common.service', []);

/**
 * Created by ZhangBH on 7/28/2016.
 */
angular.module('lifecycle.common.util', []);

/**
 * Created by sunYifan on 2016/11/14.
 *
 * ����ͼƬ
 */
angular.module("lifecycle.common.component")
    .filter("imgPath",['$config',function($config){
        return function(path,size){
            if(!path){
                return path;
            }
            var imgStr = path.toString().trim();
            if(imgStr.indexOf('img/')==0){
                imgStr = $config.app.template+"/"+imgStr;
            }else if(imgStr.indexOf('/Attach')!=-1){
                if(size){
                    imgStr = $config.portal.address+imgStr+"?s="+size;
                }else{
                    imgStr = $config.portal.address+imgStr;
                }
            }else if(imgStr.indexOf($config.imageServer.qiniu.address)==0){
                if(size){
                    imgStr = imgStr+"?imageMogr2/thumbnail/"+$config.app.image[size].width+"*"+$config.app.image[size].height;
                }
            }else if(imgStr.indexOf($config.imageServer.ali.address)==0){
                if(size){
                    imgStr = imgStr+"?x-oss-process=image/resize,m_lfit,h_"+$config.app.image[size].width+",w_"+$config.app.image[size].height;
                }
            }else if(imgStr.indexOf("/")!=-1){
                imgStr = $config.portal.address+imgStr;
            }else if(imgStr.indexOf("/")==-1){
                if(!size){
                    size = "m";
                }
                imgStr = $config.portal.address+$config.portal.pdtImgPath+"/"+size+"/"+imgStr;
            }
            return imgStr;
        };
    }]);

/**
 * Created by ZhangBH on 8/26/2016.
 */
angular.module('lifecycle.common.component')
    .factory('$msg', [
        '$q',
        '$window',
        function($q, $window) {
            return {
                toast: toast,
                alert: alert,
                confirm: confirm,
                prompt: prompt
            };

            /**
             * $msg.toast('All finished');
             * @param message
             * @returns {promise}
             */
            function toast(message) {
                var deferred = $q.defer();
                $window.alert(message);
                deferred.resolve();
                return deferred.promise;
            }

            /**
             * $msg.alert('Take a rest now!');
             * @param message
             * @param buttonText, optional
             * @returns {promise}
             */
            function alert(message, buttonText) {
                var deferred = $q.defer();
                $window.alert(message);
                deferred.resolve();
                return deferred.promise;
            }

            /**
             * $msg.confirm('Do you wanna go eating?').then(
             *     function yes() {...},
             *     function no() {...}
             * );
             * @param message
             * @param buttonYesText, optional
             * @param buttonNoText, optional
             * @returns {promise}
             */
            function confirm(message, buttonYesText, buttonNoText) {
                var defer = $q.defer();
                // The native confirm will return a boolean.
                if ( $window.confirm( message ) ) {
                    defer.resolve( true );
                } else {
                    defer.reject( false );
                }
                return defer.promise;
            }

            /**
             * $msg.prompt("What's your name?").then(
             *     function done(text) {...},
             *     function cancel() {...}
             * );
             * @param message
             * @param defaultValue, optional
             * @param placeholder, optional
             * @param buttonDoneText, optional
             * @param buttonCancelText, optional
             * @returns {promise}
             */
            function prompt(message, defaultValue, placeholder, buttonDoneText, buttonCancelText) {
                var defer = $q.defer();
                // The native prompt will return null or a string.
                var response = $window.prompt( message, defaultValue );
                if ( response === null ) {
                    defer.reject();
                } else {
                    defer.resolve( response );
                }
                return defer.promise;
            }
        }
    ]);

/**
 * Upload and list attachments
 *
 * E.g.
 * var attachManager = $attach('b_imgset', 'imgurl', 1);
 * attachManager.list().then(function(data: [url1, url2, ...]));
 * attachManager.remove(['/Attach/.../x.jpg']).then(function(data: [url1, url2, ...]));
 * attachManager.upload(document.getElementById("file")).then(function(url));
 * attachManager.update('/Attach/.../x.jpg', document.getElementById("file").files[0]).then(function(url));
 * var fileId = attachManager.getFileId();
 *
 * Created by ZhangBH on 11/25/2016.
 */
angular.module('lifecycle.common.service')
    .factory('$attach', [
        '$config',
        '$http',
        '$miscCmd',
        function($config, $http, $miscCmd) {

            var uploadUrl = $config.portal.address + '/control/upload';
            var cmd = 'com.agilecontrol.phone.cmd.ManageAttach';
            var idPrefix = 'file';
            var idSequence = 1;

            /**
             * E.g.
             * var attach = new Attachment('b_imgset', 'imgurl', 1);
             * attach.list();
             * attach.remove(['url1', 'url2']);
             * attach.upload(file);
             * attach.update(url, file);
             * attach.getFileId();
             * @param table id or name
             * @param column id or name
             * @param objectid
             * @constructor
             */
            function Attachment(table, column, objectid) {
                this.table = table;
                this.column = column;
                this.objectid = objectid;
                this.fileId = idPrefix + idSequence++;
            }

            /**
             * List attachments
             * @return promise: urls[]
             */
            Attachment.prototype.list = function() {
                return $miscCmd.execute(cmd, {
                    action: 'list',
                    table: this.table,
                    column: this.column,
                    objectid: this.objectid
                }).then(
                    function successCallback(data) {
                        return data.files;
                    }
                );
            };

            /**
             * Remove specified attachments
             * @param urls ['/Attach/.../1.jpg', '/Attach/../3.jpg', ...]
             * @return promise: ['/Attach/.../2.jpg', ...]
             */
            Attachment.prototype.remove = function(urls) {
                return $miscCmd.execute(cmd, {
                    action: 'delete',
                    table: this.table,
                    column: this.column,
                    objectid: this.objectid,
                    files: urls
                }).then(
                    function successCallback(data) {
                        return data.files || [];
                    }
                );
            };

            /**
             * Upload a file
             * @param file document.getElementById('file').files[0]
             * @return promise: url
             */
            Attachment.prototype.upload = function(file) {
                var fd = new FormData();
                fd.append('file', file);
                fd.append('table', this.table);
                fd.append('column', this.column);
                fd.append('objectid', this.objectid);
                fd.append('rest', "Y");
                fd.append('upload', true);

                return $http.post(uploadUrl, fd, {
                    transformRequest: angular.identity,
                    headers: {'Content-Type': undefined}
                }).then(
                    function successCallback(data) {
                        return data.url;
                    }
                );
            };

            /**
             * Re-upload a file to replace specified url
             * @param url to replace
             * @param file document.getElementById('file').files[0]
             * @returns promise: url
             */
            Attachment.prototype.update = function(url, file) {
                var fd = new FormData();
                fd.append('file', file);
                fd.append('table', this.table);
                fd.append('column', this.column);
                fd.append('objectid', this.objectid);
                fd.append('file', url);
                fd.append('rest', "Y");
                fd.append('upload', true);

                return $http.post(uploadUrl, fd, {
                    transformRequest: angular.identity,
                    headers: {'Content-Type': undefined}
                }).then(
                    function successCallback(data) {
                        return data.url;
                    }
                );
            };

            /**
             * Bind to fileInput's id attribute
             * @returns {string|*}
             */
            Attachment.prototype.getFileId = function() {
                return this.fileId;
            };

            /**
             * E.g.
             * var attachManager = $attach('b_imgset', 'imgurl', 1);
             * attachManager.list().then(function(data: [url1, url2, ...]));
             * attachManager.remove(['/Attach/.../x.jpg']).then(function(data: [url1, url2, ...]));
             * attachManager.upload(document.getElementById("file").files[0]).then(function(url));
             * attachManager.update('/Attach/.../x.jpg', document.getElementById("file").files[0]).then(function(url));
             */
            return function(table, column, objectid) {
                return new Attachment(table, column, objectid);
            };
        }
    ]);

/**
 * 调用plugin方法执行portal登录、登出、自动登录操作。
 *
 * Created by ZhangBH on 7/24/2016.
 */
angular.module('lifecycle.common.service')
    .factory('$auth', [
        '$miscCmd',
        '$q',
        '$translate',
        function($miscCmd, $q, $translate) {

            return {
                /**
                 * 系统登录
                 *
                 * 如果rememberMe，则客户端会记住用户credential
                 *
                 * 示例：
                 * auth.login('username', 'password', true).then(
                 *     function success(data) {...},
                 *     function error(error) {...}
                 * );
                 *
                 * @param username string 用户名
                 * @param password string 密码
                 * @return promise
                 */
                login: login,
                /**
                 * 系统登出
                 *
                 * @return promise
                 */
                logout: logout,
                /**
                 * 修改密码
                 */
                changePassword: changePassword
            };

            /**
             * Login
             * @param username
             * @param password
             * @returns promise
             */
            function login(username, password) {
                var deferred = $q.defer();

                if (!username || username === '') {
                    deferred.reject({
                        source: 'Client',
                        code: -2,
                        message: $translate.instant('portalMgr.username-required')
                    });
                    return deferred.promise;

                } else if (!password || password === '') {
                    deferred.reject({
                        source: 'Client',
                        code: -3,
                        message: $translate.instant('auth.password-required')
                    });
                    return deferred.promise;

                } else {
                    return $miscCmd.execute('b2b.login', {
                        'username': username,
                        'password': password
                    });
                }
            }

            /**
             * Logout
             * @returns promise
             */
            function logout() {

                return $miscCmd.execute('b2b.logout');
            }

            /**
             * Change password
             * @param currentPassword
             * @param newPassword
             * @param confirmPassword
             * @returns promise
             */
            function changePassword(currentPassword, newPassword, confirmPassword) {
                var deferred = $q.defer();

                if (!currentPassword || currentPassword === '') {
                    deferred.reject({
                        source: 'Client',
                        code: -2,
                        message: $translate.instant('auth.orig-pwd-required')
                    });
                    return deferred.promise;

                } else if (!newPassword || newPassword === '') {
                    deferred.reject({
                        source: 'Client',
                        code: -3,
                        message: $translate.instant('auth.new-pwd-required')
                    });
                    return deferred.promise;

                } else if (!confirmPassword || confirmPassword === '') {
                    deferred.reject({
                        source: 'Client',
                        code: -4,
                        message: $translate.instant('auth.cfm-pwd-required')
                    });
                    return deferred.promise;

                } else if (currentPassword === newPassword) {
                    deferred.reject({
                        source: 'Client',
                        code: -5,
                        message: $translate.instant('auth.pwd-not-changed')
                    });
                    return deferred.promise;

                } else if (newPassword !== confirmPassword) {
                    deferred.reject({
                        source: 'Client',
                        code: -6,
                        message: $translate.instant('auth.cfm-pwd-failed')
                    });
                    return deferred.promise;

                } else {
                    return $miscCmd.execute('b2b.user.modifypassword', {
                        'oldpassword': currentPassword,
                        'newpassword': newPassword
                    });
                }
            }

        }
    ]);
    /*.run(['$rootScope', '$state',
        function($rootScope, $state) {
            $rootScope.$on('$loginRequires', function() {
                $state.go('login');
            });
        }
    ]);*/

/**
 * Created by ZhangBH on 7/24/2016.
 */
angular.module('lifecycle.common.service')
    .factory('$miscCmd', [
        '$rootScope',
        '$config',
        '$portalClient',
        '$q',
        '$log',
        '$translate',
        function($rootScope, $config, $client, $q, $log, $translate) {

            var url = $config.portal.address + $config.portal.b2bPath;
            var command = $config.portal.miscCmd;

            return {
                /**
                 * 执行portal plugin中定义的MiscCmd命令，即调用CmdHandler的实现类。
                 *
                 * 以promise返回，成功直接取到数据，失败则返回code和message；
                 * 如果调用时portal返回未登录，则尝试使用保存的credential自动登录，
                 * 然后再次尝试调用该命令，对于调用者而言则感觉是正常调用并返回结果；
                 * 如果自动登录失败或客户端没有credential，则返回未登录，调用者需要
                 * 做相应的登录操作。
                 *
                 * 示例：
                 * miscCmd.execute('GetQLC', {
                 *         'table':'M_PRODUCT'
                 *     },
                 * ).then(
                 *     function success(data) {...},
                 *     function error(code, message) {...}
                 * );
                 *
                 * @param name String, CmdHandler实现类，如果在cmd包中则直接写短类名，否则写全限定名
                 * @param params object, optional
                 * @return promise
                 */
                execute: execute
            };

            function execute(cmd, params) {
                var deferred = $q.defer();

                if (!params) params = {};
                params.cmd = cmd;

                $client.sendRequest(
                    url, command, params
                ).then(
                    function successCallback(data) {
                        /*
                         * 返回的data是这样的：{"message":"Complete","id":"1","result":{"token":"893:6FTsFo0lR-C01L_5K5Gqfw","redirect":""},"code":0}
                         * 这里做了约定，如果code为0（成功），并且result不为空，直接返回result；否则返回data。
                         */
                        if (data.code === 0) {
                            // SUCCESS
                            var ret = data.result || data;
                            deferred.resolve(ret);
                        } else {
                            // MISCCMD RETURN'S CODE IS NOT EQUALS 0
                            var error = {
                                source: 'MiscCmd',
                                code: data.code,
                                message: data.message
                            };
                            deferred.reject(error);
                            $rootScope.$emit('$serverFailure', error);
                            console.log('error: ' + JSON.stringify(error));
                           /* $log.error('error: ' + JSON.stringify(error));*/

                            // The UI may redirect to login if sipStatus eq 1009
                            /*if (data.code === 1009) {
                                $rootScope.$broadcast('$loginRequires');
                            }*/
                        }
                    },
                    function errorCallback(error) {
                        // PORTAL RETURNS ERROR
                        deferred.reject(error);
                    }
                );

                return deferred.promise;
            }
        }
    ]);

/**
 * Created by ZhangBH on 7/24/2016.
 */
angular.module('lifecycle.common.service')
    .factory('$portalClient', [
        '$rootScope',
        '$http',
        '$q',
        '$log',
        '$translate',
        function($rootScope, $http, $q, $log, $translate) {

            var sipMsgIds = {
                "0000": "sipStatus.error",
                "9999": "sipStatus.success",
                "1001": "sipStatus.signatureInvalid",
                "1002": "sipStatus.reqTimeout",
                "1003": "sipStatus.binduserFaild",
                "1004": "sipStatus.needBinduser",
                "1005": "sipStatus.needAppKey",
                "1006": "sipStatus.needApiName",
                "1007": "sipStatus.needSign",
                "1008": "sipStatus.needTimeStamp",
                "1009": "sipStatus.authFaild",
                "1010": "sipStatus.noRightCallService",
                "1011": "sipStatus.service",
                "1012": "sipStatus.sessionid",
                "1013": "sipStatus.username"
            };

            return {
                /**
                 * 调用portal接口。
                 *
                 * 以promise返回，成功直接取到数据，失败则返回code和message；
                 * 如果调用时portal返回未登录，则尝试使用保存的credential自动登录；
                 * 如果自动登录失败或客户端没有credential，则返回未登录，调用者需要
                 * 做相应的登录操作。
                 *
                 * 示例：
                 * $portalClient.sendRequest(
                 *     '/servlets/binserv/Rest',
                 *     'GetObject',
                 *     {
                 *         'table': 'M_PRODUCT',
                 *         'id': 1
                 *     }
                 * ).then(
                 *     function successCallback(data) {...},
                 *     function errorCallback(error: {source, code, message}) {...}
                 * );
                 *
                 * @param url string, e.g. /servlets/binserv/Rest
                 * @param name string, Command实现类，例如GetObject、com.agilecontrol.b2b.MiscCmd
                 * @param params object, optional. e.g. {'table': 'M_PRODUCT', 'id': 1}
                 * @return promise
                 */
                sendRequest: sendRequest
            };

            function sendRequest(url, command, params) {
                var deferred = $q.defer();

                var trans = [{
                    id: 1,
                    command: command,
                    params: params
                }];

                var req = 'transactions=' + encodeURIComponent(
                    JSON.stringify(trans)
                );

                $http.post(url, req, {
                    headers: {'Content-Type': 'application/x-www-form-urlencoded'},
                    withCredentials: true
                }).then(
                    function successCallback(resp) {
                        var sipStatus = resp.headers('sip_status');
                        if (sipStatus === '9999') {
                            // SUCCESS
                            var data = resp.data[0] || null;
                            deferred.resolve(data);
                        } else {
                            // PORTAL RETURNS ERROR
                            var error = {
                                source: 'Portal',
                                code: sipStatus,
                                message: $translate.instant(sipMsgIds[sipStatus])
                            };
                            deferred.reject(error);
                            $rootScope.$emit('$serverFailure', error);
                            console.log('error: ' + JSON.stringify(error));
                          /*  $log.error('error: ' + JSON.stringify(error));*/

                            // The UI may redirect to login if sipStatus eq 1009
                            /*if (sipStatus === '1009' || sipStatus === '1005') {
                                $rootScope.$broadcast('$loginRequires');
                            }*/
                        }
                    },
                    function errorCallback(resp) {
                        // HTTP ERROR
                        var error = {
                            source: 'HTTP',
                            code: resp.status,
                            message: resp.statusText
                        };
                        deferred.reject(error);
                        $rootScope.$emit('$serverFailure', error);
                        console.log('error: ' + JSON.stringify(error));
                        /*$log.error('error: ' + JSON.stringify(error));*/
                    }
                );

                return deferred.promise;
            }
        }
    ]);

/**
 * Created by ZhangBH on 7/24/2016.
 */
angular.module('lifecycle.common.service')
    .factory('$restCmd', [
        '$config',
        '$rootScope',
        '$portalClient',
        '$q',
        '$log',
        '$translate',
        function($config,$rootScope, $client, $q, $log, $translate) {

            var url = $config.portal.address + $config.portal.restPath;

            return {
                /**
                 * 执行portal rest命令，例如：Query、GetObject、ObjectCreate等。
                 *
                 * 以promise返回，成功直接取到数据，失败则返回code和message；
                 * 如果调用时portal返回未登录，则尝试使用保存的credential自动登录；
                 * 如果自动登录失败或客户端没有credential，则返回未登录，调用者需要
                 * 做相应的登录操作。
                 *
                 * 示例：
                 * restCmd.execute(
                 *     'GetObject',
                 *     {
                 *         'table': 'M_PRODUCT',
                 *         'id': 1
                 *     }
                 * ).then(
                 *     function successCallback(data) {...},
                 *     function errorCallback(error: {source, code, message}) {...}
                 * );
                 *
                 * @param url string, e.g. /servlets/binserv/Rest
                 * @param name string, Command实现类，例如GetObject、com.agilecontrol.b2b.MiscCmd
                 * @param params object, optional. e.g. {'table': 'M_PRODUCT', 'id': 1}
                 * @return promise
                 */
                execute: execute,
                query: query,
                objectDelete:objectDelete,
                getObject:getObject,
                objectSubmit:objectSubmit,
                objectUnsubmit:objectUnsubmit,
                executeWebAction:executeWebAction,
                objectCreate:objectCreate,
                objectModify:objectModify,
                /**
                 * E.g.
                 * $restCmd.executeAudit({
                 *  "table":16677,
                    "id":4,
                    "auditaction":"accept", "reject", "assign","cancel_assign"􀀈
                    "comments":"",
                    "nds.control.ejb.UserTransaction":"N"
                 * });
                 * @param command e.g. Query
                 * @param params {...}
                 * @param successCallback function(data, code, message) {...}
                 * @param failureCallback function(data, code, message) {...}
                 */
                executeAudit:executeAudit

            };

            function execute(command, params) {
                var deferred = $q.defer();

                $client.sendRequest(
                    url, command, params
                ).then(
                    function successCallback(data) {
                        if (data.code === 0) {
                            // SUCCESS
                            deferred.resolve(data);
                        } else {
                            // REST RETURN'S CODE IS NOT EQUALS 0
                            var error = {
                                source: 'RestCmd',
                                code: data.code,
                                message: data.message
                            };
                            deferred.reject(error);
                            $rootScope.$emit('$serverFailure', error);
                            $log.error('error: ' + JSON.stringify(error));
                        }
                    },
                    function errorCallback(error) {
                        // PORTAL RETURNS ERROR
                        deferred.reject(error);
                    }
                );

                return deferred.promise;
            };
            function query(params){
                return execute('Query',params);
            };
            function objectDelete(params){
                return execute('ObjectDelete',params);
            };
            function getObject(params){
                return execute('GetObject',params);
            };
            function objectSubmit(params){
                return execute('ObjectSubmit',params);
            };
            function objectUnsubmit(params){
                return execute('ObjectUnsubmit',params);
            };
            function executeWebAction(params){
                return execute('ExecuteWebAction',params);
            };
            function objectCreate(params){
                return execute('ObjectCreate',params);
            };
            function objectModify(params){
                return execute('ObjectModify',params);
            };
            function executeAudit(params){
                return execute('ExecuteAudit',params);
            };

        }
    ]);

/**
 * Created by ZhangBH on 8/11/2016.
 */

/**
 * Created by ZhangBH on 8/11/2016.
 */
angular.module('lifecycle.common.service')
    .factory('$runSQL', [
        '$miscCmd',
        '$q',
        '$rootScope',
        function($miscCmd, $q, $rootScope) {

            var cmd = 'com.agilecontrol.phone.cmd.RunSQL';

            return {
                /**
                 * Executes SQL stored in sqSql
                 */
                query: query,
                /**
                 * Returns single value from adSql
                 */
                singleValue: queryOne,
                /**
                 * Returns json array or json object stored in adSql
                 */
                getJSON: getJSON,
                /**
                 * Returns the text stored in adSql
                 */
                getText: getText
            };

            /**
             * Executes SQL stored in sqSql
             * @param adSql
             * @param params sql params
             * @param asObjectRow optional, default is true
             * @returns promise
             */
            function query(adSql, params, asObjectRow) {
                return $miscCmd.execute(cmd, {
                    type: 'QUERY',
                    name: adSql,
                    var: params,
                    asObjectRow: asObjectRow === undefined ? true : asObjectRow
                });
            }

            /**
             * Returns single value from adSql
             * @param adSql
             * @param params
             * @returns promise {resolve: result present, reject: error or no result}
             */
            function queryOne(adSql, params) {
                var deferred = $q.defer();
                query(adSql, params, false).then(
                    function successCallback(data) {
                        if (data && data.length > 0) {
                            deferred.resolve(data[0]);
                        } else {
                            var error = {
                                source: 'runSQL',
                                code: -1,
                                message: 'No result'
                            };
                            deferred.reject(error);
                            $rootScope.$emit('$serverFailure', error);
                        }
                    },
                    function errorCallback(error) {
                        deferred.reject(error);
                    }
                );
                return deferred.promise;
            }

            /**
             * Returns json array or json object stored in adSql
             * @param adSql
             * @returns promise
             */
            function getJSON(adSql) {
                return $miscCmd.execute(cmd, {
                    type: 'JSON',
                    name: adSql
                });
            }

            /**
             * Returns the text stored in adSql
             * @param adSql
             * @returns promise
             */
            function getText(adSql) {
                return $miscCmd.execute(cmd, {
                    type: 'TEXT',
                    name: adSql
                });
            }
        }
    ]);

/**
 * Created by ZhangBH on 8/25/2016.
 */
angular.module('lifecycle.common.service')
    .factory('$sys', [
        '$rootScope',
        '$translate',
        '$cookies',
        '$config',
        '$miscCmd',
        function($rootScope, $translate, $cookies, $config, $miscCmd) {

            return {
                /**
                 * @return promise, e.g. [
                 *     {code: "en", desc: "English"},
                 *     {code: "zh-Hans", desc: "简体中文"}
                 * ]
                 */
                getSupportedLanguages: getSupportedLanguages,
                /**
                 * @return string, language code, e.g. 'en'
                 */
                getCurrentLanguage: getCurrentLanguage,
                /**
                 * @param lang, language code
                 */
                changeLanguage: changeLanguage
            };

            function getSupportedLanguages() {
                return $miscCmd.execute('b2b.user.langlist');
            }

            function getCurrentLanguage() {
                if (!$rootScope.currentLanguage) {
                    $rootScope.currentLanguage =
                        $cookies.get('CURRENT_LANGUAGE') ||
                        $config.app.defaultLanguage ||
                        $config.app.preferredLanguage ||
                        $config.app.fallbackLanguage;
                }
                return $rootScope.currentLanguage;
            }

            function changeLanguage(lang) {
                $rootScope.currentLanguage = lang;
                $cookies.put('CURRENT_LANGUAGE', lang);
                sessionStorage.setItem('CURRENT_LANGUAGE',lang);//lang存入sessionStorage中;
                $translate.use($translate.negotiateLocale(lang));
            }

        }
    ]);

/**
 * Created by wu.qiong on 12/16/2016.
 */
angular.module('lifecycle.common.service')
    .factory('updater', [
        '$config', '$q','$http', '$log',
        function($config, $q, $http, $log) {

            /**
             * @param package项目名称  目前支持两种 'wine' | 'b2b-mobile'
             * 检查更新。
             * 根据$config.app.update.packages 为Object {'wine','b2b-mobile'}
             * wine -- object {baseUrl,lcz}
             * b2b-mobile -- object {baseUrl,lcz}
             * 分别查询lcz服务端包的更新时间，
             * 若服务端的包的时间比本地新，或本地没有包的更新时间，
             * 则将包名加入数组中返回。
             */
            var checkUpdate = function(package) {
                return $q(function(resolve, reject) {
                    $q.all({
                        remotes: getRemoteVers(package),
                        clients: getLastVers(package)
                    }).then(function(res) {
                        var remotes = res.remotes;
                        var clients = res.clients;
                        var packages = [];
                        angular.forEach(remotes, function(value, key) {
                            if (clients[key] == undefined || clients[key] < value) {
                                var lczName = key + ".lcz";
                                packages.push(lczName);
                            }
                        });
                        $log.debug('updater.checkUpdate() resolved: ' + JSON.stringify(packages));
                        resolve(packages);
                    }, function(res) {
                        $log.error('updater.checkUpdate() rejected: ' + JSON.stringify(res));
                        reject(res);
                    });
                });
            };
            /**
             * @param package项目名称  目前支持两种 'wine' | 'b2b-mobile'
             *
             * 获取服务器升级包的版本号
             * getRemoteVers().then(function(res) {
             *     {
                      "app": 0,
                      "tpl.default": 0
                      "lib": 0
                    }

             * });
             * @returns promise
             */
            var getRemoteVers = function(package) {

                var deferred = $q.defer();
                var promises = {};
                var packageConf = $config.app.update.packages[package];
                for (var i = 0; i < packageConf.lcz.length; i++) {
                    var url =packageConf.baseUrl + packageConf.lcz[i] + ".json";
                    promises[packageConf.lcz[i]] = $http.get(url);
                }
                $q.all(promises).then(function(responses) {
                    var res = {};
                    for(var r in responses){
                        res[r] = responses[r].data.version;
                    }
                    deferred.resolve(res);
                }, function(res) {
                    $log.error('updater.getRemoteVers() rejected: ' + JSON.stringify(res));
                    deferred.reject(res);
                });
                return deferred.promise;
            };
            /**
             * @param package项目名称  目前支持两种 'wine' | 'b2b-mobile'
             *
             * 获取本地最后升级的包的版本号。
             * getLastVers().then(function(res) {
             *     {
                      "app": 0,
                      "tpl": {
                           "default": 0
                           },
                      "lib": 0
                    }
             * });
             * @returns promise
             */
            var getLastVers = function(package) {

                var deferred = $q.defer();
                var promises = {};
                var packageConf = $config.app.update.packages[package];
                for (var i = 0; i < packageConf.lcz.length; i++) {
                    var url = "upd/" +  packageConf.lcz[i] + ".json";
                    promises[packageConf.lcz[i]] =  $http.get(url);
                }
                $q.all(promises).then(function(responses) {
                    var res = {};
                    for(var r in responses){
                        res[r] = responses[r].data.version;
                    }
                    deferred.resolve(res);
                }, function(res) {
                    $log.error('updater.getLastVers() rejected: ' + JSON.stringify(res));
                    deferred.reject(res);
                });

                return deferred.promise;
            };

            /**
             * @param package项目名称  目前支持两种 'wine' | 'b2b-mobile'
             * 通知壳哪些包需要升级
             */
            var update = function(packages,package) {

                var packageConf = $config.app.update.packages[package];
                if (packages.length > 0) {
                    var url = 'wxs://?action=update&url=';
                    for (var i = 0; i < packages.length; i++) {
                        url += packageConf.baseUrl + packages[i];
                        if (i < packages.length - 1) {
                            url += ',';
                        }
                    }
                    $log.info('Send update request: ' + url);
                    location.href = url;
                }
            };
            return {
                /**
                 *
                 * updater.checkUpdate().then(
                 *     function(packages) {
                 *         // packages are: e.g. ['app.lcz', 'lib.lcz', 'tpl.default.lcz']
                 *
                 *     }
                 * );
                 * @returns promise
                 */
                checkUpdate: checkUpdate,
                /**
                 * updater.update(packages);
                 * @param packages to be update. e.g. ['lib.lcz', 'res.lcz', 'app.lcz']
                 */
                update: update,

                getLastVers:getLastVers
            };



        }
    ]);

/**
 * Created by wu.qiong on 12/19/2016.
 */
angular.module('lifecycle.common.service')
    .factory('$wxshell', [
         '$q',
        function($q) {

            

            // SDK具体方法实现

            // @@@打开导航
            openNavi = function(){
                var deferred = $q.defer();
                wxshell.openNavi({success:function(res){
                    deferred.resolve(res);
                },fail:function (error) {
                    deferred.reject(error);
                }});
                return deferred.promise;
            },
            // @@@注册有赞
            yzReg = function(p){
                var deferred = $q.defer();
                wxshell.yzOpen({success:function(res){
                    deferred.resolve(res);
                },fail:function (error) {
                    deferred.reject(error);
                },appKey:p.appKey,appSecret:p.appSecret});
                return deferred.promise;
            },
            // @@@打开有赞商城
            yzOpen= function(p){

                var deferred = $q.defer();
                wxshell.yzOpen({success:function(res){
                    deferred.resolve(res);
                },fail:function (error) {
                    deferred.reject(error);
                },shopUrl:p.shopUrl,user:p.user});
                return deferred.promise;

            },
            // @@@获得gps
            getLocation= function(){
                var deferred = $q.defer();
                wxshell.getLocation({success:function(res){
                    deferred.resolve(res);
                },fail:function (error) {
                    deferred.reject(error);
                }});
                return deferred.promise;
            },
            // @@@扫码
            scanQRCode= function(){

                var deferred = $q.defer();
                wxshell.scanQRCode({success:function(res){
                    deferred.resolve(res);
                },fail:function (error) {
                    deferred.reject(error);
                }});
                return deferred.promise;

            },
            // @@@信鸽注册
            xgPush= function(p){

                var deferred = $q.defer();
                wxshell.xgPush({success:function(res){
                    deferred.resolve(res);
                },fail:function (error) {
                    deferred.reject(error);
                },appId:p.appId,appKey:p.appKey});
                return deferred.promise;

            },
            // @@@内容分享
            socialShare= function(p){

                var deferred = $q.defer();
                wxshell.socialShare({success:function(res){
                    deferred.resolve(res);
                },fail:function (error) {
                    deferred.reject(error);
                },url:p.url,text:p.text});
                return deferred.promise;

            },
            // 设备信息
            getDeviceInfo= function(){

                var deferred = $q.defer();
                wxshell.getDeviceInfo({success:function(res){
                    deferred.resolve(res);
                },fail:function (error) {
                    deferred.reject(error);
                }});
                return deferred.promise;
            },
            // 日历
            syncCalendar= function(p){

                var deferred = $q.defer();
                wxshell.syncCalendar({success:function(res){
                    deferred.resolve(res);
                },fail:function (error) {
                    deferred.reject(error);
                },events:p.events});
                return deferred.promise;
            },
            // 通讯录
            syncContact= function (p) {
                var deferred = $q.defer();
                wxshell.syncContact({success:function(res){
                    deferred.resolve(res);
                },fail:function (error) {
                    deferred.reject(error);
                },events:p.events});
                return deferred.promise;
            },
            setStatusBar= function (p) {
                var deferred = $q.defer();
                wxshell.setStatusBar({success:function(res){
                    deferred.resolve(res);
                },fail:function (error) {
                    deferred.reject(error);
                },style:p.style,color:p.color});
                return deferred.promise;
            },
            getHeaderInfo= function () {
                var deferred = $q.defer();
                wxshell.getHeaderInfo({success:function(res){
                    deferred.resolve(res);
                },fail:function (error) {
                    deferred.reject(error);
                }});
                return deferred.promise;
            },
            echo= function (message) {
                var deferred = $q.defer();
                wxshell.echo(function(res) {
                    deferred.resolve(res);
                },function (error) {
                    deferred.reject(error);
                },message);
                return deferred.promise;
            },
            echo2= function (y,n) {
                var deferred = $q.defer();
                wxshell.echo2(function(res) {
                    deferred.resolve(res);
                },function (error) {
                    deferred.reject(error);
                },y,n);
                return deferred.promise;
            },
            // 功能相关
            getNetworkType= function () {
                var deferred = $q.defer();
                wxshell.getNetworkType({success:function(res){
                    deferred.resolve(res);
                },fail:function (error) {
                    deferred.reject(error);
                }});
                return deferred.promise;
            },
            // 音频相关
            translateVoice = function (p) {

                var deferred = $q.defer();
                wxshell.translateVoice({success:function(res){
                    deferred.resolve(res);
                },fail:function (error) {
                    deferred.reject(error);
                },localId:p.localId});
                return deferred.promise;

            },
            startRecord = function () {

                var deferred = $q.defer();
                wxshell.startRecord({success:function(res){
                    deferred.resolve(res);
                },fail:function (error) {
                    deferred.reject(error);
                }});
                return deferred.promise;

            },
            stopRecord = function () {
                var deferred = $q.defer();
                wxshell.stopRecord({success:function(res){
                    deferred.resolve(res);
                },fail:function (error) {
                    deferred.reject(error);
                }});
                return deferred.promise;
            },
            playVoice = function (p) {
                var deferred = $q.defer();
                wxshell.playVoice({success:function(res){
                    deferred.resolve(res);
                },fail:function (error) {
                    deferred.reject(error);
                },localId:p.localId});
                return deferred.promise;
            },
            stopVoice = function () {
                var deferred = $q.defer();
                wxshell.stopVoice({success:function(res){
                    deferred.resolve(res);
                },fail:function (error) {
                    deferred.reject(error);
                }});
                return deferred.promise;
            },
            // 位置相关
            openLocation = function (p) {

                var deferred = $q.defer();
                wxshell.playVoice({success:function(res){
                    deferred.resolve(res);
                },fail:function (error) {
                    deferred.reject(error);
                },latitude:p.latitude,longitude:p.longitude,name:p.name,address:p.address,scale:p.scale,infoUrl:p.infoUrl});
                return deferred.promise;

            },
            //文件处理
            openExplorer = function () {
                var deferred = $q.defer();
                wxshell.openExplorer({success:function(res){
                    deferred.resolve(res);
                },fail:function (error) {
                    deferred.reject(error);
                }});
                return deferred.promise;
            },
            //图像相关
            chooseImage = function () {
                var deferred = $q.defer();
                wxshell.chooseImage({success:function(res){
                    deferred.resolve(res);
                },fail:function (error) {
                    deferred.reject(error);
                }});
                return deferred.promise;
            },
            //升级
            updatePackage = function (p) {
                var deferred = $q.defer();
                wxshell.updatePackage({success:function(res){
                    deferred.resolve(res);
                },fail:function (error) {
                    deferred.reject(error);
                },url:p.url});
                return deferred.promise;

            },
            nativeAlert = function (p) {
                var deferred = $q.defer();
                wxshell.nativeAlert(p);
                return deferred.promise;
            },
            portalChoosePhoto = function (message) {
                var deferred = $q.defer();
                if (wxshell_.os == 'android') {
                    message = JSON.stringify(message);
                }
                wxshell.portalChoosePhoto(message,function(res) {
                    deferred.resolve(res);
                },function (error) {
                    deferred.reject(error);
                });
                return deferred.promise;
            },
            portalPhotoManage = function (message) {
                var deferred = $q.defer();
                if (wxshell_.os == 'android') {
                    message = JSON.stringify(message);
                }
                wxshell.portalChoosePhoto(message,function(res) {
                    deferred.resolve(res);
                },function (error) {
                    deferred.reject(error);
                });
                return deferred.promise;
            }

            return {

                // @@@注册有赞
                yzReg:yzReg,
                // @@@打开有赞商城
                yzOpen:yzOpen,
                // @@@获得gps
                getLocation:getLocation,
                // @@@扫码
                scanQRCode:scanQRCode,
                // @@@信鸽注册
                xgPush:xgPush,
                // @@@内容分享
                socialShare:socialShare,
                // 设备信息
                getDeviceInfo:getDeviceInfo,
                // 日历
                syncCalendar:syncCalendar,
                // 通讯录
                syncContact:syncContact,
                setStatusBar:setStatusBar,

                getHeaderInfo:getHeaderInfo,

                echo:echo,

                echo2:echo2,

                // 功能相关
                getNetworkType:getNetworkType,

                // 音频相关
                translateVoice:translateVoice,
                startRecord:startRecord,
                stopRecord:stopRecord,
                playVoice:playVoice ,
                stopVoice:stopVoice,

                // 位置相关
                openLocation:openLocation,

                //文件处理
                openExplorer:openExplorer,

                //图像相关
                chooseImage:chooseImage,

                //升级
                updatePackage:updatePackage,

                nativeAlert:nativeAlert,

                portalChoosePhoto:portalChoosePhoto,
                portalPhotoManage:portalPhotoManage
            };



        }
    ]);

/**
 * Identity generator
 * Created by ZhangBH on 11/29/2016.
 */
angular.module('lifecycle.common.util')
    .factory('$keygen', [
        function() {

            var n = 0;

            return {
                /**
                 * Generate a sequence number
                 * @returns {number}
                 */
                nextInt: function() {
                    return n++;
                }
            }

        }
    ]);

/**
 * This improves window.localStorage. Using setObject
 * and getObject to operate object directly.
 * Created by ZhangBH on 3/18/2016.
 */
angular.module('lifecycle.common.util')
    .factory('$localStorage', ['$window', function($window) {
        return {
            set: function(key, value) {
                $window.localStorage[key] = value;
            },
            get: function(key) {
                return $window.localStorage[key];
            },
            setObject: function(key, value) {
                $window.localStorage[key] = JSON.stringify(value);
            },
            getObject: function(key) {
                return $window.localStorage[key] && JSON.parse($window.localStorage[key]);
            },
            remove: function(key) {
                $window.localStorage.removeItem(key);
            },
            clear: function() {
                $window.localStorage.clear();
            },
            lenght: $window.localStorage.length
        }
    }]);

/**
 * Created by ZhangBH on 8/14/2016.
 */
angular.module('lifecycle.common.util')
    .factory('$numberUtils', [
        function() {

            return {
                numAdd: numAdd,
                numSub: numSub
            };

            /**
             * 加法运算，避免数据相加小数点后产生多位数和计算精度损失。
             * @param num1 加数1
             * @param num2 加数2
             * @returns {number}
             * stao
             * 8/12/2016.
             */
            function numAdd(num1, num2) {
                var baseNum, baseNum1, baseNum2;
                try {
                    baseNum1 = num1.toString().split(".")[1].length;
                } catch (e) {
                    baseNum1 = 0;
                }
                try {
                    baseNum2 = num2.toString().split(".")[1].length;
                } catch (e) {
                    baseNum2 = 0;
                }
                baseNum = Math.pow(10, Math.max(baseNum1, baseNum2));
                return (num1 * baseNum + num2 * baseNum) / baseNum;
            }

            /**
             * 减法运算，避免数据相减小数点后产生多位数和计算精度损失。
             *
             * @param num1被减数  |  num2减数
             */
            function numSub(num1, num2) {
                var baseNum, baseNum1, baseNum2;
                var precision;// 精度
                try {
                    baseNum1 = num1.toString().split(".")[1].length;
                } catch (e) {
                    baseNum1 = 0;
                }
                try {
                    baseNum2 = num2.toString().split(".")[1].length;
                } catch (e) {
                    baseNum2 = 0;
                }
                baseNum = Math.pow(10, Math.max(baseNum1, baseNum2));
                precision = (baseNum1 >= baseNum2) ? baseNum1 : baseNum2;
                return ((num1 * baseNum - num2 * baseNum) / baseNum).toFixed(precision);
            }
        }
    ]);

/**
 * Created by ZhangBH on 8/14/2016.
 */
angular.module('lifecycle.common.util')
    .factory('$valiUtils', [
        function() {

            return {
                isNull: isNull,
                isEmpty: isEmpty
            };

            /**
             * 判断对象是否为空
             */
            function isNull(obj) {
                if( typeof obj === 'undefined' || obj == null || obj == ''){
                    return true;
                }
                return false;
            }

            /**
             * 判断Obj是否为{}
             * @param obj
             * @returns {boolean}
             */
            function isEmpty(obj)
            {
                for (var name in obj)
                {
                    return false;
                }
                return true;
            }
        }
    ]);
