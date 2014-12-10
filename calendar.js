/**
 * 移动webapp开发 日历组件
 * 可应用于图片轮播、查看大图翻页、tab切换等使用场景
 * @author zhangchen2397@126.com
 * ----------------------------------------------
 * 对外调用接口及自定义事件
 *
 */

( function( root, factory ) {
    if ( typeof define === 'function' ) {
        define( 'calendar', [ 'jqmobi' ], function( $ ) {
            return factory( root, $ );
        } );
    } else {
        root.calendar = factory( root, root.$ );
    }
} )( window, function( root, $ ) {

    var calendar = function( config ) {
        this.defaultConfig = {

        };

        this.config = $.extend( {}, this.defaultConfig, config || {} );

        this.init.call( this );
    };

    $.extend( calendar.prototype, {
        init: function() {

        }
    } );

    return calendar;
} );
