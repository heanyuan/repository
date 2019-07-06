/**
 * 基础控制器
 */
app.controller("baseController", function($scope) {

	//重新加载列表 数据
	$scope.reloadList = function() {
		//切换页码  
		$scope.search($scope.paginationConf.currentPage,
				$scope.paginationConf.itemsPerPage);
	}
	//分页控件配置 
	$scope.paginationConf = {
		currentPage : 1, //当前页码
		totalItems : 10, //总条数
		itemsPerPage : 10, //每页记录数
		perPageOptions : [ 10, 20, 30, 40, 50 ], //页码选项
		onChange : function() { //更改页面时触发事件
			//重新加载
			$scope.reloadList();
		}
	};

	//定义包存主键的数组
	$scope.selectIds = [];//选中的ID集合 
	//更新复选
	$scope.updateSelection = function($event, id) {
		if ($event.target.checked) { //判断复选框是否被选中
			//选中是就将复选框对应的id主键保存到主键数组
			$scope.selectIds.push(id);
		} else {
			//得到被取消选中的这个复选框对应的主键id在主键数组的位置
			var idx = $scope.selectIds.indexOf(id);
			//从主键数组中移除被取消选中的复选框对应的主键id
			$scope.selectIds.splice(idx, 1);//删除 
		}
	}

	$scope.searchEntity = {};//定义搜索对象 	

	
	//提取json字符串数据中某个属性，返回拼接字符串 逗号分隔
	$scope.jsonToString=function(jsonString,key){
		//将json字符串转换为json对象
		var json=JSON.parse(jsonString);
		var value="";
		for(var i=0;i<json.length;i++){		
			if(i>0){
				value+=","
			}
			value+=json[i][key];			
		}
		return value;
	}
	
	//从集合中按照key查询对象
	$scope.searchObjectByKey=function(list,key,keyValue){
		for(var i=0;i<list.length;i++){
			if(list[i][key]==keyValue){
				return list[i];
			}			
		}		
		return null;
	}
});