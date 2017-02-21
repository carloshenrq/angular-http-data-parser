/**
 * MIT License
 *
 * Copyright (c) 2017 Carlos Henrique
 * 
 * Permission is hereby granted, free of charge, to any person obtaining a copy
 * of this software and associated documentation files (the "Software"), to deal
 * in the Software without restriction, including without limitation the rights
 * to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
 * copies of the Software, and to permit persons to whom the Software is
 * furnished to do so, subject to the following conditions:
 */

(function(ng) {

'use strict';

ng.module('angular-http-data-parser', [])
    .service('data-parser', function() {
        return {
            parse : function(obj2data)
            {
                var _tmp = [];

                ng.forEach(obj2data, function(value, index) {
                    _tmp.push(encodeURIComponent(index) + '=' + encodeURIComponent(value));
                });

                return _tmp.join('&');
            }
        };
    });

}) (angular);
