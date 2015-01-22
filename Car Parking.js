function Park () {
	var is24hour=false;
	var isfull=false;
	var cellPrice=10;
	this.set24hour=function(){
		is24hour=true;
	};
	this.get24hour=function(){
		return is24hour;
	};
	this.setFull=function(){
		isfull=true;
	};
	this.getFull=function(){
		return isfull;
	};
    this.setCellPrice=function(val) {
		cellPrice=val;
	};
	this.getCellPrice=function(){
		return cellPrice;
	};
}

function CellContainer(){
	var cells=[];
	this.pushCell=function(cell){
		cells.push(cell);
	};
	this.getCellsArray=function(){
		return cells;
	};
	this.getAllFreeCells=function(){};
}

function Cell(){
	var x=0, y=0;
	var neighbours=[];
	this.setXY=function(x1,y1){
		x=x1;
		y=y1;
	};
	this.getXY=function(){
		return [x,y];
	};
	this.setNeighbours=function(x1,y1){
		neighbours.push([x1,y1]);
	};
	this.getNeighbours=function(){
		return neighbours;
	};
}
