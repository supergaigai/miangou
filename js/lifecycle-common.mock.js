/**
 * Lifecycle-B2B 1.0.0-20170113
 * Copyright © 2017 Lifecycle Co.,Ltd.
 * http://www.lifecycle.cn/
 */


/**
 * Created by ZhangBH on 8/15/2016.
 */
angular.module('lifecycle.common.service')
    .config([
        '$provide',
        function($provide) {

            $provide.decorator('$auth', [
                '$delegate',
                '$q',
                function($delegate, $q) {

                    return {
                        login: login,
                        logout: logout,
                        changePassword: changePassword
                    };

                    function login(username, password) {
                        return $q(function(resolve, reject) {
                            if (!username || username === '') {
                                reject({
                                    source: 'Client',
                                    code: -2,
                                    message: '用户名没填，亲'
                                });
                            } else if (!password || password === '') {
                                reject({
                                    source: 'Client',
                                    code: -3,
                                    message: '密码没填，亲'
                                });
                            } else if (username === 'test' && password === 'test') {
                                resolve({
                                    result: {
                                        token: '12345'
                                    }
                                });
                            } else {
                                reject({
                                    source: 'MiscCmd',
                                    code: -1,
                                    message: '用户名或密码错误'
                                });
                            }
                        });
                    }

                    function logout() {
                        return $q(function(resolve, reject) {
                            resolve({
                                code: 0,
                                message: '完成'
                            });
                        });
                    }

                    function changePassword(currentPassword, newPassword, confirmPassword) {
                        return $q(function(resolve, reject) {
                            if (!currentPassword || currentPassword === '') {
                                reject({
                                    source: 'Client',
                                    code: -2,
                                    message: '原密码没填，亲'
                                });
                            } else if (!newPassword || newPassword === '') {
                                reject({
                                    source: 'Client',
                                    code: -3,
                                    message: '新密码没填，亲'
                                });
                            } else if (!confirmPassword || confirmPassword === '') {
                                reject({
                                    source: 'Client',
                                    code: -4,
                                    message: '确认密码没填，亲'
                                });
                            } else if (currentPassword === newPassword) {
                                reject({
                                    source: 'Client',
                                    code: -5,
                                    message: '你的新密码和旧密码一样啊，亲'
                                });
                            } else if (newPassword !== confirmPassword) {
                                reject({
                                    source: 'client',
                                    code: -6,
                                    message: '两次输入的新密码不一致，亲'
                                });
                            } else if (currentPassword === 'test') {
                                resolve({
                                    code: 0,
                                    message: '密码修改成功！'
                                });
                            } else {
                                reject({
                                    source: 'MiscCmd',
                                    code: -1,
                                    message: '原密码不正确，亲'
                                });
                            }
                        });
                    }
                }
            ]);

        }
    ]);

/**
 * Created by ZhangBH on 8/25/2016.
 */
angular.module('lifecycle.common.service')
    .config([
        '$provide',
        function($provide) {

            $provide.decorator('$sys', [
                '$delegate',
                '$q',
                '$translate',
                '$cookies',
                '$rootScope',
                '$config',
                function($delegate, $q, $translate, $cookies, $rootScope, $config) {

                    return {
                        getSupportedLanguages: getSupportedLanguages,
                        getCurrentLanguage: getCurrentLanguage,
                        changeLanguage: changeLanguage
                    };

                    function getSupportedLanguages() {
                        return $q(function(resolve, reject) {
                            resolve([
                                {id: 1, code: 'en', desc: 'English'},
                                {id: 2, code: 'zh-Hans', desc: '简体中文'},
                                {id: 3, code: 'zh-Hant', desc: '繁体中文'},
                                {id: 4, code: 'fil', desc: 'Filipino'}
                            ]);
                        });
                    }

                    function getCurrentLanguage() {
                        if (!$rootScope.currentLanguage) {
                            $rootScope.currentLanguage = $cookies.get('CURRENT_LANGUAGE') || $config.app.fallbackLanguage;
                        }
                        return $rootScope.currentLanguage;
                    }

                    function changeLanguage(lang) {
                        $rootScope.currentLanguage = lang;
                        $cookies.put('CURRENT_LANGUAGE', lang);
                        $translate.use($translate.negotiateLocale(lang));
                    }

                }
            ]);

        }
    ]);
