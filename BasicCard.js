var BasicCard = function(front, back) {
	if (this instanceof BasicCard) {
		this.front = front,
		this.back = back
	} else {
		return new BasicCard(front, back);
	}
}

module.exports = BasicCard;

var random = new BasicCard('test1', 'test2');
console.log(random);