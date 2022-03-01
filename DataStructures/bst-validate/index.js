// --- Directions
// return true if bst is valid
// return false if bst is not valid

function validate ( node, min = null, max = null ) {
	// idea: setup a minMax range

	if ( max !== null && node.data > max ) {
		return false;
	}

	if ( min !== null && node.data < min ) {
		return false;
	}

	if ( node.left && !validate( node.left, min, node.data ) ) {
		// left node is not valid
		return false;
	}

	if ( node.right && !validate( node.right, node.data, max ) ) {
		// left node is not valid
		return false;
	}

	return true;
}

module.exports = validate;
