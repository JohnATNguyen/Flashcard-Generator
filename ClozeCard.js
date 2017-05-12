var ClozeCard = function(text, cloze) {
	if (this instanceof ClozeCard) {
		this.fullText = text,
		this.cloze = cloze,
		this.partial = text.replace(cloze, '...');
	} else {
		return new ClozeCard(text, cloze);
	}
}

ClozeCard.prototype.clozeNotInText = function() {
	if (!this.fullText.includes(this.cloze)) {
		console.log('Error - cloze is not in text.');
	}
	// if (this.fullText.indexOf(this.cloze) === -1) {
	// 	console.log('error');
	// }
}

module.exports = ClozeCard;

var random = new ClozeCard('John is my name', 'Jake is');
random.clozeNotInText();