// @flow

import P from 'parsimmon'

const NotNewline = P.regexp(/[^\n]*/)
const Comment = NotNewline.wrap(P.string('//'), P.string('\n'))
const Whitespace = P.regexp(/[ \n]*/)

export default Comment.sepBy(Whitespace).trim(Whitespace)
