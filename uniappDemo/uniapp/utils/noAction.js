export function noAction(){
	uni.showModal({
		title:'提示',
		content:'前面的蛆，以后再来痰嗦吧！:(',
		success: function(res){
			if (res.confirm){
				console.log('好');
			}else if (res.cancel){
				console.log('坏');
			}
		}
	})
}