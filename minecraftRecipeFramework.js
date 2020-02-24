// Minecraft Recipe Framework v1.0 (24 FEB 2020)
// =============================================
// Author:      Dev1lroot
// Dependecies: jQuery
// =============================================
class Item
{
	constructor(object){
		this.item = object;
	}
	append(){
		return '<div class="item" id="'+this.item.id+'" style="background: url(items/'+this.item.id+'.png); background-size: 32px;"></div>';
	}
}
class Block
{
	constructor(object){
		this.block = object;
	}
	append(){
		var blockItem = '<div class="item" id="'+this.block.id+'">';
		blockItem += '<div class="block">';
		blockItem +='<div class="top" style="background: url(blocks/'+this.block.top+'.png); background-size: 20px;"></div>';
		blockItem +='<div class="front" style="background: url(blocks/'+this.block.front+'.png); background-size: 20px;"></div>';
		blockItem +='<div class="side" style="background: url(blocks/'+this.block.side+'.png); background-size: 20px;"></div>';
		blockItem +='</div></div>';
		return blockItem;
	}
}

class CraftingTableRecipe
{
	constructor(object){
		this.recipe = object;
	}
	append(){
		var recipeDOM = '<div class="guiframe"><div class="craftingtable">';
		for (var i=1; i<=9; i++)
		{
			var h, w;
			if (i >= 1) {h = "h1"};
			if (i >= 4) {h = "h2"};
			if (i >= 7) {h = "h3"};
			if (i == 1 | i == 4 | i == 7) {w = "w1"};
			if (i == 2 | i == 5 | i == 8) {w = "w2"};
			if (i == 3 | i == 6 | i == 9) {w = "w3"};
			if (this.recipe.slot[i-1] != null)
			{
				recipeDOM += '<div class="slot '+w+' '+h+' ">';
				recipeDOM += this.recipe.slot[i-1].append();
				recipeDOM += '</div>';
			}
			else
			{
				recipeDOM += '<div class="slot '+w+' '+h+' "></div>';
			}
		}
		if (this.recipe.output != null)
		{
			recipeDOM += '<div class="output">';
			recipeDOM += this.recipe.output.append();
			recipeDOM += '</div>';
		}
		else
		{
			recipeDOM += '<div class="output"></div>';
		}
		recipeDOM += '</div></div>';
		$("body").append(recipeDOM);
	}
}
