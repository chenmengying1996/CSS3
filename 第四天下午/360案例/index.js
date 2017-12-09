$(function(){
	$('#dowebok').fullpage({
		//参考配置
		sectionsColor:['#0da5d6','#2ab561','#de8910','#16ba9d','#0da5d6'],
		//afterLoad:滚动到某一屏后的回调函数，接收 anchorLink 和 index 两个参数，anchorLink 是锚链接的名称，index 是序号，从1开始计算
		afterLoad:function(link,index){
		//console.log(index);在第一屏的时候输出1，第二屛的时候输出2，依次类推
		//current类类似于一个开关，给谁，谁就做动画
		//首先都删除
		$('.section').removeClass('current');
		//滑到哪一屛，就把current给谁
		//setTimeout() 方法 :setTimeout() 方法用于在指定的毫秒数后调用函数或计算表达式。
		//setTimeout() 只执行 code 一次。如果要多次调用，请使用 setInterval() 
		setTimeout(function(){
		$('.section').eq(index-1).addClass('current');
		//此时会有一个bug,就是刷新之后第一屏的动画直接出现了，所以我们得加一个定时器，就是多少秒之后给该屛加上current类，然后该屛开始有css3动画特效
		},100);
		//loopTop:滚动到最顶部后是否滚底部
		loopTop:true
	}
});
});