// Generated from csv.g4 by ANTLR 4.7.1
// jshint ignore: start
var antlr4 = require('antlr4/index');


var serializedATN = ["\u0003\u608b\ua72a\u8133\ub9ed\u417c\u3be7\u7786\u5964",
    "\u0002\f8\b\u0001\u0004\u0002\t\u0002\u0004\u0003\t\u0003\u0004\u0004",
    "\t\u0004\u0004\u0005\t\u0005\u0004\u0006\t\u0006\u0004\u0007\t\u0007",
    "\u0004\b\t\b\u0004\t\t\t\u0004\n\t\n\u0004\u000b\t\u000b\u0003\u0002",
    "\u0003\u0002\u0003\u0003\u0003\u0003\u0003\u0004\u0003\u0004\u0003\u0005",
    "\u0003\u0005\u0003\u0006\u0003\u0006\u0003\u0006\u0003\u0007\u0003\u0007",
    "\u0003\u0007\u0003\b\u0003\b\u0003\t\u0006\t)\n\t\r\t\u000e\t*\u0003",
    "\n\u0006\n.\n\n\r\n\u000e\n/\u0003\u000b\u0006\u000b3\n\u000b\r\u000b",
    "\u000e\u000b4\u0003\u000b\u0003\u000b\u0002\u0002\f\u0003\u0003\u0005",
    "\u0004\u0007\u0005\t\u0006\u000b\u0007\r\b\u000f\t\u0011\n\u0013\u000b",
    "\u0015\f\u0003\u0002\u0005\u0003\u00022;\u0005\u0002\f\f\u000f\u000f",
    "==\u0004\u0002\f\f\u000f\u000f\u0002:\u0002\u0003\u0003\u0002\u0002",
    "\u0002\u0002\u0005\u0003\u0002\u0002\u0002\u0002\u0007\u0003\u0002\u0002",
    "\u0002\u0002\t\u0003\u0002\u0002\u0002\u0002\u000b\u0003\u0002\u0002",
    "\u0002\u0002\r\u0003\u0002\u0002\u0002\u0002\u000f\u0003\u0002\u0002",
    "\u0002\u0002\u0011\u0003\u0002\u0002\u0002\u0002\u0013\u0003\u0002\u0002",
    "\u0002\u0002\u0015\u0003\u0002\u0002\u0002\u0003\u0017\u0003\u0002\u0002",
    "\u0002\u0005\u0019\u0003\u0002\u0002\u0002\u0007\u001b\u0003\u0002\u0002",
    "\u0002\t\u001d\u0003\u0002\u0002\u0002\u000b\u001f\u0003\u0002\u0002",
    "\u0002\r\"\u0003\u0002\u0002\u0002\u000f%\u0003\u0002\u0002\u0002\u0011",
    "(\u0003\u0002\u0002\u0002\u0013-\u0003\u0002\u0002\u0002\u00152\u0003",
    "\u0002\u0002\u0002\u0017\u0018\u0007=\u0002\u0002\u0018\u0004\u0003",
    "\u0002\u0002\u0002\u0019\u001a\u0007Q\u0002\u0002\u001a\u0006\u0003",
    "\u0002\u0002\u0002\u001b\u001c\u0007N\u0002\u0002\u001c\b\u0003\u0002",
    "\u0002\u0002\u001d\u001e\u0007Y\u0002\u0002\u001e\n\u0003\u0002\u0002",
    "\u0002\u001f \u0007R\u0002\u0002 !\u0007N\u0002\u0002!\f\u0003\u0002",
    "\u0002\u0002\"#\u0007G\u0002\u0002#$\u0007P\u0002\u0002$\u000e\u0003",
    "\u0002\u0002\u0002%&\u0007~\u0002\u0002&\u0010\u0003\u0002\u0002\u0002",
    "\')\t\u0002\u0002\u0002(\'\u0003\u0002\u0002\u0002)*\u0003\u0002\u0002",
    "\u0002*(\u0003\u0002\u0002\u0002*+\u0003\u0002\u0002\u0002+\u0012\u0003",
    "\u0002\u0002\u0002,.\n\u0003\u0002\u0002-,\u0003\u0002\u0002\u0002.",
    "/\u0003\u0002\u0002\u0002/-\u0003\u0002\u0002\u0002/0\u0003\u0002\u0002",
    "\u00020\u0014\u0003\u0002\u0002\u000213\t\u0004\u0002\u000221\u0003",
    "\u0002\u0002\u000234\u0003\u0002\u0002\u000242\u0003\u0002\u0002\u0002",
    "45\u0003\u0002\u0002\u000256\u0003\u0002\u0002\u000267\b\u000b\u0002",
    "\u00027\u0016\u0003\u0002\u0002\u0002\u0006\u0002*/4\u0003\b\u0002\u0002"].join("");


var atn = new antlr4.atn.ATNDeserializer().deserialize(serializedATN);

var decisionsToDFA = atn.decisionToState.map( function(ds, index) { return new antlr4.dfa.DFA(ds, index); });

function csvLexer(input) {
	antlr4.Lexer.call(this, input);
    this._interp = new antlr4.atn.LexerATNSimulator(this, atn, decisionsToDFA, new antlr4.PredictionContextCache());
    return this;
}

csvLexer.prototype = Object.create(antlr4.Lexer.prototype);
csvLexer.prototype.constructor = csvLexer;

Object.defineProperty(csvLexer.prototype, "atn", {
        get : function() {
                return atn;
        }
});

csvLexer.EOF = antlr4.Token.EOF;
csvLexer.T__0 = 1;
csvLexer.T__1 = 2;
csvLexer.T__2 = 3;
csvLexer.T__3 = 4;
csvLexer.T__4 = 5;
csvLexer.T__5 = 6;
csvLexer.T__6 = 7;
csvLexer.Liczba = 8;
csvLexer.Tekst = 9;
csvLexer.CRLF = 10;

csvLexer.prototype.channelNames = [ "DEFAULT_TOKEN_CHANNEL", "HIDDEN" ];

csvLexer.prototype.modeNames = [ "DEFAULT_MODE" ];

csvLexer.prototype.literalNames = [ null, "';'", "'O'", "'L'", "'W'", "'PL'", 
                                    "'EN'", "'|'" ];

csvLexer.prototype.symbolicNames = [ null, null, null, null, null, null, 
                                     null, null, "Liczba", "Tekst", "CRLF" ];

csvLexer.prototype.ruleNames = [ "T__0", "T__1", "T__2", "T__3", "T__4", 
                                 "T__5", "T__6", "Liczba", "Tekst", "CRLF" ];

csvLexer.prototype.grammarFileName = "csv.g4";



exports.csvLexer = csvLexer;

