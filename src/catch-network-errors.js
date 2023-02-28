'use strict';

module.exports = function (err) {
	if (err.message.indexOf('network timeout at') > -1) {
		return { ok: false };
	} else {
		throw err;
	}
};
