(function(){
    /**
     * Created by Administrator on 2016/10/8.
     */
        //->珠峰培训TWEEN算法公式
    var zhufengEffect = {
            //匀速
            Linear: function (t, b, c, d) {
                return c * t / d + b;
            },
            //指数衰减的反弹缓动
            Bounce: {
                easeIn: function (t, b, c, d) {
                    return c - zhufengEffect.Bounce.easeOut(d - t, 0, c, d) + b;
                },
                easeOut: function (t, b, c, d) {
                    if ((t /= d) < (1 / 2.75)) {
                        return c * (7.5625 * t * t) + b;
                    } else if (t < (2 / 2.75)) {
                        return c * (7.5625 * (t -= (1.5 / 2.75)) * t + .75) + b;
                    } else if (t < (2.5 / 2.75)) {
                        return c * (7.5625 * (t -= (2.25 / 2.75)) * t + .9375) + b;
                    } else {
                        return c * (7.5625 * (t -= (2.625 / 2.75)) * t + .984375) + b;
                    }
                },
                easeInOut: function (t, b, c, d) {
                    if (t < d / 2) {
                        return zhufengEffect.Bounce.easeIn(t * 2, 0, c, d) * .5 + b;
                    }
                    return zhufengEffect.Bounce.easeOut(t * 2 - d, 0, c, d) * .5 + c * .5 + b;
                }
            },
            //二次方的缓动
            Quad: {
                easeIn: function (t, b, c, d) {
                    return c * (t /= d) * t + b;
                },
                easeOut: function (t, b, c, d) {
                    return -c * (t /= d) * (t - 2) + b;
                },
                easeInOut: function (t, b, c, d) {
                    if ((t /= d / 2) < 1) {
                        return c / 2 * t * t + b;
                    }
                    return -c / 2 * ((--t) * (t - 2) - 1) + b;
                }
            },
            //三次方的缓动
            Cubic: {
                easeIn: function (t, b, c, d) {
                    return c * (t /= d) * t * t + b;
                },
                easeOut: function (t, b, c, d) {
                    return c * ((t = t / d - 1) * t * t + 1) + b;
                },
                easeInOut: function (t, b, c, d) {
                    if ((t /= d / 2) < 1) {
                        return c / 2 * t * t * t + b;
                    }
                    return c / 2 * ((t -= 2) * t * t + 2) + b;
                }
            },
            //四次方的缓动
            Quart: {
                easeIn: function (t, b, c, d) {
                    return c * (t /= d) * t * t * t + b;
                },
                easeOut: function (t, b, c, d) {
                    return -c * ((t = t / d - 1) * t * t * t - 1) + b;
                },
                easeInOut: function (t, b, c, d) {
                    if ((t /= d / 2) < 1) {
                        return c / 2 * t * t * t * t + b;
                    }
                    return -c / 2 * ((t -= 2) * t * t * t - 2) + b;
                }
            },
            //五次方的缓动
            Quint: {
                easeIn: function (t, b, c, d) {
                    return c * (t /= d) * t * t * t * t + b;
                },
                easeOut: function (t, b, c, d) {
                    return c * ((t = t / d - 1) * t * t * t * t + 1) + b;
                },
                easeInOut: function (t, b, c, d) {
                    if ((t /= d / 2) < 1) {
                        return c / 2 * t * t * t * t * t + b;
                    }
                    return c / 2 * ((t -= 2) * t * t * t * t + 2) + b;
                }
            },
            //正弦曲线的缓动
            Sine: {
                easeIn: function (t, b, c, d) {
                    return -c * Math.cos(t / d * (Math.PI / 2)) + c + b;
                },
                easeOut: function (t, b, c, d) {
                    return c * Math.sin(t / d * (Math.PI / 2)) + b;
                },
                easeInOut: function (t, b, c, d) {
                    return -c / 2 * (Math.cos(Math.PI * t / d) - 1) + b;
                }
            },
            //指数曲线的缓动
            Expo: {
                easeIn: function (t, b, c, d) {
                    return (t == 0) ? b : c * Math.pow(2, 10 * (t / d - 1)) + b;
                },
                easeOut: function (t, b, c, d) {
                    return (t == d) ? b + c : c * (-Math.pow(2, -10 * t / d) + 1) + b;
                },
                easeInOut: function (t, b, c, d) {
                    if (t == 0) return b;
                    if (t == d) return b + c;
                    if ((t /= d / 2) < 1) return c / 2 * Math.pow(2, 10 * (t - 1)) + b;
                    return c / 2 * (-Math.pow(2, -10 * --t) + 2) + b;
                }
            },
            //圆形曲线的缓动
            Circ: {
                easeIn: function (t, b, c, d) {
                    return -c * (Math.sqrt(1 - (t /= d) * t) - 1) + b;
                },
                easeOut: function (t, b, c, d) {
                    return c * Math.sqrt(1 - (t = t / d - 1) * t) + b;
                },
                easeInOut: function (t, b, c, d) {
                    if ((t /= d / 2) < 1) {
                        return -c / 2 * (Math.sqrt(1 - t * t) - 1) + b;
                    }
                    return c / 2 * (Math.sqrt(1 - (t -= 2) * t) + 1) + b;
                }
            },
            //超过范围的三次方缓动
            Back: {
                easeIn: function (t, b, c, d, s) {
                    if (s == undefined) s = 1.70158;
                    return c * (t /= d) * t * ((s + 1) * t - s) + b;
                },
                easeOut: function (t, b, c, d, s) {
                    if (s == undefined) s = 1.70158;
                    return c * ((t = t / d - 1) * t * ((s + 1) * t + s) + 1) + b;
                },
                easeInOut: function (t, b, c, d, s) {
                    if (s == undefined) s = 1.70158;
                    if ((t /= d / 2) < 1) {
                        return c / 2 * (t * t * (((s *= (1.525)) + 1) * t - s)) + b;
                    }
                    return c / 2 * ((t -= 2) * t * (((s *= (1.525)) + 1) * t + s) + 2) + b;
                }
            },
            //指数衰减的正弦曲线缓动
            Elastic: {
                easeIn: function (t, b, c, d, a, p) {
                    if (t == 0) return b;
                    if ((t /= d) == 1) return b + c;
                    if (!p) p = d * .3;
                    var s;
                    !a || a < Math.abs(c) ? (a = c, s = p / 4) : s = p / (2 * Math.PI) * Math.asin(c / a);
                    return -(a * Math.pow(2, 10 * (t -= 1)) * Math.sin((t * d - s) * (2 * Math.PI) / p)) + b;
                },
                easeOut: function (t, b, c, d, a, p) {
                    if (t == 0) return b;
                    if ((t /= d) == 1) return b + c;
                    if (!p) p = d * .3;
                    var s;
                    !a || a < Math.abs(c) ? (a = c, s = p / 4) : s = p / (2 * Math.PI) * Math.asin(c / a);
                    return (a * Math.pow(2, -10 * t) * Math.sin((t * d - s) * (2 * Math.PI) / p) + c + b);
                },
                easeInOut: function (t, b, c, d, a, p) {
                    if (t == 0) return b;
                    if ((t /= d / 2) == 2) return b + c;
                    if (!p) p = d * (.3 * 1.5);
                    var s;
                    !a || a < Math.abs(c) ? (a = c, s = p / 4) : s = p / (2 * Math.PI) * Math.asin(c / a);
                    if (t < 1) return -.5 * (a * Math.pow(2, 10 * (t -= 1)) * Math.sin((t * d - s) * (2 * Math.PI) / p)) + b;
                    return a * Math.pow(2, -10 * (t -= 1)) * Math.sin((t * d - s) * (2 * Math.PI) / p) * .5 + c + b;
                }
            }
        };
    var ary = ["Linear", "Elastic-easeOut", "Back-easeOut", "Bounce-easeOut", "Expo-easeIn"];

    //让谁运动到哪里
    function move(obj,target,opt){
        var ary=["Linear", "Elastic-easeOut", "Back-easeOut", "Bounce-easeOut", "Expo-easeIn"];
        opt=opt||{};
        var defaultOpt={
            duration:2000,
            effect:zhufengEffect.Linear
        };
        for(var attr in opt){
           defaultOpt[attr]=opt[attr];
        }
        //运动形式
        if(typeof defaultOpt.effect==='number'){
            var str=ary[defaultOpt.effect%ary.length];
            ary=str.split('-');
            defaultOpt.effect=ary.length>=2?zhufengEffect[ary[0]][ary[1]]:zhufengEffect[ary[0]];
        }else if(typeof defaultOpt.effect==='object'){
            defaultOpt.effect=defaultOpt.effect.length>=2?zhufengEffect[defaultOpt.effect[0]][defaultOpt.effect[1]]:zhufengEffect[defaultOpt.effect[0]];
        }
        var begin={},change={};
        for(var attr in target){
            begin[attr]=utils.css(obj,attr);
            change[attr]=target[attr]-begin[attr];
        }
        var time=null;
        clearInterval(obj.timer);
        obj.timer=setInterval(function(){
            time+=10;
            if(time>=defaultOpt.duration){
                utils.css(obj,target);
                clearInterval(obj.timer);
                defaultOpt.callback&&defaultOpt.callback.call(obj);
                return;
            }
            for(var attr in target){
                var curPos=defaultOpt.effect(time,begin[attr],change[attr],defaultOpt.duration);
                utils.css(obj,attr,curPos);
            }
        },10)
    }
    window.animate=move;
/*    function move(obj,target,opt){
        var ary = ["Linear", "Elastic-easeOut", "Back-easeOut", "Bounce-easeOut", "Expo-easeIn"];
        //1.为公式的4个参数做准备
        opt=opt||{};//用对象的形式来传参，可以避免顺序的问题
        //用defaultOpt来设置默认的参数
        var defaultOpt={
            duration:2000,//总时间
            effect:zhufengEffect.Linear
        };
        for(var attr in opt){//当没有给opt传实参的时候，用的是默认defaultOpt中的值，否则用的就是opt中的实参
            defaultOpt[attr]=opt[attr];
        }
        //运动形式
        if(typeof defaultOpt.effect==='number'){
            var  str=ary[defaultOpt.effect%ary.length];
            ary=str.split('-');
            defaultOpt.effect=ary.length>=2?zhufengEffect[ary[0]][ary[1]]:zhufengEffect[ary[0]];
        }else if(typeof defaultOpt.effect==='object'){
            defaultOpt.effect=defaultOpt.effect.length>=2?zhufengEffect[defaultOpt.effect[0]][defaultOpt.effect[1]]:zhufengEffect[defaultOpt.effect[0]];
        }
        var begin={},change={};
        for(var attr in target){
            begin[attr]=utils.css(obj,attr);
            change[attr]=target[attr]-begin[attr];
        }
        var time=null;
        //通过定时器累加时间，根据公式求出最新的位置，并且设置最新的位置
        clearInterval(obj.timer);
        obj.timer=setInterval(function(){
            time+=10;
            //停止条件的判断
            if(time>=defaultOpt.duration){
                utils.css(obj,target);
                clearInterval(obj.timer);
                //用回调函数，并且改变回调函数中的this指向
                defaultOpt.callback&&defaultOpt.callback.call(obj);
                return;
            }
            for(var attr in target){
                var curPos=defaultOpt.effect(time,begin[attr],change[attr],defaultOpt.duration);//求出最新的位置
                utils.css(obj,attr,curPos);//设置最新的位置
            }
        },10)
    }
    window.animate=move;*/

})();