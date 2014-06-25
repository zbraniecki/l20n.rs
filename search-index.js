var searchIndex = {};
searchIndex['l20n'] = {"items":[[0,"","l20n","L20n implementation for localization"],[1,"Locale","","A Locale contains all the resources for a specific language."],[11,"resources","","",0],[1,"ParseError","","An error occurred trying to parse an L20n resource. The L20n file is\ninvalid."],[11,"kind","","The kind of error.",1],[11,"line","","The line where the error occurred.",1],[11,"col","","The column where the error occurred.",1],[2,"LocalizeError","","An enum of the various errors that can occur during localization."],[12,"DecodeError","","Wraps a DecodeError.",2],[12,"EncodeError","","Wraps an EncodeError.",2],[12,"ResolveError","","Wraps a ResolveError.",2],[2,"DecodeError","","Errors that can occur decoding an L20n file into a Rust value."],[12,"WrongType","","The type being requested doesn't match what the L20n file outputs.",3],[12,"MissingField","","A string was request from L20n that wasn't in the resources.",3],[2,"EncodeError","","Errors that occur encoding environment data into something the L20n\nresources can use."],[12,"UnsupportedType","","Type is not usable in L20n.",4],[12,"KeyIsNotString","","Maps in L20n require keys to be Strings.",4],[12,"MissingElements","","A map element is missing.",4],[2,"ResolveError","","Errors that can occur when resolving a set of l20n resources into strings.\nThese errors are cause by problems in the l20n file, or incorrect Data\nprovided when localizing."],[12,"WrongType","","A resource received a value of the wrong type.",5],[12,"WrongNumberOfArgs","","A macro was called with the wrong number of arguments.",5],[12,"MissingIndex","","Accessed an index of a Hash that does not exist.",5],[12,"MissingVar","","Tried to use a $var that did not exist in the provided Data.",5],[12,"MissingIdent","","A string tried to use another string in the l20n resource that did not\nexist.",5],[2,"ParseErrorKind","","The description of the ParseError that occurred."],[12,"IdentifierError","","Illegal syntax for an identifier.",6],[12,"EntryError","","Illegal syntax for an entry.",6],[12,"EntityError","","Illegal syntax for an entity.",6],[12,"MacroError","","Illegal syntax for a macro.",6],[12,"ExprError","","Illegal syntax for an expression.",6],[12,"OpError","","Illegal syntax for an operator.",6],[12,"ParenError","","Illegal syntax for an expression wrapped in parenthesis.",6],[12,"AttrError","","Illegal syntax for an attribute.",6],[12,"CallError","","Illegal syntax for a call expression (calling a macro).",6],[12,"ValueError","","Illegal syntax for a value, when a value was expected.",6],[12,"VarError","","Illegal syntax for a $var.",6],[12,"StrError","","Illegal syntax for a \"String\".",6],[12,"HashError","","Illegal syntax for a Hash.",6],[4,"LocalizeResult","",""]],"paths":[[1,"Locale"],[1,"ParseError"],[2,"LocalizeError"],[2,"DecodeError"],[2,"EncodeError"],[2,"ResolveError"],[2,"ParseErrorKind"]]};
initSearch(searchIndex);
